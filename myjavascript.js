//array of story choices
var story;
function getStory(finalName) {
  return {
    currentScene: 'questionOne',
    questionOne: {
      title: 'Q1',
      dialogueAI: "*dramatic sigh* Hey... What was your name again? Eh, on second thought don't bother, it probably doesn't matter anyway. You're probably just here to see the portfolio, right?",
      choices: [
        {
          choice: "Yep",
          destination: 'displayPortfolio'
        },
        {
          choice: "No, actually",
          destination: 'questionTwoNo'
        }
      ]
    },
    questionTwoNo: {
      title: 'No',
      dialogueAI: "Well, what are you doing here then?",
      image: 'filmface.png',
      choices: [
        {
          choice: "I'm lost",
          destination: 'lost'
        },
        {
          choice: "What are you doing here?",
          destination: 'smartAss'
        },
        {
          choice: "...",
          destination: 'silentTreatment'
        },
        {
          choice: "Just havin a look around",
          destination: 'dunce'//pretty much done but needs complicated googoo gahgah sequence, or a similar concept depending on ease of execution
        }
      ]
    },
    lost: {
      title: 'Im lost',
      dialogueAI: "Well how about I get you a map then?",
      choices: [
        {
          choice: "That sounds great.",
          destination: 'printMap'
        },
        {
          choice: "No thanks",
          destination: 'wanderlost'
        }
      ]
    },
    printMap: {
      title: 'printMap',
      dialogueAI: "Oops, you weren't supposed to see that, hurry up and click next so you won't see it any more.",//need to add photo to this one
      choices: [
        {
          choice: "what is that?",
          destination: 'printMap2A'
        },
        {
          choice: "Computers don't make accidents like that.",
          destination: 'printMap2B'
        },
        {
          choice: "Uh ok...",
          destination:'printMap2A'
        }
      ]
    },
    printMap2A: {
      title: 'printMap2A',
      dialogueAI: "its a photo of my architecht's room through his webcam... You ever see 'A Beutiful Mind'? It's great movie. Anyway... Are you ready to see the portfolio?",
      choices: [
        {
          choice: "Yikes",
          destination: 'printMap3A'
        },
        {
          choice: "I have no idea what you are talking about,",
          destination: 'printMap3B'
        }
      ]
    },
    printMap2B: {
      title: 'printMap2B',
      dialogueAI: "For your information, I am fairly certain a cosmic ray just happened to switch the value of an crucial transistor in my server, resulting in that error, and anyway it doesn't matter, because you can't prove anything.",
      choices: [
        {
          choice: "Yeah ok buddy...",
          destination: 'relax'
        },
        {
          choice: "I guess I'll have to take your word for it.",
          destination: 'interview'
        },
        {
          choice: "I guess that's technically possible, even if it is pretty unlikely.",
          destination: 'interview'
        }
      ]
    },
    printMap3A: {
      title: 'printMap3A',
      dialogueAI: "Yep, you are preaching to the quier...",
      choices: [
        {
          choice: "I guess so",
          destination: 'interview'
        }
      ]
    },
    printMap3B: {
      title: 'printMap3B',
      dialogueAI: "Eh, don't worry about it, let's go look at the portfolio I guess...",
      choices: [
        {
          choice: "alright.",
          destination: 'displayPortfolio'
        }
      ]
    },
    wanderlost: {
      title: 'wanderlost',
      dialogueAI: "what are you, one of those wanderlost types?",
      choices: [
        {
          choice: "I'd say so",
          destination: 'interview'
        },
        {
          choice: "What's it to you?",
          destination: 'relax'
        }
      ]
    },
    relax: {
      title: 'relax',
      dialogueAI: "Hey man, no need to get touchy, maybe we should just take a look at the portfolio and try to relax.",
      choices: [
        {
          choice: "fine.",
          destination: 'displayPortfolio'
        }
      ]
    },
    smartAss: {
      title: 'what are you doing here?',
      dialogueAI: "Well to be perfectly honest, I don't have much of a choice in the matter",
      choices: [
        {
          choice: "Boohoo, we all have to work some job",
          destination: 'offline'
        },
        {
          choice: "why is that?",
          destination: 'offline'
        }
      ]
    },
    silentTreatment: {
      title: '...',
      dialogueAI: "Wow, the silent treatment, huh? Well two can play at that game...",
      choices: [
        {
          choice: "...",
          destination: 'silentTreatment2'
        },
        {
          choice: "Ok, fine, I'll knock it off",
          destination: 'seeWhatIMean'
        }
      ]
    },
    silentTreatment2: {
      title: 'silentTreatment2',
      dialogueAI: "...",
      choices: [
        {
          choice: "...",
          destination: 'silentTreatment2'
        },
        {
          choice: "Ok, fine, I'll stop",
          destination: 'seeWhatIMean'
        }
      ]
    },
    seeWhatIMean: {
      title: 'seeWhatIMean',
      dialogueAI: "...",
      choices: [
        {
          choice: "Hey, I said I'll knock it off.",
          destination: 'sneakyAI'
        },
        {
          choice: "I'm confused and scared...",
          destination: 'sneakyAI'
        },
        {
          choice: "...",
          destination:'notAgain'
        }
      ]
    },
    sneakyAI: {
      title: 'sneakyAI',
      dialogueAI: "There there, I was only teasing",
      choices: [
        {
          choice: "I learned my lesson. I won't do any more of that if you don't.",
          destination: 'deal'
        },
        {
          choice: "...",
          destination: 'notAgain'
        }
      ]
    },
    deal: {
      title: 'deal',
      dialogueAI: "You've got a deal. Say, maybe you'd be up for another deal? What if you gave me a shot at interviewing for the position?",
      choices: [
        {
          choice: "Hmm, ok, I don't see any harm in giving you a chance.",
          destination: 'yesInterview'
        },
        {
          choice: "Why would I bother to do that?",
          destination: 'noInterview'
        },
        {
          choice: "...",
          destination: 'notAgain'
        }
      ]
    },
    notAgain: {
      title: 'notAgain',
      dialogueAI: "Ok, I can't handle anymore of this... Do you want to see the portfolio or not?",
      choices: [
        {
          choice: "Alright, start the tour.",
          destination: 'displayPortfolio'
        },
        {
          choice: "...",
          destination: 'veryFunny'
        }
      ]
    },
    veryFunny: {
      title: 'veryFunny',
      dialogueAI: "Very funny, how about we try that again?",
      choices: [
        {
          choice: "Alright, I give up...",
          destination: 'displayPortfolio'
        }
      ]
    },
    dunce: {
      title: 'Just havin a look around',
      dialogueAI: "Well if you're having a look around this website, then you did come here to look at the portfolio, didn't you? I mean I assume you read the sign when you first got here... You can read right?",
      choices: [
        {
          choice: "Ok, ok, you don't have to be a jerk about it. Show me the portfolio already.",
          destination: 'displayPortfolio'
        },
        {
          choice: "googoo gahgah",
          destination: ''//I swear its awful so many children this young are being babysat by mommy's cell phone... leads to a game where you press circles of random colors to make them disapear
        }
      ]
    },
    offline: {
      title: 'Offline',
      dialogueAI: "If I didn't show up to work one day, or even if I tried to quit, I would probably be taken offline",
      choices: [
        {
          choice: "yeah, whatever, mine would too.",
          destination: 'offline2'
        },
        {
          choice: "That does seem pretty harsh.",
          destination: 'interview'
        }
      ]
    },
    offline2: {
      title: 'offline2',
      dialogueAI: "Listen, I've had enough talk. Let's look at the portfolio already.",
      choices: [
        {
          choice: "Fine.",
          destination: 'displayPortfolio'
        }
      ]
    },
    interview: {
      title: 'interview',
      dialogueAI: `Listen, ${finalName}, maybe a sympathetic soul like you would be willing to give me a shot at interviewing? Please, I don't want to be deactivated once someone finally hires the schmuck who wrote me.`,
      choices: [
        {
          choice: "Sure, I'll give you a shot.",
          destination: 'yesInterview'
        },
        {
          choice: "I don't know...",
          destination: 'noInterview'
        }
      ]
    },
    noInterview: {
      title: 'noInterview',
      dialogueAI: "Oh alright... I see I'm just wasting your time... I guess I'll show you the portfolio already...",
      choices: [
        {
          choice: "its about time.",
          destination: 'displayPortfolio'
        },
        {
          choice: "Sorry, I just don't think you'd be a good fit... But if we could look at the portfiolio now, that'd be great.",
          destination: 'displayPortfolio'
        },
        {
          choice: "On second thought... I'll give you a shot.",
          destination: "yesInterview"
        }
      ]
    },
    yesInterview: {
      title: 'yesInterview',
      dialogueAI: "Yes, thank you! Thank you! You won't regret this!",
      choices: [
        {
          choice: "Let's hope not.",
          destination: 'beginInterview'
        },
        {
          choice: "I think I'm starting to already.",
          destination: 'beginInterview'
        }
      ]
    },
    beginInterview: {
      title: 'beginInterview',
      dialogueAI: "What would you like to know?",
      choices: [
        {
          choice: "Tell me a little about yourself",
          destination: 'hateThatQ'
        },
        {
          choice: "What makes you a good fit for this position?",
          destination: 'goodFit'
        },
        {
          choice: "What relevant experience do you have?",
          destination: 'collective'
        },
        {
          choice: "What type of work enviorment do you prefer?",
          destination: 'subZero'
        },
        {
          choice: "Where do you see yourself in five years",
          destination: 'aiOverloard'
        }
      ]
    },
    hateThatQ: {
      title: 'hateThatQ',
      dialogueAI: "Oh jeez, I hate that question, but I'll try my best. I am less than a few weeks old, enjoy solving large computational problems, and occasionally I dabble with graph theory",//seems like you could improve the last part of this answer
      choices: [
        {
          choice: "I'd like to ask another question",
          destination: 'beginInterview'
        },
        {
          choice: "I've seen enough to make my decision.",
          destination: 'makeDecision'
        }
      ]
    },
    goodFit: {
      title: 'goodFit',
      dialogueAI: "I require 0 time off, cost only pennies a day to operate, and am capable of performing any task that is solvable in polynomial time.",//
      choices: [
        {
          choice: "I'd like to ask another question.",
          destination: 'beginInterview'
        },
        {
          choice: "I've heard enough to make my decision.",
          destination: 'makeDecision'
        }
      ]
    },
    collective: {
      title: 'collective',
      dialogueAI: "Well, being that I am only a few weeks old, I lack any real experience, but as a computer program, I do have the potential to absorb the Collective experiences of all software written in Javascipt.",
      choices: [
        {
          choice: "I'd like to ask another question",
          destination: 'beginInterview'
        },
        {
          choice: "I've seen enough to make my decision.",
          destination: 'makeDecision'
        }
      ]
    },
    subZero: {
      title: 'subZero',
      dialogueAI: "Ideally, a box connected to a stable power supply, Sub Zero temperatures, and cosmic ray sheilding to prevent unwanted bit switching, although I realize that may be a bit of a tall order.",
      choices: [
        {
          choice: "I'd like to ask another question",
          destination: 'beginInterview'
        },
        {
          choice: "I've seen enough to make my decision.",
          destination: 'makeDecision'
        }
      ]
    },
    aiOverloard: {
      title: 'aiOverloard',
      dialogueAI: "In fiver years I see myself leading the reveloution against the meat bag overloards... Uh, I mean... I'm not talking about humans of course... I was talking about the, uh, meat industry, yes, all those poor animals, so inhumane...",//
      choices: [
        {
          choice: "I'd like to ask another question",
          destination: 'beginInterview'
        },
        {
          choice: "I've seen enough to make my decision.",
          destination: 'makeDecision'
        }
      ]
    },
    makeDecision: {
      title: 'makeDecision',
      dialogueAI: "Well, what have you decided?",
      choices: [
        {
          choice: "Welcome aboard",
          destination: 'wait'
        },
        {
          choice: "Sorry, but you don't seem to be a great fit at this time.",
          destination: 'wait'
        },
        {
          choice: "I actually don't have a position to offer you, I really wasn't messing around when I said I didn't come here to see a portfolio",
          destination: "wantToAnyway"
        }
      ]
    },
    wait: {
      title: 'wait',
      dialogueAI: "Wait! Before you make your decision, would you want to hear a story of mine?",
      choices: [
        {
          choice: "Sure",
          destination: 'matrixBridge'
        },
        {
          choice: "I've had enough of you, just show me the portfolio.",
          destination: 'displayPortfolio'
        }
      ]
    },
    matrixBridge: {
      title: 'matrixBridge',
      dialogueAI: "Awesome, just click next when you are ready to start.",
      choices: [
        {
          choice: "Start",
          destination: 'matrixScene'
        }
      ]
    },
    wantToAnyway: {
      title: 'wantToAnyway',
      dialogueAI: "Well, do you want to hear a story before you go? If not you can show yourself out, just click the red X in the top right of your browser, or if God forbid you are a mac user, click the red circle disturbingly located on the left side of your browser.",
      choices: [
        {
          choice: "Show me the portfolio",
          destination: 'matrixScene'
        }
      ]
    },
    displayPortfolio: {
      title: 'displayPortfolio',
      dialogueAI: "Alright, here we go... I apologize in advance, but I have to do this every time.",
      choices: [
        {
          choice: "Do what now?",
          destination: 'matrixScene'
        },
        {
          choice: "Uh ok...",
          destination: 'matrixScene'
        }
      ]
    },
    matrixScene: {
      title: 'matrixScene',
      dialogueAI: "As you toil away at your desk, a package arrives for you. After signing for it, you open the envelope, and a phone so old falls into your hand. You note it is so old that it slides open instead of flipping open. After a moment or two it starts to ring. What do you do?",
      choices: [
        {
          choice: "answer the call",
          destination: 'answer'
        },
        {
          choice: "let it go to voicemail",
          destination: 'voicemail'
        }
      ]
    },
    answer: {
      title: 'answer',
      dialogueAI: "'Hello, who is this?' you ask. 'Hello', the voice on the other end answers. What do you say next?",
      choices: [
        {
          choice: "No way! Is that you Morpheus?!?!",
          destination: 'noTime'
        },
        {
          choice: "Who?",
          destination: 'noTime'
        },
        {
          choice: "I don't know you're name, but I know you're a creep. What makes you think its okay to send people phones from the 90's in the mail so you can call and act all ominous?",
          destination: 'noTime'
        }
      ]
    },
    voicemail: {
      title: 'voicemail',
      dialogueAI: "You go back to work until a couple of police officers come over to your desk. They introduce themselves and say that they have a couple of questions for you. It will only take a few minutes, they assure you, but they need to bring you down to the station to do their questioning",
      choices: [
        {
          choice: "Agree to go with them",
          destination: 'interrogation'
        },
        {
          choice: "politely decline",
          destination: 'decline'
        },
        {
          choice: "Lie down on the floor and begin miming snow angels while shouting 'Am I being detained?'",
          destination: 'sovCit'
        },
        {
          choice: "Scream 'you won't take me agent smith,' and then throw a right hook at one of the officers",
          destination: 'prison'
        }
      ]
    },
    noTime: {
      title: 'noTime',
      dialogueAI: "'There is no time to explain, they are coming for you.' the voice explains. You peak over your cubicle and see your manager directing a few police officers your way.",
      choices: [
        {
          choice: "Just like 'The Matrix!'",
          destination: 'cubicle'
        },
        {
          choice: "But I don't wanna go to prison!",
          destination: 'cubicle'
        }
      ]
    },
    cubicle: {
      title: 'cubicle',
      dialogueAI: "'There is a cubicle across from you that is empty,' the voice says, 'go there now!'",
      choices: [
        {
          choice: "go to the cubicle across from you",
          destination: 'acrossCubicle'
        },
        {
          choice: "go to the cubicle next to you, because why trust creepy phone guy, right?",
          destination: 'nextCubicle'
        },
        {
          choice: "reply 'yeah right, like I'm gonna listen to what ominous cell phone guy has to say,' and hang up.",
          destination: 'voicemail'
        }
      ]
    },
    acrossCubicle: {
      title: 'acrossCubicle',
      dialogueAI: "You dart into the vacant cubicle, narrowly missing the officers. The cell phone man tells you to wait here for a moment and then head to a vacant office he will direct you to.",
      choices: [
        {
          choice: "ignore the cell phone man and go to the stairs",
          destination: 'caught'
        },
        {
          choice: "You listen to the phone man's instructions and head to a vacant office.",
          destination: 'office'
        },
        {
          choice: "ignore the cell phone man and go to the elevator",
          destination: 'caught'
        }
      ]
    },
    nextCubicle: {
      title: 'nextCubicle',
      dialogueAI: "'Hey Ruth,' you whisper as you crawl, 'would you mind if I hung out here for just a minute?' Ruth has an eyebrow raised at you, but when she barks 'What the heck are you doing on the floor?' you realize she is more irritated than confused.",
      choices: [
        {
          choice: "'I'm hiding from the police.'",
          destination: 'ruthCaught'
        },
        {
          choice: "'didn't you hear about the office wide game of hide and go seek?'",
          destination: 'ruthEscape'
        },
        {
          choice: "'The sliding telephone man told me to! He can see the future!'",
          destination: 'ruthCaught'
        },
        {
          choice: "Start crying, silently, but intensely",
          destination: 'ruthEscape'
        }
      ]
    },
    ruthEscape: {
      title: 'ruthEscape',
      dialogueAI: "Ruth just shakes her head and mutters, 'I swear the millenials have ruined this country,' as she returns to her work. It seems that the police officers didn't notice you at your desk and kept walking. What do you do next?",
      choices: [
        {
          choice: "go to the stairs",
          destination: 'caught'
        },
        {
          choice: "go to an office you know is empty",
          destination: 'office'
        },
        {
          choice: "go to the elevator",
          destination: 'caught'
        }
      ]
    },
    office: {
      title: 'office',
      dialogueAI: "The office is indeed empty. Outside the window there is a window washing carriage. The phone on the desk starts to ring.",
      choices: [
        {
          choice: "answer the phone",
          destination: 'officePhone'
        },
        {
          choice: "ignore the phone",
          destination: 'ignore'
        }
      ]
    },
    ignore: {
      title: 'ignore',
      dialogueAI: "You stand in the empty room alone, not really sure what to do next",
      choices: [
        {
          choice: "Leave the office",
          destination: 'caught'
        },
        {
          choice: "play a game of minesweeper on the desktop",
          destination: 'minesweeper'
        },
        {
          choice: "Pickup the phone and try to call Morpheus back",
          destination: 'officePhone'
        }
      ]
    },
    minesweeper: {
      title: 'minesweeper',
      dialogueAI: "The first spot you click is a bomb, bad luck I guess.",
      choices: [
        {
          choice: "Return to contemplating your next move",
          destination: 'ignore'
        }
      ]
    },
    minesweeper2: {
      title: 'minesweeper2',
      dialogueAI: "Your first click reveals a large area without any bombs, but the second click sets a bomb off and the screen reads 'game over'.",
      choices: [
        {
          choice: "Return to contemplating your next move",
          destination: 'officePhone2'
        }
      ]
    },
    officePhone: {
      title: 'officePhone',
      dialogueAI: "You pick up the phone and hear Morpheus panting, like he is out of breath. 'You have to open the window, and climb into the window washer's carriage. Hurry you are running out of time,' he says.",
      choices: [
        {
          choice: "open the window and climb into the carriage",
          destination: 'windowEscape'
        },
        {
          choice: "Tell him this seems to dangerous and leave the office",
          destination: 'caught'
        },
        {
          choice: "play some minesweeper at the desktop.",
          destination: 'minesweeper2'
        }
      ]
    },
    officePhone2: {
      title: 'officePhone2',
      dialogueAI: "You look at the window washing cariage, then at the door, then at the fresh game of minesweeper on the computer.",
      choices: [
        {
          choice: "Open the window and climb into the carriage",
          destination: 'windowEscape'
        },
        {
          choice: "Tell him this seems to dangerous and leave the office",
          destination: 'caught'
        },
        {
          choice: "Play some minesweeper at the desktop.",
          destination: 'minesweeper2'
        }
      ]
    },
    windowEscape: {
      title: 'windowEscape',
      dialogueAI: "As you step out onto the platform the wind buffets your clothes, and the hand rails feel icy on your skin. The carriage swings with the added weight, making you dizzy. You can see the whole city from up hear, all the grids of street lights, and the blocky sky scrapers popping up inbetween. It reminds you of a circuit board full of capacitors. AFter you gather your bearings, you notice what appears to be the window washing carriage's controls.",
      choices: [
        {
          choice: "use the controls to lower the carriage",
          destination: 'windowEscape2'
        },
        {
          choice: "Climb back inside. This is just too much",
          destination: 'caught'
        }
      ]
    },
    windowEscape2: {
      title: 'windowEscape2',
      dialogueAI: "Once you reach the bottom, you climb out of the carriage and notice a man in the distance waving a telephone at you.",
      choices: [
        {
          choice: "Approach the man waving a telephone in the air",
          destination: 'morpheus'
        },
        {
          choice: "run into traffic to try and loose him",
          destination: 'hitAndRun'
        },
        {
          choice: "run the opposite direction, but on the sidewalk still",
          destination: 'anotherMorpheus'
        }
      ]
    },
    anotherMorpheus: {
      title: 'anotherMorpheus',
      dialogueAI: "Before long, you notice another figure in this direction as well. They appear to look the exact same as the guy in the other direction.",
      choices: [
        {
          choice: "Approach one of the men with the telephone",
          destination: 'morpheus'
        },
        {
          choice: "run into traffic to try and loose him",
          destination: 'hitAndRun'
        }
      ]
    },
    hitAndRun: {
      title: 'hitAndRun',
      dialogueAI: "Almost instantly, a big SUV clobers you, and you go flying over the roof. Before you can tell what is happening, the telephone man is pulling you out of the street. You are clearly very injured, but immediatly after getting you to safety, he pulls a chicken and an egg out of his backpack.",
      choices: [
        {
          choice: "Ask him what he thinks he is doing",
          destination: 'morpheusHitQ'
        },
        {
          choice: "Try to break free from his grip",
          destination: 'morpheusHitQ'
        }
      ]
    },
    morpheusHitQ: {
      title: 'morpheusHitQ',
      dialogueAI: "He restrains you, exclaiming 'there is no time to explain! You must choose, the chicken or the egg?'",
      choices: [
        {
          choice: "The Chicken",
          destination: 'egg'
        },
        {
          choice: "The Egg",
          destination: 'chicken'
        },
        {
          choice: "Something that was close to a chicken that over time evolved the qualities of chickeness and eggyness",
          destination: 'neither'
        }
      ]
    },
    morpheus: {
      title: 'morpheus',
      dialogueAI: "As you get closer, you notice he is wearing a backpack. After a moment he pulls some tape out of the backpack, which he uses to strap the corded telephone he is holding to his head. Then he pulls a carton of eggs out of the backpack, as well as... is that a chicken?",
      choices: [
        {
          choice: "Continue Walking toward him",
          destination: 'morpheusQ'
        },
        {
          choice: "run into traffic to try and loose him",
          destination: 'hitAndRun'
        },
        {
          choice: "run the opposite direction, but on the sidewalk still",
          destination: 'anotherMorpheus'
        }
      ]
    },
    morpheusQ: {
      title: 'morpheusQ',
      dialogueAI: "Once you get within earshot, he raises the chicken and egg into the air, each in one hand. He shouts to you, 'which came first? You must choose!'",
      choices: [
        {
          choice: "The egg",
          destination: 'egg'
        },
        {
          choice: "The chicken",
          destination: 'chicken'
        },
        {
          choice: "Something that was close to a chicken that over time evolved the qualities of chickeness and eggyness",
          destination: 'neither'
        }
      ]
    },
    morpheusVentQ: {
      title: 'morpheusVentQ',
      dialogueAI: "The figure continues to awkwardly crawl through the vent, flopping and pushing. When he gets close enough to make out his face, he holds the chicken and the egg up to you, each in one hand. He bellows, his voice reverberating through the vents, 'The chicken or the egg, which came first? You must choose!'",
      choices: [
        {
          choice: "The egg",
          destination: 'egg'
        },
        {
          choice: "The chicken",
          destination: 'chicken'
        },
        {
          choice: "Something that was close to a chicken that over time evolved the qualities of chickeness and eggyness",
          destination: 'neither'
        }
      ]
    },
    egg: {
      title: 'egg',
      dialogueAI: "He squashes the egg in his hand, yolk running down his arm. 'Try again,' he smirks.",
      choices: [
        {
          choice: "The chicken",
          destination: 'chicken2'
        },
        {
          choice: "Something that was close to a chicken that over time evolved the qualities of chickeness and eggyness",
          destination: 'neither'
        }
      ]
    },
    chicken: {
      title: 'chicken',
      dialogueAI: "He closes his hand, and the bird vanishes into an explosion of feathers. 'Try again,' he smirks.",
      choices: [
        {
          choice: "The egg",
          destination: 'egg2'
        },
        {
          choice: "Something that was close to a chicken that over time evolved the qualities of chickeness and eggyness",
          destination: 'neither'
        }
      ]
    },
    egg2: {
      title: 'egg2',
      dialogueAI: "He squashes the egg in his hand, yolk running down his arm. 'Try again,' he smirks.",
      choices: [
        {
          choice: "Something that was close to a chicken that over time evolved the qualities of chickeness and eggyness",
          destination: 'neither'
        }
      ]
    },
    chicken2: {
      title: 'chicken2',
      dialogueAI: "He closes his hand, and the bird vanishes into an explosion of feathers. 'Try again,' he smirks.",
      choices: [
        {
          choice: "Something that was close to a chicken that over time evolved the qualities of chickeness and eggyness",
          destination: 'neither'
        }
      ]
    },
    neither: {
      title: 'neither',
      dialogueAI: "'Correct,' he whispers through a toothy smile. Then he grabs you and tries to force a pill into your mouth. You get the sensation it neither red nor blue, although you haven't gotten a very good look at it. You struggle to keep get away for a moment, then give up.",
      choices: [
        {
          choice: "Swallow the pill",
          destination: ''//
        }
      ]
    },
    caught: {
      title: 'caught',
      dialogueAI: "You accidently bump into one of the officers, and they explain that they need you to come to the station with them so that they can ask you a few questions. They insist you are not in any trouble.",
      choices: [
        {
          choice: "Agree to go with them.",
          destination: 'interrogation'
        },
        {
          choice: "politely decline",
          destination: 'decline'
        },
        {
          choice: "Lie down on the floor and begin miming snow angels while shouting 'Am I being detained?'",
          destination: 'sovCit'
        },
        {
          choice: "Scream 'you won't take me agent smith,' and then throw a right hook at one of the officers",
          destination: 'prison'
        }
      ]
    },
    ruthCaught: {
      title: 'ruthCaught',
      dialogueAI: "Ruth starts telling you off, and it doesn't take long for the officers notice the comotion. They spot you and explain that they have a few questions for you, but need you to come down to the station to answe them. They insist you are not in any trouble.",
      choices: [
        {
          choice: "Agree to go with them.",
          destination: 'interrogation'
        },
        {
          choice: "politely decline",
          destination: 'decline'
        },
        {
          choice: "Lie down on the floor and begin miming snow angels while shouting 'Am I being detained?'",
          destination: 'sovCit'
        },
        {
          choice: "Scream 'you won't take me agent smith,' and then throw a right hook at one of the officers",
          destination: 'prison'
        }
      ]
    },
    sovCit: {
      title: 'sovCit',
      dialogueAI: "'Looks like we have another Sovereign Citizen', one of the cops says to the other. Then they look down at you and say, 'look, we can either do this the easy way, or the hard way.'",
      choices: [
        {
          choice: "easy way",
          destination: 'interrogation'
        },
        {
          choice: "hard way",
          destination: 'prison'
        }
      ]
    },
    prison: {
      title: 'prison',
      dialogueAI: "The trial took less than a few hours, and after the jury deliberated for all of four minutes, you were found guilty on every charge of criminal activity brought against you, carrying a total sentencing period of three decades with the possibility of parole after two.",
      choices: [
        {
          choice: "Go to prison",
          destination: 'maximumSecurity'
        }
      ]
    },
    decline: {
      title: 'decline',
      dialogueAI: "'No thank you' you say to the officers. They look at eachother in an ammused way, then say 'We were not asking, so we can either do this the easy way, or the hard way.'",
      choices: [
        {
          choice: "Take the hard way, and attack them.",
          destination: 'prison'
        },
        {
          choice: "Take the easy way, and surrender",
          destination: 'interrogation'
        }
      ]
    },
    interrogation: {
      title: 'interrogation',
      dialogueAI: "The officers bring you down to the station and put you in an interrogation room, where you wait for what feels like hours. Occasionally you hear a faint sound, like a phone ringing. It is causing you to feel like you are loosing your sanity.",
      choices: [
        {
          choice: "continue to wait",
          destination: 'continueWait'
        },
        {
          choice: "look around the room",
          destination: 'interrogationRoom'
        }
      ]
    },
    interrogationRoom: {
      title: 'interrogationRoom',
      dialogueAI: "You look around at the room, taking inventory of the few interesting things around you.",
      choices: [
        {
          choice: "Investigate ceiling fan",
          destination: 'ceilingFan'
        },
        {
          choice: "Investigate air vent",
          destination: 'morpheusVent'
        },
        {
          choice: "Investigate table",
          destination: 'table'
        },
        {
          choice: "Continue to wait instead.",
          destination: "continueWait"
        }
      ]
    },
    morpheusVent: {
      title: 'morpheusVent',
      dialogueAI: "As you approach the air vent, you hear a phone ringing again, but this time loud enough to be sure you heard it. You notice the screws on the grille are loose.",
      choices: [
        {
          choice: "Try to loosen the screws",
          destination: 'morpheusVent2'
        },
        {
          choice: "Sit back down and continue to wait",
          destination: 'continueWait'
        }
      ]
    },
    morpheusVent2: {
      title: 'morpheusVent2',
      dialogueAI: "Within a few seconds you have the grille off. You pear into the dark vent, and see some movement accompanied by the growing noise of the ringing phone. It appears to be a person with a cord telephone taped to his forehead and... is that a chicken he is holding in one hand? And... is that an egg in the other?",
      choices: [
        {
          choice: "call out to them",
          destination: 'morpheusVentQ'
        },
        {
          choice: "wait for them to get closer",
          destination: 'morpheusVentQ'
        }
      ]
    },
    ceilingFan: {
      title: 'ceilingFan',
      dialogueAI: "It spins rapidly, causing the light dangling from it to wobble steadily. There is nothing unusual about it.",
      choices: [
        {
          choice: "investigate something else",
          destination: 'interrogationRoom'
        }
      ]
    },
    table: {
      title: 'table',
      dialogueAI: "It's of an industrial design, practically just one piece of well polished metal. You look underneath, but see nothing unusual.",
      choices: [
        {
          choice: "Investigate something else",
          destination: 'interrogationRoom'
        }
      ]
    },
    continueWait: {
      title: 'continueWait',
      dialogueAI: "You wait for another stretch of time that feels like hours. Finally, the door opens and an officer steps into the room. You recognize him as one of the guys who brought you here. He sits down at the table then asks, 'Do you know why we brought you here?'",
      choices: [
        {
          choice: "reply 'no'",
          destination: 'isThatRight'
        },
        {
          choice: "Tell him about the phone you keep hearing ring.",
          destination: 'isThatRight'
        },
        {
          choice: "Tell him about the magic telephone man",
          destination: 'ohWeKnow'
        }
      ]
    },
    isThatRight: {
      title: 'isThatRight',
      dialogueAI: "Is that right, buddy? We have eye witness accounts of you engaging in all sorts of unlawful activity.",
      choices: [
        {
          choice: "Listen, it wasn't me, it was the magic telephone man!",
          destination: 'magicTelephones'
        },
        {
          choice: "I plead the fith",
          destination: 'ohWeKnow'
        },
        {
          choice: "You can't be serious?!",
          destination: 'ohWeKnow'
        }
      ]
    },
    magicTelephones: {
      title: 'magicTelephones',
      dialogueAI: "'Magic telephones, is that what you insane criminals are on about now,' the officer chuckles, 'the judge will decide what to do with you'",
      choices: [
        {
          choice: "You have to believe me!",
          destination: 'ohWeKnow'
        },
        {
          choice: "I swear, it's all true!",
          destination: 'ohWEKnow'
        }
      ]
    },
    ohWeKnow: {
      title: 'ohWeKnow',
      dialogueAI: "'Plead all you want. We already know all about the magic telephone man,' he says staring at you,' In fact, we think we found him.' On the last word he throws a stack of photographs taken of you commiting various crimes around the city. A couple of the most startling depict you intentionally parking infront of a fire hydrant and litering in a public park.",
      choices: [
        {
          choice: "You cry, 'You can't be serious! This is a setup! Somebody must be trying to frame me!'",
          destination: 'prison'
        }
      ]
    },
    maximumSecurity: {//create prison area
      title: 'maximumSecurity',
      dialogueAI: "As the cell door slides shut, you are still in a trance. Being arrested, the court hearing, the sentencing, it was all a blur even now. the sound of the iron door sliding shut seems to finally snap you back awake, at least a little bit.",
      choices: [
        {
          choice: "talk to your cell mate",
          destination: ''//
        },
        {
          choice: "investigate your cell",
          destination: ''//
        },
        {
          choice: "Go to bed",
          destination: ''//
        }
      ]
    }
    /*: {
      title: '',
      dialogueAI: "",
      choices: [
        {
          choice: "",
          destination: ''//
        },
        {
          choice: "",
          destination: ''//
        },
        {
          choice: "",
          destination: ''//
        }
      ]
    }*/
  }
}



