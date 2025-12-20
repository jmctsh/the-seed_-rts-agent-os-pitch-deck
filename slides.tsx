
import React from 'react';
import { SlideData, SectionType } from './types';
import { 
  Gamepad2, 
  Brain, 
  Cpu, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  History, 
  Zap, 
  ShieldAlert, 
  Code2, 
  Workflow,
  ArrowRightLeft,
  ArrowRight,
  Smartphone,
  MousePointer2,
  Tv,
  Save,
  Eye,
  Target,
  PlayCircle,
  RefreshCw,
  XCircle,
  AlertTriangle,
  Briefcase
} from 'lucide-react';

import img01 from './assets/01.png';
import img02 from './assets/02.png';
import img03 from './assets/03.png';
import img04 from './assets/04.png';

export const slides: SlideData[] = [
  {
    id: 1,
    title: "The Seed Framework",
    subtitle: "面向经典 RTS 的开源智能体操作系统",
    section: "封面",
    speakerNotes: [
      "今天我带来的项目是 The Seed，一个面向游戏开发者的开源框架。",
      "我们的愿景是：在今天的生成式 AI 时代，复兴经典 RTS 游戏在过去时代的辉煌。",
      "我们基于 The Seed 框架，能让开发者快速搭建游戏智能体，最终我们希望向所有 RTS 玩家推广使用 AI 智能体对战的游戏模式。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center h-full py-6">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="p-4">
            <img
              src={img04}
              alt="The Seed Logo"
              className="h-32 md:h-56 w-auto object-contain drop-shadow-2xl"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-white tracking-[0.2em] uppercase">
            The Seed Framework
          </h1>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl">
            面向经典 RTS 的开源智能体操作系统，让每一位玩家都能拥有一位顶级参谋。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          <a
            href="https://github.com/anantheparty/The-Seed"
            target="_blank"
            rel="noreferrer"
            className="group bg-zinc-900/70 border border-zinc-800 rounded-2xl px-5 py-4 flex flex-col justify-between hover:border-yellow-500/60 hover:bg-zinc-900 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Code2 className="text-yellow-400" size={18} />
                <span className="text-[10px] font-tech uppercase text-zinc-400">
                  Open Source Core
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 group-hover:text-yellow-400">
                GitHub
              </span>
            </div>
            <div className="text-left">
              <h2 className="text-sm font-semibold text-white mb-1">
                The Seed Framework
              </h2>
              <p className="mt-2 text-[10px] text-zinc-600 truncate">
                https://github.com/anantheparty/The-Seed
              </p>
            </div>
          </a>

          <a
            href="https://github.com/anantheparty/THE-Seed-OpenRA"
            target="_blank"
            rel="noreferrer"
            className="group bg-zinc-900/70 border border-zinc-800 rounded-2xl px-5 py-4 flex flex-col justify-between hover:border-yellow-500/60 hover:bg-zinc-900 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Gamepad2 className="text-yellow-400" size={18} />
                <span className="text-[10px] font-tech uppercase text-zinc-400">
                  Demo for OpenRA
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 group-hover:text-yellow-400">
                GitHub
              </span>
            </div>
            <div className="text-left">
              <h2 className="text-sm font-semibold text-white mb-1">
                The Seed Sample for OpenRA
              </h2>
              <p className="mt-2 text-[10px] text-zinc-600 truncate">
                https://github.com/anantheparty/THE-Seed-OpenRA
              </p>
            </div>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "回不去的黄金时代",
    subtitle: "RTS 并没有死，只是观众变多了",
    section: SectionType.MARKET,
    speakerNotes: [
      "在做的各位，尤其是 80、90 后，是伴随着计算机和互联网成长起来的一代。",
      "很多人小时候都玩过至少一款经典 RTS 游戏——红警、命令与征服、帝国时代、魔兽争霸、星际争霸。",
      "B站 UP 主 08 每天发布的红警视频都能稳定有几十万播放，巅峰时期有上百万播放，08 也因此入选 B 站百大 UP 主。",
      "可以看出，RTS 游戏并没有死去，当年在网吧联机红警、魔兽的那批人，变成了如今的这批“云玩家”。"
    ],
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
        <div className="space-y-4">
          <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
             <div className="flex items-center gap-4 mb-2">
               <History className="text-yellow-400 w-5 h-5" />
               <h4 className="text-base font-bold text-white">庞大的情怀市场</h4>
             </div>
             <p className="text-zinc-300 text-sm leading-relaxed">
               从《红警》到《星际争霸》，数以亿计的潜在受众。B站等平台的热度证明了 RTS 依然具有统治力。
             </p>
          </div>
          <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
             <div className="flex items-center gap-4 mb-2">
               <TrendingUp className="text-blue-400 w-5 h-5" />
               <h4 className="text-base font-bold text-white">“云玩家”的崛起</h4>
             </div>
             <p className="text-zinc-300 text-sm leading-relaxed">
               用户正在从“重度操作者”向“策略决策者”转型。他们渴望回归，但被门槛挡在了门外。
             </p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden aspect-[1.41/1] flex items-center justify-center relative">
           <img src={img01} className="w-full h-full object-cover" alt="Market Potential" />
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "只有“受虐”，没有“乐趣”",
    subtitle: "痛点 1：极致的容错率与学习成本",
    section: SectionType.MARKET,
    speakerNotes: [
      "RTS 是游戏中最复杂的一类。我给它比喻成围棋：围棋你在布局阶段走出一个恶手，基本就可以直接投降了。",
      "因此，围棋比赛中想打出一局精彩的对局，必须苦练基本功，背定式，苦练很多年。",
      "RTS 也是一样，想打天梯，需要先系统学习、练习基本功。于是我苦练 3 年红警，结果玩吐了，现在我想换个游戏，我想换魔兽，结果我发现我又要从头苦练基本功！",
      "这是很多休闲玩家无法接受的地方。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center space-y-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
            <ShieldAlert className="w-10 h-10 text-red-500 mx-auto mb-3" />
            <h5 className="text-lg font-bold mb-1">零容错率</h5>
            <p className="text-[11px] text-zinc-300 leading-relaxed">“基地晚展开2秒，整局即告失败”</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
            <Cpu className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h5 className="text-lg font-bold mb-1">极高学习门槛</h5>
            <p className="text-[11px] text-zinc-300 leading-relaxed">数百小时的枯燥练习（APM、微操）才能入门</p>
          </div>
        </div>
        <div className="w-full max-w-2xl bg-zinc-900/30 p-4 rounded-lg border border-zinc-800 border-dashed">
          <blockquote className="text-lg text-zinc-200 italic text-center font-light leading-snug">
            “像围棋一样精密，像百米赛跑一样紧张。”
          </blockquote>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "进退两难的玩家",
    subtitle: "痛点 2 & 3：恶劣的 PVP 与无聊的 PVE",
    section: SectionType.MARKET,
    speakerNotes: [
      "RTS 有两种模式，一种是 PVP 也就是真人对战，一种是 PVE 也就是打电脑。",
      "真人对战强度大压力大，还有骂人、挂机、开挂、炸鱼等行为，玩家体验很差。",
      "于是像我一样的一批人选择只打电脑，但传统 AI 的行为非常死板，因此玩家通常有两条路线——一种是一次打很多电脑，另一种是给电脑双倍金钱。",
      "但我们仔细思考一下，这部分 PVE 玩家真正追求的是什么？他们其实很想在公平资源的环境下，体验战术博弈的快乐。"
    ],
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <div className="relative group overflow-hidden bg-zinc-900/40 p-1 rounded-2xl border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50" />
          <div className="relative p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <XCircle className="text-red-500" size={28} />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">崩坏的 PVP 生态</h4>
              </div>
              <span className="text-[11px] font-tech text-red-500/70 uppercase">Toxic Env</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "行为恶劣", desc: "谩骂、拔线、作弊频发", icon: <AlertTriangle size={16} className="text-red-500/80" /> },
                { label: "极度硬核", desc: "“炸鱼”现象毁灭新手体验", icon: <ShieldAlert size={16} className="text-red-500/80" /> },
                { label: "社交压力", desc: "高强度博弈导致胜负感过重", icon: <Users size={16} className="text-red-500/80" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-red-500/5 p-4 rounded-2xl border border-red-500/15">
                  {item.icon}
                  <div>
                    <div className="text-sm font-bold text-red-200">{item.label}</div>
                    <div className="text-sm text-zinc-200 leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden bg-zinc-900/40 p-1 rounded-2xl border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
          <div className="relative p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Cpu className="text-blue-500" size={28} />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">乏味的 PVE 体验</h4>
              </div>
              <span className="text-[11px] font-tech text-blue-500/70 uppercase">Dull AI</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "数值作弊", desc: "靠双倍资源维持所谓“难度”", icon: <Zap size={16} className="text-blue-500/80" /> },
                { label: "逻辑僵化", desc: "只会走固定、死板的预设路径", icon: <Code2 size={16} className="text-blue-500/80" /> },
                { label: "零博弈感", desc: "玩家无法体验真正的战术回馈", icon: <History size={16} className="text-blue-500/80" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-blue-500/5 p-4 rounded-2xl border border-blue-500/15">
                  {item.icon}
                  <div>
                    <div className="text-sm font-bold text-blue-200">{item.label}</div>
                    <div className="text-sm text-zinc-200 leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "The Seed 智能体 OS",
    subtitle: "核心定义：通用、模块化、大模型驱动",
    section: SectionType.SOLUTION,
    speakerNotes: [
      "而我们带来的 The Seed 框架和 AI 智能体恰恰提供了 AI 时代的解决方案。",
      "对于 PVP 玩家来说，智能体提升了上限，AI 负责基础操作、重复操作，玩家可以腾出手去多线操作；",
      "对 PVE 玩家来说，智能体提升的是下限，AI 可以成为队友，也可以成为对手。",
      "对于开发者来说，一个标准化的框架可以极大减少开发难度和开发时间，让智能体能够如雨后春笋般快速爆发。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center space-y-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[
            { icon: <Brain size={18} />, title: "对PVP玩家：提升上限", desc: "AI 搞微操，玩家腾出手多线操作。" },
            { icon: <Gamepad2 size={18} />, title: "对PVE玩家：拉高下限", desc: "会用兵法、会偷袭、会佯攻的AI队友/对手。" },
            { icon: <Zap size={18} />, title: "对开发者：节约时间", desc: "标准化的“大脑”接口，无需重复造轮子。" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 text-center">
              <div className="w-10 h-10 bg-zinc-800 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                {item.icon}
              </div>
              <h5 className="font-bold text-sm md:text-base text-white mb-2">{item.title}</h5>
              <p className="text-xs md:text-sm text-zinc-300 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full bg-zinc-900/50 p-5 rounded-2xl border border-dashed border-zinc-700 text-center">
           <span className="text-[10px] md:text-xs font-tech text-zinc-400 uppercase tracking-[0.3em]">System Interconnect</span>
           <div className="flex items-center justify-center gap-6 mt-3">
              <div className="text-xs text-zinc-300">OpenRA</div>
              <ArrowRight size={14} className="text-zinc-600" />
              <div className="px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/50 rounded text-xs font-bold font-tech">THE SEED</div>
              <ArrowRight size={14} className="text-zinc-600" />
              <div className="text-xs text-zinc-300">SC2 / WC3 / AOE</div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "脑体分离：分层架构",
    subtitle: "五大核心节点：分工明确，互为支撑",
    section: SectionType.SOLUTION,
    speakerNotes: [
      "技术方面，我们的框架在游戏引擎之上，包括内环和外环两部分。",
      "内环是需要开发者开发的本地算法（比如残血后拉）；外环是一个有限状态机，包括 5 个节点，我们致力于让不可控的 LLM 变得更加可控。",
      "开发者只需要提供 Observe 和 Action 这两个 Node 的操作列表，就可以基于 The Seed 框架快速构建游戏智能体。",
      "简单来说，Observe 是让智能体看得懂游戏，Action 是让智能体会操作游戏。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl px-4">
          {[
            { name: 'Observe', icon: <Eye size={26} />, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30', desc: '全图态势感知与特征提取' },
            { name: 'Plan', icon: <Target size={26} />, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30', desc: '多步博弈推理与战略制定' },
            { name: 'Action', icon: <PlayCircle size={26} />, color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/30', desc: '毫秒级指令映射与精确执行' },
            { name: 'Review', icon: <RefreshCw size={26} />, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30', desc: '对局反思与代码逻辑自修正' },
            { name: 'Commit', icon: <Save size={26} />, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30', desc: '反思提交经验，实现动态学习' }
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className={`w-28 h-28 md:w-32 md:h-32 ${node.bg} ${node.border} border-2 rounded-3xl flex flex-col items-center justify-center shadow-xl`}>
                 <div className={`${node.color} mb-1`}>{node.icon}</div>
                 <span className={`text-[12px] font-tech font-bold ${node.color} uppercase`}>{node.name}</span>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm text-zinc-200 font-medium leading-snug max-w-[160px]">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full max-w-4xl bg-zinc-900/50 p-6 md:p-7 pr-14 md:pr-20 rounded-2xl border border-zinc-800/80 text-left relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Workflow size={100} />
            </div>
           <h5 className="text-sm font-bold text-yellow-500 mb-3 uppercase font-tech tracking-wider">Real-time Agent OS + FSM</h5>
           <div className="text-sm md:text-base text-zinc-100 leading-relaxed w-full">
             <p>
               在游戏本身的机制上，内环本地算法自动微操 + 外环调用LLM实时决策；Python可控脚本配合FSM，让LLM这个“随机鹦鹉”只在有限状态中流转；游戏开发者只需要开发内环，并封装Observe和Action的操作列表，就能轻量挂载智能体。
             </p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "智能体进化：标准化范式",
    subtitle: "从“孤立的命令序列”向“动态进化的决策框架”跨越",
    section: SectionType.SOLUTION,
    speakerNotes: [
      "The Seed 框架还可以用于对当前游戏智能体进行改造。",
      "这两天我尝试让 AI 帮我改造我自己的红警 AI 智能体。",
      "The Seed 其实就是一个本地库，整个文件夹直接拖进去，然后 import 就可以了。AI 很擅长做这些事。"
    ],
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-full">
        <div className="space-y-4 flex flex-col items-center flex-1">
           <div className="relative group bg-zinc-950 p-3 rounded-2xl border border-zinc-800 w-full max-w-[280px] shadow-2xl transition-all hover:border-zinc-700">
              <img src={img02} className="w-full h-auto rounded-lg shadow-sm" alt="Legacy Agent" />
              <div className="absolute top-4 left-4 bg-zinc-800/80 backdrop-blur px-2 py-1 rounded text-[9px] text-zinc-400 border border-zinc-700 uppercase font-tech">Legacy Script</div>
           </div>
           <div className="text-center max-w-[240px]">
             <h5 className="text-sm font-bold text-white mb-1">原生脚本智能体</h5>
             <p className="text-[10px] text-zinc-400 leading-relaxed italic">
               底层逻辑与游戏引擎强耦合，属于简单的“if-else”逻辑堆砌，缺乏容错与策略扩展性。
             </p>
           </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
           <ArrowRight className="text-zinc-600 w-8 h-8" />
        </div>

        <div className="space-y-4 flex flex-col items-center flex-1">
           <div className="relative group bg-zinc-900 p-3 rounded-2xl border border-yellow-500/30 w-full max-w-[280px] shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all hover:border-yellow-500/50">
              <img src={img03} className="w-full h-auto rounded-lg shadow-md border border-yellow-500/10" alt="Evolved Agent" />
              <div className="absolute top-4 left-4 bg-yellow-500/20 backdrop-blur px-2 py-1 rounded text-[9px] text-yellow-500 border border-yellow-500/30 uppercase font-tech font-bold">The Seed Powered</div>
           </div>
           <div className="text-center max-w-[240px]">
             <h5 className="text-sm font-bold text-yellow-500 mb-1">The Seed 标准化智能体</h5>
             <p className="text-[10px] text-zinc-300 leading-relaxed font-medium">
               基于更先进的框架重构，具备清晰的感知与执行边界。显著提升开发效率。
             </p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "The Seed 全景：玩法、生态与商业",
    subtitle: "全场景体验 × 共赢生态 × 商业闭环",
    section: SectionType.SOLUTION,
    speakerNotes: [
      "最后我想说，我们有很多创新的方式，可以让传统游戏焕发第二春。比如，玩家可以在手机端云游戏指挥智能体，可以联机挑战超级 AI 智能体；还可以接入直播，观众弹幕云点兵。",
      "商业模式上，我们可以和 OpenRA 这样的开源社区深度合作，商业模式可复制到其他社区，以及一些仍在运营的游戏，比如魔兽争霸重制版、帝国时代 3 决定版。",
      "基于游戏玩家可以举办赛事，吸引赞助和投资。另外，还有 toB 的盈利模式，为企业提供开发和技术指导。"
    ],
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start pt-4">
        {/* Gameplay Section */}
        <div className="space-y-4 flex flex-col h-full bg-zinc-900/30 p-5 rounded-2xl border border-purple-500/20">
           <div className="flex items-center gap-3 border-b border-purple-500/20 pb-3 mb-2">
             <div className="p-2 bg-purple-500/20 rounded-lg">
              <Gamepad2 className="text-purple-500" size={22} />
             </div>
             <h4 className="text-base font-bold text-purple-400 uppercase font-tech tracking-wider">New Gameplay</h4>
           </div>
           
           <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-colors h-[104px] flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-1">
                   <Smartphone className="text-zinc-400 group-hover:text-purple-400 transition-colors" size={16} />
                   <h5 className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">手机端实时指挥</h5>
                 </div>
                 <p className="text-xs text-zinc-300 group-hover:text-purple-100 leading-relaxed line-clamp-2">
                   通过自然语言指令（如“全力进攻”）操控，AI 处理微操，让 RTS 也能在手机上玩。
                 </p>
              </div>
              
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-colors h-[104px] flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-1">
                   <MousePointer2 className="text-zinc-400 group-hover:text-purple-400 transition-colors" size={16} />
                   <h5 className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">PC 人机协同</h5>
                 </div>
                 <p className="text-xs text-zinc-300 group-hover:text-purple-100 leading-relaxed line-clamp-2">
                   玩家负责宏观战略，AI 负责多线细节，极大提升人类操作上限。
                 </p>
              </div>

              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-colors h-[104px] flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-1">
                   <Tv className="text-zinc-400 group-hover:text-purple-400 transition-colors" size={16} />
                   <h5 className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">弹幕“云对战”</h5>
                 </div>
                 <p className="text-xs text-zinc-300 group-hover:text-purple-100 leading-relaxed line-clamp-2">
                   观众通过弹幕输入指令参与游戏，真正实现“看直播也是在玩”。
                 </p>
              </div>
           </div>
        </div>

        {/* Ecosystem Section */}
        <div className="space-y-4 flex flex-col h-full bg-zinc-900/30 p-5 rounded-2xl border border-yellow-500/20">
           <div className="flex items-center gap-3 border-b border-yellow-500/20 pb-3 mb-2">
             <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Workflow className="text-yellow-500" size={22} />
             </div>
             <h4 className="text-base font-bold text-yellow-500 uppercase font-tech tracking-wider">The Ecosystem</h4>
           </div>
           
           <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors h-[104px] flex items-center gap-4">
                 <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-yellow-500/50 transition-colors">
                   <Code2 className="text-yellow-500" size={16} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-white mb-1 truncate">游戏商/Modder</h5>
                    <p className="text-xs text-zinc-300 leading-snug line-clamp-2">开放 API，激活长尾流量，延长游戏寿命。</p>
                 </div>
              </div>

              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors h-[104px] flex items-center gap-4">
                 <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-blue-500/50 transition-colors">
                   <Brain className="text-blue-500" size={16} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-white mb-1 truncate">Agent 开发者</h5>
                    <p className="text-xs text-zinc-300 leading-snug line-clamp-2">编写战术智能体，在商店售卖获利与声望。</p>
                 </div>
              </div>

              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors h-[104px] flex items-center gap-4">
                 <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-green-500/50 transition-colors">
                   <Users className="text-green-500" size={16} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-white mb-1 truncate">玩家群体</h5>
                    <p className="text-xs text-zinc-300 leading-snug line-clamp-2">订阅智能陪练，享受纯粹策略乐趣。</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Business Section */}
        <div className="space-y-4 flex flex-col h-full bg-zinc-900/30 p-5 rounded-2xl border border-blue-500/20">
           <div className="flex items-center gap-3 border-b border-blue-500/20 pb-3 mb-2">
             <div className="p-2 bg-blue-500/20 rounded-lg">
              <TrendingUp className="text-blue-500" size={22} />
             </div>
             <h4 className="text-base font-bold text-blue-500 uppercase font-tech tracking-wider">Business Model</h4>
           </div>
           
           <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors h-[104px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="text-blue-400" size={18} />
                  <h5 className="text-sm font-bold text-white">开源共建与模式复用</h5>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                  与 OpenRA 等社区深度合作；该模式可无缝复制至其他 RTS 项目，成为行业标准基础设施。
                </p>
              </div>

              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors h-[104px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="text-blue-400" size={18} />
                  <h5 className="text-sm font-bold text-white">ToB 技术指导与定制</h5>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                  为游戏厂商提供内环开发与函数封装的技术指导，通过定制化开发与咨询服务盈利。
                </p>
              </div>

              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors h-[104px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="text-blue-400" size={18} />
                  <h5 className="text-sm font-bold text-white">赛事与资本运作</h5>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                  基于庞大用户群举办职业联赛，吸引赞助与投资，打造电竞新标杆。
                </p>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "2026-2027 发展路线图",
    subtitle: "从开源突破到生态爆发",
    section: SectionType.BUSINESS,
    speakerNotes: [
      "最后是我们的项目在未来的计划：前6个月完成核心架构，随后招募开发者，2027年实现全面平台化。"
    ],
    content: (
      <div className="relative h-full py-6 flex flex-col justify-center">
         <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2" />
         <div className="space-y-6">
            {[
              { time: "2026 H1", title: "核心开源攻坚", desc: "完成 The Seed OS 核心，完美适配 OpenRA。" },
              { time: "2026 Q3", title: "社区招募与大赛", desc: "举办 Agent Hackathon，招募首批 Modder。" },
              { time: "2026 Q4", title: "商业化测试", desc: "上线 Agent Store 测试版，验证付费模型。" },
              { time: "2027+", title: "平台化扩张", desc: "接入主流 RTS 作品，建立云对战生态。" }
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                 <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-yellow-500 rounded-full -translate-x-1/2" />
                 <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'} bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/60`}>
                    <span className="text-xs md:text-sm font-tech text-yellow-500 font-bold">{item.time}</span>
                    <h5 className="font-bold text-sm md:text-base text-white leading-snug">{item.title}</h5>
                    <p className="text-xs md:text-sm text-zinc-300 leading-snug">{item.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    )
  },
  {
    id: 10,
    title: "一起种下这颗“种子”",
    section: "结束语",
    speakerNotes: [
      "以上就是 The Seed 的项目介绍。让我们一起种下这颗种子，让那些传统 RTS 游戏在 AI 时代再现曾经的辉煌。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-8 py-6">
        <h2 className="text-3xl md:text-5xl font-tech font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-white">
          THE SEED
        </h2>
        <div className="max-w-lg space-y-4">
           <p className="text-sm md:text-lg text-zinc-400 font-light leading-relaxed px-4">
             “我们不是在复活老游戏，而是在定义未来的游戏对手。”
           </p>
           <button className="px-8 py-3 bg-yellow-500 text-black font-tech text-xs font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg glow-gold mt-4">
             JOIN THE MISSION
           </button>
        </div>
        <div className="flex items-center gap-4 text-zinc-600 text-[9px] font-tech uppercase tracking-widest pt-4">
           <span>GITHUB: anantheparty/The-Seed</span>
           <div className="w-[1px] h-3 bg-zinc-800" />
           <span>BUILDING THE FUTURE OF RTS</span>
        </div>
      </div>
    )
  }
];
