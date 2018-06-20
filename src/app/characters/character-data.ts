import { CharacterTemplate } from './character-template';

export const CHARACTERS: CharacterTemplate[] = [
    {
        id: 'ana',
        name: 'Ana',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Support',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Biotic Rifle',
                    description: 'Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Sleep Dart',
                    description: 'Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Biotic Grenade',
                    description: 'Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Nano Boost',
                    description: 'After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 3,
            description: 'Ana’s versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.'
        },
        story: {
            biography: {
                realName: 'Ana Amari',
                age: '60',
                occupation: 'Bounty Hunter',
                baseOfOperations: 'Cairo, Egypt',
                affiliation: 'Overwatch (formerly)'
            },
            quote: 'Everyone must find their cause.',
            backStory: '<p>One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for.</p><p>As the Omnic Crisis inflicted a heavy toll on Egypt, the country\'s depleted and undermanned security forces relied on elite snipers for support. Among them was Ana Amari, who was widely considered to be the world\'s best. Her superior marksmanship, decision-making, and instincts made her a natural selection to join the Overwatch strike team that would end the war.</p><p>Following the success of Overwatch\'s original mission, Ana served for many years as Strike Commander Morrison\'s second-in-command. Despite her responsibilities in leading the organization, Ana refused to step away from combat operations. She remained on active duty well into her fifties, until she was believed to have been killed during a hostage rescue mission by the Talon operative known as Widowmaker.</p><p>In truth, Ana survived that encounter, despite being gravely wounded and losing her right eye. During her recovery, she wrestled with the weight of a life spent in combat, and she chose to stay out of the world\'s growing conflicts. However, as time passed, she realized she could not sit on the sidelines while people threatened her city and the innocents around her.</p><p>Now, Ana has rejoined the fight to protect her country from the forces that would destabilize it, and most importantly, to keep her family and her closest allies safe.</p>'
        }
    },
    {
        id: 'bastion',
        name: 'Bastion',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Defense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Configuration: Recon',
                    description: 'In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.',
                    icon: '',
                    type: 'Combat Mode'
                },
                {
                    name: 'Configuration: Sentry',
                    description: 'In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun\'s aim can be "walked" across multiple targets, dealing devastating damage at short to medium range.',
                    icon: '',
                    type: 'Combat Mode'
                },
                {
                    name: 'Reconfigure',
                    description: 'Bastion transforms between its two primary combat modes to adapt to battlefield conditions.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Self-Repair',
                    description: 'Bastion restores its health; it cannot fire weapons while the repair process is in effect.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Ironclad',
                    description: 'Reduces damage taken while transformed.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Configuration: Tank',
                    description: 'In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.'
        },
        story: {
            biography: {
                realName: 'SST Laboratories Siege Automaton E54, "Bastion"',
                age: '30',
                occupation: 'Battle Automaton',
                baseOfOperations: 'Unknown',
                affiliation: 'None'
            },
            quote: '',
            backStory: '<p>Once a frontline combatant in the devastating Omnic Crisis, this curious Bastion unit now explores the world, fascinated by nature but wary of a fearful humanity.</p><p>Originally created for peacekeeping purposes, Bastion robot units possessed the unique ability to rapidly reconfigure themselves into an assault-cannon mode. But during the Omnic Crisis, they were turned against their human makers, forming the bulk of the omnics\' rebel army. Following the resolution of the crisis, nearly all of them were destroyed or disassembled. To this day, Bastion units still symbolize the horrors of the conflict.</p><p>One unique Bastion unit, severely damaged in the final battles of the war, was left forgotten for over a decade. It lay dormant, exposed to the elements and rusting while nature slowly reclaimed it. Overgrown with vines and roots and nested upon by small animals, the robot sat inert, seemingly unaware of the passing of time. That was until one fateful day, when it unexpectedly reactivated. With its combat programming all but lost, it instead displayed an intense curiosity about the natural world and its inhabitants. This inquisitive Bastion unit set out to explore its surroundings and discover its purpose on a war-ravaged planet.</p><p>Though "Bastion" appears to be gentle—even harmless, at times—its core combat programming takes over when the unit senses danger, utilizing its entire arsenal to eliminate anything it perceives as a threat. This has led to instances of conflict with the few humans it has encountered, and has driven it to avoid populated areas in favor of the wild, uncharted regions of the world.</p>'
        }
    },
    {
        id: 'brigitte',
        name: 'Brigitte',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Support',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Rocket Flail',
                    description: 'Brigitte\'s melee weapon has an extended range, enabling her to strike multiple enemies with a single swing.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Repair Pack',
                    description: 'Brigitte throws a Repair Pack that can heal an ally. Any healing over that ally’s maximum health provides them with armor instead.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Whip Shot',
                    description: 'Brigitte throws her flail a long distance, dealing damage and knocking an enemy away from her.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Barrier Shield',
                    description: 'Brigitte deploys a frontal energy barrier to absorb a limited amount of damage.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Shield Bash',
                    description: 'Once her Barrier Shield is deployed, Brigitte can dash forward to stun an enemy.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Inspire',
                    description: 'When Brigitte strikes an enemy with her flail, all allies within range are healed over time.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Rally',
                    description: 'Brigitte moves faster and provides all nearby allies with armor that lasts until it’s removed by damage.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Brigitte specializes in armor. She can throw Repair Packs to heal teammates, or automatically heal nearby allies when she damages foes with her Flail. Her Flail is capable of a wide swing to strike multiple targets, or a Whip Shot that stuns an enemy at range. When entering the fray, Barrier Shield provides personal defense while she attacks enemies with Shield Bash. Brigitte’s ultimate ability, Rally, gives her a substantial short-term boost of speed and provides long-lasting armor to all her nearby allies.'
        },
        story: {
            biography: {
                realName: 'Brigitte Lindholm',
                age: '23',
                occupation: 'Mechanical Engineer, Adventurer',
                baseOfOperations: 'Gothenburg, Sweden (formerly)',
                affiliation: 'None'
            },
            quote: 'I will prove myself!',
            backStory: '<p>No longer sitting on the sidelines, Brigitte Lindholm has taken up arms to defend those in need of protection.</p><p>The youngest daughter of weapons designer, Torbjörn Lindholm, Brigitte was the first of his children to show an interest in mechanical engineering. Brigitte spent much of her spare time in her father\'s workshop, learning the trade and honing her skills. Her aptitude for engineering mirrored that of her father\'s, but Brigitte\'s primary interest was in armor fabrication and defensive systems, unlike Torbjörn, who was world renowned (and perhaps infamous) for the weapons he created.</p><p>Everyone expected that Brigitte would continue her apprenticeship and follow in her father\'s footsteps. But her plans changed due to influence of another prominent figure in her life, her father\'s close friend and fellow Overwatch agent, Reinhardt Wilhelm. A close friend of the family and Brigitte\'s godfather, Reinhardt told Brigitte tales of heroes and chivalry as she grew up. After his retirement and Overwatch\'s fall, Reinhardt declared that he would become a knight-errant on a quest to bring justice. Before he left on his adventures, Brigitte surprised him by asking to join him as his squire. Reinhardt accepted.</p><p>As a squire, Brigitte had many responsibilities, the most important of which was the upkeep of Reinhardt\'s Crusader armor (a design she was familiar with as the current version was designed by her father). But more and more, she found her main job was taking care of Reinhardt himself, trying to protect him from his overenthusiasm even as his body was breaking down from years of combat.</p><p>Eventually, she realized that serving only as a mechanic wasn\'t enough, and that the best way she could aid Reinhardt was to become a warrior in her own right. While Reinhardt trained her in combat, Brigitte began to build her own suit of armor in secret.</p><p>Now Brigitte fights at Reinhardt\'s side to protect him, and any others in need as knight and squire journey to make the world a better place, one battle at a time.</p>'
        }
    },
    {
        id: 'dva',
        name: 'D.Va',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Tank',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Fusion Cannons',
                    description: 'D.Va\'s mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Boosters',
                    description: 'D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Defense Matrix',
                    description: 'D.Va can maintain this forward-facing targeting array for a short period of time; while active, it\'ll stop incoming projectiles.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Micro Missiles',
                    description: 'D.Va launches a volley of explosive rockets.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Self-Destruct',
                    description: 'D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents.',
                    icon: '',
                    type: 'Ultimate'
                },
                {
                    name: 'Light Gun',
                    description: 'While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Call Mech',
                    description: 'If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 2,
            description: 'D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.'
        },
        story: {
            biography: {
                realName: 'Hana Song',
                age: '19',
                occupation: 'Pro Gamer (formerly), Mech Pilot',
                baseOfOperations: 'Busan, South Korea',
                affiliation: 'Mobile Exo-Force of the Korean Army'
            },
            quote: 'I play to win.',
            backStory: '<p>D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland.</p><p>Twenty years ago, South Korea was attacked by a colossal omnic monstrosity that rose from the depths of the East China Sea. The massive, lumbering construct caused catastrophic damage to coastal cities before it was driven back beneath the waves. In response, the South Korean government developed a mechanized armored drone unit, called MEKA, to protect urban environments in future engagements with the omnic threat.</p><p>The government\'s fears proved to be well founded, as a disturbing pattern of attacks emerged. Every few years, the monstrosity would rise from the sea to assault South Korea and its neighbors. The omnic learned from these encounters, often reconfiguring itself in a different form and appearing with new weapons and capabilities. Each incident ended in a stalemate, with the monstrosity defeated but not destroyed.</p><p>As the omnic continued to adapt, it eventually disrupted MEKA\'s drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country\'s professional gamers, who possessed the necessary reflexes and instincts to operate the mechs\' advanced weapons systems. Top stars were drafted, including reigning world champion Hana Song, also known as "D.Va". Famous for her elite skills, D.Va was a fierce competitor who played to win at all costs, and she had a well-earned reputation for showing no mercy to her opponents.</p><p>Seeing her new mission as a game, D.Va fearlessly charges into battle alongside the rest of her MEKA unit, ready to spring to her nation\'s defense at a moment\'s notice. Recently, she has begun to stream combat operations to her adoring fans, and her growing following has turned her into a global icon.</p>'
        }
    },
    {
        id: 'doomfist',
        name: 'Doomfist',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Offense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Hand Cannon',
                    description: 'Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Seismic Slam',
                    description: 'Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Rising Uppercut',
                    description: 'Doomfist uppercuts enemies in front of him into the air.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Rocket Punch',
                    description: 'After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'The Best Defense...',
                    description: 'Doomfist generates temporary personal shields when he deals ability damage.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Meteor Strike',
                    description: 'Doomfist leaps into the sky, then crashes to the ground, dealing significant damage.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 3,
            description: 'Doomfist’s cybernetics make him a highly-mobile, powerful frontline fighter. In addition to dealing ranged damage with his Hand Cannon, Doomfist can slam the ground, knock enemies into the air and off balance, or charge into the fray with his Rocket Punch. When facing a tightly packed group, Doomfist leaps out of view, then crashes down to earth with a spectacular Meteor Strike.'
        },
        story: {
            biography: {
                realName: 'Akande Ogundimu',
                age: '45',
                occupation: 'Mercenary',
                baseOfOperations: 'Oyo, Nigeria',
                affiliation: 'Talon'
            },
            quote: 'Only through conflict do we evolve.',
            backStory: '<p>Recently freed from imprisonment, Doomfist is determined to plunge the world into a new conflict that he believes will make humanity stronger.</p><p>Akande Ogundimu was born into a well-regarded Nigerian family, heir to its prosthetic-technology company. A highly intelligent and charismatic figure, Ogundimu helped to expand his family\'s business and position it for the future while dedicating his free time to his first love: competitive martial arts. He trained in traditional African fighting styles, including Dambe and Gidigbo, as well as in wrestling and other modern combat systems, incorporating the most effective techniques into his repertoire. Ogundimu competed in tournaments all over the continent, utilizing his intuition and ability to read opponents alongside his tremendous speed and strength.</p><p>But when he lost his right arm in the aftermath of the Omnic Crisis, it seemed his martial arts career was finished before he had reached his prime. His company\'s cybernetic prosthetics allowed him to recover from his injuries, even making him stronger, but these enhancements rendered him ineligible for competition. He tried to devote himself to his business with the same zeal that he had for fighting, but he found nothing that could fill the void… until he was given a new opportunity by Akinjide Adeyemi, better known to the world as the second Doomfist, the Scourge of Numbani.</p><p>Adeyemi offered Ogundimu the chance to fight with him as a mercenary. Initially wary, Ogundimu accepted, and discovered that he now had an arena in which he could unleash his enhanced capabilities. Eventually, Adeyemi brought him into the Talon organization. Talon\'s belief that humanity would be made stronger through conflict resonated with Ogundimu\'s personal experiences. Moreover, Talon\'s power struggles presented a new challenge that allowed him to use his talent in the boardroom along with his cunning as a combatant.</p><p>Adeyemi was a useful asset to Talon, but the organization saw far greater potential in Ogundimu, with his intelligence and his ability to inspire as a commander. While Adeyemi was content to profit from raids on Numbani, Ogundimu had a grander vision. This difference in aspiration would lead Ogundimu to kill his teacher and take on the mantle of Doomfist, along with the eponymous gauntlet.</p><p>As the new Doomfist, Ogundimu rose high in Talon and helped to orchestrate a conflict that the organization hoped would someday engulf the world. However, before their plan came to fruition, Ogundimu was defeated and captured by an Overwatch strike team that included Tracer, Winston, and Genji. He was imprisoned in a maximum-security facility for years, where he waited patiently for events he had incited to play out.</p><p>Finally, he sensed that the time had come for him to return. He broke out of his prison and recovered Doomfist\'s gauntlet in a one-sided battle with Numbani\'s newly unveiled OR15 defense robots. Now, he has retaken his place in Talon\'s inner council, ready to spark a war that will consume the world once again.</p>'
        }
    },
    {
        id: 'genji',
        name: 'Genji',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Offense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Shuriken',
                    description: 'Genji looses three deadly throwing stars in quick succession. Alternatively, he can throw three shuriken in a wider spread.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Deflect',
                    description: 'With lightning-quick swipes of his sword, Genji reflects an oncoming projectile and sends it rebounding towards his opponent.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Swift Strike',
                    description: 'Genji darts forward, slashing with his katana and passing through foes in his path. If Genji eliminates a target, he can instantly use this ability again.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Cyber-Agility',
                    description: 'Thanks to his cybernetic abilities, Genji can climb walls and perform jumps in mid-air.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Dragonblade',
                    description: 'Genji brandishes his katana for a brief period of time. Until he sheathes his sword, Genji can deliver killing strikes to any targets within his reach.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 3,
            description: 'Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies.'
        },
        story: {
            biography: {
                realName: 'Genji Shimada',
                age: '35',
                occupation: 'Adventurer',
                baseOfOperations: 'Shambali Monastery, Nepal',
                affiliation: 'Shimada Clan (formerly), Overwatch (formerly)'
            },
            quote: 'Even if I sacrifice my body, I will never sacrifice my honor.',
            backStory: '<p>The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity.</p><p>As the youngest son of the master of the Shimada ninja clan, Genji lived a life of luxury and privilege. He had little interest in the family\'s illegal businesses, and although he excelled at and enjoyed his ninja training, he spent most of his time pursuing a playboy lifestyle. Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader\'s untimely death, Genji\'s older brother, Hanzo, demanded that Genji take a more active role in their late father\'s empire. Genji refused, enraging Hanzo. The tension between the brothers built to a violent confrontation that left Genji on the verge of dying.</p><p>Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan. As Genji\'s injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills. Transformed into a living weapon, Genji single-mindedly set about the task of dismantling his family\'s criminal empire.</p><p>But as time passed, Genji felt increasingly at war with himself. He was repulsed by the mechanical parts of his body and could not come to grips with what he had become. When his mission was complete, he abandoned Overwatch and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. Though Genji initially rejected Zenyatta\'s wisdom, the benevolent omnic would not be deterred. In time, Zenyatta became his mentor, and under the monk\'s tutelage, Genji reconciled his dual existence as both man and machine. He learned to accept that although he had a cyborg body, his human soul was intact, and he came to see his new form as a gift and a unique strength.</p><p>Now, for the first time in his life, Genji is free. Even he cannot say where his path will ultimately lead.</p>'
        }
    },
    {
        id: 'hanzo',
        name: 'Hanzo',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Defense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Storm Bow',
                    description: 'Hanzo nocks and fires an arrow at his target.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Sonic Arrow',
                    description: 'Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Storm Arrows',
                    description: 'Hanzo’s next several arrows fire instantly, but at reduced damage.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Lunge',
                    description: 'Hanzo can double jump, allowing him to change direction mid-jump.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Wall Climb',
                    description: 'Jump at walls to climb up them.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Dragonstrike',
                    description: 'Hanzo summons a Spirit Dragon which travels through the air in a line. It passes through walls in its way, devouring any enemies it encounters.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 3,
            description: 'Hanzo’s versatile arrows can reveal his enemies or fragment to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon.'
        },
        story: {
            biography: {
                realName: 'Hanzo Shimada',
                age: '38',
                occupation: 'Mercenary, Assassin',
                baseOfOperations: 'Hanamura, Japan (formerly)',
                affiliation: 'Shimada Clan'
            },
            quote: 'With every death comes honor. With honor, redemption',
            backStory: '<p>Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer.</p><p>The Shimada family was established centuries ago, a clan of assassins whose power grew over the years, enabling them to build a vast criminal empire that profited from lucrative trade in arms and illegal substances. As the eldest son of the family\'s head, Hanzo was bound by duty to succeed his father and rule the Shimada empire. From a young age, he was trained for that responsibility, displaying a natural aptitude for leadership and possessing an innate understanding of strategy and tactics. He also excelled in more practical areas: he was a prodigy in martial arts, swordplay, and bowmanship.</p><p>Upon the death of his father, the clan elders instructed Hanzo to straighten out his wayward younger brother so that he, too, might help rule the Shimada empire. When his brother refused, Hanzo was forced to kill him. This act broke Hanzo\'s heart and drove him to reject his father\'s legacy, ultimately leading him to abandon the clan and all that he had worked so hard to attain.</p><p>Now, Hanzo travels the world, perfecting his skills as a warrior, attempting to restore his honor and put the ghosts of his past to rest.</p>'
        }
    },
    {
        id: 'junkrat',
        name: 'Junkrat',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Defense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Frag Launcher',
                    description: 'Junkrat\'s Frag Launcher lobs grenades a significant distance. They bounce to reach their destination, and blow up when they strike an enemy.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Concussion Mine',
                    description: 'After placing one of his homemade Concussion Mines, Junkrat can trigger it to damage enemies and send them flying... or propel himself through the air.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Steel Trap',
                    description: 'Junkrat tosses out a giant, metal-toothed trap. Should an enemy wander too close to the trap, it clamps on, injuring and immobilizing them.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Total Mayhem',
                    description: 'Junkrat\'s deranged sense of humor persists past his death. If killed, he drops several live grenades.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'RIP-Tire',
                    description: 'Junkrat revs up a motorized tire bomb and sends it rolling across the battlefield, climbing over walls and obstacles. He can remotely detonate the RIP-Tire to deal serious damage to enemies caught in the blast, or just wait for it to explode on its own.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 2,
            description: 'Junkrat’s area-denying armaments include a Frag Launcher that lobs bouncing grenades, Concussion Mines that send enemies flying, and Steel Traps that stop foes dead in their tracks.'
        },
        story: {
            biography: {
                realName: 'Jamison Fawkes',
                age: '25',
                occupation: 'Anarchist, Thief, Demolitionist, Mercenary, Scavenger',
                baseOfOperations: 'Junkertown, Australia (formerly)',
                affiliation: 'Junkers (formerly)'
            },
            quote: 'It\'s a perfect day for some mayhem.',
            backStory: '<p>Junkrat is an explosives-obsessed freak who lives to cause chaos and destruction.</p><p>The attack on the Australian omnium\'s fusion core forever altered the landscape of the Outback. After the detonation, the area was transformed into a harsh, irradiated wasteland, littered with debris and the twisted fragments of the ruined facility, and unlivable to most.<p><p>But there were some who survived. Calling themselves the Junkers, they scavenged the husk of the omnium and formed a lawless, cutthroat society in its shadow. Junkrat was one of them, eking out a living reclaiming metal and components from the ruins. Like many others, he was affected by the lingering radiation. This touch of madness made him ideal for handling dangerous explosives, a love which he turned into an obsession.</p><p>He came to notoriety when he discovered an extremely valuable secret in the bones of the omnium. Though few knew the nature of what he found, he was nonetheless pursued by bounty hunters, gangs, and opportunists wherever he went, until he made a deal with the Junker enforcer Roadhog, who grudgingly agreed to be his personal bodyguard in exchange for a fifty-fifty share of the spoils.</p><p>Now, with Roadhog in tow, Junkrat has left the Outback, and embarked upon an international crime spree leaving nothing but havoc and bedlam in his wake.</p>'
        }
    },
    {
        id: 'lucio',
        name: 'Lúcio',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Support',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Sonic Amplifier',
                    description: 'Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Crossfade',
                    description: 'Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Amp It Up',
                    description: 'Lúcio increases the volume on his speakers, boosting the effects of his songs.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Wall Ride',
                    description: 'Jump onto a wall to ride along it.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Sound Barrier',
                    description: 'Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 2,
            description: 'On the battlefield, Lúcio’s cutting-edge Sonic Amplifier buffets enemies with projectiles and knocks foes back with blasts of sound. His songs can both heal his team or boost their movement speed, and he can switch between tracks on the fly.'
        },
        story: {
            biography: {
                realName: 'Lúcio Correia dos Santos',
                age: '26',
                occupation: 'DJ, Freedom Fighter',
                baseOfOperations: 'Rio de Janeiro, Brazil',
                affiliation: 'None'
            },
            quote: 'Come on, let\'s bring it together!',
            backStory: '<p>Lúcio is an international celebrity who inspires social change through his music and actions.</p><p>Lúcio Correia dos Santos grew up in Rio de Janeiro, in a poor and crowded favela that was hit hard by the financial upheaval following the Omnic Crisis. As Brazil began the long process of recovery, he wanted to find a way to lift the spirits of those around him. He found his answer in music and its power to bring people together and even help them forget their troubles, if only for a short time. He performed on street corners, in block parties, and as he got older, at a string of legendary underground shows.</p><p>But Lúcio\'s close-knit community was thrown into chaos when the multinational Vishkar Corporation secured a contract to redevelop large tracts of the city. Lúcio and his neighbors had been told that the development would improve their lives. However, that promise never became a reality. Vishkar imposed controls on the residents in the name of building a more orderly society: enforcing curfews, cracking down on what the company perceived as lawless behavior, and exploiting the populace as a cheap labor force.</p><p>Lúcio wouldn\'t stand for it. He stole Vishkar sonic technology that had been used to suppress the people, and he converted it into a tool to rally them to action. In a popular uprising, they drove Vishkar out of their neighborhoods. Lúcio\'s leadership made him a star overnight and a symbol for positive social change. His music skyrocketed in popularity. Whereas he had once performed locally, he was now filling arenas across the world.</p><p>With his newfound fame, Lúcio realizes that he has an opportunity to make a difference and change the world for the better.</p>'
        }
    },
    {
        id: 'mccree',
        name: 'McCree',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Offense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Peacekeeper',
                    description: 'McCree fires off a round from his trusty six-shooter. He can fan the Peacekeeper’s hammer to swiftly unload the entire cylinder.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Combat Roll',
                    description: 'McCree dives in the direction he’s moving, effortlessly reloading his Peacekeeper in the process.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Flashbang',
                    description: 'McCree heaves a blinding grenade that explodes shortly after it leaves his hand. The blast staggers enemies in a small radius.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Deadeye',
                    description: 'Focus. Mark. Draw. McCree takes a few precious moments to aim; when he’s ready to fire, he shoots every enemy in his line of sight. The weaker his targets are, the faster he’ll line up a killshot.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 2,
            description: 'Armed with his Peacekeeper revolver, McCree takes out targets with deadeye precision and dives out of danger with eagle-like speed.'
        },
        story: {
            biography: {
                realName: 'Jesse McCree',
                age: '37',
                occupation: 'Bounty Hunter',
                baseOfOperations: 'Santa Fe, New Mexico, USA',
                affiliation: 'Overwatch (formerly)'
            },
            quote: 'Justice ain\'t gonna dispense itself.',
            backStory: '<p>Armed with his Peacekeeper revolver, the outlaw Jesse McCree doles out justice on his own terms.</p><p>McCree had already made a name for himself as a member of the notorious Deadlock Gang, which trafficked in illicit weapons and military hardware throughout the American Southwest, when he and his associates were busted in an Overwatch sting operation. With his expert marksmanship and resourcefulness, he was given the choice between rotting in a maximum-security lockup and joining Blackwatch, Overwatch\'s covert ops division. He chose the latter.</p><p>Although he was initially cynical, he came to believe that he could make amends for his past sins by righting the injustices of the world. McCree appreciated the flexibility afforded to the clandestine Blackwatch, unhindered by bureaucracy and red tape. But as Overwatch\'s influence waned, rogue elements within Blackwatch sought to bring down the organization and turn it to their own ends. Wanting no part of the infighting, McCree set off alone and went underground.</p><p>He resurfaced several years later as a gunslinger for hire. But while McCree\'s talents are sought after by parties great and small, he fights only for causes he believes are just.</p>'
        }
    },
    {
        id: 'mei',
        name: 'Mei',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Defense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Endothermic Blaster',
                    description: 'Mei’s blaster unleashes a concentrated, short-range stream of frost that damages, slows, and ultimately freezes enemies in place. Mei can also use her blaster to shoot icicle-like projectiles at medium range.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Cryo-Freeze',
                    description: 'Mei instantly surrounds herself with a block of thick ice. She heals and ignores damage while encased, but cannot move or use abilities.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Ice Wall',
                    description: 'Mei generates an enormous ice wall that obstructs lines of sight, stops movement, and blocks attacks.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Blizzard',
                    description: 'Mei deploys a weather-modification drone that emits gusts of wind and snow in a wide area. Enemies caught in the blizzard are slowed and take damage; those who linger too long are frozen solid.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 3,
            description: 'Mei’s weather-altering devices slow opponents and protect locations. Her Endothermic Blaster unleashes damaging icicles and frost streams, and she can Cryo-Freeze herself to guard against counterattacks, or obstruct the opposing team\'s movements with an Ice Wall.'
        },
        story: {
            biography: {
                realName: 'Mei-Ling Zhou',
                age: '31',
                occupation: 'Climatologist, Adventurer',
                baseOfOperations: 'Xi’an, China (formerly)',
                affiliation: 'Overwatch (formerly)'
            },
            quote: 'Our world is worth fighting for.',
            backStory: '<p>Mei is a scientist who has taken the fight to preserve the environment into her own hands.</p><p>Though many blamed the planet\'s escalating, unexplained climate phenomena on the advent of new technologies, the rapidly growing omnic population, and drastically increased consumption of resources, the true cause remained unknown. To find a solution, Overwatch established a series of eco-Watchpoints at remote, critical locations worldwide.</p><p>Mei-Ling Zhou was a member of this multiyear initiative. A peerless climatologist, she had introduced cutting-edge innovations in the field of climate manipulation that protected at-risk areas in Asia and beyond. She was assigned to the program\'s monitoring station at Watchpoint: Antarctica when disaster struck: a sudden, catastrophic polar storm battered the installation and cut it off from the outside world, leaving the facility damaged and the scientists stranded. As their supplies dwindled, they entered cryostasis in a last-ditch effort to survive until a rescue attempt could be made.</p><p>But that rescue never came. It was years later when the team\'s cryogenics chamber was finally discovered. Mei, still in hibernation, was the only survivor. The world Mei awoke to had gone through considerable changes: Overwatch was no more, the serious climate issues had worsened, and none of the eco-Watchpoints were in operation. Any clues that they had uncovered were lost.</p><p>Mei has decided to continue her work on her own. Equipped with a portable version of her climate-manipulation technology, she travels around the world, hoping to re-establish the eco-network and track down the causes of the threats to the planet\'s ecosystem.</p>'
        }
    },
    {
        id: 'mercy',
        name: 'Mercy',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Support',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Caduceus Staff',
                    description: 'Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Caduceus Blaster',
                    description: 'Mercy shoots a round from her sidearm.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Guardian Angel',
                    description: 'Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Resurrect',
                    description: 'Mercy brings a dead ally back into the fight with full health.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Angelic Descent',
                    description: 'Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Regeneration',
                    description: 'Mercy automatically heals over time.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Valkyrie',
                    description: 'Gain the ability to fly. Mercy’s abilities are enhanced.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.'
        },
        story: {
            biography: {
                realName: 'Angela Ziegler',
                age: '37',
                occupation: 'Field Medic, First Responder',
                baseOfOperations: 'Zürich, Switzerland',
                affiliation: 'Overwatch (formerly)'
            },
            quote: 'Heroes never die.',
            backStory: '<p>A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.</p><p>Ziegler rose to become the head of surgery at a prominent Swiss hospital before pioneering a breakthrough in the field of applied nanobiology that radically improved the treatment of life-threatening illnesses and injuries. It was this expertise that attracted the attention of Overwatch.</p><p>Because her parents had been taken by war, Ziegler was opposed to the organization\'s militaristic approach to keeping global peace. Ultimately, she recognized that Overwatch offered her the opportunity to save lives on a much larger scale. As Overwatch\'s head of medical research, Angela sought to leverage her work for healing in frontline crises. The result was the Valkyrie swift-response suit, which Ziegler herself piloted on many Overwatch missions.</p><p>Despite her contributions to Overwatch, she was often at odds with her superiors and the organization\'s overarching aims. When Overwatch dissolved, Ziegler dedicated herself to helping those affected by war.</p><p>Though she spends most of her time caring for the broken and dispossessed in crisis areas around the world, Dr. Ziegler can be counted on to don her Valkyrie suit whenever innocents are imperiled.</p>'
        }
    },
    {
        id: 'moira',
        name: 'Moira',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Support',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Biotic Grasp',
                    description: 'Using her left hand, Moira expends biotic energy to heal allies in front of her. Her right hand fires a long-range beam weapon that saps enemies’ health, healing Moira and replenishing her biotic energy.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Biotic Orb',
                    description: 'Moira launches a rebounding biotic sphere; she can choose between a regeneration effect that heals the allies it passes through, or a decay effect that deals damage to enemies.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Fade',
                    description: 'Moira quickly teleports a short distance.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Coalescence',
                    description: 'Moira channels a long-range beam that both heals allies and bypasses barriers to damage her enemies.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 2,
            description: 'Moira’s biotic abilities enable her to contribute healing or damage in any crisis. While Biotic Grasp gives Moira short-range options, her Biotic Orbs contribute longer-range, hands-off damage and healing; she can also Fade to escape groups or remain close to allies in need of support. Once she’s charged Coalescence, Moira can save multiple allies from elimination at once or finish off weakened enemies.'
        },
        story: {
            biography: {
                realName: 'Moira O’Deorain',
                age: '48',
                occupation: 'Geneticist',
                baseOfOperations: 'Dublin, Ireland; Oasis, Iraq',
                affiliation: 'Talon; Blackwatch (formerly)'
            },
            quote: 'Science will reveal the truth.',
            backStory: '<p>Equal parts brilliant and controversial, scientist Moira O\'Deorain is on the cutting edge of genetic engineering, searching for a way to rewrite the fundamental building blocks of life.</p><p>Over a decade ago, O\'Deorain made waves when she published a controversial paper detailing a methodology for creating custom genetic programs that could alter DNA at a cellular level. It seemed like a promising step toward overcoming diseases and disorders and maximizing human potential.</p><p>Dissent among her peers soon followed. Many considered her work to be dangerous because of its perceived ethical shortfalls, and O\'Deorain was even accused of having the same unchecked desire for scientific advancement that some believed had caused the Omnic Crisis. In addition, other geneticists were unable to reproduce the results of Moira\'s research, which further called her discoveries into question. Instead of kickstarting her career, her paper seriously damaged her reputation.</p><p>She received a lifeline in an offer from an unlikely source: Overwatch\'s covert ops division, Blackwatch. She continued her work in the shadows while developing new weapons and technologies for the organization. Her employment was a closely kept secret, until it was uncovered during inquiries following the Venice incident. Many high-ranking Overwatch officials disavowed all knowledge of her affiliation with them.</p><p>After Overwatch was disbanded, O\'Deorain was forced to turn to unconventional sources of funding. This time, she was invited to join the scientific collective that had founded the city of Oasis. Yet some have whispered that the shadowy Talon organization had already been supporting her for years, aiding her experiments in exchange for utilizing the results for their own purposes.</p><p>Though O\'Deorain will go to any lengths to make scientific breakthroughs, her work is still unknown to most of the world. But now that she has been freed from all constraints, it is only a matter of time before everything changes.</p>'
        }
    },
    {
        id: 'orisa',
        name: 'Orisa',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Tank',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Fusion Driver',
                    description: 'Orisa’s automatic projectile cannon delivers sustained damage, but slows her movement while she fires it.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Fortify',
                    description: 'Orisa temporarily reduces damage she takes, and cannot be affected by action-impairing effects.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Halt!',
                    description: 'Orisa launches a graviton charge which she can detonate, slowing nearby enemies and pulling them towards the explosion.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Protective Barrier',
                    description: 'Orisa throws out a stationary barrier that can protect her and her allies from enemy fire.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Supercharger',
                    description: 'Orisa deploys a device to increase damage inflicted by allies within her line of sight.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 2,
            description: 'Orisa serves as the central anchor of her team, and defends her teammates from the frontline with a protective barrier. She can attack from long range, fortify her own defenses, launch graviton charges to slow and move enemies, and deploy a Supercharger to boost the damage output of multiple allies at once.'
        },
        story: {
            biography: {
                realName: 'Orisa',
                age: '1 month',
                occupation: 'Guardian Robot',
                baseOfOperations: 'Numbani',
                affiliation: 'None'
            },
            quote: 'Your safety is my primary concern.',
            backStory: '<p>Built from parts of one of Numbani\'s short-lived OR15 defense robots, Orisa is the city\'s newest protector, though she still has much to learn.</p><p>Originally put into service before the Omnic Crisis, the OR14 "Idina" line of security robots was built in Nigeria\'s massive manufacturing omnium. After the war, they were taken out of production, along with many of the other models used during the crisis. Twenty years later, Numbani revived and recommissioned the OR14 program to protect the city from external threats. These new OR15s were deployed for a short time before they were destroyed in an attack by Doomfist.</p><p>Following the attack, the program was scrapped, and the civic government sold off the remaining OR15 inventory. Some parts were purchased by eleven-year-old Efi Oladele, a brilliant girl whose early accomplishments in robotics and artificial intelligence had already earned her the Adawe Foundation\'s "genius grant".</p><p>With the approval of her understanding and open-minded parents, Efi spent the bulk of her grant money to acquire one of the decommissioned OR15 bots. She believed that Numbani needed a protector and that an upgraded OR15 could do just that. Efi repaired and reconfigured the robot and installed a personality core that she had designed herself.</p><p>She named Numbani\'s newest hero Orisa.</p><p>Orisa has shown that she can be of service to the city, but she is still working toward finding her optimal protocols. The omnic\'s inexperience can cause her to be an occasional liability. Fortunately, between Efi\'s willingness to make the necessary modifications and Orisa\'s adaptive artificial intelligence, both robot and creator have always been able to set things right.</p><p>As Orisa starts her career as a guardian, she has much to learn about the world and her functionality. But as long as she is guided by Efi\'s boundless optimism and her own growing sense of honor and duty, Orisa stands ready to protect Numbani and her creator at any cost.</p>'
        }
    },
    {
        id: 'pharah',
        name: 'Pharah',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Offense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Rocket Launcher',
                    description: 'Pharah’s primary weapon launches rockets that deal significant damage in a wide blast radius.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Jump Jet',
                    description: 'Propelled by her suit’s thrusters, Pharah soars high into the air.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Concussive Blast',
                    description: 'Pharah looses a wrist rocket that knocks back any enemies it strikes.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Hover Jets',
                    description: 'Pharah lifts herself upward with her jet suit.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Barrage',
                    description: 'Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Soaring through the air in her combat armor, and armed with a launcher that lays down high-explosive rockets, Pharah is a force to be reckoned with.'
        },
        story: {
            biography: {
                realName: 'Fareeha Amari',
                age: '32',
                occupation: 'Security Chief',
                baseOfOperations: 'Giza, Egypt',
                affiliation: 'Helix Security International'
            },
            quote: 'I will protect the innocent',
            backStory: '<p>Fareeha Amari\'s commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor.</p><p>As a child, Fareeha dreamed of following in her mother\'s footsteps and joining the global peacekeeping force, Overwatch. She enlisted in the Egyptian army, and her dogged persistence and tactical prowess caused her to rise up through the officer ranks. She was a courageous leader and earned the loyalty of all who served under her. With her exemplary record, Fareeha was well placed to join the ranks of Overwatch, but before she had that opportunity, Overwatch was disbanded.</p><p>After leaving the army with a commendation for distinguished service, she was offered employment with Helix Security International, a private security firm contracted to defend the artificial intelligence research facility beneath the Giza Plateau. The top-secret facility was touted as vital to the safety of not only the region but countries across the globe. Fareeha gladly accepted the choice assignment and received training in the Raptora Mark VI, an experimental combat suit designed for rapid mobility and devastating firepower.</p><p>Under the call sign "Pharah," she works to safeguard the AI installation. Though she mourns Overwatch\'s passing, she still dreams of fighting the good fight and making a difference on a global scale.</p>'
        }
    },
    {
        id: 'reaper',
        name: 'Reaper',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Offense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Hellfire Shotguns',
                    description: 'Reaper tears enemies apart with twin shotguns.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Wraith Form',
                    description: 'Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, but cannot fire his weapons or use other abilities.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Shadow Step',
                    description: 'After marking a destination, Reaper disappears and reappears at that location.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'The Reaping',
                    description: 'Reaper steals health from his enemies as he damages them.',
                    icon: '',
                    type: 'Passive'
                },
                {
                    name: 'Death Blossom',
                    description: 'In a blur of motion, Reaper empties both Hellfire Shotguns at breakneck speed, dealing massive damage to all nearby enemies.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Hellfire Shotguns, the ghostly ability to become immune to damage, and the power to step between shadows make Reaper one of the deadliest beings on Earth.'
        },
        story: {
            biography: {
                realName: 'Unknown',
                age: 'Unknown',
                occupation: 'Mercenary',
                baseOfOperations: 'Unknown',
                affiliation: 'Unknown'
            },
            quote: 'Death walks among you.',
            backStory: '<p>Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows.</p><p>The Reaper is an extremely volatile mercenary, a ruthless and remorseless killer responsible for terrorist attacks across the world. He has fought in many armed conflicts in the last decades, showing no loyalty to any cause or organization.</p><p>Survivors have described a black shadow ghosting unscathed through the most hellish battlefields. The few bodies recovered of those he kills are pale, empty husks drained of life, their cells showing signs of intense degradation. It is possible that he is a byproduct of failed genetic alteration which forces his cells to simultaneously decay and regenerate at a hyper-accelerated rate.</p><p>Those attempting to track his movements have begun to see a pattern in his appearances. They believe that Reaper is hunting former Overwatch agents and systematically eliminating them.</p>'
        }
    },
    {
        id: 'reinhardt',
        name: 'Reinhardt',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Tank',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Rocket Hammer',
                    description: 'Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Barrier Field',
                    description: 'Reinhardt projects a broad, forward-facing energy barrier, which can absorb substantial damage before it is destroyed. Though Reinhardt can protect himself and his companions behind the barrier, he cannot attack while sustaining it.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Charge',
                    description: 'Reinhardt charges forth in a straight line, pinning the first enemy in his path and knocking others aside. If he collides with a wall, the foe he’s carrying suffers extreme damage.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Fire Strike',
                    description: 'By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Earthshatter',
                    description: 'Reinhardt forcefully slams his Rocket Hammer into the ground, knocking down and damaging all enemies in front of him.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Clad in powered armor and swinging his hammer, Reinhardt leads a rocket-propelled charge across the battleground and defends his squadmates with a massive energy barrier.'
        },
        story: {
            biography: {
                realName: 'Reinhardt Wilhelm',
                age: '61',
                occupation: 'Adventurer',
                baseOfOperations: 'Stuttgart, Germany',
                affiliation: 'Overwatch (formerly)'
            },
            quote: 'Justice will be done.',
            backStory: '<p>Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage.</p><p>Over thirty years ago, Overwatch was founded to counter the threat of the robot uprisings around the world. Reinhardt, a highly decorated German soldier, was inducted as part of the original Overwatch strike team that put an end to the Omnic Crisis. After the conflict\'s resolution, Overwatch grew into a global institution, keeping the peace in a war-torn world. Reinhardt proved himself to be one of its most stalwart champions.</p><p>Reinhardt\'s unique ethics and larger-than-life persona earned the admiration of his peers and superiors alike. Never afraid to speak his mind, he was Overwatch\'s most vocal supporter and, when necessary, its harshest critic, providing a constant reminder that Overwatch was meant to be a force for good.</p><p>Having served into his late fifties, Reinhardt was faced with mandatory retirement from combat operations. Despondent about being removed from active duty, Reinhardt feared that his days of purpose and glory had ended. As times grew darker and Overwatch came under suspicion of corruption and sedition, Reinhardt could only watch as the cause he had dedicated his life to defending surrendered in disgrace.</p><p>Though Overwatch was eventually disbanded, Reinhardt was not content to sit idly by while the world fell to disorder. Once again donning his Crusader armor, he has vowed to fight for justice across Europe like a knight of old, defending the innocent and winning hearts and minds with the promise of better days to come.</p>'
        }
    },
    {
        id: 'roadhog',
        name: 'Roadhog',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Tank',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Scrap Gun',
                    description: 'Roadhog\'s Scrap Gun fires short-range blasts of shrapnel with a wide spread. Alternatively, it can launch a shrapnel ball that detonates farther away, scattering metal fragments from the point of impact.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Take A Breather',
                    description: 'Roadhog restores a chunk of his health over a brief period of time.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Chain Hook',
                    description: 'Roadhog hurls his chain at a target; if it catches, he yanks them into close range.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Whole Hog',
                    description: 'After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.'
        },
        story: {
            biography: {
                realName: 'Mako Rutledge',
                age: '48',
                occupation: 'Enforcer (formerly), Bodyguard',
                baseOfOperations: 'Junkertown, Australia (formerly)',
                affiliation: 'Junkers (formerly)'
            },
            quote: 'I\'m a one-man apocalypse.',
            backStory: '<p>Roadhog is a ruthless killer with a well-earned reputation for cruelty and wanton destruction.</p><p>After the Omnic Crisis, government officials gifted the Australian omnium and the surrounding area to the omnics that had nearly destroyed their country, hoping to establish a long-term peace accord. This arrangement permanently displaced Mako Rutledge and a large number of the Outback\'s residents, a scattered collection of survivalists, solar farmers, and people who just wanted to be left alone.</p><p>Furious over the loss of their homes, Mako and others turned to violent rebellion. They formed the Australian Liberation Front and struck against the omnium and its robot population to take back the lands that had been stolen. Events continued to escalate until the rebels sabotaged the omnium\'s fusion core, resulting in an explosion that destroyed the facility, irradiated the region, and littered the Outback with twisted metal and wreckage for kilometers around.</p><p>Mako watched as his home became an apocalyptic wasteland, and he was forever changed.</p><p>Adapting to his environment, he donned a mask and took to the broken highways of the Outback on his ramshackle chopper. Little by little, his humanity was forgotten. The last vestiges of Mako faded away and the ruthless killer Roadhog was born.</p>'
        }
    },
    {
        id: 'soldier76',
        name: 'Solider: 76',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Offense',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Heavy Pulse Rifle',
                    description: 'Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Helix Rockets',
                    description: 'Tiny rockets spiral out of Soldier: 76’s Pulse Rifle in a single burst. The rockets’ explosion damages enemies in a small radius.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Sprint',
                    description: 'Whether he needs to evade a firefight or get back into one, Soldier: 76 can rush ahead in a burst of speed. His sprint ends if he takes an action other than charging forward.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Biotic Field',
                    description: 'Soldier: 76 plants a biotic emitter on the ground. Its energy projection restores health to 76 and any of his squadmates within the field.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Tactical Visor',
                    description: 'Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs. If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 1,
            description: 'Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior.'
        },
        story: {
            biography: {
                realName: 'Unknown',
                age: 'Unknown',
                occupation: 'Vigilante',
                baseOfOperations: 'Unknown',
                affiliation: 'Overwatch (formerly)'
            },
            quote: 'We\'re all soldiers now.',
            backStory: '<p>Currently the target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch\'s collapse.</p><p>Soldier: 76 revealed himself in a string of attacks that crisscrossed the globe, targeting financial institutions, shadowy corporations, and secure Overwatch facilities. Though to the outside world his motives are inscrutable, there are those who claim that he is a former Overwatch agent, determined to shed light on the conspiracy that brought down the organization.</p><p>While his true identity remains a mystery, he is believed to have been trained as a member of the American "soldier enhancement program". He possesses physical capabilities exceeding those of a conventional soldier\'s, as well as other augmentations that make him a peerless combatant. In addition, he utilizes a cutting-edge arsenal, much of it stolen in raids on Overwatch installations.</p><p>Unrelenting in his search to find those responsible for Overwatch\'s fall, Soldier: 76 will stop at nothing to bring them to justice.</p>'
        }
    },
    {
        id: 'tracer',
        name: 'Tracer',
        portraitImage: '',
        color: '',
        overview: {
            role: 'Attack',
            roleIcon: '',
            characterImage: '',
            skills: [
                {
                    name: 'Pulse Pistols',
                    description: 'Tracer rapid-fires both of her pistols.',
                    icon: '',
                    type: 'Weapon'
                },
                {
                    name: 'Blink',
                    description: 'Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Recall',
                    description: 'Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.',
                    icon: '',
                    type: 'Ability'
                },
                {
                    name: 'Pulse Bomb',
                    description: 'Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.',
                    icon: '',
                    type: 'Ultimate'
                }
            ],
            difficulty: 2,
            description: 'Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to "blink" through space and rewind her personal timeline as she battles to right wrongs the world over.'
        },
        story: {
            biography: {
                realName: 'Lena Oxton',
                age: '26',
                occupation: 'Adventurer',
                baseOfOperations: 'London, England',
                affiliation: 'Overwatch (formerly)'
            },
            quote: 'Cheers, love! The cavalry\'s here!',
            backStory: '<p>The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good.</p><p>Lena Oxton (call sign: "Tracer") was the youngest person ever inducted into Overwatch\'s experimental flight program. Known for her fearless piloting skills, she was handpicked to test the prototype of a teleporting fighter, the Slipstream. But during its first flight, the aircraft\'s teleportation matrix malfunctioned, and it disappeared. Lena was presumed dead.</p><p>She reappeared months later, but her ordeal had greatly changed her: her molecules had been desynchronized from the flow of time. Suffering from "chronal disassociation," she was a living ghost, disappearing for hours and days at a time. Even for the brief moments she was present, she was unable to maintain physical form.</p><p>Overwatch\'s doctors and scientists were stumped, and Tracer\'s case seemed hopeless until a scientist named Winston designed the chronal accelerator, a device capable of keeping Tracer anchored in the present. In addition, it gave Tracer the ability to control her own time, allowing her to speed it up and slow it down at will. With her newfound skills, she became one of Overwatch\'s most effective agents.</p><p>Since Overwatch\'s dissolution, Tracer has continued to right wrongs and fight the good fight wherever the opportunity presents itself.</p>'
        }
    }
];
