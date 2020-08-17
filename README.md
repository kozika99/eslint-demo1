# ESLint , Prettier and pre-commit hooks using Husky



## Telepítés

Npm package manager-rel feltelepítjük a szükséges dolgokat

```npm
npm install --save-dev husky lint-staged eslint eslint-plugin-react prettier 

eslint --init (ezt csak akkor ha nincs .eslintrc file)
```

A .eslintrc file-ben beállítjátok hogy milyen szempontok alapján működjön az eslint,
ugyanezt a .prettierrc fileban is megtehetjük és amikor lefut a huskyval akkor ezeket a beállításokat fogja alkalmazni.

## Használat

A package.json filehoz ezt hozzá kell adni hogy működjön a husky és a lint-staged. 

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
"lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ]
  }
```

Itt az történik hogy a pre-commit hooknal működésbe lép a lint-staged amit alatta állítunk be.
Amint látszik csak a pre-commit van beállítva de lehet több mindent is (pre-push...).
A lint-staged-nél belehet állítani mely fileokra vonatkozzon a lint, ezesetben minden js filet idevettem. 
Utána a [] között hogy mely commandok fussanak le automatikusan. Az első a prettier code formatter ami leformattálja a code-t 
a második pedig az eslint. 

Ha git commitolunk akkor lefut a husky a precommittal ami behívja a lint-staged ott a 2 command lefut minden js file-re majd végrehatja a módosításokat.
