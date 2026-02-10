# プロジェクト概要（AI開発用）

## このプロジェクトについて

- **種別**: エンジニアのポートフォリオサイト
- **遊び場（play_ground）**: これまで開発した機能のアウトプットを掲載するページ。`/play_ground` 以下に実装。
- **将来方針**: DB を使った機能の追加を予定している。

## サイト構成（主要ページ）

| パス | 説明 |
|------|------|
| `/` | トップページ |
| `/career` | キャリア（経歴）ページ |
| `/about_site` | サイトについて（技術選定・構成の説明） |
| `/contact` | お問い合わせページ |
| `/play_ground` | 遊び場（開発した機能のアウトプット一覧） |

## 技術スタック

- **FW**: Next.js 15（App Router）, React 19, TypeScript
- **スタイル**: CSS Modules + SCSS
- **設計**: Atomic デザイン（atoms / molecules / organisms / templates / pages）→ 下記「Atomic デザイン」を参照
- **Lint/Format**: Biome
- **状態**: Zustand
- **UIコンポーネント**: Radix UI（`@radix-ui/react-*`）を優先使用。必要に応じて Headless UI（`@headlessui/react`）も使用可能
- **アイコン**: React Icons の Heroicons（`react-icons/hi`）を基本として使用。統一感を保つため、基本的に Heroicons のみを使用し、対応できない場合のみ他のアイコンセットを検討
- **データ**: 現状は Google Spreadsheet（`lib/api/fetchSheetData.ts`）。将来 DB 連携を想定。

## Atomic デザイン

コンポーネントを **atoms / molecules / organisms / templates / pages** の5層で階層化する設計手法。

### 階層構造と配置ルール

1. **Atoms（原子）** - `components/atoms/`  
   最小単位のコンポーネント。それ以上分割できない。props で見た目・振る舞いを制御。ビジネスロジック・ストア・API に依存しない。  
   **判断基準**: 「これ以上分割できない最小単位か？」  
   **例**: Button, Input, Label, Icon, Spinner, Text, Heading  
   **配置**: `components/atoms/Button/Button.tsx`

2. **Molecules（分子）** - `components/molecules/`  
   Atoms を組み合わせた小さな機能単位。1つの明確な目的を持つ。**プロジェクト全体で再利用可能で、どのページでも使える汎用的なコンポーネント。**  
   **判断基準**: 「複数の Atoms を組み合わせて1つの機能を実現しているか？かつ、どのページでも使える汎用的なものか？」  
   **例**: LinkButton（Button + Link）, SearchBar（Input + Button）, FormField（Label + Input）, MessageDialog（複数の Atoms + ストア連携）  
   **配置**: `components/molecules/LinkButton/LinkButton.tsx`

3. **Organisms（生物）** - `app/**/_components/_organisms/`  
   Molecules や Atoms を組み合わせた複雑なコンポーネント。**特定のページに依存し、そのページ専用のコンポーネント。** ページの主要セクションを構成する大きな単位。  
   **判断基準**: 「特定のページ専用で、そのページ以外では使わないか？かつ、ページの主要セクション（ヘッダー、フッター、サイドバー、フォーム全体など）を構成しているか？」  
   **必須条件**: **特定のページに依存することが必須。汎用的なコンポーネントは molecules に配置する。**  
   **例**: 
   - `app/_components/_organisms/Header/Header.tsx`（トップページ専用のヘッダー）
   - `app/_components/_organisms/Skill/Skill.tsx`（トップページ専用のスキルセクション）
   - `app/career/_components/_organisms/CareerContent/CareerContent.tsx`（キャリアページ専用のコンテンツ）
   - `app/play_ground/_components/_organisms/Auth/Login.tsx`（遊び場ページ専用のログインコンポーネント）  
   **配置**: `app/**/_components/_organisms/ComponentName/ComponentName.tsx`  
   **重要**: `_components` ディレクトリは、そのページの `page.tsx` と同じ階層に作成する。

