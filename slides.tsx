
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
  Eye,
  Target,
  PlayCircle,
  RefreshCw,
  XCircle,
  AlertTriangle
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
      "欢迎各位，今天我们要介绍的项目是 The Seed。",
      "它是赋予经典 RTS 游戏新生命的智能体操作系统。",
      "我们的目标是让每一位 RTS 玩家都能拥有一位顶级参谋。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center h-full py-6">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-2xl border border-zinc-800">
            <img
              src={img04}
              alt="The Seed Logo"
              className="h-16 md:h-20 w-auto object-contain"
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
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                主仓库，提供通用的智能体 OS 能力：Observe / Plan / Action / Review
                分层架构与标准接口。
              </p>
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
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                基于 OpenRA 的智能体示例工程，展示 The Seed 如何接入经典 RTS 引擎。
              </p>
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
      "RTS 是整整一代人的童年，红警、魔兽、星际是我们的共同记忆。",
      "看 B 站 UP 主 hkb08 的红警视频，动辄百万播放，弹幕满屏。",
      "这说明情怀依然在，流量非常大，但为什么大家不玩了？"
    ],
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
        <div className="space-y-4">
          <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
             <div className="flex items-center gap-4 mb-2">
               <History className="text-yellow-400 w-5 h-5" />
               <h4 className="text-base font-bold text-white">庞大的情怀市场</h4>
             </div>
             <p className="text-zinc-500 text-xs leading-relaxed">
               从《红警》到《星际争霸》，数以亿计的潜在受众。B站等平台的热度证明了 RTS 依然具有统治力。
             </p>
          </div>
          <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
             <div className="flex items-center gap-4 mb-2">
               <TrendingUp className="text-blue-400 w-5 h-5" />
               <h4 className="text-base font-bold text-white">“云玩家”的崛起</h4>
             </div>
             <p className="text-zinc-500 text-xs leading-relaxed">
               用户正在从“重度操作者”向“策略决策者”转型。他们渴望回归，但被门槛挡在了门外。
             </p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden aspect-video flex items-center justify-center relative">
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
      "玩家常说：基地晚展开 2 秒钟，这局已经输了。这种极高的容错率让现代快节奏生活中的人们望而却步。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center space-y-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
            <ShieldAlert className="w-10 h-10 text-red-500 mx-auto mb-3" />
            <h5 className="text-lg font-bold mb-1">零容错率</h5>
            <p className="text-[11px] text-zinc-500 leading-relaxed">“基地晚展开2秒，整局即告失败”</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
            <Cpu className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h5 className="text-lg font-bold mb-1">极高学习门槛</h5>
            <p className="text-[11px] text-zinc-500 leading-relaxed">数百小时的枯燥练习（APM、微操）才能入门</p>
          </div>
        </div>
        <div className="w-full max-w-2xl bg-zinc-900/30 p-4 rounded-lg border border-zinc-800 border-dashed">
          <blockquote className="text-lg text-zinc-400 italic text-center font-light leading-snug">
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
      "PVP 现状是骂人、开挂、炸鱼塘。PVE 现状是人工智障，只会通过数值作弊来增加难度。"
    ],
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <div className="relative group overflow-hidden bg-zinc-900/40 p-1 rounded-2xl border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50" />
          <div className="relative p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <XCircle className="text-red-500" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">崩坏的 PVP 生态</h4>
              </div>
              <span className="text-[10px] font-tech text-red-500/50 uppercase">Toxic Env</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "行为恶劣", desc: "谩骂、拔线、作弊频发", icon: <AlertTriangle size={14} className="text-red-500/70" /> },
                { label: "极度硬核", desc: "“炸鱼”现象毁灭新手体验", icon: <ShieldAlert size={14} className="text-red-500/70" /> },
                { label: "社交压力", desc: "高强度博弈导致胜负感过重", icon: <Users size={14} className="text-red-500/70" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-red-500/5 p-3 rounded-xl border border-red-500/10">
                  {item.icon}
                  <div>
                    <div className="text-xs font-bold text-red-200">{item.label}</div>
                    <div className="text-[10px] text-zinc-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden bg-zinc-900/40 p-1 rounded-2xl border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
          <div className="relative p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Cpu className="text-blue-500" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">乏味的 PVE 体验</h4>
              </div>
              <span className="text-[10px] font-tech text-blue-500/50 uppercase">Dull AI</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "数值作弊", desc: "靠双倍资源维持所谓“难度”", icon: <Zap size={14} className="text-blue-500/70" /> },
                { label: "逻辑僵化", desc: "只会走固定、死板的预设路径", icon: <Code2 size={14} className="text-blue-500/70" /> },
                { label: "零博弈感", desc: "玩家无法体验真正的战术回馈", icon: <History size={14} className="text-blue-500/70" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-blue-500/5 p-3 rounded-xl border border-blue-500/10">
                  {item.icon}
                  <div>
                    <div className="text-xs font-bold text-blue-200">{item.label}</div>
                    <div className="text-[10px] text-zinc-500">{item.desc}</div>
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
      "The Seed 提供标准化的‘大脑’，开发者只需提供‘手脚’。玩家可以得到完美对手和最强辅助。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center space-y-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          {[
            { icon: <Brain />, title: "对开发者", desc: "标准化的“大脑”接口，无需重复造轮子。" },
            { icon: <Gamepad2 />, title: "完美对手", desc: "会用兵法、会偷袭、会佯攻的真实对手。" },
            { icon: <Zap />, title: "最强辅助", desc: "玩家定战术，AI 搞微操（拉兵、生产）。" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center">
              <div className="w-8 h-8 bg-zinc-800 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                {item.icon}
              </div>
              <h5 className="font-bold text-xs text-white mb-1">{item.title}</h5>
              <p className="text-[10px] text-zinc-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full bg-zinc-900/50 p-4 rounded-xl border border-dashed border-zinc-700 text-center">
           <span className="text-[9px] font-tech text-zinc-600 uppercase tracking-[0.3em]">System Interconnect</span>
           <div className="flex items-center justify-center gap-6 mt-3">
              <div className="text-[9px] text-zinc-500">OpenRA</div>
              <ArrowRight size={12} className="text-zinc-700" />
              <div className="px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/50 rounded text-[10px] font-bold font-tech">THE SEED</div>
              <ArrowRight size={12} className="text-zinc-700" />
              <div className="text-[9px] text-zinc-500">SC2 / WC3 / AOE</div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "脑体分离：分层架构",
    subtitle: "四大核心节点：分工明确，互为支撑",
    section: SectionType.SOLUTION,
    speakerNotes: [
      "我们的架构彻底分离了大脑和身体。Observe提取特征，Plan逻辑推理，Action执行指令，Review反思进化。"
    ],
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
          {[
            { name: 'Observe', icon: <Eye size={20} />, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30', desc: '全图态势感知与特征提取' },
            { name: 'Plan', icon: <Target size={20} />, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30', desc: '多步博弈推理与战略制定' },
            { name: 'Action', icon: <PlayCircle size={20} />, color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/30', desc: '毫秒级指令映射与精确执行' },
            { name: 'Review', icon: <RefreshCw size={20} />, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30', desc: '对局反思与代码逻辑自修正' }
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className={`w-20 h-20 md:w-24 md:h-24 ${node.bg} ${node.border} border-2 rounded-3xl flex flex-col items-center justify-center shadow-xl`}>
                 <div className={`${node.color} mb-1`}>{node.icon}</div>
                 <span className={`text-[10px] font-tech font-bold ${node.color} uppercase`}>{node.name}</span>
              </div>
              <div className="text-center">
                <p className="text-[9px] text-zinc-500 font-medium leading-tight max-w-[120px]">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full max-w-4xl bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/80 text-left relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Workflow size={100} />
           </div>
           <h5 className="text-xs font-bold text-yellow-500 mb-2 uppercase font-tech tracking-wider">The Standardized Agent Paradigm</h5>
           <p className="text-[11px] text-zinc-400 leading-relaxed max-w-3xl">
             传统的游戏AI开发逻辑耦合严重。The Seed 通过<strong>Observe(感知)-Plan(决策)-Action(执行)-Review(反思)</strong>的分层设计，
             将复杂的智能行为拆解为标准化的可配置节点。Review节点更是通过 LLM 赋予了智能体从失败中学习、自动优化 FSM 代码的进化能力。
           </p>
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
      "左边是基于OpenRA的老版脚本AI，逻辑死板且难以移植。右边是基于The Seed改造后的新版AI，具备模块化状态机。"
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
               基于更先进的 FSM 框架重构，具备清晰的感知与执行边界。显著提升开发效率。
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
      "The Seed 不仅重塑了玩法，打破了键鼠束缚，还构建了连接开发者与玩家的共赢生态，并实现了清晰的商业闭环。"
    ],
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start pt-4">
        {/* Gameplay Section */}
        <div className="space-y-4 flex flex-col h-full bg-zinc-900/30 p-4 rounded-2xl border border-purple-500/20">
           <div className="flex items-center gap-3 border-b border-purple-500/20 pb-3 mb-2">
             <div className="p-2 bg-purple-500/20 rounded-lg">
               <Gamepad2 className="text-purple-500" size={20} />
             </div>
             <h4 className="text-sm font-bold text-purple-400 uppercase font-tech tracking-wider">New Gameplay</h4>
           </div>
           
           <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-purple-500/30 transition-colors h-[84px] flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-1">
                   <Smartphone className="text-zinc-400 group-hover:text-purple-400 transition-colors" size={16} />
                   <h5 className="font-bold text-xs text-white group-hover:text-purple-300 transition-colors">手机端实时指挥</h5>
                 </div>
                 <p className="text-[10px] text-zinc-500 leading-relaxed line-clamp-2">
                   通过自然语言指令（如“全力进攻”）操控，AI 处理微操，让 RTS 也能在手机上玩。
                 </p>
              </div>
              
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-purple-500/30 transition-colors h-[84px] flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-1">
                   <MousePointer2 className="text-zinc-400 group-hover:text-purple-400 transition-colors" size={16} />
                   <h5 className="font-bold text-xs text-white group-hover:text-purple-300 transition-colors">PC 人机协同</h5>
                 </div>
                 <p className="text-[10px] text-zinc-500 leading-relaxed line-clamp-2">
                   玩家负责宏观战略，AI 负责多线细节，极大提升人类操作上限。
                 </p>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-purple-500/30 transition-colors h-[84px] flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-1">
                   <Tv className="text-zinc-400 group-hover:text-purple-400 transition-colors" size={16} />
                   <h5 className="font-bold text-xs text-white group-hover:text-purple-300 transition-colors">弹幕“云对战”</h5>
                 </div>
                 <p className="text-[10px] text-zinc-500 leading-relaxed line-clamp-2">
                   观众通过弹幕输入指令参与游戏，真正实现“看直播也是在玩”。
                 </p>
              </div>
           </div>
        </div>

        {/* Ecosystem Section */}
        <div className="space-y-4 flex flex-col h-full bg-zinc-900/30 p-4 rounded-2xl border border-yellow-500/20">
           <div className="flex items-center gap-3 border-b border-yellow-500/20 pb-3 mb-2">
             <div className="p-2 bg-yellow-500/20 rounded-lg">
               <Workflow className="text-yellow-500" size={20} />
             </div>
             <h4 className="text-sm font-bold text-yellow-500 uppercase font-tech tracking-wider">The Ecosystem</h4>
           </div>
           
           <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors h-[84px] flex items-center gap-3">
                 <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-yellow-500/50 transition-colors">
                   <Code2 className="text-yellow-500" size={14} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-white mb-0.5 truncate">游戏商/Modder</h5>
                    <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">开放 API，激活长尾流量，延长游戏寿命。</p>
                 </div>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors h-[84px] flex items-center gap-3">
                 <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-blue-500/50 transition-colors">
                   <Brain className="text-blue-500" size={14} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-white mb-0.5 truncate">Agent 开发者</h5>
                    <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">编写战术智能体，在商店售卖获利与声望。</p>
                 </div>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors h-[84px] flex items-center gap-3">
                 <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 border border-zinc-700 group-hover:border-green-500/50 transition-colors">
                   <Users className="text-green-500" size={14} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-white mb-0.5 truncate">玩家群体</h5>
                    <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">订阅智能陪练，享受纯粹策略乐趣。</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Business Section */}
        <div className="space-y-4 flex flex-col h-full bg-zinc-900/30 p-4 rounded-2xl border border-blue-500/20">
           <div className="flex items-center gap-3 border-b border-blue-500/20 pb-3 mb-2">
             <div className="p-2 bg-blue-500/20 rounded-lg">
               <TrendingUp className="text-blue-500" size={20} />
             </div>
             <h4 className="text-sm font-bold text-blue-500 uppercase font-tech tracking-wider">Business Model</h4>
           </div>
           
           <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors h-[84px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="text-blue-400" size={16} />
                  <h5 className="text-xs font-bold text-white">开源社区共建</h5>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed line-clamp-2">
                  与 OpenRA 等成熟社区深度合作，强强联合，实现技术共享与生态扩容。
                </p>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors h-[84px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="text-blue-400" size={16} />
                  <h5 className="text-xs font-bold text-white">赛事与资本运作</h5>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed line-clamp-2">
                  基于庞大用户群举办职业联赛，吸引赞助与投资，打造电竞新标杆。
                </p>
              </div>

              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors h-[84px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <RefreshCw className="text-blue-400" size={16} />
                  <h5 className="text-xs font-bold text-white">模式泛化复用</h5>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed line-clamp-2">
                  该模式可无缝复制至其他 RTS 开源社区及商业项目，成为行业标准基础设施。
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
      "前6个月完成核心架构，随后招募开发者，2027年实现全面平台化。"
    ],
    content: (
      <div className="relative h-full py-4 flex flex-col justify-center">
         <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2" />
         <div className="space-y-4">
            {[
              { time: "2026 H1", title: "核心开源攻坚", desc: "完成 The Seed OS 核心，完美适配 OpenRA。" },
              { time: "2026 Q3", title: "社区招募与大赛", desc: "举办 Agent Hackathon，招募首批 Modder。" },
              { time: "2026 Q4", title: "商业化测试", desc: "上线 Agent Store 测试版，验证付费模型。" },
              { time: "2027+", title: "平台化扩张", desc: "接入主流 RTS 作品，建立云对战生态。" }
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                 <div className="absolute left-6 md:left-1/2 w-2.5 h-2.5 bg-yellow-500 rounded-full -translate-x-1/2" />
                 <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} bg-zinc-900/30 p-2 rounded-lg`}>
                    <span className="text-[9px] font-tech text-yellow-500 font-bold">{item.time}</span>
                    <h5 className="font-bold text-xs text-white leading-tight">{item.title}</h5>
                    <p className="text-[9px] text-zinc-500 leading-tight">{item.desc}</p>
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
      "我们不是在复活老游戏，我们是在定义未来的游戏对手。谢谢大家！"
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
