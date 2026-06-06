// Primary language: Simplified Chinese
// EN / JA are translated on-demand via MyMemory API and cached in localStorage

const TRACKS = {
  ai: {
    labelZh: "人工智能",
    titleHeadline: "人工智能史",
    titleText: "从图灵测试到 ChatGPT，符号智能与通用智能的七十年探索",
    events: [
      { year:"1950", headline:"图灵测试",            text:"艾伦·图灵发表《计算机器与智能》，提出「机器能思考吗？」，图灵测试成为 AI 智能的判定标准。", img:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg", imgCaption:"Alan Turing" },
      { year:"1956", headline:"达特茅斯会议：AI 诞生", text:"约翰·麦卡锡等人正式提出「人工智能」一词，AI 作为独立学科宣告诞生。", img:"https://upload.wikimedia.org/wikipedia/commons/4/49/John_McCarthy_Stanford.jpg", imgCaption:"John McCarthy" },
      { year:"1966", headline:"ELIZA：第一个聊天机器人", text:"MIT 的 Weizenbaum 创建 ELIZA，模拟心理咨询师对话，是自然语言处理的早期里程碑。" },
      { year:"1969", headline:"第一次 AI 寒冬",        text:"Minsky & Papert 出版《感知机》，证明单层网络的局限，资金大幅削减，AI 进入第一次低谷。" },
      { year:"1980", headline:"专家系统繁荣",           text:"基于规则的专家系统（如 XCON）在工业界广泛落地，AI 迎来第二次商业热潮。" },
      { year:"1987", headline:"第二次 AI 寒冬",         text:"专家系统维护成本高企，LISP 机市场崩溃，AI 再度遭遇资金断裂与信任危机。" },
      { year:"1997", headline:"深蓝击败卡斯帕罗夫",     text:"IBM 深蓝以 3.5:2.5 击败国际象棋世界冠军，首次证明计算机可在正式竞技中超越人类。", img:"https://upload.wikimedia.org/wikipedia/commons/b/be/Deep_Blue.jpg", imgCaption:"IBM Deep Blue" },
      { year:"2011", headline:"Watson 赢得危险边缘",    text:"IBM Watson 击败两位人类冠军，NLU 与知识问答的实用化 AI 引发广泛关注。" },
      { year:"2016", headline:"AlphaGo 击败李世石",    text:"DeepMind AlphaGo 以 4:1 击败围棋世界冠军，被视为通用 AI 的重要里程碑。", img:"https://upload.wikimedia.org/wikipedia/commons/0/0b/DeepMind_logo.svg", imgCaption:"DeepMind" },
      { year:"2022", month:"11", headline:"ChatGPT：AI 大众化元年", text:"上线 2 个月达 1 亿用户，史上增长最快的消费产品，全球 AI 竞赛全面加速。", img:"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", imgCaption:"ChatGPT" },
      { year:"2025", month:"5",  headline:"AI Agent 时代",          text:"主流厂商集体转向 Agentic AI，模型自主浏览、执行代码、调用工具，「数字员工」成现实。" }
    ]
  },

  ml: {
    labelZh: "机器学习",
    titleHeadline: "机器学习史",
    titleText: "从感知机到强化学习，统计学习与经典 ML 的演进历程",
    events: [
      { year:"1957", headline:"感知机：第一个学习算法",   text:"Frank Rosenblatt 发明感知机，首次实现「机器通过数据学习」，奠定监督学习基础。" },
      { year:"1967", headline:"K 近邻算法",               text:"最近邻算法正式提出，成为最直觉的分类方法，至今仍是 ML 入门经典。" },
      { year:"1986", headline:"反向传播：多层网络学习",   text:"Rumelhart、Hinton、Williams 发表反向传播论文，多层神经网络得以有效训练。" },
      { year:"1992", headline:"支持向量机 (SVM)",          text:"Vapnik 等人提出 SVM，以最大边距超平面分类，成为 2000s 最流行的 ML 算法。" },
      { year:"1995", headline:"Bagging 与集成学习",        text:"Leo Breiman 提出 Bagging（自举聚合），为随机森林等集成方法奠定基础。" },
      { year:"1997", headline:"LSTM：长短时记忆网络",      text:"Hochreiter & Schmidhuber 提出 LSTM，解决 RNN 梯度消失问题，序列建模能力大幅提升。" },
      { year:"2001", headline:"随机森林",                   text:"Breiman 正式发表随机森林算法，成为结构化数据上最可靠的 ML 算法之一。" },
      { year:"2013", headline:"Word2Vec：词向量革命",       text:"Google 的 Mikolov 等人发布 Word2Vec，将词语映射到向量空间，开启语义表示新时代。" },
      { year:"2016", headline:"XGBoost 主导数据竞赛",       text:"XGBoost 凭借极致的梯度提升效率横扫 Kaggle 竞赛，成为结构化数据的首选工具。" },
      { year:"2020", headline:"AutoML 与 NAS 成熟",         text:"自动机器学习与神经架构搜索趋于实用，AI 开始帮助设计 AI，降低专业门槛。" },
      { year:"2022", month:"3", headline:"RLHF：人类反馈强化学习", text:"OpenAI 的 InstructGPT 将 RLHF 推向主流，强化学习与 LLM 融合成为对齐 AI 的关键范式。" },
      { year:"2024",            headline:"测试时计算扩展",   text:"o1 等模型证明推理时增加计算（思维链）可大幅提升性能，开辟超越参数规模的新扩展轴。" }
    ]
  },

  dl: {
    labelZh: "深度学习",
    titleHeadline: "深度学习史",
    titleText: "从 McCulloch-Pitts 神经元到大语言模型，神经网络的漫长崛起",
    events: [
      { year:"1943", headline:"McCulloch-Pitts 神经元",  text:"第一个数学神经元模型，以逻辑门模拟神经元激活，计算神经科学由此诞生。" },
      { year:"1958", headline:"感知机硬件实现",           text:"Rosenblatt 用硬件实现感知机（Mark I），首台能从样本中「学习」图像分类的物理机器。" },
      { year:"1986", headline:"反向传播：深度学习的引擎", text:"多层网络通过反向传播得以有效训练，隐藏层表示学习成为可能，深度学习理论基础确立。" },
      { year:"1989", headline:"LeNet：第一个卷积神经网络",text:"Yann LeCun 设计 LeNet 用于手写数字识别，CNN 架构首次展示工程价值。" },
      { year:"1997", headline:"LSTM：序列建模突破",        text:"Hochreiter & Schmidhuber 提出 LSTM，解决梯度消失，为语言模型和时序 AI 奠基。" },
      { year:"2006", headline:"Hinton 的深度信念网络",    text:"逐层无监督预训练让深层网络首次可训练，深度学习复兴，Hinton 成为「AI 教父」。" },
      { year:"2012", headline:"AlexNet：深度学习爆发",    text:"ImageNet 错误率从 26% 降至 15%，GPU + ReLU + Dropout 的组合引发全球研究热潮。" },
      { year:"2014", headline:"GAN 生成对抗网络",          text:"Ian Goodfellow 提出 GAN，生成式 AI 的核心范式由此诞生，开创图像生成新纪元。" },
      { year:"2015", headline:"ResNet：152 层深度网络",   text:"何恺明等人提出残差连接，解决深层网络退化问题，网络深度从此突破百层。" },
      { year:"2017", headline:"Transformer：注意力就是一切", text:"Google 的《Attention is All You Need》彻底革新 NLP，一切现代大模型的共同基石。" },
      { year:"2018", headline:"BERT & GPT-1",              text:"双向预训练与自回归预训练两种范式同年确立，NLP 大模型时代正式开启。" },
      { year:"2020", month:"6",  headline:"GPT-3：175B 参数", text:"few-shot 涌现能力震惊业界，「scale 就是一切」的信念开始主导 AI 研究方向。" },
      { year:"2021", month:"1",  headline:"DALL-E：文字生成图像", text:"多模态生成 AI 元年，语言与视觉在同一模型中融合，开启创意 AI 新纪元。" },
      { year:"2022", month:"8",  headline:"Stable Diffusion 开源", text:"扩散模型以开源形式发布，AI 图像生成民主化，掀起版权与创作伦理的全球大讨论。" },
      { year:"2023", month:"3",  headline:"GPT-4：多模态专家级",   text:"通过律师资格考试，多模态理解成熟，职业替代讨论从假设变为现实议题。" },
      { year:"2024", month:"2",  headline:"Sora：视频生成",         text:"物理一致的 60 秒视频，影视行业开始认真对待 AI 冲击，世界模型讨论升温。" },
      { year:"2025", month:"1",  headline:"DeepSeek R1：效率革命", text:"极低成本达到 o1 级别，开源发布震撼硅谷，大力出奇迹的神话受到挑战。" }
    ]
  }
};

// Key figures for the scrolling gallery
// Names kept as proper nouns; roleZh translated dynamically
const FIGURES = [
  { nameZh:"艾伦·图灵",       nameEn:"Alan Turing",        nameJa:"アラン・チューリング",       years:"1912–1954", roleZh:"图灵测试 · 计算机科学之父",       img:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",                                                          wiki:"https://en.wikipedia.org/wiki/Alan_Turing" },
  { nameZh:"约翰·麦卡锡",     nameEn:"John McCarthy",      nameJa:"ジョン・マッカーシー",       years:"1927–2011", roleZh:"「人工智能」命名者 · LISP 之父",  img:"https://upload.wikimedia.org/wikipedia/commons/4/49/John_McCarthy_Stanford.jpg",                                                       wiki:"https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)" },
  { nameZh:"马文·明斯基",     nameEn:"Marvin Minsky",      nameJa:"マーヴィン・ミンスキー",     years:"1927–2016", roleZh:"MIT AI 实验室联合创始人",          img:"https://upload.wikimedia.org/wikipedia/commons/2/28/Marvin_Minsky_at_OLPCb.jpg",                                                       wiki:"https://en.wikipedia.org/wiki/Marvin_Minsky" },
  { nameZh:"弗兰克·罗森布拉特", nameEn:"Frank Rosenblatt", nameJa:"フランク・ローゼンブラット", years:"1928–1971", roleZh:"感知机发明者",                     img:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Frank_Rosenblatt.jpg",                                                               wiki:"https://en.wikipedia.org/wiki/Frank_Rosenblatt" },
  { nameZh:"杰弗里·辛顿",     nameEn:"Geoffrey Hinton",    nameJa:"ジェフリー・ヒントン",       years:"1947–",     roleZh:"深度学习教父 · 2024 诺贝尔物理奖", img:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Geoffrey_E._Hinton%2C_2024_Nobel_Prize_Laureate_in_Physics_%28cropped%29.jpg",     wiki:"https://en.wikipedia.org/wiki/Geoffrey_Hinton" },
  { nameZh:"杨立昆",          nameEn:"Yann LeCun",         nameJa:"ヤン・ルカン",               years:"1960–",     roleZh:"CNN 之父 · Meta 首席 AI 科学家",   img:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Yann_LeCun_-_2025_%28cropped%29.jpg",                                               wiki:"https://en.wikipedia.org/wiki/Yann_LeCun" },
  { nameZh:"约书亚·本吉奥",   nameEn:"Yoshua Bengio",      nameJa:"ヨシュア・ベンジオ",         years:"1964–",     roleZh:"深度学习三巨头 · 图灵奖",           img:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Yoshua_Bengio_2019_cropped.jpg",                                                    wiki:"https://en.wikipedia.org/wiki/Yoshua_Bengio" },
  { nameZh:"伊恩·古德费洛",   nameEn:"Ian Goodfellow",     nameJa:"イアン・グッドフェロー",     years:"1985–",     roleZh:"GAN 发明者",                        img:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Ian_Goodfellow_%28cropped%29.jpg",                                                   wiki:"https://en.wikipedia.org/wiki/Ian_Goodfellow" },
  { nameZh:"德米斯·哈萨比斯", nameEn:"Demis Hassabis",     nameJa:"デミス・ハサビス",           years:"1976–",     roleZh:"DeepMind 创始人 · AlphaGo 之父",   img:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Demis_Hassabis_Royal_Society_%283x4_cropped%29.jpg",                                 wiki:"https://en.wikipedia.org/wiki/Demis_Hassabis" },
  { nameZh:"山姆·奥特曼",     nameEn:"Sam Altman",         nameJa:"サム・アルトマン",           years:"1985–",     roleZh:"OpenAI CEO · ChatGPT 推手",         img:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Sam_Altman_speaking_at_TED_%28cropped%29.jpg",                                        wiki:"https://en.wikipedia.org/wiki/Sam_Altman" },
  { nameZh:"何恺明",          nameEn:"Kaiming He",         nameJa:"カイミン・ホー",             years:"1990–",     roleZh:"ResNet 作者 · 视觉 AI 奠基人",      img:"",                                                                                                                                         wiki:"https://en.wikipedia.org/wiki/Kaiming_He" },
  { nameZh:"梁文峰",          nameEn:"Liang Wenfeng",      nameJa:"梁文峰",                     years:"1985–",     roleZh:"DeepSeek 创始人",                   img:"",                                                                                                                                         wiki:"https://en.wikipedia.org/wiki/DeepSeek" }
];
