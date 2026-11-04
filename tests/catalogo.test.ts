import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validarAcesso } from '../domain/acesso.ts';
import { localizarProjeto, selecionarProjetos, projetos } from '../domain/projetos.ts';

test('aceita a conta de Yuri e normaliza o e-mail', () => {
  assert.equal(validarAcesso('  YURI@EXEMPLO.COM  ', '123456'), null);
});
test('campos vazios e combinações incorretas não iniciam uma sessão', () => {
  assert.equal(validarAcesso('', ''), 'Preencha o e-mail e a senha para entrar.');
  assert.equal(validarAcesso('yuri@exemplo.com', '000000'), 'Esses dados não conferem. Confira o e-mail e a senha.');
  assert.notEqual(validarAcesso('outra@exemplo.com', '123456'), null);
});
test('o identificador da rota encontra a piscina correspondente', () => {
  assert.equal(localizarProjeto('brisa')?.nome, 'Brisa');
  assert.equal(localizarProjeto('horizonte')?.nome, 'Horizonte');
  assert.equal(new Set(projetos.map(p => p.id)).size, projetos.length);
});
test('endereços inexistentes e parâmetros repetidos não escolhem outra piscina', () => {
  for (const id of [undefined, '', '999', 'BRISA', ['brisa', 'enseada']]) {
    assert.equal(localizarProjeto(id), undefined);
  }
});
test('o filtro compacto mostra somente modelos dessa categoria', () => {
  assert.deepEqual(selecionarProjetos('compactas').map(p => p.id), ['brisa', 'refugio']);
});
test('o filtro amplo e a opção todos retornam as coleções esperadas', () => {
  assert.deepEqual(selecionarProjetos('amplas').map(p => p.id), ['enseada', 'horizonte']);
  assert.equal(selecionarProjetos('todos').length, 4);
});
