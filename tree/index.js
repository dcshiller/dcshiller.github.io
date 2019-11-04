/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const techniques = [{
  title: "Brain Writing",
  description: "The general principle of this technique is to separate idea generation from discussion.\nThe facilitator shares the topic with the team, and team members individually write down their ideas. This helps eliminate the anchoring bias and encourages everyone on the team to share their own ideas. It also gives everyone more time to think over their ideas, which is especially helpful for your introverted participants. This brainstorming technique works best for teams who seem to be greatly influenced by the first ideas presented during a meeting.\nWhen your team is brainstorming ideas individually, away from distraction and public opinion, you generate concepts that may not naturally surface in a larger setting. Individual brainstorming techniques like this will often give you more unique ideas than when the group comes up with topic ideas together.",
  tags: ['virtual', 'inperson', 'frontloaded']
}, {
  title: "Rapid Ideation",
  description: "Sometimes, time limitations can help generate ideas quickly, because you don't have time to filter or overthink each one.\nWith this technique, the team leader provides context beforehand with information or questions on the topic, budget, deadline, etc. Then, a time limit is set for individuals to write down as many thoughts or ideas around the topic as possible, using any mediums available. Participants should not worry about filtering their ideas.\nThe great part about this style of brainstorming is that it's completely customizable to meet the needs of the team and project. Several different mediums can be used, such as pen and paper, white boards, Post-Its... anything to get the creative juices flowing. The time limit for your rapid ideation session can be anywhere from five to 45 minutes, depending on the complexity of your topic. This technique is good for teams who tend to get sidetracked, teams who hate meetings, or for placing a time limit on brainstorming sessions that frequently last longer than expected.\nWhile brainstorming is the basic technique for developing ideas and getting people to think up new concepts and solutions, there is a very real temptation to overthink things. It's easy to get bogged down by every new idea and its details. This is precisely the problem that rapid ideation seeks to solve.",
  tags: ['timelimited', 'virtual', 'inperson', 'overthinking']
}, {
  title: "Round Robin Brainstorming",
  description: "Teams form a circle to kick off this  method. Once the topic is shared, go around the circle one-by-one and have each person offer an idea until everyone has had a turn.\nSimultaneously, a facilitator records all ideas so they can be discussed once the sharing is over. It's very important to not evaluate any ideas until everyone has the opportunity to share. This technique is good when some of your team members have a tendency to stay quiet throughout meetings.\nWhen leading a session, the round robin method of brainstorming allows everyone to pitch in and contribute. Just make sure to treat each idea with equal weight. And try to discourage people from saying \"X already mentioned my idea.\" If this does happen, say you'll return to them at the end so they have time to think of something new.",
  tags: ['!small', '!medium', 'inperson', 'introverted']
}, {
  title: "Starbursting",
  description: "This form of brainstorming focuses on forming questions rather than answers. Starbursting challenges the team to come up with as many questions as they can about your topic.\nAn easy way to begin a session like this would be to start listing questions that deal with the who, what, where, when, and why. This style assures that all aspects of the project are addressed before any work goes into executing it. It's a good technique for teams who tend to overlook certain aspects of a project and end up rushing to get things done last minute.\nThinking up some good brainstorming questions has the added benefit of giving you an instant backlog of ideas for web content: In case you need a FAQ section for your website or product, simply answer the generated questions.",
  tags: []
}, {
  title: "Online Brainstorming",
  description: "'virtual' teams are becoming more and more common across all industries. The evolution of email and collaboration tools make working remotely the norm in some organizations. But what happens when the team needs to come together to brainstorm?\nSure, ideas can be tossed back and forth through email, but then it becomes difficult to archive those ideas for future reference. Creating a central location online where team members can collaborate is crucial for these virtual teams — consider cloud-based document storage or an online collaboration tool. See how Backcountry uses a collaboration software to brainstorm productively.\nThere are also a ton of great brainstorming tools that help make online brainstorming more of a visual and collaborative experience. One brainstorming exercise for groups involves using an online mind-mapping tool to answer very specific questions or generate ideas tangential to the main problem. What other ideas surround this concept? Map these examples out, visually.\nhttps://mashable.co\n",
  tags: ['virtual']
}];

const node = (name, children) => {
  return {
    text: {
      name
    },
    collapsed: true,
    children
  };
};

const results = tags => techniques.filter(technique => technique.tags.every(t => t[0] === '!' ? !tags.includes(t) : tags.includes(t))).map(technique => ({
  text: {
    name: technique.title,
    'data-text': technique.title
  }
}));

const qualifiers = tags => [node('Introverted', results([...tags, 'introverted'])), node('Prone to overthinking', results([...tags, 'overthinking'])), node('Front-weighted decision-making', results([...tags, 'frontloaded']))];

const loc = tags => [node('Virtual', qualifiers([...tags, 'virtual'])), node('In person', qualifiers([...tags, 'inperson']))];

const teamSize = (tags = []) => [node('Small team', loc([...tags, 'small'])), node('Medium team', loc([...tags, 'medium'])), node('Large team', loc([...tags, 'large']))];

const simple_chart_config = {
  chart: {
    container: "#tree-simple",
    connectors: {
      type: 'curve'
    },
    node: {
      collapsable: true
    },
    rootOrientation: 'WEST',
    animation: {
      connectorsSpeed: 120
    }
  },
  nodeStructure: {
    text: {
      name: "Brain Storming"
    },
    children: teamSize()
  }
};
document.body.addEventListener('click', e => {
  if (e.target == document.body.querySelector('svg')) {
    Array.from(document.querySelectorAll(`[data-show]`)).forEach(o => o.style.display = 'none');
  }

  try {
    if (e.target.parentNode.getAttribute('data-text')) {
      correspondingText = document.querySelector(`[data-show=${e.target.parentNode.getAttribute('data-text')}]`);
      correspondingText.style.display = 'block';
    }
  } catch (e) {}
});
techniques.forEach(technique => {
  const div = document.createElement('div');
  div.innerText = technique.description;
  div.setAttribute('data-show', technique.title);
  div.style.display = 'none';
  div.style.padding = '1em';
  div.style.position = 'absolute';
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.width = '50%';
  div.style.transform = 'translate(-50%,-50%)';
  div.style.background = 'white';
  div.style.border = '1px solid grey';
  div.style.boxShadow = '2px 2px 2px grey';
  document.body.appendChild(div);
});
var my_chart = new Treant(simple_chart_config);

/***/ })
/******/ ]);