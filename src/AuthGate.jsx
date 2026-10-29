import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { LogOut, ShieldCheck, UserRound, Check, Ban, Clock3 } from "lucide-react";
import "./auth.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export default function AuthGate({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [mode, setMode] = useState("login");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  async function loadAccess(current) {
    if (!current || !supabase) return;
    const [{ data: p, error: pe }, { data: roleRows, error: re }] = await Promise.all([
      supabase.from("profiles").select("id,nome,email,status").eq("id", current.user.id).maybeSingle(),
      supabase.from("user_roles").select("role").eq("user_id", current.user.id)
    ]);
    if (pe) setError("Não foi possível carregar o perfil. Confira se a migração do banco foi aplicada.");
    setProfile(p || null);
    const admin = !re && (roleRows || []).some(r => r.role === "admin");
    setIsAdmin(admin);
    if (admin) {
      const { data, error: listError } = await supabase.from("profiles").select("id,nome,email,status,created_at").order("created_at", { ascending: false });
      if (listError) setError("Não foi possível listar cadastros. Verifique as políticas RLS.");
      else setProfiles(data || []);
    }
  }

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadAccess(data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
      if (next) setTimeout(() => loadAccess(next), 0);
      else { setProfile(null); setIsAdmin(false); setProfiles([]); }
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  async function submit(e) {
    e.preventDefault(); setBusy(true); setError(""); setNotice("");
    try {
      if (!supabase) throw new Error("O projeto ainda não está configurado com VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.");
      if (mode === "signup") {
        if (!nome.trim()) throw new Error("Informe seu nome.");
        const { data, error: e } = await supabase.auth.signUp({
          email: email.trim().toLowerCase(), password: senha,
          options: { data: { nome: nome.trim() } }
        });
        if (e) throw e;
        if (data.session) await loadAccess(data.session);
        setNotice("Cadastro recebido. Aguardando autorização do administrador.");
        setMode("login"); setSenha("");
      } else {
        const { error: e } = await supabase.auth.signInWithPassword({ email: email.trim().toLowerCase(), password: senha });
        if (e) throw e;
      }
    } catch (e) { setError(e.message || "Não foi possível concluir a operação."); }
    finally { setBusy(false); }
  }

  async function setStatus(id, status) {
    setError("");
    const { error: e } = await supabase.from("profiles").update({ status, updated_at: new Date().toISOString() }).eq("id", id);
    if (e) { setError("Não foi possível alterar o cadastro: " + e.message); return; }
    setProfiles(prev => prev.map(p => p.id === id ? { ...p, status } : p));
    if (id === session?.user?.id) setProfile(prev => prev ? { ...prev, status } : prev);
  }

  if (!supabase) return <div className="auth-shell"><section className="auth-card"><h1>Configuração necessária</h1><p>Defina as variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no ambiente de implantação e aplique supabase/migrations/202610290001_training_auth.sql no banco do projeto.</p></section></div>;
  if (!session) return <div className="auth-shell"><section className="auth-card"><div className="auth-mark"><ShieldCheck size={28}/></div><p className="auth-kicker">LINHA INSTITUCIONAL SERPA</p><h1>{mode === "signup" ? "Criar cadastro" : "Bem-vindo"}</h1><p className="auth-muted">{mode === "signup" ? "Seu acesso será liberado após aprovação administrativa." : "Entre para acessar os treinamentos institucionais."}</p><form onSubmit={submit}>{mode === "signup" && <label>Nome completo<input value={nome} onChange={e=>setNome(e.target.value)} autoComplete="name" required /></label>}<label>E-mail<input type="email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" required /></label><label>Senha<input type="password" value={senha} onChange={e=>setSenha(e.target.value)} minLength={8} autoComplete={mode==="signup"?"new-password":"current-password"} required /></label>{error&&<p className="auth-error">{error}</p>}{notice&&<p className="auth-notice">{notice}</p>}<button className="auth-primary" disabled={busy}>{busy?"Aguarde…":mode==="signup"?"Cadastrar":"Entrar"}</button></form><button className="auth-switch" onClick={()=>{setMode(mode==="signup"?"login":"signup");setError("");setNotice("");}}>{mode==="signup"?"Já tenho cadastro · Entrar":"Ainda não tenho cadastro · Cadastrar"}</button></section></div>;

  if (!profile) return <div className="auth-shell"><section className="auth-card"><h1>Preparando seu acesso</h1><p>{error || "Carregando perfil de usuário…"}</p><button className="auth-primary" onClick={()=>loadAccess(session)}>Tentar novamente</button><button className="auth-switch" onClick={()=>supabase.auth.signOut()}>Sair</button></section></div>;
  if (!isAdmin && profile.status !== "aprovado") return <div className="auth-shell"><section className="auth-card"><div className="auth-mark">{profile.status==="bloqueado"?<Ban size={28}/>:<Clock3 size={28}/>}</div><h1>{profile.status==="bloqueado"?"Acesso bloqueado":"Aguardando autorização do administrador"}</h1><p className="auth-muted">{profile.status==="bloqueado"?"Seu cadastro está bloqueado. Entre em contato com o administrador.":"Seu cadastro foi recebido. Você poderá acessar os treinamentos depois da aprovação."}</p><button className="auth-primary" onClick={()=>supabase.auth.signOut()}>Sair</button></section></div>;

  return <><div className="auth-toolbar"><span><UserRound size={16}/> {profile.nome || profile.email}{isAdmin && <b> · Administração</b>}</span><button onClick={()=>supabase.auth.signOut()}><LogOut size={16}/> Sair</button></div>{isAdmin ? <div className="admin-shell"><section className="admin-card"><p className="auth-kicker">LINHA INSTITUCIONAL SERPA</p><h1>Administração de cadastros</h1><p className="auth-muted">Autorize somente usuários que devem acessar os treinamentos.</p>{error&&<p className="auth-error">{error}</p>}<div className="admin-list">{profiles.map(p=><article className="admin-user" key={p.id}><div><b>{p.nome || "Nome não informado"}</b><span>{p.email}</span><small>Status: {p.status}</small></div><div className="admin-actions"><button disabled={p.status==="aprovado"} onClick={()=>setStatus(p.id,"aprovado")}><Check size={15}/> Autorizar</button><button className="block" disabled={p.status==="bloqueado"} onClick={()=>setStatus(p.id,"bloqueado")}><Ban size={15}/> Bloquear</button></div></article>)}</div></section></div> : children}</>;
}