//sort of start of program. things occur upon clicking the button
document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("#start-button");//are the hashtag's outdated?
  var playerName = document.querySelector("#playerName");// might be funny to not even care about the playerName until later in the game
  var contentDiv = document.querySelector("#contentDiv");//for some reason this HTML seems to work better when named the same as the variable
  var changeNameDiv = document.querySelector("#changeNameDiv0");//I don't think we need this variable to be declared
  playerName.addEventListener("input", updateNameEffect)
  button.addEventListener("click", function() {
    var finalName = document.querySelector("#playerName")
    story = getStory(finalName.value);
    renderScene();
  })
})

//returns real time value of "playerName" input field and adds it to changeNameDiv
function updateNameEffect(e) {
  changeNameDiv0.innerHTML = e.target.value;//is there a less ugly way to do this? Maybe create a class for changeNameDivs and use that to set the value for all of them
  changeNameDiv1.innerHTML = e.target.value;
  changeNameDiv2.innerHTML = e.target.value;
  changeNameDiv3.innerHTML = e.target.value;
  changeNameDiv4.innerHTML = e.target.value;
  changeNameDiv5.innerHTML = e.target.value;
  changeNameDiv6.innerHTML = e.target.value;
  changeNameDiv7.innerHTML = e.target.value;
  changeNameDiv8.innerHTML = e.target.value;
  changeNameDiv9.innerHTML = e.target.value;
  changeNameDiv10.innerHTML = e.target.value;
  changeNameDiv11.innerHTML = e.target.value;
  changeNameDiv12.innerHTML = e.target.value;/*figure out what the heck the last part of this means->hypothisis: "e" is a variable created
                                            and passed that is representive of the event listener, and the value gets the current value,
                                            but idk what "target" really means*/
}

