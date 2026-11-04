import { createContext, useContext, useReducer, type PropsWithChildren } from 'react';
import { validarAcesso } from '../domain/acesso';

type Usuario = { nome: string; email: string };
type Acao = { tipo: 'entrar'; usuario: Usuario } | { tipo: 'sair' };
type Sessao = { usuario: Usuario | null; iniciarSessao: (email: string, senha: string) => string | null; encerrarSessao: () => void };
const SessionContext = createContext<Sessao | null>(null);
function reduzirSessao(_anterior: Usuario | null, acao: Acao): Usuario | null {
  return acao.tipo === 'entrar' ? acao.usuario : null;
}
export function SessionProvider({ children }: PropsWithChildren) {
  const [usuario, dispatch] = useReducer(reduzirSessao, null);
  function iniciarSessao(email: string, senha: string) {
    const erro = validarAcesso(email, senha);
    if (erro) return erro;
    dispatch({ tipo: 'entrar', usuario: { nome: 'Yuri Ferraz de Almeida', email: email.trim().toLowerCase() } });
    return null;
  }
  function encerrarSessao() { dispatch({ tipo: 'sair' }); }
  return <SessionContext.Provider value={{ usuario, iniciarSessao, encerrarSessao }}>{children}</SessionContext.Provider>;
}
export function useSession() {
  const sessao = useContext(SessionContext);
  if (!sessao) throw new Error('useSession precisa de SessionProvider na raiz.');
  return sessao;
}
