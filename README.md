**Instalación de commitlint**

1. Instalar commitlint y su configuración estándar

```sh
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

2. Crear el archivo de configuración

Crea un archivo llamado _.commitlintrc.json_ en la raíz de tu proyecto:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

**Configurar Husky (para validar commits automáticamente)**

1. Instalar Husky

```sh
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional
# o con yarn:
yarn add --dev husky @commitlint/cli @commitlint/config-conventional
```

2. Activar Husky en tu proyecto

```sh
npx husky init
```

3. Crea un hook para validar los mensajes de commit:

```sh
echo 'npx --no -- commitlint --edit "$1"' > .husky/commit-msgs
```

**Fix en caso de error**

1. Eliminar el hook pre-commit no deseado

```sh
rm -f .husky/pre-commit
```

2. Verificar que solo exista el hook de commit-msg

```sh
ls -la .husky/
```

Deberías ver solo:

```sh
commit-msg
_/
```

# CHANGELOG automático

## Usando conventional-changelog (recomendado)

```sh

npm install -g conventional-changelog-cli

```

## Genera tu CHANGELOG.md (en la raíz del proyecto):

```sh

conventional-changelog -p angular -i CHANGELOG.md -s

```

_-p angular:_ Usa el preset de Angular (soporta feat, fix, breaking changes, etc.).

_-i CHANGELOG.md:_ Archivo de salida.

_-s:_ Sobrescribe el archivo existente.
