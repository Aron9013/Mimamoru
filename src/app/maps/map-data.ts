import { Map, GameMode } from './map-template';

export const GAMEMODES: GameMode[] = [
    {
        type: 'Arena',
        icon: '',
        description: 'Each team strives to eliminate all opponents in 1v1 or 3v3 scenarios.'
    },
    {
        type: 'Assault',
        icon: '',
        description: 'Attackers fight to capture a series of objectives; defenders hold them off until time runs out.'
    },
    {
        type: 'Assault/Escort',
        icon: '',
        description: 'Attackers first capture a payload, then escort it to its destination; defenders attempt to hold them back.'
    },
    {
        type: 'Capture The Flag',
        icon: '',
        description: 'Two teams of six players compete to capture the enemy team’s flag while defending their own.'
    },
    {
        type: 'Control',
        icon: '',
        description: 'Two teams fight to hold a single objective at a time; the first team to win two rounds wins the match.'
    },
    {
        type: 'Deathmatch',
        icon: '',
        description: 'Players race to score more kills than their opponents in an 8-player free-for-all match.'
    },
    {
        type: 'Escort',
        icon: '',
        description: 'Attackers escort a payload to a delivery point, while defenders strive to keep the payload from reaching its destination before time elapses.'
    },
    {
        type: 'Team Deathmatch',
        icon: '',
        description: 'Two teams race to score more kills than their opponents in a 4v4 match.'
    }
];