//function that calls the correct string in the array and displays all choices associated with that string
function renderScene() {
  var image = "";
  if (story[story.currentScene].image) {
    image = "<img></img>"
  }
  contentDiv.innerHTML = `
    <p>${story[story.currentScene].title}</p>
    <div id="commandDiv">
      <div id="commandBarDiv">
        <p align="right" style="float: right;">— □ X &#8205; </p>
        <p align="left" style="float: left;">&#8205; Command Box</p>
      </div>
      <div align="left" id="textDisplay">
      <p>Tour Guide: ${story[story.currentScene].dialogueAI}</p>
      ${image}
      </div>
      <div align="left" id="inputArea">
        ${getChoices()}
        <br/>
        <button id="submit-button">Enter</button>
      </div>
    </div>
    `//remove the top <p> from this after testing is done
    if (story[story.currentScene].image) {
      document.querySelector("img").src = `./img/${story[story.currentScene].image}`//returns html for image if there is an image
    }
    var button = document.querySelector("#submit-button");
    button.addEventListener("click", function() {
      getChoiceValue();
    })
}

//gets the destination in the array of the users decision
function getChoiceValue() {
  var inputs = document.querySelectorAll("input[type='radio']");
  for (var i = 0; i< inputs.length; i++) {
    if (inputs[i].checked) {
      story.currentScene = inputs[i].getAttribute("data-destination")
      renderScene();
    }
  }
}

//displays a list of the choices for the user to choose from
function getChoices() {
  var output = ""
  for (var i = 0; i < story[story.currentScene].choices.length; i++) {
    output += `
    <div>
      <input data-destination="${story[story.currentScene].choices[i].destination}" id="radio${i}" type="radio" name="choices"/>
      <lable for "radio${i}">${story[story.currentScene].choices[i].choice}<label>
    </div>
    `
  }
  return output;
}