4. **Templates（テンプレート）** - `app/**/_components/_templates/`  
   Organisms を配置したページレイアウト。実際のコンテンツは持たず、構造のみを定義。特定のページに依存する。  
   **判断基準**: 「ページ全体のレイアウト構造を定義しているか？コンテンツは props で受け取るか？特定のページ専用か？」  
   **例**: PageLayout, PlaygroundLayout, CareerLayout  
   **配置**: `app/_components/_templates/PageLayout/PageLayout.tsx` または `app/**/_components/_templates/LayoutName/LayoutName.tsx`  
   **重要**: `_components` ディレクトリは、そのページの `page.tsx` と同じ階層に作成する。

5. **Pages（ページ）** - `app/**/page.tsx`  
   Templates に実際のコンテンツを入れたもの。Next.js の App Router の `page.tsx` がこれに相当。  
   **配置**: `app/page.tsx`, `app/career/page.tsx`, `app/play_ground/page.tsx`

### コンポーネント追加時の判断フロー

新規コンポーネントを追加する際は、以下の順で判断する：

1. **最小単位か？** → はい → `components/atoms/`
2. **Atoms を組み合わせた小さな機能か？かつ、どのページでも使える汎用的なものか？** → はい → `components/molecules/`
3. **特定のページ専用で、そのページの主要セクションを構成するか？** → はい → `app/**/_components/_organisms/`（Organisms）
4. **特定のページ専用で、ページ全体のレイアウト構造か？** → はい → `app/**/_components/_templates/`（Templates）
5. **実際のページか？** → はい → `app/**/page.tsx`

**重要**: 
- Organisms と Molecules の区別は「特定のページに依存するか」で判断する。汎用的なコンポーネントは Molecules、ページ固有のコンポーネントは Organisms（`app/**/_components/_organisms/`）に配置する。
- `_components` ディレクトリは、そのページの `page.tsx` と同じ階層に作成する。`_components` の中に `_organisms` と `_templates` を配置する。

### 注意事項

- **依存関係**: Atoms → Molecules → Organisms → Templates → Pages の順に依存する。逆方向の依存は禁止。
- **ストア・API**: Atoms は使用不可。Molecules 以降で使用可能。
- **再利用性**: 
  - Atoms と Molecules はプロジェクト全体で再利用可能（汎用的）
  - Organisms は特定のページ専用（再利用不可）
  - Templates と Pages は特定のページ専用
- **Organisms と Molecules の区別**: 
  - **Molecules**: どのページでも使える汎用的なコンポーネント → `components/molecules/`
  - **Organisms**: 特定のページ専用のコンポーネント → `app/**/_components/_organisms/`
  - 判断に迷った場合は「他のページでも使う可能性があるか？」で判断。使う可能性があれば Molecules、特定のページ専用なら Organisms。
- **配置構造**: 
  - Organisms と Templates は特定のページでのみ使用されるため、そのページの `page.tsx` と同じ階層に `_components` ディレクトリを作成し、その中に `_organisms` と `_templates` を配置する。
  - 例: `app/page.tsx` がある場合 → `app/_components/_organisms/`, `app/_components/_templates/`
  - 例: `app/career/page.tsx` がある場合 → `app/career/_components/_organisms/`, `app/career/_components/_templates/`
- **命名**: 各層のディレクトリ名は単数形（`atoms`, `molecules`）。Organisms と Templates は `_components` ディレクトリ内に配置。

## ディレクトリ構成の要点

- `app/` … ページ（Pages）
- `app/**/page.tsx` … 各ページのエントリーポイント
- `app/**/_components/` … そのページ専用のコンポーネント（`page.tsx` と同じ階層に配置）
  - `app/**/_components/_organisms/` … Molecules/Atoms を組み合わせた複雑なコンポーネント。特定のページ専用（Atomic の Organisms）
  - `app/**/_components/_templates/` … Organisms を配置したページレイアウト。特定のページ専用（Atomic の Templates）
- `app/play_ground/` … 遊び場ページ
  - `app/play_ground/_components/_organisms/` … 遊び場ページ専用の Organisms
  - `app/play_ground/_components/_templates/` … 遊び場ページ専用の Templates
