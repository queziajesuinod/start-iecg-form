@echo off
echo ====================================
echo Corrigindo compatibilidade Windows
echo ====================================
echo.

echo [1/3] Instalando cross-env...
call pnpm add -D cross-env

echo.
echo [2/3] Atualizando package.json...
echo Por favor, edite manualmente o package.json:
echo.
echo Substitua estas linhas na secao "scripts":
echo.
echo   "dev": "NODE_ENV=development tsx watch server/_core/index.ts",
echo   "start": "NODE_ENV=production node dist/index.js",
echo.
echo Por estas:
echo.
echo   "dev": "cross-env NODE_ENV=development tsx watch server/_core/index.ts",
echo   "start": "cross-env NODE_ENV=production node dist/index.js",
echo.
pause

echo.
echo [3/3] Testando...
call pnpm dev

echo.
echo ====================================
echo Correcao concluida!
echo ====================================
