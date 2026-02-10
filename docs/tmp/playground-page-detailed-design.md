# 遊び場ページ 詳細設計

## 1. データ構造

### 機能データ
```typescript
type Feature = {
  id: number;
  title: string;        // 機能名
  description: string;   // 機能の説明
  category: Category;   // カテゴリ
  component: React.ComponentType; // 機能コンポーネント
  created?: string;     // 作成日（オプション）
};

type Category = 
  | "animation"      // アニメーション
  | "ui"            // UIコンポーネント
  | "auth"          // 認証
  | "payment"       // 決済
  | "media"         // メディア
  | "other";        // その他

type CategoryInfo = {
  id: Category;
  name: string;      // カテゴリ名（日本語）
  description?: string; // カテゴリの説明（オプション）
};
```

### 既存機能の分類
- **アニメーション**: TransformAnimation, CountUp, DamageEffect
- **UIコンポーネント**: Spinner, GlobalDialog
- **認証**: Login
- **決済**: StripeDemo
- **メディア**: WebCamera

## 2. ページ構造

```
/play_ground
├── H1: 「遊び場」
├── リード文: ページの目的説明
├── Section: カテゴリ一覧（目次）
│   ├── H2: 「カテゴリ一覧」
│   └── カテゴリリンク[]（スムーススクロール）
└── Section: 機能一覧
    ├── カテゴリ別にグループ化
    │   ├── H2: カテゴリ名（id属性でアンカー）
    │   └── FeatureCard[] (1カラムレイアウト)
    │       ├── タイトル（H3）
    │       ├── 説明文
    │       ├── 作成日（オプション）
    │       └── 機能コンポーネント（デモ）
```

## 3. コンポーネント構成（Atomic Design）

### Pages
- `app/play_ground/page.tsx` - ページエントリーポイント

### Organisms（ページ専用）
- `app/play_ground/_components/_organisms/CategoryList/CategoryList.tsx`
  - カテゴリ一覧（目次）を管理
  - H2「カテゴリ一覧」とカテゴリリンクのリストを表示
  - スムーススクロールで該当カテゴリへ移動

- `app/play_ground/_components/_organisms/PlaygroundSection/PlaygroundSection.tsx`
  - 機能一覧セクション全体を管理
  - カテゴリ別にグループ化

- `app/play_ground/_components/_organisms/CategoryGroup/CategoryGroup.tsx`
  - カテゴリごとのグループを管理
  - H2「カテゴリ名」（id属性でアンカー）とFeatureCardのリストを表示

- `app/play_ground/_components/_organisms/FeatureCard/FeatureCard.tsx`
  - 機能1件分のカード表示
  - タイトル、説明、作成日、機能コンポーネントを表示

### Molecules（汎用、必要に応じて作成）
- 既存の`components/molecules/`を活用（必要に応じて追加）

### Atoms（汎用、既存を活用）
- 既存の`components/atoms/`を活用

## 4. データフロー

```
page.tsx (Server Component)
  ↓ featuresデータ（カテゴリ別にグループ化）
  ↓
PlaygroundSection (Server Component)
  ↓ categories配列
  ↓
CategoryGroup[] (Server Component)
  ↓ features配列（カテゴリでフィルタ）
  ↓
FeatureCard[] (Server Component)
  ↓ props: title, description, category, component, created
  ↓
機能コンポーネント (Client Component - Suspenseでラップ)
```

## 5. スタイリング方針

### デザイントークン（既存を活用）
- `--background`: カードの背景色
- `--foreground`: テキストの基本色
- `--muted`: 作成日、補足情報の色
- `--accent`: リンク、強調色
- `--section-bg`: セクション背景色（交互に使用）

### レイアウト
- **カード形式**: トップページ・キャリアページと統一
- **1カラムレイアウト**: 全幅で縦積み（すべてのブレークポイント）
- **余白**: トップページ・キャリアページと統一（`--xs`から`--3xl`まで）
- **ボーダー**: 統一されたボーダー（`1px solid rgba(0, 0, 0, 0.08)`）
- **ホバー効果**: 統一されたシャドウ（`0 4px 12px rgba(0, 0, 0, 0.1)`）

### タイポグラフィ
- H1: ページタイトル（トップページ・キャリアページと統一）
- H2: カテゴリ名
- H3: 機能名
- 説明文: 通常のフォントサイズ
- 作成日: `--muted`色、やや小さめのフォントサイズ

## 6. レスポンシブデザイン

### ブレークポイント
- モバイル: `max-width: 767px`
- タブレット: `768px〜1023px`
- デスクトップ: `1024px以上`

### レイアウト調整
- **グリッドレイアウト**:
  - デスクトップ: 3カラム（`grid-template-columns: repeat(3, 1fr)`）
  - タブレット: 2カラム（`grid-template-columns: repeat(2, 1fr)`）
  - モバイル: 1カラム（`grid-template-columns: 1fr`）
- **1カラムレイアウト**: 全幅で縦積み（すべてのブレークポイント）

## 7. 拡張性の考慮

### 機能追加の容易さ
- データ構造を配列で管理し、新しい機能を追加する際は配列に追加するだけ
- カテゴリの追加も容易（`Category`型に追加するだけ）
- レイアウトモードの切り替え機能（将来的に追加可能）

### パフォーマンス
- Suspenseを使用した遅延読み込み（既存の実装を維持）
- カテゴリごとにグループ化することで、必要な機能のみ読み込む

## 8. アクセシビリティ

- 適切な見出し構造（h1-h3）
- セマンティックHTML（`<section>`, `<article>`）
- キーボード操作対応（フォーカス可能な要素）
- スクリーンリーダー対応（適切なaria-labelなど）

## 9. パフォーマンス

- Server Componentsを活用（データ取得はサーバー側）
- Suspenseを使用した遅延読み込み
- 不要なアニメーションは最小限

## 10. 実装の優先順位

1. デザイントークンの確認・追加（必要に応じて）
2. Organismsコンポーネントの作成（FeatureCard, CategoryGroup, PlaygroundSection）
3. ページの組み立て（page.tsx）
4. スタイリングの調整
5. レスポンシブデザインの確認（グリッド/1カラムの両方）
6. アクセシビリティの確認