- `app/career/` … キャリアページ
  - `app/career/_components/_organisms/` … キャリアページ専用の Organisms
  - `app/career/_components/_templates/` … キャリアページ専用の Templates
- `app/about_site/` … サイトについてページ
- `components/atoms/` … 最小単位のコンポーネント（Atomic の Atoms）
- `components/molecules/` … Atoms を組み合わせた小さな機能単位。汎用的でどのページでも使える（Atomic の Molecules）
- `lib/`, `hooks/`, `stores/` … API・フック・ストア

---

## 開発ワークフロー（必須）

機能追加・変更を依頼されたときは、**以下の順で進め、各フェーズ完了ごとにユーザーの確認を取ってから次に進む**。

1. **要件の具体化**  
   依頼内容を整理し、スコープ・優先度・制約を明確にする。不明点は質問する。  
   → **確認後** 次へ。

2. **詳細設計**  
   要件に基づき、データ構造・API・コンポーネント構成・ルーティングなどを設計する。  
   **コンポーネント設計時は Atomic デザインの階層（atoms / molecules / organisms / templates / pages）を考慮し、各コンポーネントを適切な層に配置する設計を明記する。**  
   → **確認後** 次へ。

3. **デザイン**  
   詳細設計に基づき、視覚的なデザインを生成する。**サイト全体の統一感と情報の見やすさを重視し、既存のデザインシステム（`app/globals.css`、既存コンポーネントのスタイル）を参照する。**  
   **生成するもの**:
   - **構造化デザイン仕様（Markdown表形式）**: レイアウト構造、コンポーネント仕様（サイズ・色・余白・フォントなど）、カラーパレット、タイポグラフィ、スペーシングシステム
   - **簡易HTML/CSSコード（プレビュー用）**: 実際のレイアウトとスタイルを再現した最小限のHTML/CSSコード（ブラウザで確認可能）
   - **Atomic デザイン階層の明記**: 各コンポーネントがどの層（atoms/molecules/organisms/templates）に属するかを明記  
   **ポートフォリオサイトとして重視すべき視点**: 情報の見やすさ、レスポンシブデザイン、アクセシビリティ、パフォーマンス、SEO、ユーザビリティ  
   → **デザイン承認後** 次へ。**ユーザーがデザインを承認するまで実装に進まない。**

4. **開発**  
   **承認されたデザイン**と詳細設計に従って実装する。  
   **コンポーネント実装時は Atomic デザインの階層構造を厳守し、各コンポーネントを正しいディレクトリに配置する。**
   - **汎用的なコンポーネント**: `components/atoms/` または `components/molecules/`
   - **特定のページ専用のコンポーネント**: 
     - Organisms → `app/**/_components/_organisms/`（そのページの `page.tsx` と同じ階層に `_components/_organisms/` を作成）
     - Templates → `app/**/_components/_templates/`（そのページの `page.tsx` と同じ階層に `_components/_templates/` を作成）
   - **依存関係の方向（下位層 → 上位層）を守る。**
   - **Organisms は必ず特定のページに依存する。汎用的なコンポーネントは Molecules に配置する。**
   - **`_components` ディレクトリは、そのページの `page.tsx` と同じ階層に作成し、その中に `_organisms` と `_templates` を配置する。**  
   → **確認後** 次へ。

5. **レビュー・セキュリティチェック**  
   実装の品質確認に加え、以下を行う。  
   - **セキュリティ**: 入力検証・認可・依存関係・環境変数などの観点でのチェック。  
   - **Shannon**: 可能な範囲で Shannon（生成AIによる自動脆弱性診断ツール）の実行を検討し、結果を確認する。  
   → **確認後** 次へ。

6. **PR 作成**  
   変更をブランチにまとめ、PR を作成する。`.github/pull_request_template.md` に沿って記載する。

---

## その他

- **セキュリティ**: サプライチェーン対策として safe-chain の利用を想定（README 参照）。脆弱性診断として Shannon の利用を想定。
- **PR テンプレート**: `.github/pull_request_template.md` を参照。
