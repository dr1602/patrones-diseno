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