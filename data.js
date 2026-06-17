// All three languages (zh/en/ja) are bundled statically — no API calls needed.

const TRACKS = {
  ai: {
    titleHeadline: "人工智能史",
    titleText: "从图灵测试到 ChatGPT，符号智能与通用智能的七十年探索",
    en: {
      titleHeadline: "History of Artificial Intelligence",
      titleText: "Seventy years of exploration from the Turing Test to ChatGPT — from symbolic to general intelligence"
    },
    ja: {
      titleHeadline: "人工知能の歴史",
      titleText: "チューリングテストからChatGPTまで、記号的知能から汎用知能への70年の探求"
    },
    events: [
      {
        year:"1950", headline:"图灵测试",
        text:"艾伦·图灵发表《计算机器与智能》，提出「机器能思考吗？」，图灵测试成为 AI 智能的判定标准。",
        en:{ headline:"Turing Test", text:"Alan Turing published 'Computing Machinery and Intelligence,' asking 'Can machines think?' The Turing Test became the benchmark for AI intelligence." },
        ja:{ headline:"チューリングテスト", text:"アラン・チューリングが「計算機械と知性」を発表し、「機械は考えられるか？」と問いかけた。チューリングテストはAI知能の判定基準となった。" },
        img:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg", imgCaption:"Alan Turing",
        wikiUrl:"https://en.wikipedia.org/wiki/Turing_test"
      },
      {
        year:"1956", headline:"达特茅斯会议：AI 诞生",
        text:"约翰·麦卡锡等人正式提出「人工智能」一词，AI 作为独立学科宣告诞生。",
        en:{ headline:"Dartmouth Conference: Birth of AI", text:"John McCarthy and others formally coined the term 'Artificial Intelligence,' establishing AI as an independent discipline." },
        ja:{ headline:"ダートマス会議：AIの誕生", text:"ジョン・マッカーシーらが「人工知能」という用語を正式に提唱し、AIが独立した学問として誕生した。" },
        img:"picture/达特茅斯.jpeg", imgCaption:"Dartmouth Workshop 1956",
        wikiUrl:"https://en.wikipedia.org/wiki/Dartmouth_workshop"
      },
      {
        year:"1966", headline:"ELIZA：第一个聊天机器人",
        text:"MIT 的 Weizenbaum 创建 ELIZA，模拟心理咨询师对话，是自然语言处理的早期里程碑。",
        en:{ headline:"ELIZA: The First Chatbot", text:"MIT's Weizenbaum created ELIZA, which simulated a psychotherapist — an early milestone in natural language processing." },
        ja:{ headline:"ELIZA：初のチャットボット", text:"MITのワイゼンバウムがELIZAを作成し、心理療法士との対話をシミュレート。自然言語処理の初期マイルストーン。" },
        img:"picture/ELIZA_conversation.jpg", imgCaption:"ELIZA conversation",
        wikiUrl:"https://en.wikipedia.org/wiki/ELIZA"
      },
      {
        year:"1969", headline:"第一次 AI 寒冬",
        text:"Minsky & Papert 出版《感知机》，证明单层网络的局限，资金大幅削减，AI 进入第一次低谷。",
        en:{ headline:"First AI Winter", text:"Minsky & Papert published 'Perceptrons,' proving the limitations of single-layer networks. Funding was drastically cut, plunging AI into its first trough." },
        ja:{ headline:"第1次AIの冬", text:"ミンスキーとパパートが「パーセプトロン」を出版し、単層ネットワークの限界を証明。資金が大幅削減されAIは最初の低迷期に入った。" },
        wikiUrl:"https://en.wikipedia.org/wiki/AI_winter"
      },
      {
        year:"1980", headline:"专家系统繁荣",
        text:"基于规则的专家系统（如 XCON）在工业界广泛落地，AI 迎来第二次商业热潮。",
        en:{ headline:"Expert Systems Boom", text:"Rule-based expert systems (e.g., XCON) were widely deployed in industry, ushering in AI's second commercial wave." },
        ja:{ headline:"エキスパートシステムの隆盛", text:"ルールベースのエキスパートシステム（例：XCON）が産業界に広く普及し、AIの第2次商業ブームが到来した。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Expert_system"
      },
      {
        year:"1987", headline:"第二次 AI 寒冬",
        text:"专家系统维护成本高企，LISP 机市场崩溃，AI 再度遭遇资金断裂与信任危机。",
        en:{ headline:"Second AI Winter", text:"High maintenance costs for expert systems and the collapse of the LISP machine market led to another funding crisis and loss of trust in AI." },
        ja:{ headline:"第2次AIの冬", text:"エキスパートシステムの高い保守コストとLISPマシン市場の崩壊により、AIは再び資金危機と信頼失墜に陥った。" },
        wikiUrl:"https://en.wikipedia.org/wiki/AI_winter"
      },
      {
        year:"1997", headline:"深蓝击败卡斯帕罗夫",
        text:"IBM 深蓝以 3.5:2.5 击败国际象棋世界冠军，首次证明计算机可在正式竞技中超越人类。",
        en:{ headline:"Deep Blue Defeats Kasparov", text:"IBM Deep Blue defeated the world chess champion 3.5:2.5 — the first time a computer surpassed a human in formal competition." },
        ja:{ headline:"ディープブルーがカスパロフを破る", text:"IBMディープブルーが3.5:2.5でチェス世界チャンピオンを破り、正式な競技でコンピュータが初めて人間を超えることを証明した。" },
        img:"https://upload.wikimedia.org/wikipedia/commons/b/be/Deep_Blue.jpg", imgCaption:"IBM Deep Blue",
        wikiUrl:"https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)"
      },
      {
        year:"2011", headline:"Watson 赢得危险边缘",
        text:"IBM Watson 击败两位人类冠军，NLU 与知识问答的实用化 AI 引发广泛关注。",
        en:{ headline:"Watson Wins Jeopardy!", text:"IBM Watson defeated two human champions, sparking widespread attention for practical NLU and knowledge-based AI." },
        ja:{ headline:"WatsonがJeopardy!を制す", text:"IBM Watsonが2人の人間チャンピオンを破り、実用的なNLUと知識QA AIが広く注目された。" },
        img:"picture/IBM_Watson.png", imgCaption:"IBM Watson",
        wikiUrl:"https://en.wikipedia.org/wiki/IBM_Watson"
      },
      {
        year:"2016", headline:"AlphaGo 击败李世石",
        text:"DeepMind AlphaGo 以 4:1 击败围棋世界冠军，被视为通用 AI 的重要里程碑。",
        en:{ headline:"AlphaGo Defeats Lee Sedol", text:"DeepMind AlphaGo won 4:1 against the world Go champion, considered a major milestone toward general AI." },
        ja:{ headline:"AlphaGoがイ・セドルを破る", text:"DeepMindのAlphaGoが4:1で囲碁世界チャンピオンを破り、汎用AIへの重要なマイルストーンと見なされた。" },
        img:"picture/Go_-.svg.png", imgCaption:"",
        wikiUrl:"https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol"
      },
      {
        year:"2022", month:"11", headline:"ChatGPT：AI 大众化元年",
        text:"上线 2 个月达 1 亿用户，史上增长最快的消费产品，全球 AI 竞赛全面加速。",
        en:{ headline:"ChatGPT: The Year AI Goes Mainstream", text:"Reached 100 million users in 2 months — the fastest-growing consumer product in history — fully accelerating the global AI race." },
        ja:{ headline:"ChatGPT：AIが大衆化した年", text:"2か月で1億ユーザーを達成——史上最速で成長した消費者製品。世界的なAI競争が全面加速した。" },
        img:"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", imgCaption:"ChatGPT",
        wikiUrl:"https://en.wikipedia.org/wiki/ChatGPT"
      },
      {
        year:"2025", month:"5", headline:"AI Agent 时代",
        text:"主流厂商集体转向 Agentic AI，模型自主浏览、执行代码、调用工具，「数字员工」成现实。",
        en:{ headline:"The Age of AI Agents", text:"Major vendors collectively shift to Agentic AI; models autonomously browse, execute code, and call tools — 'digital employees' become reality." },
        ja:{ headline:"AI Agentの時代", text:"主要ベンダーが一斉にAgentic AIへ転換。モデルが自律的にブラウジング、コード実行、ツール呼び出しを行い、「デジタル社員」が現実となった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Intelligent_agent"
      }
    ]
  },

  ml: {
    titleHeadline: "机器学习史",
    titleText: "从感知机到强化学习，统计学习与经典 ML 的演进历程",
    en: {
      titleHeadline: "History of Machine Learning",
      titleText: "The evolution of statistical learning and classical ML, from perceptrons to reinforcement learning"
    },
    ja: {
      titleHeadline: "機械学習の歴史",
      titleText: "パーセプトロンから強化学習まで、統計的学習と古典的MLの発展の歩み"
    },
    events: [
      {
        year:"1957", headline:"感知机：第一个学习算法",
        text:"Frank Rosenblatt 发明感知机，首次实现「机器通过数据学习」，奠定监督学习基础。",
        en:{ headline:"Perceptron: The First Learning Algorithm", text:"Frank Rosenblatt invented the perceptron, the first time 'a machine learns from data,' laying the foundation for supervised learning." },
        ja:{ headline:"パーセプトロン：初の学習アルゴリズム", text:"フランク・ローゼンブラットがパーセプトロンを発明し、「機械がデータから学ぶ」ことを初めて実現。教師あり学習の基礎を築いた。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Perceptron"
      },
      {
        year:"1967", headline:"K 近邻算法",
        text:"最近邻算法正式提出，成为最直觉的分类方法，至今仍是 ML 入门经典。",
        en:{ headline:"K-Nearest Neighbors", text:"The nearest-neighbor algorithm was formally proposed, becoming the most intuitive classification method and still a classic ML introduction." },
        ja:{ headline:"K近傍法", text:"最近傍法が正式に提案され、最も直感的な分類手法となり、今なおMLの入門クラシックとして親しまれている。" },
        wikiUrl:"https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm"
      },
      {
        year:"1986", headline:"反向传播：多层网络学习",
        text:"Rumelhart、Hinton、Williams 发表反向传播论文，多层神经网络得以有效训练。",
        en:{ headline:"Backpropagation: Learning in Multi-Layer Networks", text:"Rumelhart, Hinton, and Williams published the backpropagation paper, enabling effective training of multi-layer neural networks." },
        ja:{ headline:"誤差逆伝播法：多層ネットワークの学習", text:"ルメルハート、ヒントン、ウィリアムズが誤差逆伝播法の論文を発表し、多層ニューラルネットワークの効果的な訓練が可能となった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Backpropagation"
      },
      {
        year:"1992", headline:"支持向量机 (SVM)",
        text:"Vapnik 等人提出 SVM，以最大边距超平面分类，成为 2000s 最流行的 ML 算法。",
        en:{ headline:"Support Vector Machine (SVM)", text:"Vapnik et al. proposed SVM, classifying with maximum-margin hyperplanes, becoming the most popular ML algorithm of the 2000s." },
        ja:{ headline:"サポートベクターマシン（SVM）", text:"バプニクらがSVMを提案し、最大マージン超平面による分類を実現。2000年代最も人気のMLアルゴリズムとなった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Support_vector_machine"
      },
      {
        year:"1995", headline:"Bagging 与集成学习",
        text:"Leo Breiman 提出 Bagging（自举聚合），为随机森林等集成方法奠定基础。",
        en:{ headline:"Bagging and Ensemble Learning", text:"Leo Breiman proposed Bagging (bootstrap aggregating), laying the foundation for ensemble methods such as Random Forest." },
        ja:{ headline:"バギングとアンサンブル学習", text:"レオ・ブレイマンがバギング（ブートストラップ集約）を提案し、ランダムフォレストなどのアンサンブル手法の基礎を築いた。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Bootstrap_aggregating"
      },
      {
        year:"1997", headline:"LSTM：长短时记忆网络",
        text:"Hochreiter & Schmidhuber 提出 LSTM，解决 RNN 梯度消失问题，序列建模能力大幅提升。",
        en:{ headline:"LSTM: Long Short-Term Memory", text:"Hochreiter & Schmidhuber proposed LSTM, solving the vanishing gradient problem in RNNs and greatly improving sequential modeling." },
        ja:{ headline:"LSTM：長短期記憶", text:"ホッホライターとシュミットフーバーがLSTMを提案し、RNNの勾配消失問題を解決。系列モデリングの能力が大幅に向上した。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Long_short-term_memory"
      },
      {
        year:"2001", headline:"随机森林",
        text:"Breiman 正式发表随机森林算法，成为结构化数据上最可靠的 ML 算法之一。",
        en:{ headline:"Random Forest", text:"Breiman formally published the Random Forest algorithm, one of the most reliable ML algorithms for structured data." },
        ja:{ headline:"ランダムフォレスト", text:"ブレイマンがランダムフォレストアルゴリズムを正式発表し、構造化データにおける最も信頼性の高いMLアルゴリズムの一つとなった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Random_forest"
      },
      {
        year:"2013", headline:"Word2Vec：词向量革命",
        text:"Google 的 Mikolov 等人发布 Word2Vec，将词语映射到向量空间，开启语义表示新时代。",
        en:{ headline:"Word2Vec: The Word Vector Revolution", text:"Google's Mikolov et al. released Word2Vec, mapping words to vector space and opening a new era of semantic representation." },
        ja:{ headline:"Word2Vec：単語ベクトル革命", text:"GoogleのミコロフらがWord2Vecを公開し、単語をベクトル空間にマッピング。意味表現の新時代を切り開いた。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Word2vec"
      },
      {
        year:"2016", headline:"XGBoost 主导数据竞赛",
        text:"XGBoost 凭借极致的梯度提升效率横扫 Kaggle 竞赛，成为结构化数据的首选工具。",
        en:{ headline:"XGBoost Dominates Data Competitions", text:"XGBoost swept Kaggle competitions with extreme gradient boosting efficiency, becoming the go-to tool for structured data." },
        ja:{ headline:"XGBoostがデータ競技を制す", text:"XGBoostは極めて高い勾配ブースティング効率でKaggle競技を席巻し、構造化データの第一選択ツールとなった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/XGBoost"
      },
      {
        year:"2020", headline:"AutoML 与 NAS 成熟",
        text:"自动机器学习与神经架构搜索趋于实用，AI 开始帮助设计 AI，降低专业门槛。",
        en:{ headline:"AutoML and NAS Mature", text:"Automated machine learning and neural architecture search become practical; AI begins designing AI, lowering the expertise barrier." },
        ja:{ headline:"AutoMLとNASの成熟", text:"自動機械学習とニューラルアーキテクチャ探索が実用化し、AIがAIを設計し始め、専門的な参入障壁が下がった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Automated_machine_learning"
      },
      {
        year:"2022", month:"3", headline:"RLHF：人类反馈强化学习",
        text:"OpenAI 的 InstructGPT 将 RLHF 推向主流，强化学习与 LLM 融合成为对齐 AI 的关键范式。",
        en:{ headline:"RLHF: Reinforcement Learning from Human Feedback", text:"OpenAI's InstructGPT brought RLHF to the mainstream; the fusion of RL and LLMs became the key paradigm for AI alignment." },
        ja:{ headline:"RLHF：人間フィードバックからの強化学習", text:"OpenAIのInstructGPTがRLHFを主流化し、強化学習とLLMの融合がAIアライメントの重要なパラダイムとなった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback"
      },
      {
        year:"2024", headline:"测试时计算扩展",
        text:"o1 等模型证明推理时增加计算（思维链）可大幅提升性能，开辟超越参数规模的新扩展轴。",
        en:{ headline:"Test-Time Compute Scaling", text:"Models like o1 proved that adding computation at inference time (chain-of-thought) significantly boosts performance, opening a new scaling axis beyond parameter count." },
        ja:{ headline:"テスト時計算スケーリング", text:"o1などのモデルが、推論時の計算増加（思考連鎖）が性能を大幅に向上させることを証明し、パラメータ規模を超えた新たなスケーリング軸を開拓した。" },
        wikiUrl:"https://en.wikipedia.org/wiki/OpenAI_o1"
      }
    ]
  },

  dl: {
    titleHeadline: "深度学习史",
    titleText: "从 McCulloch-Pitts 神经元到大语言模型，神经网络的漫长崛起",
    en: {
      titleHeadline: "History of Deep Learning",
      titleText: "The long rise of neural networks, from McCulloch-Pitts neurons to large language models"
    },
    ja: {
      titleHeadline: "深層学習の歴史",
      titleText: "マカロック＝ピッツニューロンから大規模言語モデルまで、ニューラルネットワークの長い台頭"
    },
    events: [
      {
        year:"1943", headline:"McCulloch-Pitts 神经元",
        text:"第一个数学神经元模型，以逻辑门模拟神经元激活，计算神经科学由此诞生。",
        en:{ headline:"McCulloch-Pitts Neuron", text:"The first mathematical neuron model, simulating neural activation with logic gates, giving birth to computational neuroscience." },
        ja:{ headline:"マカロック＝ピッツニューロン", text:"最初の数学的ニューロンモデル。論理ゲートでニューロン活性化をシミュレートし、計算神経科学の誕生につながった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Artificial_neuron"
      },
      {
        year:"1958", headline:"感知机硬件实现",
        text:"Rosenblatt 用硬件实现感知机（Mark I），首台能从样本中「学习」图像分类的物理机器。",
        en:{ headline:"Perceptron Hardware Implementation", text:"Rosenblatt implemented the perceptron in hardware (Mark I), the first physical machine capable of 'learning' image classification from samples." },
        ja:{ headline:"パーセプトロンのハードウェア実装", text:"ローゼンブラットがパーセプトロンをハードウェア（Mark I）で実装。サンプルから画像分類を「学習」できる初の物理マシン。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Perceptron"
      },
      {
        year:"1986", headline:"反向传播：深度学习的引擎",
        text:"多层网络通过反向传播得以有效训练，隐藏层表示学习成为可能，深度学习理论基础确立。",
        en:{ headline:"Backpropagation: The Engine of Deep Learning", text:"Multi-layer networks could be effectively trained via backpropagation, enabling hidden-layer representation learning and establishing the theoretical foundation of deep learning." },
        ja:{ headline:"誤差逆伝播法：深層学習のエンジン", text:"多層ネットワークが誤差逆伝播法で効果的に訓練でき、隠れ層の表現学習が可能となり、深層学習の理論的基盤が確立された。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Backpropagation"
      },
      {
        year:"1989", headline:"LeNet：第一个卷积神经网络",
        text:"Yann LeCun 设计 LeNet 用于手写数字识别，CNN 架构首次展示工程价值。",
        en:{ headline:"LeNet: The First Convolutional Neural Network", text:"Yann LeCun designed LeNet for handwritten digit recognition, the first time the CNN architecture demonstrated engineering value." },
        ja:{ headline:"LeNet：初の畳み込みニューラルネットワーク", text:"ヤン・ルカンが手書き数字認識のためにLeNetを設計し、CNNアーキテクチャが初めて工学的価値を示した。" },
        wikiUrl:"https://en.wikipedia.org/wiki/LeNet"
      },
      {
        year:"1997", headline:"LSTM：序列建模突破",
        text:"Hochreiter & Schmidhuber 提出 LSTM，解决梯度消失，为语言模型和时序 AI 奠基。",
        en:{ headline:"LSTM: A Breakthrough in Sequence Modeling", text:"Hochreiter & Schmidhuber proposed LSTM, solving the vanishing gradient problem and laying the groundwork for language models and time-series AI." },
        ja:{ headline:"LSTM：系列モデリングの突破", text:"ホッホライターとシュミットフーバーがLSTMを提案し、勾配消失を解決。言語モデルと時系列AIの基盤を築いた。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Long_short-term_memory"
      },
      {
        year:"2006", headline:"Hinton 的深度信念网络",
        text:"逐层无监督预训练让深层网络首次可训练，深度学习复兴，Hinton 成为「AI 教父」。",
        en:{ headline:"Hinton's Deep Belief Network", text:"Layer-wise unsupervised pre-training made deep networks trainable for the first time, sparking the deep learning renaissance. Hinton became the 'Godfather of AI.'" },
        ja:{ headline:"ヒントンの深層信念ネットワーク", text:"層ごとの教師なし事前学習により深いネットワークが初めて訓練可能となり、深層学習が復活。ヒントンは「AIの父」となった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Deep_belief_network"
      },
      {
        year:"2012", headline:"AlexNet：深度学习爆发",
        text:"ImageNet 错误率从 26% 降至 15%，GPU + ReLU + Dropout 的组合引发全球研究热潮。",
        en:{ headline:"AlexNet: Deep Learning Explosion", text:"ImageNet error rate dropped from 26% to 15%. The combination of GPU + ReLU + Dropout sparked a global research boom." },
        ja:{ headline:"AlexNet：深層学習の爆発", text:"ImageNetのエラー率が26%から15%に低下。GPU + ReLU + Dropoutの組み合わせが世界的な研究ブームを引き起こした。" },
        wikiUrl:"https://en.wikipedia.org/wiki/AlexNet"
      },
      {
        year:"2014", headline:"GAN 生成对抗网络",
        text:"Ian Goodfellow 提出 GAN，生成式 AI 的核心范式由此诞生，开创图像生成新纪元。",
        en:{ headline:"GAN: Generative Adversarial Networks", text:"Ian Goodfellow proposed GANs, creating the core paradigm for generative AI and opening a new era of image generation." },
        ja:{ headline:"GAN：敵対的生成ネットワーク", text:"イアン・グッドフェローがGANを提案し、生成AIのコアパラダイムが誕生。画像生成の新時代を切り開いた。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Generative_adversarial_network"
      },
      {
        year:"2015", headline:"ResNet：152 层深度网络",
        text:"何恺明等人提出残差连接，解决深层网络退化问题，网络深度从此突破百层。",
        en:{ headline:"ResNet: 152-Layer Deep Network", text:"Kaiming He et al. proposed residual connections, solving the degradation problem in deep networks and breaking the 100-layer depth barrier." },
        ja:{ headline:"ResNet：152層の深層ネットワーク", text:"何恺明らが残差接続を提案し、深層ネットワークの劣化問題を解決。ネットワークの深さが100層を超えるようになった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Residual_neural_network"
      },
      {
        year:"2017", headline:"Transformer：注意力就是一切",
        text:"Google 的《Attention is All You Need》彻底革新 NLP，一切现代大模型的共同基石。",
        en:{ headline:"Transformer: Attention Is All You Need", text:"Google's 'Attention is All You Need' completely revolutionized NLP and became the shared foundation of all modern large models." },
        ja:{ headline:"Transformer：注意機構こそすべて", text:"Googleの「Attention is All You Need」がNLPを根底から革新し、現代の全ての大規模モデルの共通基盤となった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)"
      },
      {
        year:"2018", headline:"BERT & GPT-1",
        text:"双向预训练与自回归预训练两种范式同年确立，NLP 大模型时代正式开启。",
        en:{ headline:"BERT & GPT-1", text:"Bidirectional pre-training and autoregressive pre-training paradigms were established in the same year, formally launching the era of NLP large models." },
        ja:{ headline:"BERT & GPT-1", text:"双方向事前学習と自己回帰事前学習の2つのパラダイムが同年に確立し、NLP大規模モデル時代が正式に幕を開けた。" },
        wikiUrl:"https://en.wikipedia.org/wiki/BERT_(language_model)"
      },
      {
        year:"2020", month:"6", headline:"GPT-3：175B 参数",
        text:"few-shot 涌现能力震惊业界，「scale 就是一切」的信念开始主导 AI 研究方向。",
        en:{ headline:"GPT-3: 175B Parameters", text:"Few-shot emergent capabilities shocked the field; the belief that 'scale is everything' began to dominate AI research direction." },
        ja:{ headline:"GPT-3：1750億パラメータ", text:"Few-shotの創発的能力が業界に衝撃を与え、「スケールこそすべて」という信念がAI研究の主流を支配し始めた。" },
        wikiUrl:"https://en.wikipedia.org/wiki/GPT-3"
      },
      {
        year:"2021", month:"1", headline:"DALL-E：文字生成图像",
        text:"多模态生成 AI 元年，语言与视觉在同一模型中融合，开启创意 AI 新纪元。",
        en:{ headline:"DALL-E: Text-to-Image Generation", text:"The first year of multimodal generative AI; language and vision fused in a single model, opening a new era of creative AI." },
        ja:{ headline:"DALL-E：テキストから画像を生成", text:"マルチモーダル生成AI元年。言語と視覚が同一モデルで融合し、クリエイティブAIの新時代が開幕した。" },
        wikiUrl:"https://en.wikipedia.org/wiki/DALL-E"
      },
      {
        year:"2022", month:"8", headline:"Stable Diffusion 开源",
        text:"扩散模型以开源形式发布，AI 图像生成民主化，掀起版权与创作伦理的全球大讨论。",
        en:{ headline:"Stable Diffusion: Open Source", text:"Diffusion models released open-source, democratizing AI image generation and sparking a global debate on copyright and creative ethics." },
        ja:{ headline:"Stable Diffusion：オープンソース公開", text:"拡散モデルがオープンソースで公開されAI画像生成が民主化し、著作権と創作倫理についての世界的な大論争を巻き起こした。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Stable_Diffusion"
      },
      {
        year:"2023", month:"3", headline:"GPT-4：多模态专家级",
        text:"通过律师资格考试，多模态理解成熟，职业替代讨论从假设变为现实议题。",
        en:{ headline:"GPT-4: Multimodal Expert-Level", text:"Passed the bar exam; mature multimodal understanding turned the discussion of professional replacement from hypothetical to real." },
        ja:{ headline:"GPT-4：マルチモーダル専門家レベル", text:"司法試験に合格。マルチモーダル理解が成熟し、職業代替の議論が仮説から現実の議題へと変わった。" },
        wikiUrl:"https://en.wikipedia.org/wiki/GPT-4"
      },
      {
        year:"2024", month:"2", headline:"Sora：视频生成",
        text:"物理一致的 60 秒视频，影视行业开始认真对待 AI 冲击，世界模型讨论升温。",
        en:{ headline:"Sora: Video Generation", text:"Physically coherent 60-second videos; the film industry began taking AI's impact seriously, heating up the world-model debate." },
        ja:{ headline:"Sora：動画生成", text:"物理的一貫性のある60秒動画。映像・テレビ業界がAIの衝撃を真剣に受け止め始め、世界モデルの議論が加熱した。" },
        wikiUrl:"https://en.wikipedia.org/wiki/Sora_(text-to-video_model)"
      },
      {
        year:"2025", month:"1", headline:"DeepSeek R1：效率革命",
        text:"极低成本达到 o1 级别，开源发布震撼硅谷，大力出奇迹的神话受到挑战。",
        en:{ headline:"DeepSeek R1: The Efficiency Revolution", text:"Achieved o1-level performance at extremely low cost; its open-source release shocked Silicon Valley and challenged the myth that only scale matters." },
        ja:{ headline:"DeepSeek R1：効率革命", text:"極めて低コストでo1レベルを達成し、オープンソース公開がシリコンバレーを震撼させ、「スケールの神話」に挑戦した。" },
        wikiUrl:"https://en.wikipedia.org/wiki/DeepSeek"
      }
    ]
  }
};

const FIGURES = [
  { nameZh:"艾伦·图灵",         nameEn:"Alan Turing",        nameJa:"アラン・チューリング",
    years:"1912–1954",
    roleZh:"图灵测试 · 计算机科学之父",        roleEn:"Turing Test · Father of Computer Science",         roleJa:"チューリングテスト・コンピュータ科学の父",
    img:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
    wiki:"https://en.wikipedia.org/wiki/Alan_Turing" },
  { nameZh:"约翰·麦卡锡",       nameEn:"John McCarthy",      nameJa:"ジョン・マッカーシー",
    years:"1927–2011",
    roleZh:"「人工智能」命名者 · LISP 之父",   roleEn:"Coined 'Artificial Intelligence' · Father of LISP", roleJa:"「人工知能」命名者・LISPの父",
    img:"https://upload.wikimedia.org/wikipedia/commons/4/49/John_McCarthy_Stanford.jpg",
    wiki:"https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)" },
  { nameZh:"马文·明斯基",       nameEn:"Marvin Minsky",      nameJa:"マーヴィン・ミンスキー",
    years:"1927–2016",
    roleZh:"MIT AI 实验室联合创始人",           roleEn:"Co-founder of MIT AI Lab",                          roleJa:"MIT AIラボ共同創設者",
    img:"https://upload.wikimedia.org/wikipedia/commons/2/28/Marvin_Minsky_at_OLPCb.jpg",
    wiki:"https://en.wikipedia.org/wiki/Marvin_Minsky" },
  { nameZh:"弗兰克·罗森布拉特", nameEn:"Frank Rosenblatt",   nameJa:"フランク・ローゼンブラット",
    years:"1928–1971",
    roleZh:"感知机发明者",                      roleEn:"Inventor of the Perceptron",                        roleJa:"パーセプトロンの発明者",
    img:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Frank_Rosenblatt.jpg",
    wiki:"https://en.wikipedia.org/wiki/Frank_Rosenblatt" },
  { nameZh:"杰弗里·辛顿",       nameEn:"Geoffrey Hinton",    nameJa:"ジェフリー・ヒントン",
    years:"1947–",
    roleZh:"深度学习教父 · 2024 诺贝尔物理奖",  roleEn:"Godfather of Deep Learning · 2024 Nobel Prize",    roleJa:"深層学習の父・2024年ノーベル物理学賞",
    img:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Geoffrey_E._Hinton%2C_2024_Nobel_Prize_Laureate_in_Physics_%28cropped%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Geoffrey_Hinton" },
  { nameZh:"杨立昆",            nameEn:"Yann LeCun",         nameJa:"ヤン・ルカン",
    years:"1960–",
    roleZh:"CNN 之父 · Meta 首席 AI 科学家",    roleEn:"Father of CNN · Meta Chief AI Scientist",           roleJa:"CNNの父・Metaチーフ AI科学者",
    img:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Yann_LeCun_-_2025_%28cropped%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Yann_LeCun" },
  { nameZh:"约书亚·本吉奥",     nameEn:"Yoshua Bengio",      nameJa:"ヨシュア・ベンジオ",
    years:"1964–",
    roleZh:"深度学习三巨头 · 图灵奖",            roleEn:"Deep Learning Triumvirate · Turing Award",          roleJa:"深層学習三巨頭・チューリング賞",
    img:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Yoshua_Bengio_2019_cropped.jpg",
    wiki:"https://en.wikipedia.org/wiki/Yoshua_Bengio" },
  { nameZh:"伊恩·古德费洛",     nameEn:"Ian Goodfellow",     nameJa:"イアン・グッドフェロー",
    years:"1985–",
    roleZh:"GAN 发明者",                         roleEn:"Inventor of GANs",                                  roleJa:"GANの発明者",
    img:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Ian_Goodfellow_%28cropped%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Ian_Goodfellow" },
  { nameZh:"德米斯·哈萨比斯",   nameEn:"Demis Hassabis",     nameJa:"デミス・ハサビス",
    years:"1976–",
    roleZh:"DeepMind 创始人 · AlphaGo 之父",    roleEn:"Founder of DeepMind · Father of AlphaGo",           roleJa:"DeepMind創設者・AlphaGoの父",
    img:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Demis_Hassabis_Royal_Society_%283x4_cropped%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Demis_Hassabis" },
  { nameZh:"山姆·奥特曼",       nameEn:"Sam Altman",         nameJa:"サム・アルトマン",
    years:"1985–",
    roleZh:"OpenAI CEO · ChatGPT 推手",          roleEn:"OpenAI CEO · Architect of ChatGPT",                 roleJa:"OpenAI CEO・ChatGPTの推進者",
    img:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Sam_Altman_speaking_at_TED_%28cropped%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Sam_Altman" },
  { nameZh:"何恺明",            nameEn:"Kaiming He",         nameJa:"カイミン・ホー",
    years:"1990–",
    roleZh:"ResNet 作者 · 视觉 AI 奠基人",       roleEn:"ResNet Author · Pioneer of Visual AI",              roleJa:"ResNet著者・視覚AIの先駆者",
    img:"picture/何凯明1.jpeg",
    wiki:"https://en.wikipedia.org/wiki/Kaiming_He" }
];
