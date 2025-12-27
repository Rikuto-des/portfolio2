import type { Project } from '../types';

export const projects: Project[] = [
    {
        title: "量子パルス",
        category: "WebGL / React",
        year: "2024",
        color: "bg-indigo-500",
        desc: "流体ダイナミクスを探求する実験的なWebGL体験。",
        image: "/src/assets/project_pulse.png",
        details: {
            challenge: "流体計算の複雑さをWebブラウザ上でリアルタイムに表現し、かつ60fpsの滑らかな動作を確保することが最大の挑戦でした。GPUアクセラレーションを最大限に活用し、数学的な美しさとパフォーマンスの両立を追求しました。",
            approach: "カスタムシェーダー（GLSL）を用いたパーティクル演算。React Three Fiberによるシーン管理の最適化。色彩理論に基づいた、動的なグラデーション生成アルゴリズムの実装。",
            impact: "デジタルアート展での展示にて、平均滞在時間が従来の3倍に増加。技術的な洗練度だけでなく、触覚的な喜びを与えるインターフェースとして高く評価されました。",
            tags: ["GLSL", "React Three Fiber", "Creative Coding", "UI Design"]
        },
        content: `
# プロジェクト概要

このプロジェクトは、**流体ダイナミクス**をWebブラウザ上でシミュレーションする実験的な試みです。

## 技術的ポイント

- **GLSL**: すべての演算はGPU上で行われます
- **React**: UIの管理とステート制御
- **Framer Motion**: シームレスな遷移

### コードの抜粋

\`\`\`glsl
void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  gl_FragColor = vec4(uv, 0.5, 1.0);
}
\`\`\`

> 視覚的な美しさと数学的な厳密さの融合を目指しました。
`
    },
    {
        title: "イーサフロー",
        category: "UI/UX / Motion",
        year: "2024",
        color: "bg-blue-400",
        desc: "視覚的な明瞭さに焦点を当てた次世代投資プラットフォーム。",
        image: "/src/assets/project_ether.png",
        details: {
            challenge: "膨大な金融データと複雑なチャートを、いかに情報のノイズを排除し、ユーザーが『直感的』に判断できる形に落とし込むか。アクセシビリティと高いデザイン性の両立が求められました。",
            approach: "情報の階層構造を徹底的に整理し、マイクロアニメーションによって視線の誘導を最適化。タイポグラフィの強弱によって、重要度の高いデータを瞬時に把握できるレイアウトを構築。",
            impact: "クローズドβ版でのテストにて、ユーザーのタスク完了率が40%向上。金融という堅い分野において、モダンで信頼感のあるブランドイメージを確立しました。",
            tags: ["Product Design", "Interactive Data", "Design Systems", "Prototyping"]
        }
    },
    {
        title: "モノリス・アーキテクチャ",
        category: "3D Design / Architecture",
        year: "2024",
        color: "bg-emerald-500",
        desc: "虚空に浮かぶ硝子の構造体。ミニマリズムと現代建築の融合。",
        image: "/src/assets/project_monolith.png",
        details: {
            challenge: "光の屈折と透過を3D空間でいかにリアルに表現するか。静寂の中に力強さを感じさせる構図の探求が鍵となりました。",
            approach: "レイトレーシング技術を用いた高精度のレンダリング。周囲の環境光を反射するマテリアルの微調整。幾何学的な黄金比に基づいたモデリング。",
            impact: "建築デザイン誌のデジタル版にて表紙に採用。3D空間における『静寂』の表現手法として、新たなスタンダードを提示しました。",
            tags: ["Cinema 4D", "Octane Render", "Minimalism", "Architectural Viz"]
        },
        content: `
# 概念設計：静寂のモノリス

このプロジェクトでは、**「存在しない建築」**をテーマに、光と影だけで構成された空間を創造しました。

## 制作の意図

1.  **光の透過**: ガラス特有の質感を極限まで追求
2.  **空間の余白**: 鑑賞者に思考の余地を与える最小限の構成
3.  **マテリアリズム**: デジタルでありながら触れられそうな質感

> 「建築とは、光の下で繰り広げられる、巧みで正確で華麗な形態の遊びである。」
`
    },
    {
        title: "ゼニス・デジタル",
        category: "Luxury Web / Branding",
        year: "2024",
        color: "bg-amber-500",
        desc: "最高級ブランドのための、洗練されたデジタル体験の再定義。",
        image: "/src/assets/project_zenith.png",
        details: {
            challenge: "『ラグジュアリー』という抽象的な感覚を、Webというピクセルの集合体でいかに具現化するか。余白の取り方一つにまでブランドの哲学を反映させる必要がありました。",
            approach: "タイポグラフィを中心とした情報の削ぎ落とし。ユーザーのスクロールに同期する、極めて滑らかなイージングアニメーション。漆黒と黄金を基調とした、高級感のある色彩設計。",
            impact: "ブランドのオンラインストア売上が公開後3ヶ月で150%増加。デジタル上での顧客体験がブランドロイヤリティの向上に直結しました。",
            tags: ["Next.js", "Framer Motion", "Typography", "Art Direction"]
        }
    },
    {
        title: "シナプティック・ラボ",
        category: "Brand / Web",
        year: "2023",
        color: "bg-slate-400",
        desc: "最先端AI researchラボのアイデンティティデザイン。",
        image: "/src/assets/project_synapse.png",
        details: {
            challenge: "『知能のネットワーク』という抽象的な概念を、一目でブランドの強み（先進性と信頼性）として伝達する視覚言語の構築。単なる装飾ではなく、哲学を感じさせるデザインが求められました。",
            approach: "ニューラルネットワークを模した有機的なパターンの生成。ミニマリズムを基調としつつ、微妙な光源の変化を利用した『生きた』ウェブサイトの構築。シンボルマークの黄金比による再構築。",
            impact: "リブランディング後、採用応募数が前年比で200%増加。業界内でのブランド認知度が飛躍的に向上し、複数のデザインアワードにノミネートされました。",
            tags: ["Brand Identity", "Minimalism", "AI Aesthetics", "Web Design"]
        }
    },
    {
        title: "アトモス・ウェア",
        category: "E-Commerce / Fashion",
        year: "2024",
        color: "bg-rose-400",
        desc: "大気のように纏う、次世代ファッションのEC体験。",
        image: "/src/assets/project_ether.png",
        details: {
            challenge: "衣服の質感をデジタル上でいかに『感じさせる』か。視覚情報だけでなく、触覚を想起させるインタラクションが求められました。",
            approach: "超高解像度のテクスチャ表示と、布の動きを物理演算で再現したシミュレーター。直感的なジェスチャー操作。",
            impact: "返品率が従来より15%減少。ユーザーの購買意欲を高めるインタラクティブな体験を構築しました。",
            tags: ["Three.js", "Web Physics", "E-commerce", "UX Design"]
        }
    },
    {
        title: "ノヴァ・インサイト",
        category: "Data Viz / Fintech",
        year: "2024",
        color: "bg-cyan-400",
        desc: "情報の海を航海するための、没入型データ分析ダッシュボード。",
        image: "/src/assets/project_pulse.png",
        details: {
            challenge: "リアルタイムで更新される数万単位のデータポイントを、遅延なく、かつ美しく可視化するシステム。複雑さを美しさに変換する作業でした。",
            approach: "Instanced Meshを用いた高速描画。複数のデータソースを統合するGraphQLの実装。ユーザーの役割に応じた動的なUIレイアウト。",
            impact: "金融アナリストの分析効率が30%向上。複雑な市況変動を直感的に把握できるようになったとの評価を得ました。",
            tags: ["WebGL", "D3.js", "Fintech", "Information Design"]
        }
    },
    {
        title: "ネビュラ・グリッド",
        category: "Creative Coding / Web",
        year: "2023",
        color: "bg-violet-500",
        desc: "宇宙の混沌を格子状に整理した、実験的なデザインシステム。",
        image: "/src/assets/project_monolith.png",
        details: {
            challenge: "ランダム性と規則性の完璧なバランスの追求。生成されるパターンが常に調和を保つためのアルゴリズム構築。",
            approach: "パーリンノイズを用いたパターン生成。CSS Gridと数学的な黄金比の組み合わせ。テーマカラーの動的な遷移。",
            impact: "多くのデザイナーがインスピレーション源として活用。新しいデザイン表現の可能性を広げました。",
            tags: ["Generative Art", "Design Systems", "Math", "CSS"]
        }
    },
    {
        title: "コア・システム",
        category: "UI System / SaaS",
        year: "2024",
        color: "bg-teal-500",
        desc: "企業のインフラを支える、堅牢かつ洗練された管理OS。",
        image: "/src/assets/project_zenith.png",
        details: {
            challenge: "プロフェッショナルなツールとしての使いやすさと、高級感のあるルック＆フィールの調和。長時間使用しても疲れない視覚設計。",
            approach: "ダークモードを基調とした高コントラストなUI。キーボードショートカットを軸としたアクセシビリティ設計。コンポーネントの徹底的なモジュール化。",
            impact: "エンタープライズ顧客からの満足度が過去最高を記録。管理業務のミスが20%低減されました。",
            tags: ["SaaS Design", "System Architecture", "Product UI"]
        }
    },
    {
        title: "ヴェロシティ",
        category: "Motion / Video",
        year: "2023",
        color: "bg-orange-500",
        desc: "速さを視覚化する、ダイナミックなタイポグラフィの実験。",
        image: "/src/assets/project_pulse.png",
        details: {
            challenge: "静止した文字にいかに『速度感』と『重力』を与えるか。モーショングラフィックスの原理をコードで再現しました。",
            approach: "可変フォント（Variable Fonts）とスクロールの同期。物理ベースのイージング関数。パーティクルによる残像表現。",
            impact: "タイポグラフィアワードの技術部門で受賞。Web上でのタイポグラフィ表現の限界を押し広げました。",
            tags: ["Variable Fonts", "Motion Design", "GSAP", "Experimental"]
        }
    },
    {
        title: "ルミナ・アイランド",
        category: "Game Design / WebGL",
        year: "2024",
        color: "bg-lime-400",
        desc: "光り輝く島を舞台にした、ブラウザで遊べる3Dアドベンチャー。",
        image: "/src/assets/project_synapse.png",
        details: {
            challenge: "低スペックなモバイル端末でも動作する3Dオープンワールドの構築。ポストプロセッシング（後処理）の軽量化が課題でした。",
            approach: "Baked Lightingによるプリレンダリングと動的影の併用。LOD（Level of Detail）の動的切り替え。シェーダーによる水面表現。",
            impact: "リリース1ヶ月で10万ユーザーがプレイ。ブラウザゲームの品質に対する認識を塗り替えました。",
            tags: ["Three.js", "Game Dev", "Optimization", "Shader"]
        }
    },
    {
        title: "フロー・ステート",
        category: "App / Wellness",
        year: "2024",
        color: "bg-sky-400",
        desc: "深呼吸をデザインする。究極の瞑想・集中サポートアプリ。",
        image: "/src/assets/project_ether.png",
        details: {
            challenge: "デジタルデトックスのためのツールとして、いかにスマホへの依存度を下げつつ、ユーザーに深いリラックス体験を届けるか。",
            approach: "バイオフィードバックを模したゆっくりとしたアニメーション。心地よいサイン波に基づくサウンドデザイン。余計な通知を一切排除したミニマルUI。",
            impact: "App Storeの『Today』にて特集。多くのユーザーから『心の安らぎを得られる』との感謝のレビューが届いています。",
            tags: ["Mobile Design", "Wellness", "Audio Design", "Minimalism"]
        }
    }
];
