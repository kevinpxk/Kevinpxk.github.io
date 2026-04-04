export type ResumeBasic = {
  name: string;
  ethnicity?: string;
  location?: { zh: string; en: string };
  phone?: string;
  email?: string;
  birthDate?: string;
  height?: string;
  school?: string;
  educationLevel?: string;
};

export type ResumeSection = {
  zh: string;
  en: string;
};

export type ResumeRole = {
  period: string;
  company: { zh: string; en?: string };
  title: { zh: string; en?: string };
  points: { zh: string[]; en?: string[] };
};

export type ResumeEducation = {
  period: string;
  institution: { zh: string; en: string };
  major?: { zh: string; en: string };
  degree?: { zh: string; en: string };
};

export type ResumeTraining = {
  index: number;
  title: { zh: string; en: string };
  period: string;
  institution: { zh: string; en: string };
};

export type BilingualLine = { zh: string; en: string };

export type ResumeProject = {
  period: string;
  company: BilingualLine;
  title: BilingualLine;
  context: BilingualLine;
  role: BilingualLine;
  painPoints: BilingualLine[];
  actions: BilingualLine[];
  outcomes: BilingualLine[];
  metrics?: { value: string; label: BilingualLine }[];
  tags: BilingualLine[];
};

export type ResumeAiLearning = {
  title: BilingualLine;
  tagline: BilingualLine;
  points: BilingualLine[];
  wechat: {
    accountName: BilingualLine;
    qrSrc: string;
    searchHint: BilingualLine;
  };
};

export type ResumeData = {
  basic: ResumeBasic;
  summary: ResumeSection[];
  aiLearning: ResumeAiLearning;
  experiences: ResumeRole[];
  education: ResumeEducation[];
  trainings: ResumeTraining[];
  skills: { zh: string; en: string }[];
  certificates: { label: { zh: string; en: string }; value: string }[];
  projects: ResumeProject[];
};

