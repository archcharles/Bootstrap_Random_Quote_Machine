const quotesStore = [
  {
    author: "John Paul II",
    quote: "The future starts today, not tomorrow."
  },
  {
    author: "John Paul II",
    quote: "Do not abandon yourselves to despair. We are the Easter people and hallelujah is our song."
  },
  {
    author: "John Paul II",
    quote: "As the family goes, so goes the nation and so goes the whole world in which we live."
  },
  {
    author: "Padre Pio",
    quote: "Pray, hope, and don't worry. Worry is useless. God is merciful and will hear your prayer."
  },
  {
    author: "Padre Pio",
    quote: "Joy, with peace, is the sister of charity. Serve the Lord with laughter."
  },
  {
    author: "Barack Obama",
    quote: "Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek."
  },
  {
    author: "Barack Obama",
    quote: "A change is brought about because ordinary people do extraordinary things."
  },
  {
    quote: "The only people who never fail are those who never try.",
    author: "Ilka Chase"
  },
  {
    quote: "Failure is just another way to learn how to do something right.",
    author: "Marian Wright Edelman"
  },
  {
    quote: "I failed my way to success.",
    author: "Thomas Edison"
  },
  {
    quote: "Every failure brings with it the seed of an equivalent success.",
    author: "Napoleon Hill"
  },
  {
    quote: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "John F. Kennedy"
  },
  {
    quote: "It is hard to fail, but it is worse never to have tried to succeed.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
  {
    quote: "Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
    author: "Langston Hughes"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau"
  },
  {
    quote: "You cannot depend on your eyes when your imagination is out of focus.",
    author: "Mark Twain"
  },
  {
    quote: "Commitment leads to action. Action brings your dream closer.",
    author: "Marcia Wieder"
  },
  {
    quote: "I never think of the future",
    author: "it comes soon enough.\""
  },
  {
    quote: "Don't waste your life in doubts and fears: Spend yourself on the work before you, well assured that the right performance of this hour's duties will be the best preparation for the hours or ages that follow it.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
    author: "Andrew Jackson"
  },
  {
    quote: "The mind that is anxious about future events is miserable.",
    author: "Seneca"
  },
  {
    quote: "Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influences of each.",
    author: "Henry David Thoreau"
  },
  {
    quote: "The art of leadership is saying no, not yes. It is very easy to say yes.",
    author: "Tony Blair"
  },
  {
    quote: "A leader is a dealer in hope.",
    author: "Napoleon Bonaparte"
  },
  {
    quote: "While a good leader sustains momentum, a great leader increases it.",
    author: "John C. Maxwell"
  },
  {
    quote: "A general is just as good or just as bad as the troops under his command make him.",
    author: "General Douglas MacArthur"
  },
  {
    quote: "To do great things is difficult; but to command great things is more difficult.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Leadership does not always wear the harness of compromise.",
    author: "Woodrow Wilson"
  },
  {
    quote: "Business opportunities are like buses",
    author: "there's always another one coming.\""
  },
  {
    quote: "I avoid looking forward or backward, and try to keep looking upward.",
    author: "Charlotte Bronte"
  },
  {
    quote: "The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be.",
    author: "Horace Bushnell"
  },
  {
    quote: "Every artist was first an amateur.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
    author: "Anna Freud"
  },
  {
    quote: "We can do anything we want to do if we stick to it long enough.",
    author: "Helen Keller"
  },
  {
    quote: "Our business in life is not to get ahead of others, but to get ahead of ourselves.",
    author: "E. Joseph Cossman"
  },
  {
    quote: "Insist on yourself. Never imitate.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Who looks outside, dreams. Who looks inside, awakes.",
    author: "Carl Jung"
  },
  {
    quote: "It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.",
    author: "Agnes Repplier"
  },
  {
    quote: "The only journey is the one within.",
    author: "Rainer Maria Rilke"
  },
  {
    quote: "Follow your honest convictions, and stay strong.",
    author: "William Thackeray"
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
    author: "Marcus Aurelius"
  },
  {
    quote: "Action may not always bring happiness; but there is no happiness without action.",
    author: "Benjamin Disraeli"
  },
  {
    quote: "Happiness depends more on the inward disposition of mind than on outward circumstances.",
    author: "Benjamin Franklin"
  },
  {
    quote: "There is no happiness except in the realization that we have accomplished something.",
    author: "Henry Ford"
  },
  {
    quote: "Happiness is not a goal, but a by-product.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Happiness is not a state to arrive at, but a manner of traveling.",
    author: "Margaret Lee Runbeck"
  },
  {
    quote: "Purpose is what gives life a meaning.",
    author: "C. H. Parkhurst"
  },
  {
    quote: "The significance of a man is not in what he attains but in what he longs to attain.",
    author: "Kahlil Gibran"
  },
  {
    quote: "In all things that you do, consider the end.",
    author: "Solon"
  },
  {
    quote: "Life can be pulled by goals just as surely as it can be pushed by drives.",
    author: "Viktor Frankl"
  },
  {
    quote: "The virtue lies in the struggle, not in the prize.",
    author: "Richard Monckton Milnes"
  },
  {
    quote: "To reach a port, we must sail",
    author: "sail, not tie at anchor"
  },
  {
    quote: "Success is the child of audacity.",
    author: "Benjamin Disraeli"
  },
  {
    quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    author: "Vince Lombardi"
  },
  {
    quote: "The secret of success is to know something nobody else knows.",
    author: "Aristotle Onassis"
  },
  {
    quote: "The surest way not to fail is to determine to succeed.",
    author: "Richard Brinsley Sheridan"
  },
  {
    quote: "I cannot give you the formula for success, but I can give you the formula for failure",
    author: "which is: Try to please everybody.\""
  },
  {
    quote: "Careful thinking and hard work will solve nearly all your problems. Try and see for yourself.",
    author: "Ullery"
  },
  {
    quote: "Years teach us more than books.",
    author: "Berthold Auerbach"
  },
  {
    quote: "The only medicine for suffering, crime, and all the other woes of mankind, is wisdom.",
    author: "Thomas Huxley"
  },
  {
    quote: "The art of being wise is knowing what to overlook.",
    author: "William James"
  },
  {
    quote: "The great lesson is that the sacred is in the ordinary, that it is to be found in one's daily life, in one's neighbors, friends and family, in one's backyard.",
    author: "Abraham Maslow"
  },
  {
    quote: "A wise man learns by the mistakes of others, a fool by his own.",
    author: "Latin proverb"
  },
  {
    quote: "No man was ever wise by chance.",
    author: "Seneca"
  },
  {
    quote: "In everything the ends well defined are the secret of durable success.",
    author: "Victor Cousins"
  },
  {
    quote: "Arriving at one goal is the starting point to another.",
    author: "John Dewey"
  },
  {
    quote: "A goal is a dream with a deadline.",
    author: "Napoleon Hill"
  },
  {
    quote: "Most 'impossible' goals can be met simply by breaking them down into bite-size chunks, writing them down, believing them, and then going full speed ahead as if they were routine.",
    author: "Don Lancaster"
  },
  {
    quote: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy"
  },
  {
    quote: "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
    author: "Aristotle"
  },
  {
    quote: "Take risks and you'll get the payoffs. Learn from your mistakes until you succeed. It's that simple.",
    author: "Bobby Flay"
  },
  {
    quote: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    quote: "You miss 100 percent of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "Nothing will ever be attempted if all possible objections must first be overcome.",
    author: "Samuel Johnson"
  },
  {
    quote: "Don't bunt. Aim out of the ballpark.",
    author: "David Ogilvy"
  },
  {
    quote: "The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer, not a dreamer.",
    author: "Nolan Bushnell, entrepreneur."
  },
  {
    quote: "Never give in",
    author: "never, never, never, never, in nothing great or small, large or petty, never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.” - Winston Churchill, British Prime Minister."
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates, co-founder of Microsoft."
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author: "Thomas Edison, inventor."
  },
  {
    quote: "Entrepreneurship is neither a science nor an art. It is a practice.",
    author: "Peter Drucker, management consultant, educator, and author."
  },
  {
    quote: "In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
    author: "David Ogilvy, co-founder of Ogilvy & Mather."
  },
  {
    quote: "Success is how high you bounce after you hit bottom.",
    author: "General George Patton."
  },
  {
    quote: "If you’re not embarrassed by the first version of your product, you’ve launched too late.",
    author: "Reid Hoffman, co-founder of LinkedIn."
  },
  {
    quote: "Positive thinking will let you do everything better than negative thinking will.",
    author: "Zig Ziglar, author, salesman, and motivational speaker."
  },
  {
    quote: "I’m not afraid of dying, I’m afraid of not trying.",
    author: "Jay Z, musician."
  },
  {
    quote: "Whatever the mind can conceive and believe, the mind can achieve.",
    author: "Dr. Napoleon Hill, author of Think and Grow Rich."
  },
  {
    quote: "The longer you’re not taking action the more money you’re losing",
    author: "Carrie Wilkerson"
  },
  {
    quote: "If you live for weekends or vacations, your shit is broken",
    author: "Gary Vaynerchuk"
  },
  {
    quote: "Go Big, or Go Home",
    author: "Eliza Dushku"
  },
  {
    quote: "Most great people have attained their greatest success just one step beyond their greatest failure",
    author: "Napoleon Hill"
  },
  {
    quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work",
    author: "Thomas Edison"
  },
  {
    quote: "Have the end in mind and every day make sure your working towards it",
    author: "Ryan Allis"
  },
  {
    quote: "He who begins many things finishes but few",
    author: "German Proverb"
  },
  {
    quote: "The best use of life is to spend it for something that outlasts it",
    author: "William James"
  },
  {
    quote: "If you think education is expensive, try ignorance",
    author: "Derek Bok"
  },
  {
    quote: "Entrepreneurship is living a few years of your life like most people wont so you can spend the rest of your life like most people can’t",
    author: "A student in Warren G. Tracy’s class"
  },
  {
    quote: "Lend your friend $20, if he doesn’t pay you back then he’s not your friend. Money well spent",
    author: "Ted Nicolas"
  },
  {
    quote: "Be nice to geek’s, you’ll probably end up working for one",
    author: "Bill Gates"
  },
  {
    quote: "To never forget that the most important thing in life is the quality of life we lead",
    author: "Quoted by Tony Hsieh on Retireat21"
  },
  {
    quote: "Its better to own the racecourse then the race horse",
    author: "Unknown"
  },
  {
    quote: "When you go to buy, don’t show your silver",
    author: "Chinese Proverb"
  },
  {
    quote: "It’s easier to ask forgiveness than it is to get permission",
    author: "Grace Hopper"
  },
  {
    quote: "To win without risk is to triumph without glory",
    author: "Corneille"
  },
  {
    quote: "Example is not the main thing in influencing other people; it’s the only thing",
    author: "Abraham Lincoln"
  },
  {
    quote: "Associate yourself with people of good quality, for it is better to be alone than in bad company",
    author: "Booker T. Washington"
  },
  {
    quote: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great",
    author: "Mark Twain"
  },
  {
    quote: "There is only one success",
    author: "to be able to spend your life in your own way"
  },
  {
    quote: "You don’t buy a nice car and get rich you get rich and buy a nice car",
    author: "Unknown"
  },
  {
    quote: "Fall seven times, stand up eight",
    author: "Japanese Proverb"
  },
  {
    quote: "One day your life will flash before your eyes. Make sure it is worth watching",
    author: "Mooie"
  },
  {
    quote: "Whatever the mind can conceive and believe, the mind can achieve",
    author: "Dr. Napoleon Hill"
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work",
    author: "Thomas Alva Edison"
  },
  {
    quote: "If you ain’t making waves, you ain’t kickin’ hard enough",
    author: "Unknown"
  },
  {
    quote: "What is not started will never get finished",
    author: "Johann Wolfgang von Goethe"
  },
  {
    quote: "Do not wait to strike until the iron is hot; but make it hot by striking",
    author: "William B. Sprague"
  },
  {
    quote: "When you cease to dream you cease to live",
    author: "Malcolm Forbes"
  },
  {
    quote: "There are two rules for success. 1) Never tell everything you know.",
    author: "Roger H. Lincoln"
  },
  {
    quote: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon"
  },
  {
    quote: "Every single person I know who is successful at what they do is successful because they love doing it.",
    author: "Joe Penna"
  },
  {
    quote: "Being realistic is the most commonly traveled road to mediocrity.",
    author: "Will Smith"
  },
  {
    quote: "Whenever an individual or a business decides that success has been attained, progress stops.",
    author: "Thomas J. Watson"
  },
  {
    quote: "To be successful, you have to have your heart in your business, and your business in your heart.",
    author: "Thomas J. Watson"
  },
  {
    quote: "If hard work is the key to success, most people would rather pick the lock.",
    author: "Claude McDonald"
  },
  {
    quote: "Success is simply a matter of luck. Ask any failure.",
    author: "Earl Wilson"
  },
  {
    quote: "The road to success is always under construction.",
    author: "Arnold Palmer"
  },
  {
    quote: "Anything the mind can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  },
  {
    quote: "Most great people have attained their greatest success just one step beyond their greatest failure.",
    author: "Napoleon Hill"
  },
  {
    quote: "Whether you think you can or you can’t, you’re right.",
    author: "Henry Ford"
  },
  {
    quote: "Failure defeats losers, failure inspires winners.",
    author: "Robert T. Kiyosaki"
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author: "Thomas Edison"
  },
  {
    quote: "The biggest failure you can have in life is not trying at all.",
    author: "Emil Motycka"
  },
  {
    quote: "I honestly think it is better to be a failure at something you love than to be a success at something you hate.",
    author: "George Burns"
  },
  {
    quote: "Leaders don’t force people to follow, they invite them on a journey.",
    author: "Charles S. Lauer"
  },
  {
    quote: "Example is not the main thing in influencing other people; it’s the only thing.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Leadership is doing what is right when no one is watching.",
    author: "George Van Valkenburg"
  },
  {
    quote: "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
    author: "Dwight D. Eisenhower"
  },
  {
    quote: "The difference between a boss and a leader: a boss says, ‘Go!’ -a leader says, ‘Let’s go!’.",
    author: "E. M. Kelly"
  },
  {
    quote: "I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep.",
    author: "Charles Maurice"
  },
  {
    quote: "The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts.",
    author: "Bertrand Russell"
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    quote: "Cannibals prefer those who have no spines.",
    author: "Stanislaw Lem"
  },
  {
    quote: "A ship in harbor is safe. But that’s now what ships are built for.",
    author: "William Shedd"
  },
  {
    quote: "If one does not know to which port one is sailing, no wind is favorable.",
    author: "Lucius Annaeus Seneca"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "I’m not a businessman. I’m a business, man.",
    author: "Jay-Z"
  },
  {
    quote: "The vision must be followed by the venture. It is not enough to stare up the steps – we must step up the stairs.",
    author: "Vance Hayner"
  },
  {
    quote: "Do not wait to strike until the iron is hot; but make it hot by striking.",
    author: "William B. Sprague"
  },
  {
    quote: "It’s easier to ask forgiveness than it is to get permission.",
    author: "Grace Hopper"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "Mark Twain"
  },
  {
    quote: "One day your life will flash before your eyes. Make sure it is worth watching.",
    author: "Mooie"
  },
  {
    quote: "I think it’s wrong that only one company makes the game Monopoly.",
    author: "Steven Wright"
  },
  {
    quote: "Ever notice how it’s a penny for your thoughts, yet you put in your two-cents? Someone is making a penny on the deal.",
    author: "Steven Wright"
  },
  {
    quote: "Catch a man a fish, and you can sell it to him. Teach a man to fish, and you ruin a wonderful business opportunity.",
    author: "Karl (maybe Groucho) Marx"
  },
  {
    quote: "I used to sell furniture for a living. The trouble was, it was my own.",
    author: "Les Dawson"
  },
  {
    quote: "Marking dynamos for repair $10,000.00—2 hours labor $10.00; knowing where to mark $9,990.00.",
    author: "Invoice from Charles Steinmetz"
  },
  {
    quote: "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
    author: "Robert Frost"
  },
  {
    quote: "My son is now an ‘entrepreneur’. That’s what you’re called when you don’t have a job.",
    author: "Ted Turner"
  },
  {
    quote: "I didn’t go to college, but if I did, I would’ve taken all my tests at a restaurant, ’cause ‘The customer is always right.’",
    author: "Mitch Hedberg"
  },
  {
    quote: "Formal education will make you a living. Self education will make you a fortune.",
    author: "Jim Rohn"
  },
  {
    quote: "The greatest reward in becoming a millionaire is not the amount of money that you earn. It is the kind of person that you have to become to become a millionaire in the first place.",
    author: "Jim Rohn"
  },
  {
    quote: "If you’re not learning while you’re earning, you’re cheating yourself out of the better portion of your compensation.",
    author: "Napoleon Hill"
  },
  {
    quote: "A business that makes nothing but money is a poor business.",
    author: "Henry Ford"
  },
  {
    quote: "After a certain point, money is meaningless. It ceases to be the goal. The game is what counts.",
    author: "Aristotle"
  },
  {
    quote: "I treat business a bit like a computer game. I count money as points. I’m doing really well: making lots of money and lots of points.",
    author: "Michael Dunlop"
  },
  {
    quote: "All of my friends were doing babysitting jobs. I wanted money without the job.",
    author: "Adam Horwitz"
  },
  {
    quote: "I don’t pay good wages because I have a lot of money; I have a lot of money because I pay good wages.",
    author: "Robert Bosch"
  },
  {
    quote: "Lend your friend $20. If he doesn’t pay you back then he’s not your friend. Money well spent.",
    author: "Ted Nicolas"
  },
  {
    quote: "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith"
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Agatha Christie"
  },
  {
    quote: "Hire character. Train skill.",
    author: "Peter Schultz"
  },
  {
    quote: "In preparing for battle I have always found that plans are useless, but planning is indispensable.",
    author: "Dwight D. Eisenhower"
  },
  {
    quote: "You’ve got to stop doing all the things that people have tried, tested, and found out don’t work.",
    author: "Michael Dunlop"
  },
  {
    quote: "I never perfected an invention that I did not think about in terms of the service it might give others… I find out what the world needs, then I proceed to invent.",
    author: "Thomas Edison"
  },
  {
    quote: "If you’re not making mistakes, then you’re not making decisions.",
    author: "Catherine Cook"
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates"
  },
  {
    quote: "One can get anything if he is willing to help enough others get what they want.",
    author: "Zig Ziglar"
  },
  {
    quote: "An entrepreneur tends to bite off a little more than he can chew hoping he’ll quickly learn how to chew it.",
    author: "Roy Ash"
  },
  {
    quote: "The true entrepreneur is a doer, not a dreamer.",
    author: "Nolan Bushnell"
  },
  {
    quote: "Whenever you are asked if you can do a job, tell ’em, ‘Certainly, I can!’ Then get busy and find out how to do it.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Everything started as nothing.",
    author: "Ben Weissenstein"
  },
  {
    quote: "If you start with nothing and end up with nothing, there’s nothing lost.",
    author: "Michael Dunlop"
  },
  {
    quote: "Start today, not tomorrow. If anything, you should have started yesterday.",
    author: "Emil Motycka"
  },
  {
    quote: "Make it happen now, not tomorrow. Tomorrow is a loser’s excuse.",
    author: "Andrew Fashion"
  },
  {
    quote: "Every day I get up and look through the Forbes list of the richest people in America. If I’m not there, I go to work.",
    author: "Robert Orben"
  },
  {
    quote: "Entrepreneurship is living a few years of your life like most people won’t, so that you can spend the rest of your life like most people can’t.",
    author: "Anonymous"
  },
  {
    quote: "Yesterday’s home runs don’t win today’s games.",
    author: "Babe Ruth"
  },
  {
    quote: "You should always stay hungry. Stay hungry, so you can eat.",
    author: "Syed Balkhi"
  },
  {
    quote: "If you’re not living life on the edge, you’re taking up too much space.",
    author: "Anonymous"
  },
  {
    quote: "I wasn’t satisfied just to earn a good living. I was looking to make a statement.",
    author: "Donald Trump"
  },
  {
    quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author: "Thomas Edison"
  },
  {
    quote: "You must either modify your dreams or magnify your skills.",
    author: "Jim Rohn"
  },
  {
    quote: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    author: "Mark Twain"
  },
  {
    quote: "Not a single person whose name is worth remembering lived a life of ease.",
    author: "Ryan P. Allis"
  },
  {
    quote: "If you think that you are going to love something, give it a try. You’re going to kick yourself in the butt for the rest of your life if you don’t.",
    author: "Joe Penna"
  },
  {
    quote: "The best time to plant a tree is twenty years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    quote: "If you want one year of prosperity, grow grain. If you want ten years of prosperity, grow trees. If you want one hundred years of prosperity, grow people.",
    author: "Chinese Proverb"
  },
  {
    quote: "Vision without action is a daydream. Action without vision is a nightmare.",
    author: "Japanese Proverb"
  },
  {
    quote: "Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny.",
    author: "Chinese Proverb"
  },
  {
    quote: "A bad workman blames his tools.",
    author: "Chinese Proverb"
  },
  {
    quote: "A fall into a ditch makes you wiser.",
    author: "Chinese Proverb"
  },
  {
    quote: "Defeat isn’t bitter if you don’t swallow it.",
    author: "Chinese Proverb"
  },
  {
    quote: "The diamond cannot be polished without friction, nor the man perfected without trials.",
    author: "Chinese Proverb"
  },
  {
    quote: "A jade stone is useless before it is processed; a man is good-for-nothing until he is educated.",
    author: "Chinese Proverb"
  },
  {
    quote: "A journey of a thousand miles begins with a single step.",
    author: "Chinese Proverb"
  },
  {
    quote: "The loftiest towers rise from the ground.",
    author: "Chinese Proverb"
  },
  {
    quote: "Building a castle is difficult. Defending and maintaining it is harder still.",
    author: "Asian Proverb"
  },
  {
    quote: "A person who says it cannot be done should not interrupt the man doing it.",
    author: "Chinese Proverb"
  },
  {
    quote: "All cats love fish but fear to wet their paws.",
    author: "Chinese Proverb"
  },
  {
    quote: "Don’t stand by the water and long for fish; go home and weave a net.",
    author: "Chinese Proverb"
  },
  {
    quote: "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
    author: "Hasidic Proverb"
  },
  {
    quote: "Failing to plan is planning to fail.",
    author: "Chinese Proverb"
  },
  {
    quote: "If you pay peanuts, you get monkeys.",
    author: "Chinese Proverb"
  },
  {
    quote: "Make happy those who are near, and those who are far will come.",
    author: "Chinese Proverb"
  },
  {
    quote: "Teachers open the door. You enter by yourself.",
    author: "Chinese Proverb"
  },
  {
    quote: "Find a job you love and you’ll never work a day in your life.",
    author: "Confucius"
  },
  {
    quote: "The entrepreneur builds an enterprise; the technician builds a job.",
    author: "Michael Gerber"
  },
  {
    quote: "If you want to be inventive",
    author: "you have to be willing to fail."
  },
  {
    quote: "The challenge is not just to build a company that can endure; but to build one that is worthy of enduring.",
    author: "Jim Collins"
  },
  {
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
    author: "Bill Gates"
  },
  {
    quote: "Don’t treat your customers like a bunch of purses and wallets.",
    author: "Chris Brogan"
  },
  {
    quote: "Nine out of ten businesses fail; so I came up with a foolproof plan",
    author: "create ten businesses."
  },
  {
    quote: "I’m not a businessman",
    author: "I”m a business, man."
  },
  {
    quote: "If plan ‘A’ fails",
    author: "remember you have 25 letters left."
  },
  {
    quote: "We make a living by what we get. But we make a life by what we give.",
    author: "Winston Churchhill"
  },
  {
    quote: "Believe that you will succeed",
    author: "and you will."
  },
  {
    quote: "Victory comes only after many struggles and countless defeats.",
    author: "Og Mandino"
  },
  {
    quote: "As long as you’re going to be thinking anyway, think big.",
    author: "Donald Trump"
  },
  {
    quote: "Success is how high you bounce after you hit bottom",
    author: "General George Patton"
  },
  {
    quote: "Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
    author: "Steve Jobs"
  },
  {
    quote: "It’s not about how to get started; its about how to get noticed.",
    author: "Steve Case"
  },
  {
    quote: "A ship in harbor is safe, but that’s not what ships are for.",
    author: "John Shedd"
  },
  {
    quote: "If I find 10,000 ways something won’t work, I haven’t failed. I am not discouraged, because every wrong attempt discarded is often a step forward.",
    author: "Thomas Edison"
  },
  {
    quote: "Business opportunities are like buses, there’s always another one coming.",
    author: "Richard Branson"
  },
  {
    quote: "If we don’t allow ourselves to make mistakes, we will never invest in things that are radical.",
    author: "Jeff Clavier"
  },
  {
    quote: "The critical ingredient is getting off your butt and doing something.",
    author: "Nolan Bushnell"
  },
  {
    quote: "Nothing will work unless you do.",
    author: "Maya Angelou"
  },
  {
    quote: "Try not to be a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    quote: "You won’t get anything unless you have the vision to imagine it.",
    author: "John Lennon"
  },
  {
    quote: "A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.",
    author: "John C. Maxwell"
  },
  {
    quote: "In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
    author: "David Ogilvy"
  },
  {
    quote: "Success is doing what you want, where you want, when you want, with whom you want as much as you want.",
    author: "Tony Robbins"
  },
  {
    quote: "If you don’t have a competitive advantage",
    author: "don’t compete."
  },
  {
    quote: "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
    author: "Zig Ziglar"
  },
  {
    quote: "If everything seems under control, you’re just not going fast enough.",
    author: "Mario Andretti"
  },
  {
    quote: "Don’t be trapped by dogma",
    author: "which is living with the results of other people’s thinking."
  },
  {
    quote: "Do or do not. There is no try.",
    author: "Yoda"
  },
  {
    quote: "Show me a person who never made a mistake, and I will show you a person who never did anything.",
    author: "William Rosenberg, founder of Dunkin’ Donuts"
  },
  {
    quote: "Ideas are commodity. Execution of them is not.",
    author: "Michael Dell, CEO of Dell"
  },
  {
    quote: "User experience is everything. It always has been, but it’s undervalued and underinvested in. If you don’t know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. Get your whole company on board.",
    author: "Evan Williams, co-founder of Twitter"
  },
  {
    quote: "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
    author: "Winston Churchill, British Prime Minister"
  },
  {
    quote: "The man who does not work for the love of work but only for money is likely to neither make money nor find much fun in life.",
    author: "Charles M. Schwab, American steel magnate"
  },
  {
    quote: "Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.",
    author: "Anthony Volodkin, founder of Hype Machine"
  },
  {
    quote: "Ideas are easy. Implementation is hard.",
    author: "Guy Kawasaki, founder of AllTop"
  },
  {
    quote: "You can say anything to anyone, but how you say it will determine how they will react.",
    author: "John Rampton, entrepreneur and investor"
  },
  {
    quote: "Always deliver more than expected.",
    author: "Larry Page, co-founder of Google"
  },
  {
    quote: "Assume you have 90 seconds with a new user before they decide to use your app or delete it.",
    author: "Tamara Steffens, Acompli"
  },
  {
    quote: "Even if you don’t have the perfect idea to begin with, you can likely adapt.",
    author: "Victoria Ransom, co-founder of Wildfire Interactive"
  },
  {
    quote: "Make your team feel respected, empowered and genuinely excited about the company’s mission.",
    author: "Tim Westergen, founder of Pandora"
  },
  {
    quote: "Stay self-funded as long as possible.",
    author: "Garrett Camp, co-founder of Stumbleupon"
  },
  {
    quote: "In between goals is a thing called life, that has to be lived and enjoyed.",
    author: "Sid Caesar, Entertainer"
  },
  {
    quote: "Wonder what your customer really wants? Ask. Don’t tell.",
    author: "Lisa Stone, co-founder of BlogHer"
  },
  {
    quote: "When times are bad is when the real entrepreneurs emerge.",
    author: "Robert Kiyosaki, author of Rich Dad Poor Dad"
  },
  {
    quote: "What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed.",
    author: "Dave Thomas, founder of Wendy’s"
  },
  {
    quote: "Get big quietly, so you don’t tip off potential competitors.",
    author: "Chris Dixon, co-founder of Hunch"
  },
  {
    quote: "Don’t worry about failure; you only have to be right once.",
    author: "Drew Houston, founder of Dropbox"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
    author: "Steve Jobs"
  },
  {
    quote: "Don’t be cocky. Don’t be flashy. There’s always someone better than you.",
    author: "Tony Hsieh, Zappos.com CEO"
  },
  {
    quote: "Don’t take too much advice. Most people who have a lot of advice to give — with a few exceptions — generalize whatever they did. Don’t over-analyze everything. I myself have been guilty of over-thinking problems. Just build things and find out if they work.",
    author: "Ben Silbermann, co-founder of Pinterest"
  },
  {
    quote: "Openly share and talk to people about your idea. Use their lack of interest or doubt to fuel your motivation to make it happen.",
    author: "Todd Garland, founder of BuySellAds"
  },
  {
    quote: "How you climb a mountain is more important than reaching the top.",
    author: "Yvon Chouinard, founder of Patagonia"
  },
  {
    quote: "Associate yourself with people of good quality, for it is better to be alone than in bad company.",
    author: "Booker T. Washington, Educator and author"
  },
  {
    quote: "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
    author: "Bill Gates, co-founder of Microsoft"
  },
  {
    quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
    author: "Warren Buffett, Investor"
  },
  {
    quote: "Statistics suggest that when customers complain, business owners and managers ought to get excited about it. The complaining customer represents a huge opportunity for more business.",
    author: "Zig Ziglar, author and motivational speaker"
  },
  {
    quote: "There is only one success- to be able to spend your life in your own way.",
    author: "Christopher Morley, journalist"
  },
  {
    quote: "Formal education will make you a living; self-education will make you a fortune.",
    author: "Jim Rohn, author and speaker"
  },
  {
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford, founder of Ford Motor Company"
  },
  {
    quote: "Rarely have I seen a situation where doing less than the other guy is a good strategy.",
    author: "Jimmy Spithill, Australian yachtsman"
  },
  {
    quote: "You miss 100 percent of the shots you don’t take.",
    author: "Wayne Gretzky, NHL Hall of Famer"
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese proverb"
  },
  {
    quote: "The secret to successful hiring is this: look for the people who want to change the world.",
    author: "Marc Benioff, CEO of Salesforce"
  },
  {
    quote: "Twenty years from now, you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain, author"
  },
  {
    quote: "If you’ve got an idea, start today. There’s no better time than now to get going. That doesn’t mean quit your job and jump into your idea 100% from day one, but there’s always small progress that can be made to start the movement.",
    author: "Kevin Systrom, co-founder of Instagram"
  },
  {
    quote: "It’s almost always harder to raise capital than you thought it would be, and it always takes longer. So plan for that.",
    author: "Richard Harroch, Venture Capitalist"
  },
  {
    quote: "For all of the most important things, the timing always sucks. Waiting for a good time to quit your job? The stars will never align and the traffic lights of life will never all be green at the same time. The universe doesn’t conspire against you, but it doesn’t go out of its way to line up the pins either. Conditions are never perfect. “Someday is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it’s important to you and you want to do it “eventually, just do it and correct course along the way.",
    author: "Timothy Ferriss, author of The 4-Hour Work Week"
  },
  {
    quote: "I don’t have big ideas. I sometimes have small ideas, which seem to work out.",
    author: "Matt Mullenweg, founder of Automattic"
  },
  {
    quote: "Fail often so you can succeed sooner.",
    author: "Tom Kelley, Ideo partner"
  },
  {
    quote: "When you cease to dream you cease to live.",
    author: "Malcolm Forbes, chairman and editor in chief of Forbes Magazine"
  },
  {
    quote: "Whatever the mind can conceive and believe, the mind can achieve.",
    author: "Dr. Napoleon Hill, author of Think and Grow Rich"
  },
  {
    quote: "Running a start-up is like eating glass. You just start to like the taste of your own blood.",
    author: "Sean Parker, co-founder of Napster"
  },
  {
    quote: "My number one piece of advice is: you should learn how to program.",
    author: "Mark Zuckerberg, founder of Facebook"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney, co-founder of the Walt Disney Company"
  },
  {
    quote: "The pace of change for entrepreneurs is rapidly accelerating, and the cost and risk of launching a new business and getting off the ground is just amazing. The ability to gain user feedback really quickly and adapt to what your consumers want is totally different with the web as it is now. But finding a new market, helping people and taking that original idea and turning it into a business is really exciting right now.",
    author: "Matt Mickiewicz, co-founder of 99 Designs"
  },
  {
    quote: "Building and hanging on to an audience is the biggest role of social media.",
    author: "Matthew Inman, The Oatmeal"
  },
  {
    quote: "Every feature has some maintenance cost, and having fewer features lets us focus on the ones we care about and make sure they work very well.",
    author: "David Karp, founder of Tumblr"
  },
  {
    quote: "A poorly implemented feature hurts more than not having it at all.",
    author: "Noah Everett, founder of Twitpic"
  },
  {
    quote: "This defines entrepreneur and entrepreneurship",
    author: "the entrepreneur always searches for change, responds to it, and exploits it as an opportunity.”― Peter F. Drucker, educator and author"
  },
  {
    quote: "You don’t learn to walk by following rules. You learn by doing and falling over.",
    author: "Richard Branson, founder of Virgin Group"
  },
  {
    quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    author: "Reid Hoffman, co-founder of Linkedin"
  },
  {
    quote: "Risk more than others think is safe. Dream more than others think is practical.",
    author: "Howard Schultz, CEO of Starbucks"
  },
  {
    quote: "You shouldn’t focus on why you can’t do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.",
    author: "Steve Case, co-founder of AOL"
  },
  {
    quote: "The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer not a dreamer.",
    author: "Nolan Bushnell, founder of Atari"
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill, author"
  },
  {
    quote: "Success is not what you have, but who you are.",
    author: "Bo Bennet, author and entreprenuer"
  },
  {
    quote: "One of the huge mistakes people make is that they try to force an interest on themselves. You don’t choose your passions; your passions choose you.",
    author: "Jeff Bezos, founder and CEO of Amazon.com"
  },
  {
    quote: "Lots of companies don’t succeed over time. What do they fundamentally do wrong? They usually miss the future.",
    author: "Larry Page, CEO of Google"
  },
  {
    quote: "It takes humility to realize that we don’t know everything, not to rest on our laurels and know that we must keep learning and observing. If we don’t, we can be sure some startup will be there to take our place.",
    author: "Cher Wang, CEO of HTC"
  },
  {
    quote: "There’s an entrepreneur right now, scared to death, making excuses, saying, ‘It’s not the right time just yet.’ There’s no such thing as a good time. Get out of your garage and go take a chance, and start your business.",
    author: "Kevin Plank, CEO of Under Armour"
  },
  {
    quote: "Be really picky with your hiring, and hire the absolute best people you possibly can. People are the most important component of almost every business, and attracting the best talent possible is going to make a huge difference.",
    author: "Peter Berg, founder of October Three"
  },
  {
    quote: "Worry about being better; bigger will take care of itself. Think one customer at a time and take care of each one the best way you can.",
    author: "Gary Comer, founder of Land’s End"
  },
  {
    quote: "You have a viable business only if your product is either better or cheaper than the alternatives. If it’s not one or the other, you might make some money at first, but it’s not a sustainable business.",
    author: "Jim Koch, founder of Boston Beer Co."
  },
  {
    quote: "Every time I took these bigger risks, the opportunity for a bigger payout was always there.",
    author: "Casey Neistat, filmmaker"
  },
  {
    quote: "If you can do something to get somebody excited — not everybody — but if you can be the best for somebody, then you can win.",
    author: "Ron Shaich, founder and CEO of Panera Bread"
  },
  {
    quote: "Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.",
    author: "Thomas J. Watson, businessman"
  },
  {
    quote: "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
    author: "Tony Robbins, motivational speaker"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee, actor and martial arts instructor"
  },
  {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese proverb"
  },
  {
    quote: "The successful man is the one who finds out what is the matter with his business before his competitors do.",
    author: "Roy L. Smith, animator and film director"
  },
  {
    quote: "There’s no shortage of remarkable ideas, what’s missing is the will to execute them.",
    author: "Seth Godin, author and speaker"
  },
  {
    quote: "Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down.",
    author: "Charles F. Kettering, inventor"
  },
  {
    quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: "David Brinkley, newscaster"
  },
  {
    quote: "Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing it is stupid.",
    author: "Albert Einstein, Theoretical Physicist"
  },
  {
    quote: "Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were.",
    author: "David Rockefeller, American banker"
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot, journalist and novelist"
  },
  {
    quote: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey, author and businessman"
  },
  {
    quote: "There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.",
    author: "Aristotle, Greek philosopher"
  },
  {
    quote: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray, investor and motivational speaker"
  },
  {
    quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills, operatic soprano"
  }
]
