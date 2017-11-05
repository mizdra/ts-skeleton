# ts-skeleton
TypeScriptの素振り環境.

## Usage
1. `git clone https://github.com/mizdra/ts-skeleton.git` ts-project
1. `cd ts-project`
1. `yarn`
1. `yarn run dev`

## Scripts
- `start`: ビルド済みの成果物を実行する
- `build`: ソースをビルドする
- `dev`: watchモードでコンパイルし, その度に `test` と `start` を実行する
  - tsc-watch のバグで動かない場合, `npx tsc-watch --onSuccess 'run-s test start'` で実行すると良い
- `test`: テストを実行する