export const resume: ResumeData = {
  basic: {
    name: "潘小康",
    ethnicity: "汉",
    location: {
      zh: "佛山北滘",
      en: "Beijiao Town, Foshan City, Guangdong",
    },
    phone: "13063964502",
    email: "13063964502@Sohu.com",
    birthDate: "1981.09",
    height: "170cm",
    school: "黑龙江科技大学",
    educationLevel: "本科",
  },
  summary: [
    {
      zh: "15+ 年制造业运营管理：兼具外企（弗兰卡等）体系化治理与民企「从 0 到 1」建厂经验；职能覆盖 PMC、生产、设备、质量、采购/仓储/物流、EHS 与审核闭环。",
      en: "15+ years in manufacturing operations: multinational governance (e.g., Franke) plus private-sector greenfield builds; spans PMC, production, equipment, quality, procurement/warehousing/logistics, EHS, and audit closure.",
    },
    {
      zh: "精益 + 数字化落地：擅长自上而下搭建精益体系、改善周与 CI/TPM/标准作业；主导或深度参与 ERP、MES、S&OP、SAP/WMS 等与流程再造。",
      en: "Lean + digital execution: end-to-end lean systems, kaizen events, CI/TPM/standard work; led or deeply involved in ERP, MES, S&OP, SAP/WMS, and process redesign.",
    },
    {
      zh: "项目与 PMO：熟悉 Stage-Gate、试产导入与多项目并行治理；近期聚焦产品开发流程、PMO 与准交提升（见代表项目）。",
      en: "Projects & PMO: Stage-Gate, pilot-to-production, and multi-project governance; recent focus on PDP, PMO, and on-time delivery (see signature projects).",
    },
    {
      zh: "成本与商业视角：具备售前工程、报价与内部销售协同经历，熟悉产品成本结构、降本路径与交付风险的平衡。",
      en: "Cost & commercial lens: pre-sales engineering, quoting, and internal sales alignment; strong grasp of cost structure, cost-down levers, and delivery-risk trade-offs.",
    },
    {
      zh: "语言与持续学习：雅思 6.0，可与欧美及东南亚团队高效协作；持续关注生成式 AI 与智能工具，并运营公众号「小潘学与说」做系统化学习输出（见下栏）。",
      en: "Language & continuous learning: IELTS 6.0; effective collaboration across Europe, the U.S., and Southeast Asia. Follows GenAI and intelligent tools closely, and writes the WeChat channel “Xiao Pan Learns and Speaks” (see section below).",
    },
  ],
  aiLearning: {
    title: {
      zh: "人工智能学习与落地思考",
      en: "AI Learning & Applied Thinking",
    },
    tagline: {
      zh: "把制造运营与项目管理的实战经验，与 AI 工具前沿对齐；用公众号做「学得进、说得清」的复盘与分享。",
      en: "Aligning hands-on manufacturing and PM experience with AI tooling trends—using a public channel to learn, reflect, and communicate clearly.",
    },
    points: [
      {
        zh: "持续学习大模型、智能体与工作流自动化，并尝试嵌入日常管理、文档与知识沉淀场景，提升个人与团队效率。",
        en: "Continuously studies LLMs, agents, and workflow automation, experimenting with daily management, documentation, and knowledge capture to lift personal and team productivity.",
      },
      {
        zh: "关注 AI 在计划排程、数据分析、培训与协作中的机会与边界，坚持可验证、可审计的落地原则，而非概念堆砌。",
        en: "Focuses on AI opportunities and guardrails in planning, analytics, training, and collaboration—favoring verifiable, auditable use over hype.",
      },
      {
        zh: "通过公众号「小潘学与说」输出结构化内容，锻炼把复杂议题讲明白的能力，延伸专业影响力。",
        en: "Publishes structured content on “Xiao Pan Learns and Speaks” to practice explaining complex topics clearly and extend professional reach.",
      },
    ],
    wechat: {
      accountName: {
        zh: "小潘学与说",
        en: "小潘学与说 (WeChat OA)",
      },
      qrSrc: "/wechat-gzh-ai.png",
      searchHint: {
        zh: "微信内打开「搜一搜」，搜索上述公众号名称即可关注。",
        en: 'In WeChat, use Search and type the account name above to follow.',
      },
    },
  },
  experiences: [
    {
      period: "2024.07 - 2025.12",
      company: {
        zh: "荃胜精密机械工业（中山）有限公司",
        en: "Quanshen Precision Machinery Co., Ltd.",
      },
      title: {
        zh: "项目管理负责人",
        en: "Project Manager",
      },
      points: {
        zh: [
          "搭建 PMO 与 Stage-Gate 交付体系，梳理 PDP，提升项目可控性与量产可靠性。",
          "推动试样模式转型，优化模具/治具与锻压、机加试样路径，缩短周期并提升准交。",
        ],
        en: [
          "Built PMO and stage-gate delivery mechanics, streamlined PDP, and improved project control and production readiness.",
          "Transformed pilot-run models; optimized tooling and forging/machining pilot paths to shorten cycle time and lift on-time delivery.",
        ],
      },
    },
    {
      period: "2022.01 - 2023.12",
      company: {
        zh: "江门英纳炜商用厨房设备有限公司",
        en: "Innoween Kitchen Equipment Co., Ltd.",
      },
      title: {
        zh: "营运负责人",
        en: "Operation Manager",
      },
      points: {
        zh: [
          "从 0 到 1 建厂：租赁与改造厂房、搭建产线与基础运营能力。",
          "统筹生产、设备、计划、质量、仓储、物流；兼管新品验证与发外协同。",
          "建立安环体系并主导第三方审核应对与整改闭环。",
        ],
        en: [
          "Built a factory from ground up, including leasing facilities, renovating infrastructure, and establishing production lines.",
          "Managed core functions: Production, Equipment, Planning, Quality Control, Warehousing, Logistics, as well as new product validation and outsourced operations",
          "Established safety and environmental compliance systems, and oversaw third-party audit processes to ensure regulatory adherence",
        ],
      },
    },
    {
      period: "2021.04 - 2021.12",
      company: {
        zh: "宝德利新材料科技有限公司",
        en: "Proudly Water-Soluble Material Co., Ltd.",
      },
      title: {
        zh: "总经理助理兼营运总监",
        en: "Assistant General Manager & Operations Director",
      },
      points: {
        zh: [
          "参与战略规划与重大事项研讨，推动战略解码、人才盘点与年度预算落地。",
          "组织工厂月度经营与绩效回顾；协管日常运营、异常升级及新厂筹备、承发包选型等重点包。",
          "分管生产、维修、品管、IT；亲历工厂 ERP 上线与导入全过程。",
        ],
        en: [
          "Member of the executive management team, directly reporting to the GM, with full responsibility for operational cost, on-time delivery, and the functions of PMC, Production, Quality, EHS, and IT.",
          "Led the organizational restructuring and launched the company's lean transformation, facilitating strategic workshops that integrated financial budgeting and HR planning to build a foundation for scalable growth.",
          "Managed the day-to-day operations of Production, Maintenance, Quality Control, and IT, and gained hands-on experience through the ERP go-live and implementation rollout in the plant.",
        ],
      },
    },
    {
      period: "2012.11 - 2020.12",
      company: {
        zh: "弗兰卡餐饮设备安装技术服务(中国)有限公司",
        en: "Franke Foodservice Systems (China) Co., Ltd.",
      },
      title: {
        zh: "营运总监",
        en: "Operations Director",
      },
      points: {
        zh: [
          "亚太区管理层成员，参与区域例行决策与跨工厂营运协同。",
          "对工厂端到端运营负责（计划、生产、设备、质量、采购、仓储、物流），承接 QCDS 类 KPI；推动精益与数字化（ERP、S&OP、MES）提升可视化与成本竞争力。",
          "保障体系有效运行与职业健康安全；组织内审及社会责任、ISO9001、OSHA、集团审核等外审，闭环整改项。",
          "对接安监、消防、环保；支撑集团可持续报告数据与本地改善项目呈现。",
        ],
        en: [
          "Member of the APAC management team; participated in regional routines and cross-plant operational alignment.",
          "End-to-end accountability for planning, production, equipment, quality, procurement, warehousing, and logistics with QCDS-style KPIs; advanced lean and digital programs (ERP, S&OP, MES) for visibility and cost competitiveness.",
          "Kept management systems effective and employees safe; led internal audits and third-party programs (social responsibility, ISO9001, OSHA, group audits) with timely closure of findings.",
          "Engaged safety, fire, and environmental authorities; supported group sustainability reporting and local improvement narratives.",
        ],
      },
    },
    {
      period: "2011.06 - 2012.10",
      company: {
        zh: "立达纺织仪器（中国）有限公司",
        en: "Rieter (China) Textile Instrument Co., Ltd.",
      },
      title: {
        zh: "产线经理（清梳联合机）",
        en: "Line Manager (Blowroom & Carding)",
      },
      points: {
        zh: [
          "负责清梳联产线计划、生产、工艺、仓储的日常管理，承接 QCDS 类 KPI。",
          "本地化项目组成员，参与供应商考核并组织样品安装测试工作。",
          "负责清梳联产线租用厂房改造与迁回新建厂的所有工作，包括 12000 平米布局与搬迁全过程。",
        ],
        en: [
          "Directed production scheduling and resource allocation to ensure efficient, cost-effective production meeting quality and schedule targets.",
          "Served as a local project team member: participated in supplier qualification and organized sample installation & testing activities.",
          "Owned the end-to-end facility transformation and relocation for the blowroom & carding line, including a 12,000 sq.m layout and the complete move process.",
        ],
      },
    },
    {
      period: "2010.01 - 2011.06",
      company: {
        zh: "立达纺织仪器（中国）有限公司",
        en: "Rieter (China) Textile Instrument Co., Ltd.",
      },
      title: {
        zh: "计划经理",
        en: "Planning Manager",
      },
      points: {
        zh: [
          "建立计划部组织架构并完成部门作业流程梳理。",
          "计划部日常管理与人员绩效管理。",
          "参与集团 SAP 升级 WMS 项目，负责新模块在本地顺利落地。",
        ],
        en: [
          "Built the planning department organization and completed the review and standardization of departmental operating processes.",
          "Managed daily operations of the planning function and performed personnel performance management.",
          "Participated in the Group SAP upgrade/WMS project and ensured the successful local rollout of the new modules.",
        ],
      },
    },
    {
      period: "2006.08 - 2010.01",
      company: {
        zh: "立达纺织仪器（中国）有限公司",
        en: "Rieter (China) Textile Instrument Co., Ltd.",
      },
      title: {
        zh: "物流主管（环锭纺）",
        en: "Logistics Supervisor",
      },
      points: {
        zh: [
          "负责环锭纺产线的生产计划和物料计划与仓库管理，直接负责国外兄弟工厂核心部件采购。",
          "基于市场预测制定环锭纺产线产能规划，提供日生产计划与发货计划与必要的各项报表。",
          "对产线缺件负责，组织产线异常问题解决，并对产线库存周转率和库存存量准确率负责。",
          "环锭纺产能提升精益项目的负责人，建立线边超市、单元化作业布局以及标准作业。",
        ],
        en: [
          "Managed production planning, material planning, and warehouse operations for the Rotor line, generating capacity-based production and shipment schedules.",
          "Developed capacity plans for the Rotor line based on market forecasts, and provided daily production and shipment schedules along with the required reports.",
          "Took full responsibility for missing parts: organized problem-solving for line exceptions, and ensured inventory turnover and stock accuracy targets.",
          "Led the lean capacity-improvement project for the Rotor line, establishing line-side supermarkets, unitized work-cell layouts, and standardized work.",
        ],
      },
    },
    {
      period: "2005.07 - 2006.07",
      company: {
        zh: "今创集团有限公司",
        en: "Jinchuang Group Co., Ltd.",
      },
      title: {
        zh: "屏蔽门项目助理",
        en: "Shield Door Project Assistant",
      },
      points: {
        zh: [
          "中外合作屏蔽门项目组成员，负责项目计划编制与对外翻译工作。",
          "负责上海 9 号线以及天津 1 号线地铁屏蔽门项目商务标书。经历了 9 号线从投标到完成施工过程。",
        ],
        en: [
          "Member of the Sino-foreign shield door project team, responsible for project planning and external communication/translation.",
          "Prepared the commercial bid documents for the Shanghai Line 9 and Tianjin Line 1 shield door projects, and supported Line 9 through the entire process from bidding to completion.",
        ],
      },
    },
    {
      period: "2004.07 - 2005.07",
      company: {
        zh: "今创集团有限公司",
        en: "Jinchuang Group Co., Ltd.",
      },
      title: {
        zh: "国际销售部售前工程",
        en: "Pre-Sales Engineer, International Sales",
      },
      points: {
        zh: [
          "出口订单报价，包括资料翻译与外商接待。",
          "对获得项目跟单直至交付。",
        ],
        en: [
          "Prepared export quotations, including document translation and hosting/meeting foreign customers.",
          "Handled project follow-up from award through delivery.",
        ],
      },
    },
  ],
  education: [
    {
      period: "2000.09 - 2004.06",
      institution: {
        zh: "黑龙江科技大学",
        en: "Heilongjiang University of Science and Technology",
      },
      major: {
        zh: "机械设计及其自动化",
        en: "Mechanical Design & Manufacturing",
      },
      degree: {
        zh: "本科",
        en: "Bachelor of Engineering",
      },
    },
  ],
  trainings: [
    {
      index: 1,
      title: {
        zh: "华南理工卓越运营 EDP 培训项目",
        en: "Executive Development Program (EDP), Operation Excellence",
      },
      period: "2017.08 - 2018.09",
      institution: {
        zh: "华东理工大学",
        en: "East China University of Science and Technology",
      },
    },
    {
      index: 2,
      title: {
        zh: "领导力咨询与评价",
        en: "Leadership Consulting & Assessment",
      },
      period: "2017.09 - 2017.12",
      institution: {
        zh: "DDI 智睿咨询",
        en: "DDI Zhiri Consulting",
      },
    },
    {
      index: 3,
      title: {
        zh: "弗兰卡工厂内训：领导力发展项目",
        en: "Franke In-house Training: Leadership Development Program",
      },
      period: "2015.04 - 2016.06",
      institution: {
        zh: "澳大利亚 T&B",
        en: "Australia T&B",
      },
    },
    {
      index: 4,
      title: {
        zh: "三星改善课程（精益）",
        en: "Samsung Improvement Course (Lean)",
      },
      period: "2010.03 - 2011.07",
      institution: {
        zh: "改善学院 Kaizen Institution",
        en: "Kaizen Institution",
      },
    },
    {
      index: 5,
      title: {
        zh: "SAP 上线内训",
        en: "SAP Go-live Training",
      },
      period: "2006.08 - 2006.10",
      institution: {
        zh: "立达德国、立达捷克",
        en: "Rieter Germany & Rieter Czech",
      },
    },
    {
      index: 6,
      title: {
        zh: "机械设计及其自动化专业",
        en: "Mechanical Design & Automation (Major)",
      },
      period: "2000.09 - 2004.06",
      institution: {
        zh: "黑龙江科技大学",
        en: "Heilongjiang University of Science and Technology",
      },
    },
    {
      index: 7,
      title: {
        zh: "普通高中",
        en: "High School",
      },
      period: "1997.09 - 2000.06",
      institution: {
        zh: "常州田家炳实验中学",
        en: "Changzhou Tian Jibing Experimental High School",
      },
    },
  ],
  skills: [
    {
      zh: "生成式 AI / 智能工具（持续学习）",
      en: "GenAI & intelligent tools (continuous learning)",
    },
    {
      zh: "计划与 S&OP（主计划）",
      en: "Planning & S&OP (Master Planning)",
    },
    {
      zh: "项目管理与 PMO / Stage-Gate",
      en: "Project Management & PMO / Stage-Gate",
    },
    {
      zh: "精益生产、CI、标准化作业",
      en: "Lean Manufacturing, CI, and Standard Work",
    },
    {
      zh: "TPM（设备管理与持续改进）",
      en: "TPM (Total Productive Maintenance)",
    },
    {
      zh: "生产运营（QCDS）与多工厂协同",
      en: "Production Operations (QCDS) & Multi-plant Coordination",
    },
    {
      zh: "EHS 建立与社会责任审核闭环",
      en: "EHS Setup & Social Responsibility Audit Closure",
    },
    {
      zh: "工厂数字化与自动化改造",
      en: "Factory Digitalization & Automation Upgrades",
    },
    {
      zh: "ERP（SAP/WMS）与业务流程优化",
      en: "ERP (SAP/WMS) & Business Process Optimization",
    },
  ],
  certificates: [
    { label: { zh: "IELTS", en: "IELTS" }, value: "6.0" },
    {
      label: { zh: "英语六级（CET-6）", en: "English CET-6" },
      value: "CET-6",
    },
  ],
  projects: [
    {
      period: "2009",
      company: {
        zh: "立达纺织仪器（中国）有限公司",
        en: "Rieter (China) Textile Instrument Co., Ltd.",
      },
      title: {
        zh: "环锭纺 R923 产线精益改善：单件流与拉动式生产",
        en: "R923 Ring Spinning Line: One-Piece Flow & Pull Production",
      },
      context: {
        zh: "环锭纺 R923 装配产线；在葡萄牙 Kaizen 机构辅导下推进全价值链改善。",
        en: "R923 ring spinning assembly line; full-value-stream improvement coached by the Kaizen institution in Portugal.",
      },
      role: {
        zh: "PMC 主管 · 公司精益改善负责人",
        en: "PMC Supervisor · Site lean transformation lead",
      },
      painPoints: [
        {
          zh: "市场需求旺盛，现有产能与交付节奏不匹配，亟需扩产。",
          en: "Strong market demand; capacity and delivery cadence could not keep up.",
        },
      ],
      actions: [
        {
          zh: "在约半年周期内导入单件流（One Piece Flow）与拉动式生产，重构工位布局与物料节拍。",
          en: "Within ~6 months, introduced one-piece flow and pull production, resequencing stations and material cadence.",
        },
        {
          zh: "对齐计划、物料与现场执行，建立可视化的产出与瓶颈管理机制。",
          en: "Aligned planning, materials, and shop-floor execution with visible throughput and bottleneck management.",
        },
      ],
      outcomes: [
        {
          zh: "月产出由不足 4 台提升至 10 台以上（同口径下约 2.5–3 倍量级）。",
          en: "Monthly output increased from fewer than 4 units to more than 10 (~2.5–3× on a like-for-like basis).",
        },
        {
          zh: "产线生产区域压缩约 900㎡，释放场地用于整体布局优化。",
          en: "Reduced line footprint by ~900 m², freeing space for broader layout optimization.",
        },
        {
          zh: "新增 1 个夜班班次，进一步拉升产能与交付弹性。",
          en: "Added one night shift to extend capacity and delivery flexibility.",
        },
      ],
      metrics: [
        { value: "3×", label: { zh: "产能量级", en: "Capacity scale-up" } },
        { value: "10+", label: { zh: "台/月", en: "Units / mo." } },
        { value: "900㎡", label: { zh: "场地优化", en: "Floor saved" } },
      ],
      tags: [
        { zh: "单件流", en: "One-piece flow" },
        { zh: "拉动式生产", en: "Pull production" },
        { zh: "PMC", en: "PMC" },
        { zh: "Kaizen", en: "Kaizen" },
      ],
    },
    {
      period: "2018",
      company: {
        zh: "弗兰卡餐饮设备安装技术服务(中国)有限公司",
        en: "Franke Foodservice Systems (China) Co., Ltd.",
      },
      title: {
        zh: "二期扩建：6500㎡ 仓储中心与产线布局重构",
        en: "Phase-2 Expansion: 6,500 m² Warehouse & Line Re-layout",
      },
      context: {
        zh: "新建约 6500㎡ 仓库：同步增加约 3500㎡ 仓储面积与约 3000㎡ 生产面积，并驱动全厂物流与产线重新规划。",
        en: "A ~6,500 m² warehouse program adding ~3,500 m² of storage and ~3,000 m² of production space, triggering site-wide logistics and line re-layout.",
      },
      role: {
        zh: "营运经理 · 项目经理",
        en: "Operations Manager · Project Manager",
      },
      painPoints: [
        {
          zh: "扩产窗口紧：仓储建设周期短，建成后必须立刻投产以保障当年年末出货。",
          en: "Aggressive timeline: short build cycle; immediate ramp-up required to protect year-end shipments.",
        },
        {
          zh: "生产面积扩大后，全生产区域动线与产能平衡需系统性重排。",
          en: "Larger production footprint required a systematic re-plan of flows and capacity balance.",
        },
      ],
      actions: [
        {
          zh: "统筹设计、施工、消防与客户端第三方审核节点，压缩关键路径风险。",
          en: "Orchestrated design, construction, fire safety, and customer third-party audit milestones to reduce critical-path risk.",
        },
        {
          zh: "仓储投产方案与人员配置并行准备，预留自动化升级接口与路线。",
          en: "Parallel ramp-up and staffing readiness; reserved interfaces and roadmap for automation upgrades.",
        },
        {
          zh: "联动次年全公司产线布局优化与 WIP 治理、样品试产区独立设置。",
          en: "Follow-on site-wide layout optimization, WIP reduction, and a dedicated sample/pilot production zone.",
        },
      ],
      outcomes: [
        {
          zh: "1 年内完成仓库建设，通过消防验收与客户第三方审核。",
          en: "Delivered the warehouse within 12 months with fire inspection clearance and customer third-party audit passed.",
        },
        {
          zh: "当年仓库即刻投产，并预留清晰的自动化升级方案。",
          en: "Same-year go-live with a clear automation upgrade plan reserved.",
        },
        {
          zh: "仓储人效提升约 28%，单日出货量提高约 60%。",
          en: "Warehouse productivity up ~28%; daily shipment volume up ~60%.",
        },
        {
          zh: "次年完成全公司生产线布局优化：在制品（WIP）降低 50% 以上，并设立独立样品试产区。",
          en: "Next year: company-wide line layout optimization — WIP down 50%+, plus a standalone sample/pilot area.",
        },
      ],
      metrics: [
        { value: "6500㎡", label: { zh: "新建仓储", en: "New warehouse" } },
        { value: "+28%", label: { zh: "仓储人效", en: "WH productivity" } },
        { value: "+60%", label: { zh: "日出货", en: "Daily shipments" } },
        { value: "−50%", label: { zh: "WIP", en: "WIP reduction" } },
      ],
      tags: [
        { zh: "扩建项目", en: "Expansion" },
        { zh: "仓储物流", en: "Warehousing" },
        { zh: "布局优化", en: "Layout" },
        { zh: "审核闭环", en: "Audit readiness" },
      ],
    },
    {
      period: "2025",
      company: {
        zh: "荃胜精密机械工业（中山）有限公司",
        en: "Quanshen Precision Machinery Co., Ltd.",
      },
      title: {
        zh: "产品开发流程与数字化项目管理体系建设",
        en: "NPD Process & Digital Project Management System",
      },
      context: {
        zh: "公司缺乏体系化的产品开发流程与组织机制，亦无数字化项目管理系统支撑多项目并行开发。",
        en: "No end-to-end NPD process and governance, and no digital PMS to support concurrent development programs.",
      },
      role: {
        zh: "项目经理",
        en: "Project Manager",
      },
      painPoints: [
        {
          zh: "多项目并行时组织协同混乱，进度与质量状态不透明。",
          en: "Concurrent projects created coordination chaos; schedule and quality status were opaque.",
        },
        {
          zh: "客户与内部产品开发要求高，交付与里程碑压力大。",
          en: "High expectations from customers and engineering increased milestone and delivery pressure.",
        },
      ],
      actions: [
        {
          zh: "建立并发布公司级产品开发流程（PDP），明确阶段门禁与责任角色。",
          en: "Established and published a corporate product development process (PDP) with stage gates and accountable roles.",
        },
        {
          zh: "调研、试用并评估专业项目管理系统，为数字化落地选型奠基。",
          en: "Researched, piloted, and evaluated professional PMS options to de-risk digital rollout.",
        },
      ],
      outcomes: [
        {
          zh: "客户产品开发达成率提升约 15%（里程碑/交付口径下的综合结果）。",
          en: "~15% higher customer NPD fulfillment (milestone/delivery composite metric).",
        },
      ],
      metrics: [
        { value: "+15%", label: { zh: "客户达成率", en: "NPD fulfillment" } },
      ],
      tags: [
        { zh: "PMO", en: "PMO" },
        { zh: "Stage-Gate", en: "Stage-Gate" },
        { zh: "数字化", en: "Digital PMS" },
        { zh: "NPD", en: "NPD" },
      ],
    },
  ],
};

