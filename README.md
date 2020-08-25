# ESLint , Prettier and pre-commit hooks using Husky

## Telepítés

Npm package manager-rel feltelepítjük a szükséges dolgokat.

```npm
npm install --save-dev husky lint-staged eslint eslint-plugin-react prettier 

eslint --init (ezt csak akkor ha nincs .eslintrc file)
```

A .eslintrc file-ben beállítjátok hogy milyen szempontok alapján működjön az eslint,

ugyanezt a .prettierrc fileban (ha nincs csináljunk egyet) is megtehetjük és amikor

lefut a huskyval akkor ezeket a beállításokat fogja alkalmazni.

## Használat

A package.json filehoz ezt hozzá kell adni hogy működjön a husky és a lint-staged. 

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged --allow-empty"
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

Utána a ["prettier..."] között hogy mely commandok fussanak le automatikusan. 

Az első a prettier code formatter ami leformattálja a code-t, második pedig az eslint. 

Ha git commitolunk akkor lefut a husky a precommittal ami behívja a lint-staged ott a 2 command lefut minden js file-re majd végrehatja a módosításokat.


## ClickUp integration with GitHub

GitHub hozzáadás a ClickUphoz. Settings -> Integrations -> GitHub és ahol a My repositories from GitHub fül van ott kattintsunk a + Add GitHub gombra.

Ezután egy nagy lila gombra ahol az van kiírva hogy Activate GitHub. Utána kiválaszthatjuk hogy mely repokat szertenénk hozzáadni. Utoljára pedig

hozzákapcsolni a kívánt Space-hez.

Több lehetőség is van a használatra. 

# Manualis

Ha rákattintunk egy taskra és a kis github iconra ott látjuk hogy pull request, branch és commit közül is tudunk választani, illetve ezeket hozzákötni a taskhoz.

# Automatikus

Kimásoljuk a taskId-t a kívánt tasknál és a commit bármely részére beillesztve, majd a status-t is megadva tudjuk változtatni hogy melyik táblába kerüljön át a kívánt task. 

```
git commit -m CU-7cppu3[review]'Test'
```

Uj branch illetve pull requestet is létre lehet hozni. Csak rákattiunk a kívánt gombra és folytatjuk az utasításokat.