export const MAPS: Map[] = [
    {
        'id': 'ayutthaya',
        'name': 'Ayutthaya',
        'image': '',
        'location': 'Thailand',
        'locationIcon': '',
        'description': '',
        'types': [
            {
                'type': 'Control',
                'icon': ''
            },
            {
                'type': 'Capture The Flag',
                'icon': ''
            },
            {
                'type': 'Team Deathmatch',
                'icon': ''
            }
        ]
    },
    {
        'id': 'black_forest',
        'name': 'Black Forest',
        'image': '',
        'location': 'Germany',
        'locationIcon': '',
        'description': 'People used to believe that witches resided within the forest. The forest was a battlefield during the Omnic Crisis. Eichenwalde is located in the middle of the forest.',
        'types': [
            {
                'type': 'Arena',
                'icon': ''
            }
        ]
    },
    {
        'id': 'blizzard_world',
        'name': 'Blizzard World',
        'image': '',
        'location': 'America',
        'locationIcon': '',
        'description': 'Epic fun detected: Welcome to Blizzard World. See your favorite gaming memories come to life in Overwatch’s new hybrid map as you attack and defend the payload across Azeroth, Tristram, the Koprulu Sector, and beyond!',
        'types': [
            {
                'type': 'Assault/Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'castillo',
        'name': 'Castillo',
        'image': '',
        'location': 'Mexico',
        'locationIcon': '',
        'description': 'Castillo is an old fort looking out over Dorado\'s bay. It’s the location of Calaveras, a bar frequented by questionable patrons; a graffitied Los Muertos hangout; and Sombra\'s hacking den. Test your skills against the enemy team throughout Castillo’s multiple levels, and use its winding stairs for cover and strategic advantage.',
        'types': [
            {
                'type': 'Arena',
                'icon': ''
            }
        ]
    },
    {
        'id': 'chateau_guillard',
        'name': 'Château Guillard',
        'image': '',
        'location': 'France',
        'locationIcon': '',
        'description': 'Château Guillard is located near Annecy in southeastern France. For hundreds of years, it was the estate of the influential Guillard family, until it gradually fell into disrepair after the family’s power waned in the decades after the Revolution. Recently, the château has found a new owner: the Talon agent Widowmaker, who has returned to her family’s ancestral home.',
        'types': [
            {
                'type': 'Deathmatch',
                'icon': ''
            }
        ]
    },
    {
        'id': 'dorado',
        'name': 'Dorado',
        'image': '',
        'location': 'Mexico',
        'locationIcon': '',
        'description': 'It is Festival de la Luz in Dorado, an annual celebration of the end of the Omnic Crisis and the period of darkness – both figurative and literal – that engulfed Mexico when the omnics destroyed much of the country’s power grid and infrastructure. But there is a new dawn, as LumériCo and its CEO, war hero and former president Guillermo Portero, are unveiling a string of fusion plants that promise to deliver clean, free energy to the Mexican people.',
        'types': [
            {
                'type': 'Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'ecopoint_antartica',
        'name': 'Ecopoint: Antartica',
        'image': '',
        'location': 'Antartica',
        'locationIcon': '',
        'description': 'Maintained by Overwatch, the ecopoint served as a monitoring station for the study of Earth\'s changing climate. Disaster struck the station when it was hit by a polar storm, damaging the station\'s solar array. Cut off from the outside world, the scientists were left stranded in the damaged facility. As their supplies dwindled, they entered cryostasis in a last-ditch effort to survive until a rescue attempt could be made. Rescue came years later, but Dr. Mei-Ling Zhou was the only survivor. By this point, Overwatch was no more, and the eco-watchpoints had ceased to operate.',
        'types': [
            {
                'type': 'Arena',
                'icon': ''
            }
        ]
    },
    {
        'id': 'eichenwalde',
        'name': 'Eichenwalde',
        'image': '',
        'location': 'Germany',
        'locationIcon': '',
        'description': 'Eichenwalde is located in the middle of the Black Forest. The town was the site of one of the most famous battles during the Omnic Crisis. It was here that the leader of the Crusaders, Balderich von Adler, and a handful of his best soldiers, including his pupil, Reinhardt Wilhelm, made a last stand against an advancing automaton army.[2] Since Eichenwalde was in the way of a larger omnic advance to Stuttgart, the town was evacuated on October 11, from 3 to 8 o\'clock. Outnumbered and outgunned, almost all Crusaders were slain during the resulting combat, including the organizations leader. However, thanks to their valiant efforts, the German military was able to push back the omnic offensive and win the fight. In the present day, Eichenwalde lies abandoned, and the forest has slowly begun overtaking the village. However, the scars of war will never completely fade.',
        'types': [
            {
                'type': 'Assault/Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'hanamura',
        'name': 'Hanamura',
        'image': '',
        'location': 'Japan',
        'locationIcon': '',
        'description': 'Hanamura is a well-preserved village of unassuming shops and quiet streets, known mostly for its idyllic cherry blossom festival every spring. But to those who know its history, Hanamura is the ancestral home of the Shimada ninja clan, which had grown over the centuries to become a powerful criminal organization. As its neighboring cities expanded, Hanamura was encircled, and eventually it was incorporated as a district within a larger city. For now, the imposing compound of the Shimada family lies empty, but that peace may soon be broken.',
        'types': [
            {
                'type': 'Assault',
                'icon': ''
            }
        ]
    },
    {
        'id': 'hollywood',
        'name': 'Hollywood',
        'image': '',
        'location': 'America',
        'locationIcon': '',
        'description': 'Welcome to the glitz and glamour of Hollywood, California, where palm trees and fancy cars line the streets, and movie stars, directors, and high-powered studio executives rub shoulders for a chat and a drink at Galand\'s. Down the street from the Mandarin Theatre, Goldshire Studios\' omnic film auteur, HAL-Fred Glitchbot, has created his two latest films, They Come from Beyond the Moon and Six-Gun Killer, to varying amounts of critical and commercial acclaim. However, even Tinseltown has been gripped by anti-omnic sentiment, and the outspoken director has become a prime target in the escalating conflict.',
        'types': [
            {
                'type': 'Assault/Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'horizon_lunar_colony',
        'name': 'Horizon Lunar Colony',
        'image': '',
        'location': 'The Moon',
        'locationIcon': '',
        'description': 'Built as a first step towards humanity\'s renewed exploration of space, the Horizon Lunar Colony’s goal was to examine the effects of prolonged extraterrestrial habitation—on human and ape alike. The scientists\' research proved incredibly promising...until, suddenly, all contact and communications with the base were lost.',
        'types': [
            {
                'type': 'Assault',
                'icon': ''
            }
        ]
    },
    {
        'id': 'ilios',
        'name': 'Ilios',
        'image': '',
        'location': 'Greece',
        'locationIcon': '',
        'description': 'Ilios is located in the Aegean sea of Greece, which is part of the Mediterranean Sea. Situated atop a small island rising from the Aegean Sea, Ilios is a postcard-perfect Mediterranean town, with a bustling harborside, winding paths for rambling hillside strolls, and gorgeous vistas. It is the ideal vacation stop for people looking for a place to relax, or for those interested in exploring the ruins scattered at the top of the island, where many artifacts and relics of the ancient world have been recently unearthed. The ruins were declared an internationally protected heritage site. However, Talon attempted to steal the artifacts.',
        'types': [
            {
                'type': 'Control',
                'icon': ''
            },
            {
                'type': 'Capture The Flag',
                'icon': ''
            },
            {
                'type': 'Team Deathmatch',
                'icon': ''
            }
        ]
    },
    {
        'id': 'junkertown',
        'name': 'Junkertown',
        'image': '',
        'location': 'Australia',
        'locationIcon': '',
        'description': 'Junkertown is an Escort map located in the harsh and unforgiving Australian Outback. Constructed from the remains of a destroyed omnium, it\'s now the home to a band of lawless scavengers known as the Junkers, led by their cutthroat Queen. When they aren’t pillaging the omnium\'s skeleton for anything of value, the Junkers blow off steam in the Scrapyard—a massive gladiatorial arena whose combatants fight for glory, riches...and to survive.',
        'types': [
            {
                'type': 'Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'kings_row',
        'name': 'King\'s Row',
        'image': '',
        'location': 'Great Britain',
        'locationIcon': '',
        'description': 'King\'s Row is an upscale, cosmopolitan neighborhood of London, England, but just beneath its peaceful surface, tensions between omnics and humans are running high. While much of modern Britain was built on the backs of omnic laborers, they have been denied the basic rights that humans have, with most omnics forced to live in the dense, claustrophobic city-beneath-the-city known by some as "the Underworld". Of greater concern is that recent demonstrations by pro-omnic-rights protestors have resulted in violent clashes with the police, and a solution is nowhere in sight.',
        'types': [
            {
                'type': 'Assault/Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'lijiang_tower',
        'name': 'Lijiang Tower',
        'image': '',
        'location': 'China',
        'locationIcon': '',
        'description': 'Lijiang Tower was built in the heart of a modern Chinese metropolis, its busy streets lined with stores, gardens, restaurants, and famous night markets, where foods from around the region are available at all hours. The tower itself is home to one of the leading companies in China\'s state-of-the-art space industry, Lucheng Interstellar, an organization with a long pioneering history that is currently pushing the boundaries of space exploration.',
        'types': [
            {
                'type': 'Control',
                'icon': ''
            },
            {
                'type': 'Capture The Flag',
                'icon': ''
            },
            {
                'type': 'Team Deathmatch',
                'icon': ''
            }
        ]
    },
    {
        'id': 'necropolis',
        'name': 'Necropolis',
        'image': '',
        'location': 'Egypt',
        'locationIcon': '',
        'description': 'Ana Amari has made Necropolis her personal hideout—and an impromptu field base where she can keep an eye on things. Head to Ana’s preferred vantage point at the top of the ruins, and use the high ground (and the element of surprise) against the enemy team. Or walk the stone corridors below, and take the fight to them directly—just watch out for pits!',
        'types': [
            {
                'type': 'Arena',
                'icon': ''
            }
        ]
    },
    {
        'id': 'nepal',
        'name': 'Nepal',
        'image': '',
        'location': 'Nepal',
        'locationIcon': '',
        'description': 'Years ago, a group of omnic robots experienced what they described as a spiritual awakening. They abandoned their programmed lives to establish a monastery high in the Himalayas, where like-minded omnics could gather to meditate on the nature of their existence. Led by their spiritual leader, Tekhartha Mondatta, they took over the ruins of an ancient monastery and turned it into the home of the Shambali, a place where omnics and humans alike make pilgrimages in the hopes of finding a greater truth.',
        'types': [
            {
                'type': 'Control',
                'icon': ''
            },
            {
                'type': 'Capture The Flag',
                'icon': ''
            },
            {
                'type': 'Team Deathmatch',
                'icon': ''
            }
        ]
    },
    {
        'id': 'numbani',
        'name': 'Numbani',
        'image': '',
        'location': 'Africa',
        'locationIcon': '',
        'description': 'Known as the "City of Harmony", Numbani is one of the few places where omnics and humans live as equals. This collaboration has led to the creation of one of the world\'s greatest and most technologically advanced cities in the short time since its establishment after the end of the Omnic Crisis. As part of this year\'s Unity Day festivities celebrating the city\'s founding, the gauntlet of the infamous Doomfist is being exhibited at the Numbani Heritage Museum.',
        'types': [
            {
                'type': 'Assault/Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'oasis',
        'name': 'Oasis',
        'image': '',
        'location': 'Iraq',
        'locationIcon': '',
        'description': 'Oasis is one of the world\'s most advanced cities, a shining jewel rising from the Arabian Desert. A monument to human ingenuity and invention, researchers and academics from around the region came together to found a city dedicated to scientific progress without restraints. The city and its inhabitants are governed by the Ministries, a collection of brilliant minds who possess many secrets that have attracted the interest of powerful organizations from around the world.',
        'types': [
            {
                'type': 'Control',
                'icon': ''
            },
            {
                'type': 'Capture The Flag',
                'icon': ''
            },
            {
                'type': 'Team Deathmatch',
                'icon': ''
            }
        ]
    },
    {
        'id': 'petra',
        'name': 'Petra',
        'image': '',
        'location': 'Jordan',
        'locationIcon': '',
        'description': 'Petra is a historical and archaeological city in southern Jordan. A group of archaeologists have begun an excavation and preservation project among the ruins of the city. The research team started with the uppermost levels of the temple, finding statues of Hera, Athena, and Aphrodite. While preparing for excavation of the lower chambers, early imaging revealed a hidden chamber. The organization carrying out the excavations is also carrying out operations in Ilios and Thailand.',
        'types': [
            {
                'type': 'Deathmatch',
                'icon': ''
            }
        ]
    },
    {
        'id': 'rialto',
        'name': 'Rialto',
        'image': '',
        'location': 'Italy',
        'locationIcon': '',
        'description': 'Rialto was home to Talon agent Antonio Bartalotti\'s sprawling estate and the backdrop to the infamous “Venice Incident,” a turning point for Overwatch and Talon. The Italian government has taken great steps to preserve Venice, and the results are striking. Tourists visiting this picturesque town can sample the regional cuisine, enjoy a relaxing gondola ride, visit Galleria D’arte Omnica (the local art gallery), or simply take in the sights with a stroll along the canal.',
        'types': [
            {
                'type': 'Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'route_66',
        'name': 'Route 66',
        'image': '',
        'location': 'America',
        'locationIcon': '',
        'description': 'Though the travelers and road trippers who used to cross the US on historic Route 66 are gone, the Main Street of America still stands, a testament to a simpler time. The gas stations, roadside shops, and cafes have gone into disuse, and the fabled Deadlock Gorge is mostly seen from the comfort of transcontinental train cars. But amid the fading monuments of that earlier era, the outlaws of the Deadlock Gang are planning their biggest heist yet.',
        'types': [
            {
                'type': 'Escort',
                'icon': ''
            }
        ]
    },
    {
        'id': 'temple_of_anubis',
        'name': 'Temple Of Anubis',
        'image': '',
        'location': 'Egypt',
        'locationIcon': '',
        'description': 'Nestled among the ancient ruins of the Giza Plateau on the outskirts of Cairo, the Temple of Anubis is one of many new excavations in the area. While most believe that the site is of interest for archaelogical reasons, it also hides the entrance to a research facility that extends deep beneath the earth. The facility is alleged to house an artificial intelligence, but the whole truth is known only to a select few. Not even the agents of Helix Security International who guard the facility know what they\'re protecting.',
        'types': [
            {
                'type': 'Assault',
                'icon': ''
            }
        ]
    },
    {
        'id': 'volskaya_industries',
        'name': 'Volskaya Industries',
        'image': '',
        'location': 'Russia',
        'locationIcon': '',
        'description': 'Russia was one of the countries hit hardest by the Omnic Crisis, but during the rebuilding process, it rode the wave of the mechanized labor industry\'s revitalization and entered a period of rapid growth. However, after recent attacks from the long-dormant Siberian omnium, Russia has returned to war footing, guarding its sparkling cities with the massive, human-piloted Svyatogor mechs developed and produced by Volskaya Industries.',
        'types': [
            {
                'type': 'Assault',
                'icon': ''
            }
        ]
    },
    {
        'id': 'watchpoint_gibraltar',
        'name': 'Watchpoint: Gibraltar',
        'image': '',
        'location': 'Gibraltar',
        'locationIcon': '',
        'description': 'At its height, Overwatch maintained a number of bases around the world, each with its own purpose: peacekeeping, scientific research, or in the case of Watchpoint: Gibraltar, providing an orbital launch facility. The base was mothballed along with the rest of Overwatch\'s installations, but there have been recent reports of activity within the perimeter. Could this indicate the presence of former Overwatch agents, or is this the work of organizations with more nefarious intentions?',
        'types': [
            {
                'type': 'Escort',
                'icon': ''
            }
        ]
    }
];
