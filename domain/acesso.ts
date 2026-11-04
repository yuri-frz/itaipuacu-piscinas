// Conta de demonstração: a atividade trata de navegação, não de autenticação de servidor.
export function validarAcesso(email: string, senha: string): string | null {
  if (!email.trim() || !senha.trim()) return 'Preencha o e-mail e a senha para entrar.';
  if (email.trim().toLowerCase() !== 'yuri@exemplo.com' || senha !== '123456') {
    return 'Esses dados não conferem. Confira o e-mail e a senha.';
  }
  return null;
}
