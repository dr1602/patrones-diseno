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

## Fix para que se actualice el log

```sh

conventional-changelog -p angular -i CHANGELOG.md -s -r 0

```

## Agrega comando para actualizar log

El siguiente comando actualiza el log:

```sh

conventional-changelog -p angular -i CHANGELOG.md -s -r 0

```

# Actualización automática del log

1. Añade un hook post-commit (en .husky/post-commit):

```sh

#!/bin/sh
npx conventional-changelog -p angular -i CHANGELOG.md -s

```

Así el CHANGELOG se actualizará automáticamente tras cada commit.

2. Hazlo ejecutable:

```sh

chmod +x .husky/post-commit

```

## Corrección

```sh

echo '#!/bin/sh
npx conventional-changelog -p angular -i CHANGELOG.md -s' > .husky/post-commit

```

Ahora sí, lo hacemos ejecutable:

```sh

chmod +x .husky/post-commit

```

## Corrección para que no se duplique el log

```sh

npx conventional-changelog -p angular -i CHANGELOG.md -s -r 1

```

agrega nuevo comando para evitar dobles registros

```sh

npx conventional-changelog -p angular -i CHANGELOG.md -s --output-unreleased=true

```

esto vive en un archivo post commits

# Agrega los otros tipos de commits

Crea un archivo .changelogrc.json en la raíz de tu proyecto:

```json
{
  "types": [
    { "type": "feat", "section": "Features" },
    { "type": "fix", "section": "Bug Fixes" },
    { "type": "refactor", "section": "Refactors", "hidden": false },
    { "type": "chore", "section": "Maintenance", "hidden": false },
    { "type": "docs", "section": "Documentation", "hidden": false }
  ]
}
```

Para incluir todos los tipos de commits sin filtrar:

```sh

npx conventional-changelog -p angular -i CHANGELOG.md -s --types "feat,fix,refactor,chore,docs,style,test,perf"

```

Borrar change log

```sh

rm CHANGELOG.md

```

Luego genera el CHANGELOG con:

```sh

npx conventional-changelog -p angular -i CHANGELOG.md -s --config .changelogrc.json

```

# Comando todo en uno para debugger:

Bonus: Comando todo-en-uno para resetear:

```sh

rm CHANGELOG.md && \
npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0 \
--config .changelogrc.json --types "feat,fix,refactor,chore,docs" && \
git add CHANGELOG.md

```
