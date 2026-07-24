// Base sayings data — all 114 sayings.
// Sayings 1–5 include full reflections, concepts, and contemplation prompts.
// Sayings 6–20 include saying texts and contemplation prompts.
// Sayings 21–114 are stubs ready to fill in via the admin panel.
//
// To add your own content permanently, edit via the admin panel,
// export the JSON, and paste the overrides back into this file.

export const baseSayings = [
  // ─────────────────────────────────────────────────────────────
  // SAYINGS 1–5  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    number: 1,
    text: 'These are the hidden sayings that the living Jesus spoke, and which Didymos Judas Thomas wrote down. And he said: Whoever finds the interpretation of these sayings will not taste death.',
    reflection: `The Gospel of Thomas opens not with a narrative but with a declaration of stakes: whoever finds the interpretation of these sayings will not taste death. This is the invitation — and also the warning — for what follows demands interpretation, not mere reading.

The word "hidden" does not mean deliberately withheld. It means concealed within, like a seed inside a fruit. These sayings have a surface and a depth. Most of us spend our lives on the surface.

The phrase "the living Jesus" is significant. The text presents these as the words of one who is alive — not a past teacher but a present reality. This invites us to read not as scholars of history but as people listening for a voice that speaks into this moment.

"Will not taste death" resonates through mystical traditions worldwide. It points not to physical immortality but to a shift in identification — from the mortal, constructed self to something deeper that was never born and will never die. The promise is not escape from physical death but freedom from the tyranny of it.`,
    contemplationPrompt: 'What would change in how I live if I truly knew myself to be beyond death? What is it in me that already knows this?',
    concepts: [
      {
        term: 'Hidden sayings',
        definition: 'The Coptic word (pshot) suggests something concealed within, requiring inner searching to uncover — like the kernel within a shell. Not secret from others, but secret until the moment of genuine encounter.'
      },
      {
        term: 'Living Jesus',
        definition: 'The Gospel of Thomas presents Jesus not as a historical figure of the past but as a present, living source of wisdom — accessible in the moment of genuine seeking.'
      },
      {
        term: 'Interpretation',
        definition: 'These sayings are not meant to be understood immediately. They work like koans — the mind must wrestle with them until a deeper knowing opens.'
      }
    ],
    relatedSayings: [2, 18, 111],
    published: true
  },
  {
    id: 2,
    number: 2,
    text: 'Jesus said: Let the one who seeks not stop seeking until they find. When they find, they will be troubled. When they are troubled, they will marvel — and they will reign over all.',
    reflection: `This saying maps the spiritual journey with extraordinary honesty: seek → find → be troubled → marvel → reign. Notice that the path passes directly through trouble before arriving at wonder. This is crucially different from traditions that promise only comfort.

What troubles us? The things we genuinely find when we seek with openness. We find that our sense of who we are is more constructed, more fragile, more borrowed from others than we thought. We find that certainties we relied on dissolve under scrutiny.

But the saying does not stop at trouble. Through trouble comes marvel — the awe of encountering something vastly larger than the self we thought we were. And through marvel comes what the text calls "reigning over all." This is not power over others. It is sovereignty: the settled freedom of one who has found what cannot be taken.

The sequence matters. Do not skip the trouble. Do not protect yourself from the finding that disturbs you. The text suggests this is exactly where the path narrows to what you are truly seeking.`,
    contemplationPrompt: 'What have I been seeking but afraid to find? What troubling discovery have I been protecting myself from?',
    concepts: [
      {
        term: 'Troubled',
        definition: 'The Greek word underlying the Coptic (tarasso) carries a sense of being deeply stirred, shaken up — like water disturbed from the bottom. Not anxiety, but transformation.'
      },
      {
        term: 'Marvel',
        definition: 'Awe that arises when the ordinary self encounters something beyond its comprehension. It is an opening, not an overwhelm.'
      },
      {
        term: 'Reign over all',
        definition: 'Not mastery over external things, but inner sovereignty — the freedom that comes when one is no longer enslaved by searching for what one already has.'
      }
    ],
    relatedSayings: [1, 3, 92, 94],
    published: true
  },
  {
    id: 3,
    number: 3,
    text: "Jesus said: If your leaders say to you, 'The Kingdom is in the sky,' then the birds will get there before you. If they say, 'It is in the sea,' then the fish will arrive first. No — the Kingdom is within you and it is around you. When you know yourselves, you will be known, and you will understand that you are children of the living Father. But if you do not know yourselves, you live in poverty — and you are that poverty.",
    reflection: `Perhaps no single saying in the Gospel of Thomas is more foundational than this one. It directly challenges the most common spiritual strategy there is: looking outward for what can only be found inward.

The Kingdom is not a place to travel to, not a future state to wait for, not a reward to earn. The Kingdom is here, now, within and around us — and the only reason we do not see it is that we have not yet come to know ourselves.

The second half of the saying is even more pointed. Not knowing yourself is not merely a neutral gap in knowledge. You live in poverty. You are that poverty. The anguish, restlessness, and chronic sense of lack that characterises ordinary human life is not circumstantial — it is a direct consequence of not knowing what you are.

What bridges the two halves? Self-knowledge. "When you know yourselves, you will be known, and you will understand that you are children of the living Father." The journey inward does not lead to isolation — it leads to a recognition of shared being with the ground of all existence.`,
    contemplationPrompt: 'Where am I currently looking for the Kingdom outside myself? What would it mean to look within right now, in this very moment?',
    concepts: [
      {
        term: 'Kingdom',
        definition: "In the Gospel of Thomas, 'Kingdom' (Coptic: mntero) does not refer to a future heavenly realm but to a present state of awareness — a mode of being fully awake to what is."
      },
      {
        term: 'Know yourselves',
        definition: 'Self-knowledge here means more than psychological insight. It means recognising the deepest nature of what you are — the awareness in which all experience appears.'
      },
      {
        term: 'Children of the living Father',
        definition: 'A relational metaphor for the recognition that individual consciousness is not separate from but intimately connected to the ground of all being.'
      }
    ],
    relatedSayings: [113, 51, 1],
    published: true
  },
  {
    id: 4,
    number: 4,
    text: 'Jesus said: An elderly person will not hesitate to ask a seven-day-old infant about the place of life — and that person will live. For many who are first will become last, and they will become a single one.',
    reflection: `This saying overturns every hierarchy of knowledge we take for granted. An elder — bearer of years, experience, social status, accumulated wisdom — goes to a seven-day-old infant with the deepest question a human being can carry: Where is the place of life?

Why an infant? The child has not yet been thoroughly formed by structures of language, social identity, and accumulated self-concept. The child is still, in some sense, closer to the source — not because of superior intelligence, but because less has been layered between original being and the world.

This resonates with a theme found in many traditions: the beginner's mind, the fool's wisdom, the innocence that precedes and perhaps also follows the long middle journey of becoming and forgetting.

The closing phrase — "they will become a single one" — appears throughout the Gospel. It points to a non-dual recognition: the separation we feel, the hierarchy between knower and known, elder and child, self and other, gradually reveals itself as a construction. Underneath it, there is a unity that was never divided.`,
    contemplationPrompt: 'What in me is still new — not yet hardened by habit and certainty? Can I bring my deepest questions from that place of genuine not-knowing?',
    concepts: [
      {
        term: 'Seven-day-old infant',
        definition: 'A symbol of original being — consciousness before it has been fully shaped into a social person. Not ignorant, but prereflective, still near the source.'
      },
      {
        term: 'Place of life',
        definition: 'A recurring question in mystical literature: where is the source? Where does genuine aliveness come from? Not a geographic question but an ontological one.'
      },
      {
        term: 'A single one',
        definition: "Coptic: oua ouōt — literally 'one alone' or 'a single one.' Appears many times in Thomas. Points toward non-dual awareness, the undivided ground beneath apparent multiplicity."
      }
    ],
    relatedSayings: [22, 106, 23],
    published: true
  },
  {
    id: 5,
    number: 5,
    text: 'Jesus said: Know what is before your face, and what is hidden from you will be revealed to you. For there is nothing hidden that will not become known.',
    reflection: `This saying teaches that clarity of perception is the entire practice. Not some special technique, not a distant revelation, not an earned insight — simply: know what is before your face.

What keeps us from knowing what is before our face? The gap between experience and interpretation. We rarely see what is here; we see our story about what is here. We see our projections, our fears, our wishes, our habitual patterns — all laid over the actual present moment like a transparency. The saying gently insists: see this.

The promise that follows is extraordinary: from radically honestly looking at what is immediate and obvious, the hidden will reveal itself. The hidden is not elsewhere. It is here, embedded in what is present, waiting for the one who looks with full attention.

The final line — there is nothing hidden that will not become known — has both a comforting and uncomfortable resonance. What we seek is not locked away; it will come to light. But also: what we avoid seeing, what we suppress and push out of awareness — this too is continuously moving toward revelation. We can cooperate with this movement or resist it. But we cannot stop it.`,
    contemplationPrompt: 'What is directly before my face right now that I am not fully seeing? Can I give this moment my complete, unjudging attention?',
    concepts: [
      {
        term: 'Before your face',
        definition: 'The immediate, present reality — not something abstract or distant. This saying grounds the whole spiritual practice in direct present-moment attention.'
      },
      {
        term: 'Nothing hidden',
        definition: 'The universe is not concealing from us what we seek. The barriers are within our own seeing. When the seeing clears, what was concealed reveals itself naturally.'
      }
    ],
    relatedSayings: [6, 108, 92],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 6–20  Texts + prompts (add reflections via admin)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6, number: 6,
    text: 'His disciples questioned him and said: Do you want us to fast? How should we pray? Should we give alms? What kind of diet should we keep?\n\nJesus said: Do not lie, and do not do what you hate. For all things are revealed before heaven. There is nothing hidden that will not be made known. Nothing covered will remain undisclosed.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What do I do out of obligation or performance that I actually hate? What would authentic practice look like for me?',
    concepts: [], relatedSayings: [14, 5], published: true
  },
  {
    id: 7, number: 7,
    text: 'Jesus said: Blessed is the lion that a person eats — and the lion becomes human. And cursed is the person that a lion eats — and the lion becomes human.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What in my nature am I consuming and transforming by awareness? What is consuming me instead?',
    concepts: [
      { term: 'Lion', definition: 'Often read as a symbol of the instinctual, passionate, or lower nature — that which must be integrated into consciousness rather than suppressed or surrendered to.' }
    ],
    relatedSayings: [8], published: true
  },
  {
    id: 8, number: 8,
    text: 'And he said: People are like a wise fisherman who cast his net into the sea and drew it up full of small fish. Among them the wise fisherman found one large, fine fish. He returned all the small fish to the sea and chose the large fish without hesitation. Anyone who has ears to hear, let them hear.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What is the one large, fine thing I am being called to choose? What smaller things am I holding onto that prevent me from choosing it fully?',
    concepts: [], relatedSayings: [107], published: true
  },
  {
    id: 9, number: 9,
    text: 'Jesus said: A sower went out and scattered seeds. Some fell on the road — and the birds ate them. Others fell on rock, found no root in the soil, and produced no grain. Others fell on thorns that choked them. And others fell on good soil and produced good fruit: sixty per measure and one hundred and twenty per measure.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What kind of inner soil am I offering to this saying right now? What would it take for me to become more receptive?',
    concepts: [], relatedSayings: [57], published: true
  },
  {
    id: 10, number: 10,
    text: 'Jesus said: I have cast fire upon the world, and see — I am watching over it until it blazes.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What fire of awakening has been kindled in you — perhaps small, perhaps not yet blazing? Can you tend it today?',
    concepts: [
      { term: 'Fire', definition: 'In contemplative tradition, fire is a symbol of transformative awareness — burning away what is inessential, illuminating what is real.' }
    ],
    relatedSayings: [16, 82], published: true
  },
  {
    id: 11, number: 11,
    text: 'Jesus said: This sky will pass away, and the sky above it will pass away. The dead are not alive, and the living will not die.\n\nIn the days when you ate what is dead, you made it come alive. When you come to dwell in the light, what will you do? On the day when you were one, you became two. But now that you are two, what will you do?',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'I was once one. I have become two. What would it mean to return to oneness — not by going backward, but by going through?',
    concepts: [], relatedSayings: [4, 22], published: true
  },
  {
    id: 12, number: 12,
    text: 'The disciples said to Jesus: We know you will leave us. Who will be our leader?\n\nJesus said: Wherever you are, you are to go to James the Just, for whose sake heaven and earth came into being.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'When the teacher is gone, where do I go? What inner compass do I rely on?',
    concepts: [], relatedSayings: [13], published: true
  },
  {
    id: 13, number: 13,
    text: "Jesus said to his disciples: Make a comparison — tell me who I am like.\n\nSimon Peter said: You are like a just angel.\nMatthew said: You are like a wise philosopher.\nThomas said: Teacher, my mouth cannot bear to say what you are like.\n\nJesus said: I am not your teacher. You have drunk from the bubbling spring that I tend and become intoxicated. He then took Thomas aside and spoke three things to him privately.\n\nWhen Thomas returned, the others asked: What did Jesus say to you? Thomas said: If I tell you even one of the things he told me, you will pick up stones to throw at me — and fire will come from those stones and burn you.",
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What aspect of Jesus — or of this teaching — is beyond my words? Can I sit with the unnamed rather than rushing to a label?',
    concepts: [], relatedSayings: [12, 108], published: true
  },
  {
    id: 14, number: 14,
    text: 'Jesus said: If you fast, you will bring sin upon yourselves. If you pray, you will be condemned. If you give alms, you will harm your spirits.\n\nWhen you enter a territory and travel through the countryside, and people receive you, eat whatever is placed before you. Heal the sick among them. For nothing that enters your mouth will defile you — what comes out of your mouth is what defiles you.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What religious practice have I turned into performance? What does authentic inner action look like, stripped of display?',
    concepts: [], relatedSayings: [6], published: true
  },
  {
    id: 15, number: 15,
    text: 'Jesus said: When you see one who was not born from woman, fall upon your face and worship — that is your Father.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What in my experience was not born — was never created — and therefore cannot die? Can I sense that now?',
    concepts: [], relatedSayings: [46, 101], published: true
  },
  {
    id: 16, number: 16,
    text: "Jesus said: People perhaps think I have come to cast peace upon the world. They do not know that I have come to cast divisions upon the earth: fire, sword, and war. For there will be five in a house: three against two and two against three, father against son and son against father — and they will stand alone.",
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'In what areas of my life is genuine truth creating necessary disruption? What am I being called to stand alone in?',
    concepts: [], relatedSayings: [10, 23], published: true
  },
  {
    id: 17, number: 17,
    text: 'Jesus said: I will give you what eye has not seen, what ear has not heard, what hand has not touched, what has not come into the human heart.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What experience lies beyond the reach of my ordinary senses and thoughts? Can I make space for something entirely new to arrive?',
    concepts: [], relatedSayings: [1, 18], published: true
  },
  {
    id: 18, number: 18,
    text: "The disciples said to Jesus: Tell us, how will our end come?\n\nJesus said: Have you found the beginning, so that you now seek the end? Where the beginning is, the end will also be. Blessed is one who stands at the beginning — that one will know the end and will not taste death.",
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What is the "beginning" that precedes my story, my name, my thoughts? If I could touch that, what would I find?',
    concepts: [], relatedSayings: [19, 1], published: true
  },
  {
    id: 19, number: 19,
    text: 'Jesus said: Blessed is one who came into being before coming into being.\n\nIf you become my disciples and listen to my words, these stones will serve you. For you have five trees in paradise which do not move summer or winter, and their leaves do not fall. Whoever knows them will not taste death.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What exists in me that preceded my birth and will persist beyond my death? Can I rest in that for a moment?',
    concepts: [], relatedSayings: [18, 1, 4], published: true
  },
  {
    id: 20, number: 20,
    text: 'The disciples said to Jesus: Tell us — what is the Kingdom of Heaven like?\n\nHe said to them: It is like a mustard seed, the smallest of all seeds — but when it falls on cultivated soil, it puts forth a great branch and becomes a shelter for birds of heaven.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What small, almost invisible seed of awareness or truth is growing in me right now? Can I give it space?',
    concepts: [], relatedSayings: [96, 97, 98], published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 21–24  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 21,
    number: 21,
    text: `Mary said to Jesus, "What do your disciples resemble?" He said, "What they resemble is children living in a plot of land that is not theirs. When the owners of the land come they will say, 'Surrender our land to us.' They, for their part, strip naked in their presence in order to give it back to them, and they give them their land. Thus I say that the owner of an estate, knowing that a bandit is coming, will keep watch before the bandit comes and not let the bandit break into the house of the estate and steal the possessions. You (plur.), then, be on your guard against the world. Arm yourselves with great power lest the brigands find a way to get to you; for the trouble that you expect will come. Let an experienced person dwell in your midst! When the crop had matured, that person came in haste, sickle in hand, and harvested it. Whoever has ears to hear should listen!"`,
    reflection: `This saying is a cornerstone for understanding the Gnostic leanings often attributed to the Gospel of Thomas.

- **The Children** represent the spiritually enlightened — the disciples. They are "little" because they are innocent of worldly attachments.
- **The Field** represents the material world or the physical body; it does not belong to the spirit but is a temporary dwelling.
- **Stripping Naked** is not about literal nudity. In the context of Thomas, "undressing" symbolises shedding the material body or discarding worldly identity to return to a purely spiritual state.
- **The Thief** — a common motif also found in the New Testament — represents the unexpected arrival of a spiritual crisis, used here to emphasise constant mindfulness.

While the "Thief in the Night" imagery appears in Matthew 24:43 and Luke 12:39, the "Children in the Field" parable is unique to the Gospel of Thomas. It shifts the focus from the Second Coming of Christ to the internal realisation of the soul's detachment from the earth.

In the Thomasine tradition, the "world" is a predatory force that seeks to lull the spirit into a sleep of forgetfulness. To "watch" means to recognise that the material world is a distraction. Your "house" is your inner spirit. If you are not home — that is, if you are not mindful — the "thief" (worldly desires, ego, social pressures) can break in and carry away your goods, your divine spark, your clarity.

Ancient houses in the Near East were often made of mud brick. A thief would not just pick a lock; they would dig through the wall. The vigil is meant to catch the intruder before the structural integrity of your inner life is compromised. If you are not paying attention to what you allow in — toxic information, mindless habits, negative environments — you are leaving the door open.`,
    contemplationPrompt: `What areas of your life are you treating as your "home," even though they are temporary or owned by someone else? If the owners showed up today, how much of your identity would be lost with them?

What "garments" — titles, reputations, past grievances — are you wearing so tightly that they feel like your own skin? Could you stand naked, without your achievements or possessions, and still know who you are?

What is currently digging through your walls? Where is the weak point in your perimeter where you tend to lose your focus or your peace? When you are scrolling through your phone or rushing through your day, who is "at home" in your mind?`,
    concepts: [],
    relatedSayings: [4, 22, 27, 37, 56, 80, 103],
    published: true
  },
  {
    id: 22,
    number: 22,
    text: `Jesus saw some infants who were being suckled. He said to his disciples: "These infants being suckled are like those who enter the kingdom." They said to him: "If we then become children, shall we enter the kingdom?" Jesus said to them: "When you make the two one, and when you make the inside as the outside, and the outside as the inside, and the upper as the lower, and when you make the male and the female into a single one, so that the male is not male and the female not female, and when you make eyes in place of an eye, and a hand in place of a hand, and a foot in place of a foot, an image in place of an image — then shall you enter the kingdom."`,
    reflection: `Jesus points to nursing infants as the ultimate insiders of the kingdom. Why? Because an infant does not yet perceive the world through labels, judgements, or divisions. To them, there is no "me" versus "other," no subject versus object. They exist in a state of undifferentiated wholeness.

To enter the kingdom, Jesus describes a radical re-integration of the opposites that usually define our lives:

- **Making the two into one** — moving past the "this vs. that" mentality.
- **Inside and outside** — ensuring your internal reality (thoughts, spirit) matches your external reality (actions, body).
- **Upper and lower** — bridging the divine and the mundane.
- **Male and female** — transcending gendered ego roles to reach a state of oneness where you are not defined by biological or social binaries.

You enter the kingdom when you stop slicing the world into pieces and start seeing the underlying unity in everything.

We begin in a state of oneness because we do not know any better. There is no "me" and "not-me" — just existence. It is beautiful, but it is unconscious. Then we enter duality: good vs. evil, male vs. female, success vs. failure. We get lost here because we mistake the divisions for the final truth. The third stage — conscious oneness — is the Kingdom. By finding the divine spark within, we collapse the dualities. We realise the outside and the inside were never actually separate.

The journey is not about becoming something new. It is about remembering what you were before the world told you that you were separate from it.`,
    contemplationPrompt: `Am I excluding half of my potential because I have labelled it as "not me"? The Spark is neither male nor female; it is the source of both.`,
    concepts: [],
    relatedSayings: [3, 11, 50, 106],
    published: true
  },
  {
    id: 23,
    number: 23,
    text: `Jesus said: "I shall choose you, one out of a thousand and two out of ten thousand, and they shall stand as a single one."`,
    reflection: `Choosing someone does not mean they are more worthy; it means they are ready. The ego loves to interpret "chosen" as "special" or "superior." But in the context of deep inner work, being chosen is more like a crop being ready for harvest. A green tomato is not less worthy than a red one — it simply needs more time on the vine. To force the process before the individual is ready is harmful.

In depth psychology — Carl Jung's work on individuation, for instance — facing the unconscious mind, dismantling ego-stories, and looking at our shadows requires a strong, stable internal container. When we are not ready, forcing this work can lead to fragmentation, severe anxiety, or a breakdown. The ego braces against it because it feels threatened.

Some spiritual traditions call this the Bodhisattva path: those who do the arduous inner work do not do it to escape the world, but to return to it and assist others. By facing your own darkness and finding wholeness, you change the energetic blueprint available to those around you. You model a new way of being. You prove that freedom is possible, which quietly gives others permission to seek it when their time comes.

When we are ready, we can observe our inner workings without falling apart. We outgrow our limiting narratives and integrate the difficult parts of ourselves — fulfilling the end of this saying: we stand as a single one. Whole, unified, and integrated.

You are ready when you can choose yourself.`,
    contemplationPrompt: `Where am I still waiting for external permission to choose myself? What specific, outgrown story about my identity am I holding onto just because it makes other people comfortable? When I feel "unready," am I actually just bracing against the process rather than trusting my own wholeness?`,
    concepts: [],
    relatedSayings: [3, 22, 70, 111],
    published: true
  },
  {
    id: 24,
    number: 24,
    text: `His disciples said: "Teach us about the place where you are, for it is necessary for us to seek it." He said to them: "He who has ears, let him hear! There is light within a man of light, and he lights the whole world. If he does not shine, there is darkness."`,
    reflection: `The disciples are looking for a geographical or external spiritual "place" where Jesus resides so they can travel there to find it. Jesus dismisses the idea of a destination out in the world and points them inward instead.

The "person of light" refers to an individual who has awakened to the divine spark within themselves. In the Thomasine tradition, enlightenment is not found by following a leader to a specific location. It is found by recognising the primordial truth that already exists inside you. When this inner light is realised and lived, it naturally radiates outward, giving clarity and light to the rest of the world. Conversely, failing to recognise and live from this inner light leaves the individual — and those around them — in darkness and confusion.

The disciples' question is the same one we ask whenever we look outward for answers that can only be found within: Which teacher should I follow? Which tradition holds the truth? Which method will finally fix me? Jesus turns the question around. The place you are seeking is not somewhere you can travel to. It is what you are looking out from right now.`,
    contemplationPrompt: `Where am I outsourcing my certainty? Are there areas in my life where I look to an external expert, tradition, or trend to tell me what is true or right?

What does my "light" actually look like? If I strip away the expectations of my profession, my culture, and my peers, what are the core, unborrowed truths that remain?

Am I mistaking the map for the territory — spending so much time studying the paths others have walked that I am neglecting to walk my own?`,
    concepts: [],
    relatedSayings: [3, 70, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 25  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 25,
    number: 25,
    text: 'Jesus said: Love your brother as your soul; watch over him like the apple of your eye.',
    reflection: `### I. The Nature of the Soul: The Divine Spark

This text immediately reminds of love your neighbour as yourself. But it goes deeper. It is not just "as yourself" — it is "as your soul." The soul is not the ego, the personality, or the social self. It is the divine essence within you that is identical to the divine essence within others.
When we are told to love our brother "as our soul," we are being asked to love him not for what he does or doesn't do, but for the divine essence within him (for who he really is - not what we are seeing on the surface).  
It is a literal instruction to recognise that the person in front of you is not just a separate individual, but a manifestation of the same divine essence that animates you.

Many times we love based on "ego-level" connections—DNA, shared politics, or tribal loyalty. This love is conditional. To love a brother "as your soul" is to look past his personality, flaws, or opinions and recognize the Living Father (the source of all consciousness) animating him. You are loving the essential light within him that is identical to the light within you.

### The "Apple of Your Eye" Metaphor

The phrase "apple of your eye" is more than an ancient idiom; it is a lesson in biological and spiritual vulnerability.

In antiquity, the pupil was called the "apple" of the eye. It is the literal opening through which light enters the body. While it is the most vital part of our sensory experience, it is also the most fragile.

Consider the blink reflex. If an object moves toward your eye, you don't pause to deliberate. You don't weigh the pros and cons of protection. Your body acts instinctively and instantly.
Protecting your brother should be as reflexive as blinking. His wellbeing and safety is not a "choice" you make; it is a biological necessity for your shared spiritual body.

When you watch over another like the apple of your eye, the rigid boundary between "me" and "you" begins to dissolve. By directing your "eyes" toward another's well-being, you acknowledge that their spiritual safety is tethered to your own.

### The Reality of Unity

In a state of unity, the Golden Rule moves from a moral command to a logical fact. You cannot mistreat your brother without simultaneously wounding yourself.

To fail in loving your brother is to cloud your own spiritual vision. If you cannot see the light in him, it probably means you only see darkness in others because you have not yet fully recognised the light within you.

This text becomes more than a command or rule. You don't care for others simply to "stay safe." You do it because you realize that by living this way, you are manifesting a world suited for the Divine Spark, rather than a world built for the competing demands of the ego.`,
    contemplationPrompt: `When I look within or without, do I immediately fixate on my/another's shortcomings, my/another's anxieties, or my/another's unhealed parts? Can I use my inner light to illuminate these shadow aspects without identifying with them? 

When I am interacting with someone—especially someone difficult—where is my focal point? Can I intentionally adjust my depth of field? Practice looking past the immediate static of their ego. Remind yourself that you are looking at an "other-self"—the exact same Source experiencing the universe from a different set of coordinates and through a different complex system of conditioning.

Can I separate the signal from the noise? When someone acts out of ego, can I see it not as who they are, but as a distortion in their lens? Watching over them "like the apple of your eye" means holding the vision of their true nature for them, especially during the moments when they have forgotten it themselves.

Is my recognition of the soul in others becoming a reflex, or does it still require immense mental effort? When I walk past a stranger, is my first instinctual read based on their avatar (their clothes, status, demeanor), or is there a split-second, reflexive honoring of the life force within them?`,
    concepts: [
      {
        term: 'The Eye as a Mirror',
        definition: `When you start to view the eye as a reflective surface rather than just a receptor, the instruction to "watch over him like the apple of your eye" takes on a completely new dimension. You are no longer just guarding the other person; you are guarding the very mechanism through which you understand yourself.

### 1. The Literal Mirror: The Physics of the Cornea

The cornea — the clear, protective outer layer of the eye — is highly reflective. It functions as a convex mirror. If you stand close enough to look directly into someone else's pupil, the physics of light dictate that you will see a miniature reflection of your own face superimposed over their iris and pupil. You literally cannot look deeply into the "soul" of another person without seeing yourself reflected back in the process.

### 2. The Psychological Mirror: Projection and the Shadow

We rarely see people exactly as they are. Instead, we see them through the lens of our own preconceived ideas, stories, and conditioning. If we carry unresolved anger, we are hyper-vigilant to hostility in others. The people who trigger the strongest emotional reactions in us — whether intense infatuation or deep irritation — are usually holding up a mirror to our own unconscious archetypes. Recognising this transforms every frustrating interaction into a profound opportunity for self-awareness.

### 3. The Metaphysical Mirror: The "Other-Self"

If we view reality through the lens of unified consciousness, the separation between "you" and "me" is just a structural illusion necessary for experiencing the universe. The individual soul is not disconnected from the Source; it is a fractal reflection of it. Therefore, every "other" is quite literally an "other-self" — the exact same consciousness peering out from a different set of biological coordinates. When you look into the eye of your brother and recognise the divine spark, the Creator is using your eyes to look at Itself through the eyes of the other. This is the ultimate fulfilment of Saying 22's instruction to make "the inside like the outside."

---

If the eye is a mirror, then judgement is a form of self-harm, and deep appreciation is a form of self-love. What you refuse to love in the "other-self" is a part of yourself you have exiled into darkness.`
      },
      {
        term: 'Divine Spark',
        definition: 'In Gnostic thought, the Divine Spark is a fragment of the divine light that inhabits the physical body. It is the essential, imperishable nature within each person—identical in source to the light in every other being.'
      },
      {
        term: 'The Blink Reflex',
        definition: 'The unconscious, instantaneous protective reflex that shields the eye from harm. Used in Saying 25 as a model for how protection of the spiritual "brother" should be equally reflexive—not a calculated choice but a natural expression of recognized unity.'
      }
    ],
    relatedSayings: [22, 24, 108],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 26  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 26,
    number: 26,
    text: 'Jesus said: You see the mote which is in your brother\'s eye; but you do not see the beam which is in your own eye. When you cast out the beam from your own eye, then you will see (clearly) to cast out the mote from your brother\'s eye.',
    reflection: `This is a text many of us already know from the Bible (Matthew 7:3-5; Luke 6:41-42). Sometimes passages like these are frequently used as a moralistic weapon — a warning against hypocrisy. Unfortunately, many times we stop here. However, this text is a deep psychological and spiritual tool for self-awareness. It brings us closer to the truth of human nature.

**The "Mote" as a Mirror**

The "mote" acts as a mirror. This is referred to as projection or interacting with our "shadow." We unconsciously take the traits, insecurities, or flaws that we cannot accept within ourselves and project them onto the people around us.

When a minor flaw in someone else triggers a disproportionately large emotional reaction in us — anger, extreme annoyance, or disgust — it is almost always a sign that we are reacting to our own reflection. It causes us to attack the projection rather than seeing the person's soul.

Jesus uses the deliberate image of a massive, load-bearing beam to show the absurdity of trying to fix or point out something that bothers us in another, while we cannot see at all. Our ego protects us from seeing our own massive unhealed wounds, allowing us to hyper-fixate on the microscopic dust in others instead. It is easier for us to try to fix someone else's problem than to sit with our own. However, while we are blind it is not wise to do so.

**The Necessity of Self-Compassion**

One cannot go within blindly and expect to see anything else but darkness. It will be too hard to look at the hurt and the pain within when you only see yourself as the "small self / false self." Identifying with the truth of yourself — really being the divine spark — is how you can enter with love, care, and acceptance. Finding the courage to look inward with a forgiving and compassionate eye immediately softens the lens through which you see everyone else.

This is the crux of true healing. Many people realise they need to look at their own flaws, but they do so with a harsh, judgmental, and punishing inner critic. Fighting inner darkness with more darkness — shame, guilt, self-hatred — only deepens the wound. Real transformation requires radical self-compassion. We have to look at our own "beams" with the same grace and unconditional love that we are ultimately trying to extend to our brother with the "mote."`,
    contemplationPrompt: `**Think of a recent moment when someone's behaviour triggered a strong reaction in you — anger, intense annoyance, or judgment**.


- What was the specific trait or action that bothered me so deeply?
- If I strip away the details of the story, what is the core emotion I felt (e.g., disrespected, unseen, out of control, inadequate)?
- Why does this specific trait or action feel so threatening or offensive to me?
- Can I feel the emotion without identifying with it?



**Now, take the trait that frustrated you in the other person and gently look for it within yourself.**


- Where does this exact trait exist in my own life, even if it shows up in a different context or in a hidden way?
- Is this a part of myself that I deeply dislike, deny, or try to hide from others?
- Am I currently treating myself the way I perceive this person is treating me?



**This is the crucial step of refusing to fight darkness with darkness.**


- When I recognise this "beam" within myself, what is my immediate internal reaction? Do I attack myself, or do I offer myself grace?
- What is the original wound or fear that caused me to develop this flaw or defence mechanism in the first place?
- If I were looking at a dear friend who had this exact same flaw and wound, what compassionate words would I say to them? Can I say them to myself?



**Bring the person who originally triggered you back into your mind's eye.**


- Now that I see they were unknowingly mirroring my own unhealed pain, how does my perspective of them shift?
- Can I see their frustrating behaviour not as an attack on me, but as a symptom of their own struggle or lack of awareness?
- What would it look like to interact with them next time from a place of shared humanity, rather than from a place of defence and projection?`,
    concepts: [
      {
        term: 'Projection (Shadow)',
        definition: 'A psychological process in which we unconsciously attribute to others the traits, insecurities, or impulses we cannot accept within ourselves. Carl Jung called the unacknowledged inner reservoir of these rejected qualities the "shadow." The intensity of our reaction to a flaw in another is often directly proportional to how deeply buried that same quality is within us. Note that the quality may not be bad. We also bury good qualities that we are afraid to claim. Projection can be positive or negative, but it always distorts our perception of others and ourselves.'
      },
      {
        term: 'The Beam and the Mote',
        definition: 'Jesus deliberately contrasts a massive load-bearing timber (beam) with a tiny speck of dust (mote). The absurdity of the image is the point: we are constitutionally blind to our own unhealed wounds while our ego grants us perfect vision to detect the smallest imperfections in others. The ego is not bad. It tries to protect us, but it harms ourselves and others when we try to fix others without first doing the inner work to see ourselves clearly.'
      },
      {
        term: 'Radical Self-Compassion',
        definition: 'The practice of turning inward with the same unconditional grace and forgiveness one wishes to extend outward. Without it, self-examination becomes another form of self-harm. True inner sight requires the light of compassion — not the harsh glare of the inner critic — as its lamp.'
      }
    ],
    relatedSayings: [3, 24, 25, 34, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 27  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 27,
    number: 27,
    text: 'Jesus said, If you do not fast as regards the world, you will not find the kingdom. If you do not observe the Sabbath as a Sabbath, you will not see the father.',
    reflection: `### Fasting

Fasting is not about performance or the literal aspects of fasting (such as physical starvation). "Fasting as regards" the world is a necessary detachment from external noise, anxiety and the pursuit of validation.

### The Internal Kingdom

The kingdom cannot be found in the world but is found within. It is important to find the space where you can close the door behind you and go within.

Sometimes we believe that if we work hard enough, we will earn enough and then we will be able to rest. The invitation is to live now. To meet the kingdom now.

If you seek peace outside of yourself, you won't find it.

True authority must come from within rather than being surrendered to external forces. For example, waiting for the politicians to change the constitution before you can feel at peace or waiting for a person to call you before you don't feel alone.

### Sabbath

Jesus talks about observing the Sabbath. Keeping the Sabbath is not a rigid law, but is about having a mandatory pause from striving, producing and surviving. It is a space designed for receiving rather than acting.

The Gnostics didn't keep laws for law's sake. The Sabbath was a day of rest. This was the day that one didn't create (not create wealth or other things) but rested like the Creator did. If the Creator needed rest, why wouldn't we. This rest is necessary to see the father. We can't see what is really important to us, while we are striving and performing. 

### Balance

The goal isn't to become a permanent ascetic or to remain silent forever. In fact, it is not a goal to achieve. It is about recognising your wholeness and being present. One cannot strive or become it. You are already it. You just need to be reminded of it. These practices help us to engage with the world and create from a place of inner abundance, rather than from a frantic state of survival.

In our hyper-connected, productivity-obsessed culture, the idea of "running away from silence" is a very real epidemic. Jesus' words are an invitation to take a step back, to "fast from the world". It is not a punishment but a necessary recalibration to make us feel "safe or at home" in our own minds.`,
    contemplationPrompt: `What specific "noise" (expectations, media, opinions) am I currently giving authority over my own inner peace?

If I were to truly "fast" from the world for one hour today — closing the door and embracing silence — what am I most afraid of encountering, and what am I hoping to find?

In what ways am I performing my strength or goodness for others, rather than quietly cultivating it for myself?

What internal conditions need to be met for me to truly feel "safe or at home" within my own mind and body?

If I stopped trying to earn my place in the world, what would naturally emerge from me?`,
    concepts: [
      {
        term: 'Fasting',
        definition: `Literal Definition: The willing abstinence or reduction from some or all food, drink, or both, for a period of time. It is traditionally practiced for religious observances, health reasons, or ethical protests.

Spiritual/Metaphorical Definition: Deliberately stripping away distractions, comforts, or habits (such as social media, negative thinking, or material consumption) to cultivate inner discipline, clear the mind, and focus on spiritual or personal growth. In the context of this saying, it means starving the ego or the "world's" demands to feed the inner self.`
      },
      {
        term: 'Sabbath',
        definition: `Literal Definition: A day of religious observance and abstinence from work. In Judaism, it is observed from Friday evening to Saturday evening. In most Christian traditions, it is observed on Sunday. The concept originates from the biblical creation story, where God rested on the seventh day.

Spiritual/Metaphorical Definition: A dedicated, intentional period of rest and renewal. It is a boundary set against the endless cycle of producing, consuming, and achieving. It represents a state of "being" rather than "doing," allowing a person to reconnect with themselves, their community, or the divine without the pressure to create value or wealth.`
      }
    ],
    relatedSayings: [3, 70, 89, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 28  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 28,
    number: 28,
    text: 'Jesus said: I stood in the midst of the world, and I appeared to them in the flesh. I found them all drunk; I found none of them thirsting, and my soul was afflicted for the sons of men; for they are blind in their heart, and they do not see that they came empty into the world, (and) empty they seek to leave the world again. But now they are drunk. When they have thrown off their wine, they will repent.',
    reflection: `### The Incarnate Teacher and the Burden of Flesh

Jesus speaks here from the perspective of an awakened consciousness that has actively entered the human experience ("appeared to them in the flesh"). By taking on a physical form, he became subject to the same biological, root-level realities—hunger, thirst, fatigue—as the rest of humanity. Yet, his affliction is not physical; it is a profound grief over the collective unconsciousness of those around him.

### Drunkenness vs. The Necessity of Thirst

To be "drunk" in this context is to be completely intoxicated by the material world and the ego's endless loop of desires. Jesus laments finding no one "thirsting." Spiritual thirst is the vital prerequisite for seeking; it is the deep, unsettling realization that mundane life is not enough. A thirsty soul seeks the "living water" of truth and connection to the divine source. When humanity loses this thirst and settles for the numbing effects of worldly indulgence, the collective state of the world descends into suffering and illusion.

### Blindness of the Heart and the "Sons of Men"

By calling them the "sons of men," Jesus highlights how deeply people have identified with their mortal, physical lineage, entirely forgetting their divine origins. To be "blind in their heart" points to a severe spiritual disconnection. They are operating purely from their base survival instincts and egoic drives (the root), completely bypassing the heart—the center of true spiritual vision, empathy, and recognition of the interconnected whole.

### The Unconscious Cycle of Emptiness

Coming into the world "empty" and leaving "empty" describes a state of total spiritual amnesia. It speaks to the tragedy of moving through an entire incarnation—arriving without the memory of one's divine spark, and leaving the physical realm having gained no self-knowledge, despite having spent a lifetime accumulating fleeting, material illusions.

### Sobering Up: The True Meaning of Repentance

"Throwing off their wine" represents a deliberate detoxification from societal conditioning and material obsession. It is the reclamation of spiritual sovereignty. Crucially, "they will repent" is not a demand for moral groveling or guilt over sins. In the esoteric sense, this reflects metanoia—a fundamental, radical transformation of mind and heart. It is the exact moment the soul shakes off its amnesia, steps out of the dream-state, and makes the active, conscious choice to wake up to its true nature.`,
    contemplationPrompt: 'What do I need to give up/shed/let go of to recognize the reality of my wholeness? Many times we belief that we must add something to ourselves to be whole. But in reality, we need to take away the things that are covering our wholeness.',
    concepts: [
      {
        term: 'Drunk',
        definition: `In this specific spiritual framework, "Drunk" is not a reference to alcohol, but a metaphor for a profound lack of spiritual sobriety. It signifies a soul that has become so entangled in the material world that it has lost its connection to its divine origin. It can be broken down into three key aspects:

Forgetfulness (Amnesia): The soul "forgets" its heavenly home and its true identity as a spark of the divine. It becomes preoccupied with the needs and desires of the body.

Unconsciousness: This refers to living on "autopilot." People are physically awake but spiritually asleep, unaware of the deeper reality or the presence of the Light within them.

Ignorance (Agnoia): In Gnostic thought, ignorance is the primary "sin." It is the failure to recognize that the material world is a temporary illusion.`
      }
    ],
    relatedSayings: [],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 29  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 29,
    number: 29,
    text: 'Jesus said: If the flesh came into existence because of the spirit, it is a marvel. But if the spirit (came into existence) because of the body, it is a marvel of marvels. But as for me, I wonder at this, how this great wealth made its home in this poverty.',
    reflection: `This saying reminds us of our hidden potential, or the divine spark within. We are capable of being and doing great things. However, we often choose to remain in a cage rather than embracing the opportunity we have here and now.

The saying frames the tension between our eternal nature and our temporary human experience. People frequently argue about the nature of existence: are we spiritual beings having a human experience, or is the spirit simply born from the physical (the materialist view)? Jesus doesn't express disgust at the physical body; he expresses amazement. He says, "it is a wonder of wonders." He is marvelling at the sheer paradox of incarnation—how the infinite, limitless spirit managed to squeeze itself into a finite, fragile, physical form.

Jesus plays with the question of which came first—the body or the spirit. By calling it a "wonder of wonders" if the spirit came from the body (the materialist view), he is gently pointing out the absurdity of thinking that the profound depth of human consciousness could merely be a byproduct of physical matter.

The word "but" acts as a wake-up call. Jesus points to a truth that goes much deeper than a religious or philosophical debate. By pointing out the stark contrast between our internal "wealth" and external "poverty," the saying invites us to stop living as beggars chasing worldly scraps when we hold the treasury of the universe within us.`,
    contemplationPrompt: `Is there more to me than what I have been led to believe?

Am I chasing temporary highs to ignore a deeper calling? We often use the fleeting distractions of the material world to numb the profound, and sometimes overwhelming, truth of our own divine spark. Chasing these highs is not just a search for pleasure; it is often a defense mechanism. It is a way to safely remain asleep in the cage rather than stepping into the immense responsibility, and ultimate freedom, of being a co-creator.`,
    concepts: [
      {
        term: 'Flesh vs. Spirit',
        definition: 'In the original Greek language often used to discuss these texts, Sarx refers to the physical flesh/human nature and the temporary, material world. Pneuma is the breath, the spirit, or the divine spark. The saying highlights the ultimate paradox of these two opposing forces occupying the same space.'
      },
      {
        term: 'Great Wealth / The Fullness / Pleroma',
        definition: 'In early mystical and Gnostic Christian traditions, the spiritual realm is often referred to as the Pleroma, meaning "fullness" or absolute abundance. This is the "great wealth" Jesus mentions—our true home, our infinite potential, and our co-creative power.'
      },
      {
        term: 'Poverty (The Emptiness / Kenoma)',
        definition: 'Conversely, the material world is seen as a place of lack, decay, and limitation. The physical body is the poverty that temporarily houses the wealth of the spirit. It is impoverished not because it is evil, but because it is finite and relies on "temporary highs" rather than eternal substance.'
      }
    ],
    relatedSayings: [3, 28, 70, 112],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 30  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 30,
    number: 30,
    text: 'Jesus said: Where there are three gods, they are gods; where there are two or one, I am with him.',
    reflection: `Saying 30 offers a striking counterpoint to the canonical promise of Matthew 18:20: "For where two or three gather in my name, there am I with them" (NIV). While the traditional gospel champions the institutional ideal of community fellowship, the Gnostic text suggests something far more intimate: that the divine presence is profoundly accessible to the solitary individual or a unified pair. This anti-institutional stance is not merely a theological shift; it acknowledges the inherent difficulty of maintaining true, unguarded spiritual connection within larger gatherings.

### The Weight of the Collective

Groups operate differently from individuals. When a larger group forms (like three people), a collective consciousness takes over. The need to "fit the mold" activates our deeply ingrained survival mechanisms, causing the persona (the mask we wear for society) to eclipse our authentic inner voice. In this environment, vulnerability becomes a risk. We tend to leave our bodies (become disembodied) and shift our focus entirely to the external. The solitary state, or the safety of one-on-one connection, strips away the static of group convention, allowing the true Self to emerge.

### The Fractal Self

The individual is also a community and that pattern repeats in nature. It is a fractal view of existence, where the microcosm perfectly mirrors the macrocosm. Just as a complex system is made of interconnected layers and feedback loops that reflect the behaviour of the whole, the individual psyche is a multiplicity of experiences, unconscious drives, and archetypes unified into a single being. You do not need an external crowd to be part of a gathering; you are already a rich, complex community within yourself.

### Omnipresence

Another saying (77) ends with: "Split a piece of wood, and I am there. Lift up the stone, and you will find me there" — allowing for more context to the above text.

If the divine permeates absolutely everything — from the quiet solitude of a single mind to the physical matter of the earth itself — then the rigid boundaries between being "in the church" and walking one's own path completely dissolve. It neutralizes the need to judge how others seek connection, recognizing that no one can ever truly be separated from the whole.`,
    contemplationPrompt: 'When will we stop limiting the divine?',
    concepts: [
      {
        term: 'The Process of Individuation (Jung)',
        definition: 'In Jungian terms, moving from the "three" or "two" (fragmentation, conflict, or duality of the conscious and unconscious) toward the "one" represents the integration of the psyche. The "I am with him" can be viewed as the realization of the Self — the divine spark or organizing principle within.'
      },
      {
        term: 'The Law of One',
        definition: 'The overarching concept that all things are ultimately expressions of a single, unified creator, echoing the idea that the divine is most fully realized in unity ("where there is one").'
      }
    ],
    relatedSayings: [77, 108],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 31  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 31,
    number: 31,
    text: "Jesus said, \"A prophet is not acceptable in that prophet's own native town. A physician does not heal people who are acquainted with that physician.\"",
    reflection: `### See also: Luke 4:22–30

> All spoke well of Him and marveled at the gracious words that came from His lips. "Isn't this the son of Joseph?" they asked. Jesus said to them, "Surely you will quote this proverb to Me: 'Physician, heal yourself! Do here in Your hometown what we have heard that You did in Capernaum.'" Then He added, "Truly I tell you, no prophet is accepted in his hometown. But I tell you truthfully that there were many widows in Israel in the time of Elijah, when the sky was shut for three and a half years and great famine swept over all the land. Yet Elijah was not sent to any of them, but to the widow of Zarephath in Sidon. And there were many lepers in Israel in the time of Elisha the prophet. Yet not one of them was cleansed — only Naaman the Syrian." On hearing this, all the people in the synagogue were enraged. They got up, drove Him out of the town, and led Him to the brow of the hill on which the town was built, in order to throw Him over the cliff. But Jesus passed through the crowd and went on His way.

---

### "Who Do You Think You Are?"

This passage is about the human condition. It brings two very relatable, human questions to the surface: *Who do you think you are?* and *Why would a person, like me, be able to do something that is perceived to be miraculous?* We often experience a deep sense of doubt about our own inner knowing. This doubt stems directly from the misconception that we are mere physical beings, which leads to a fundamental misunderstanding of who we truly are.

### The Trap of Familiarity and Separation

When you grow up in a small town, people "know" the human version of you. They see you as a child, a friend, or simply a person who makes mistakes. Because of this familiarity, they can easily become blind to the reality that Source is found within you — just as it is found within them.

This highlights our human tendency to separate the mundane from the miraculous:

- **The Illusion of Separation:** We habitually separate our oneness with God/Source from our everyday human life.
- **Limiting the Divine:** We operate under the assumption that a "mere human" shouldn't be able to perform miracles or do the work that is supposedly reserved only for God.

While this separation gives us the unique, tangible experience of being a person in a physical body, it also deeply hurts us. It closes us off to healing because we refuse to remain open to it. We fail to believe that an ordinary person can assist us, and worse, we fail to believe that we possess the power to heal ourselves.

### The Conditions We Place on Grace

In this space of separation and closed-mindedness, we miss out on the grace that is available to us daily — simply because we don't want to receive it in the form it takes.

We place strict conditions on miracles:

- **The "Right" Package:** We expect divine help to look a certain way and to come exclusively from the outside.
- **The Demand for a Spectacle:** We act as if God is far away, believing that if a miracle isn't spectacular and witnessed by everyone, it isn't real.
- **Missing the Quiet Miracles:** We struggle to accept that profound healing can happen in the quiet, mundane spaces of our own homes, or through the hands of people we already know.

Ultimately, we have been conditioned to limit our possibilities. And by insisting on those limitations, we are forced to constantly experience them.`,
    contemplationPrompt: `**1. Examining Internal Blocks**
What thoughts or beliefs do I hold that close me off to assistance or healing in a specific form? Reflect on times you may have rejected help or growth because it didn't come in the "package" you expected. How does the illusion of separation keep you from receiving grace?

**2. Shifting Perspective**
Can I find miracles in the mundane and within myself? Consider the quiet, everyday moments where Source is present. How can you better recognize the divine in your ordinary human experience without needing a grand spectacle?

**3. Projecting Limitations**
Do I make others feel like nothing good can come from them because I expect the miraculous to only come from something "out of the ordinary"? Examine how you view the people closest to you. Are you guilty of the "hometown crowd" mentality — limiting the potential of your friends, family, or community because you are too familiar with their human flaws?`,
    concepts: [
      {
        term: 'Physician, heal thyself',
        definition: 'An ancient proverb, famously quoted in Luke 4:23, advising people to fix their own faults or problems before trying to correct others. It suggests that advisors should first apply their wisdom to themselves — similar to "charity begins at home" or "people in glass houses shouldn\'t throw stones."'
      },
      {
        term: 'The Illusion of Separation',
        definition: 'The limiting belief that the divine (God/Source) and the physical human experience are divided. This misconception leads us to search for miracles exclusively in spectacular, external events, causing us to miss the inherent grace, oneness, and healing power present within ourselves and the mundane world.'
      }
    ],
    relatedSayings: [],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 32  Stub
  // ─────────────────────────────────────────────────────────────
  {
    id: 32, number: 32,
    text: 'Saying 32 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 33  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 33,
    number: 33,
    text: 'Jesus said, "Whatever you (sing.) hear with your ear, proclaim upon your (plur.) rooftops into the other ear. Indeed, no one lights a lamp and puts it under a vessel, nor puts it in a hidden place. Rather it is put on a lampstand so that each who enters and leaves might see its light."',
    reflection: `### I. The Mystery of the Two Ears

In this passage, Jesus describes a cycle of resonance.

- **The First Ear (The Download):** This is the inner, receptive ear. It's that high-pitched "ringing" in the ear or the sudden "download" of insight. It is the moment truth enters the soul.
- **The Waiting Period:** We wait for this "ringing" to become conscious so we can actually live it.
- **The Second Ear (The Reflection):** Interestingly, the text suggests the "other ear" needs to hear it again. When we proclaim the truth on the "rooftops" of our lives, we hear it back. The inner listening and the outer experience become symmetrical. We broadcast the truth, and in doing so, we confirm it within ourselves.

We carry a divine spark within us, but we often mistake the "vessel" for the light itself.

- **The Identity Crisis:** If we take on the identity of the vessel (our ego, our social form, our physical appearance), we are essentially trying to hide our true self.
- **Form vs. Truth:** Sometimes the "form" of a message — the rituals, the rules, or the rigid structures — actually takes away from the truth of the message.
- **The Lampstand:** The lampstand represents the interaction. When the spark is placed on the lampstand, it is no longer hidden. Everyone who "enters and leaves" can see it. The truth is meant to be functional, not just internal.

### III. The Shadow of Secrecy (The Hidden Places)

Historically, many societies kept wisdom only to themselves. Groups like the ancient Mystery Schools or even certain religious hierarchies believed the light was "too bright" for the common person, so they put the lamp in "hidden places."

Jesus' instruction is a radical departure from this gatekeeping. He argues that truth isn't a secret to be hoarded by an elite few; it is a reality to be shared with anyone walking through the door.

### IV. Integration: The Whole Brain & The Whole Life

To truly move the light from the vessel to the lampstand, we must listen with both sides (the left and right hemispheres of the brain).

When we integrate our logic and our intuition, the light burns in such a way that we physically cannot keep it within our vessel.

Repeating for importance: just as a message repeated is a sign of its importance, the repetition of our inner truth through our outer actions creates a life of integrity.

### V. The Embodied Light (The Dish-Washing Moment)

The ultimate goal of this "rooftop proclamation" is not a sermon; it is embodiment. When the light is on the lampstand, it shows up in the most mundane, real-life moments:

- It shows in our dancing.
- It shows in our lips and how we speak to others.
- It shows in the way we wash the dishes.`,
    contemplationPrompt: `When you stop identifying as the "vessel" and start identifying as the "spark," what changes about the way you handle your daily chores or your interactions with others?

---

*May we have the patience to sit with the "ringing" until it becomes a clear word. May we have the courage to take the lid off our vessels and let the divine spark be placed on the lampstand. Let our inner listening and our outer living become a perfect, symmetrical reflection of the Light.*`,
    concepts: [
      {
        term: 'The Vessel',
        definition: "It's necessary for carrying the oil, but if you put it over the flame, the flame dies from lack of oxygen. When we over-identify with our \"form\" (our status, our body, our fears), we smother the light."
      },
      {
        term: 'Left Ear / Right Brain',
        definition: 'Often associated with intuition, holism, and "hearing" the divine spark.'
      },
      {
        term: 'Right Ear / Left Brain',
        definition: 'Often associated with logic, speech, and "proclaiming" the word. By "listening with both sides," you are essentially describing congruence. When what we know internally matches what we do externally, the "vessel" becomes transparent.'
      }
    ],
    relatedSayings: [22, 24, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 34  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 34,
    number: 34,
    text: 'Jesus said: If a blind man leads a blind man, they both fall into a pit.',
    reflection: `### From Proverb to Paradox

The saying, "If a blind man leads a blind man, they both fall into a pit," functions as both a warning and a psychological mirror. While often interpreted as a call for religious leaders to have a "correct" understanding of scripture, the teaching goes far deeper than professional competency. It speaks to the source of the light we use to navigate our lives.

### The Internal Blind Leader

We often act as our own blind guides. When we try to "fix" a personal struggle using the "darkness" of shame, guilt, or self-judgment, we are essentially a blind person trying to lead a blind person. You cannot use the energy of the problem (judgment) to find the energy of the solution (growth). To look at your own "darkness" with more darkness only ensures that you remain in the pit. Growth requires a shift in frequency — moving from the blindness of "fixing" to the sight of "understanding."

### The Specialist's Blindness

In our society, we often defer to "experts" or "specialists." However, a specialist who only treats symptoms is oblivious to the holistic flow of life. If a guide — whether a doctor, a CEO, or a spiritual teacher — is blind to the deeper laws of how the world works, they may lead us toward a temporary fix that results in a greater fall later. This is why the inner listening is so vital; it acts as a secondary verification for the "expert" advice we receive.

### The Symmetry of Sight

This saying also points to the Reflective Symmetry of our lives. The leaders we follow and the "pit" we fall into are often reflections of our own internal state of consciousness. If we carry "divine light" within, we become sensitive to when a path is leading nowhere. Like the parable of the harvest, where the master sees the readiness of the wheat while the workers see only the surface, true sight allows us to perceive the timing and fruitfulness of a situation.

### Conclusion

Remaining true to our "inner knowing" is not an act of rebellion, but an act of sight. It is the refusal to follow a promise that doesn't align with the truth we see in the light of our own expanded consciousness.`,
    contemplationPrompt: `Is the voice currently guiding my self-improvement one of sight (compassion and clarity) or one of blindness (shame and urgency)?

Where in my life am I following an "expert" simply because I am afraid to trust my own internal light?

Am I rushing toward a destination simply because I fear the stillness required to see a better path?

If I were to stop following my "old ways" today, what part of my inner light would finally have the space to speak?`,
    concepts: [
      {
        term: 'The Mirror of Reflective Symmetry',
        definition: 'This is the principle that our external reality and the leaders we choose are often direct reflections of our internal state of consciousness. When the "inner listening" is ignored, the "outer experience" becomes chaotic or misdirected, leading both the follower and the guide into a pit. True sight begins when we recognise that the world doesn\'t just happen to us; it reflects the clarity or the blindness we carry within. To change the direction of the "fall," one must first illuminate the inner landscape so that the outer path becomes clear.'
      },
      {
        term: 'Spiritual Discernment (The Single Eye)',
        definition: 'This refers to the ability to see beyond the "symptoms" or the surface-level promises of a leader. While a specialist may have intellectual knowledge, spiritual discernment is a holistic state of being where one\'s internal light is strong enough to detect when a path will not bear fruit. It is the refusal to use "darkness to look at darkness," meaning it rejects shame, guilt, and ignorance as tools for growth, opting instead for the "one-eyed" perspective of the heart that sees the Divine even when the world is blind.'
      }
    ],
    relatedSayings: [3, 5, 24, 91],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 35–114  Stubs — add text and reflections via admin
  // ─────────────────────────────────────────────────────────────
  {
    id: 35, number: 35,
    text: 'Saying 35 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 36  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 36,
    number: 36,
    text: 'Jesus said: Be not anxious from morning to evening and from evening to morning about what you shall put on.',
    reflection: `### See also: Luke 12:22–28

> "Consider how the wild flowers grow. They do not labor or spin. Yet I tell you, not even Solomon in all his splendor was dressed like one of these."

At first glance this text is about not worrying about basic needs — to trust that you will be taken care of (which is true). But unfortunately it may also lead us to think that we should wait on something or someone outside of us to provide for us. We don't see ourselves as part of, or a participant in, the process — and we don't understand that we create what we don't want to create when we worry about these things day and night. Furthermore, it may also point to how we worry about being perceived by others. This scarcity/fear mindset steals from our inner peace and knowing.

This verse may therefore remind us to embody abundance and not lack. When our minds are busy with worries all the time, there is not much space to see the potential, opportunities and love that surrounds us. Our perspective and thought patterns shape our world view. This is why creating space in the mind — being quiet — is so helpful, as it brings us back to center, where all lives and is possible, making us hear our inner guidance and living from oneness.`,
    contemplationPrompt: 'What generational or childhood pattern are you carrying that is affecting your perception of the world?',
    concepts: [
      {
        term: 'Spinning',
        definition: `Literal Definition: The ancient manual process of twisting raw fibers (such as wool or flax) into thread or yarn using a spindle and distaff. This was a mandatory, labor-intensive precursor to weaving cloth.

Symbolic Meaning:
- Anxiety & Materialism: Represents the restless human effort to provide for future physical needs and the "manufacture" of one's own security.
- The Fabricated Self: In Gnostic thought, it symbolizes the "weaving" of the material body or the ego — external layers that hide the true, divine spirit.

Theological Application: To "not spin" is an exhortation to abandon worldly worry and return to a state of "primordial nakedness," relying on one's inherent spiritual nature rather than human-made protections.`
      }
    ],
    relatedSayings: [37, 21],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 37  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 37,
    number: 37,
    text: 'His disciples said: On what day will you be revealed to us, and on what day shall we see you? Jesus said: When you unclothe yourselves and are not ashamed and take your garments and lay them beneath your feet like the little children (and) trample on them, then [you will see] the Son of the Living One, and you will not be afraid.',
    reflection: `At first glance, we are reminded of Jesus' resurrection and what the disciples believed would be his return. They asked: "On what day will you be revealed to us?" Just like the disciples, our minds and egos seek assurance. We want to know the date and time, as we struggle with uncertainty. There are two questions here: one is about revelation, and the other is about seeing Jesus again. In a sense, the disciples realise that they can't see Jesus as he is yet, and they want to know when they will know who he is or see the real being. The second question relates to seeing him physically again. Many Christians also await the second coming of Christ, where Jesus will return in the flesh.

Jesus' answer is that when we have shed our egos and stories — when we no longer identify with them — and when we are no longer ashamed about who we are as we have learned who we truly are, if we are willing to lay our "garments (armour)" down and trample on them like children (being free of the guilt, shame, and old identities that don't fit), not yet being so enmeshed with our worldly role and story — we will see Christ. We will see the Son of the Living One, meaning that we will recognize ourselves as sons of the Living One, and we will no longer be afraid as we will recognize our oneness and the Christ within. Christ's return happens within us when we, as the sons of the living Father, arise to the truth.

> *Baptism was a symbol of clothing yourself with Christ and leaving the old "false" self behind.*`,
    contemplationPrompt: 'How do you personally practice laying down that "armour" in your daily life?',
    concepts: [
      {
        term: 'Disrobe / Take up your garments',
        definition: 'In many Gnostic texts, "garments" or "clothing" symbolize the physical body or the flesh. To disrobe is to shed attachment to the physical world and the limitations of mortal existence. Clothing also represents societal constructs, identity, status, and the ego. Stripping these away means letting go of the false self to reveal the true, divine spark within.'
      },
      {
        term: 'Reversing the Fall',
        definition: 'This is a direct reference to the Garden of Eden in Genesis. Before the Fall, Adam and Eve were naked and felt no shame (Genesis 2:25). After eating from the Tree of Knowledge, they realized they were naked, felt shame, and made clothes (Genesis 3:7). To disrobe without shame is to return to a pre-Fall state of original innocence and unity with the divine.'
      },
      {
        term: 'Mastery over the Material',
        definition: 'Trampling the garments underfoot symbolizes conquering or mastering the physical world and the flesh, rather than being ruled by them.'
      }
    ],
    relatedSayings: [21, 46],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 38  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 38,
    number: 38,
    text: 'Jesus said: Many times have you desired to hear these words which I speak to you, and you have no other from whom to hear them. Days will come when you will seek me (and) you will not find me.',
    reflection: `Similar texts:
- **Luke 17:22:** Jesus tells his disciples, "The time is coming when you will long to see one of the days of the Son of Man, but you won't see it."
- **John 7:34:** Jesus tells the religious leaders, "You will look for me, but you will not find me; and where I am, you cannot come."

This text may point to the reality of life where we experience moments of clarity due to having a teacher or higher consciousness that guides and calms us. But when the teacher is no longer there to guide or calm, it won't help to seek him, as you won't find him in this way. This shows just how important it is for the student to cultivate the light within. There will come challenges on your path where no teacher is available, and where you have to walk the road "seemingly" alone. As you progress in your development, there also comes a time when other people may not be able to help you, as they may not have grown to a place where they can assist. You will then have to figure things out on your own or in a different way. When a student relies solely on an external source for light, the absence of a guide leaves them in utter darkness.

We can, therefore, move from a place of seeking outer guidance to finding the guidance within — guidance that has been internalized. The text further serves as a reminder to be present. The disciples have a rare opportunity to hear words that they would normally not hear. If they are truly present to hear and integrate the words spoken, it may assist them when they no longer have a teacher with them. "Days will come" indicates that this is not forever, but the student will experience a time when they feel alone and there is no clarity for moving forward.

Even in our modern age, there are times when we may wish for guidance from Jesus about what he meant or the path ahead. This is a process of seeking and finding. However, there comes a time when seeking doesn't bring answers anymore, and one may then find the strength to go within and discover what was there all along.`,
    contemplationPrompt: 'What happens when the person who guided you is gone? Have you integrated their wisdom enough to walk the road without them? Can you remind yourself of your own light?',
    concepts: [
      {
        term: 'Internalization',
        definition: 'The process by which an external source of comfort, guidance, or wisdom (like a teacher or mentor) is fully absorbed into your own psyche. The teacher\'s voice becomes your own intuition.'
      },
      {
        term: 'The Divine Spark (or Inner Light)',
        definition: 'The concept that a fragment of higher consciousness or divine wisdom resides inherently within every person, requiring only cultivation and awareness to illuminate one\'s path in times of darkness.'
      },
      {
        term: 'Projection',
        definition: 'The act of seeing your own unconscious qualities — such as your own latent wisdom, strength, or "light" — in someone else. When a student reveres a teacher, they are often projecting their own unacknowledged inner light onto that person until they are ready to claim it for themselves.'
      }
    ],
    relatedSayings: [24, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 39  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 39,
    number: 39,
    text: 'Jesus said: The Pharisees and the scribes have taken the keys of knowledge (gnosis) (and) have hidden them. They did not go in, and those who wished to go in they did not allow. But you, be wise as serpents and innocent as doves.',
    reflection: `Another translation: ['Jesus says, "The Pharisees and the scribes have] re[ceived the keys] of [knowledge and have] hid[den them; neither have they] enter[ed nor permitted those who would] enter. [But you] bec[ome wi]se a[s the serpents and g]uileless [as the dov]es' (see also Hennecke and Schneemelcher: 1.112-113)." (In Fragments, p. 33)

Similar texts:
- **Luke 11:52:** Woe to you experts in the law, because you have taken away the key to knowledge. You yourselves have not entered, and you have hindered those who were entering.
- **Matthew 10:16:** I am sending you out like sheep among wolves. Therefore be as shrewd [discerning] as snakes and as innocent as doves.

Historically, we have seen how knowledge that could help people gain understanding and improve their lives has been burned, hidden, or kept by a select few who believed only they could interpret the texts. Jesus points out how the lawmakers (the authorities) received the knowledge to improve their own lives and the lives of others, yet chose not to enter the kingdom. Some chose to control others by keeping the knowledge to themselves.

They have not "permitted those who would enter" to do so, meaning that people who were seeking knowledge and open to it were actively kept from it by the authorities. People, who wanted the knowledge to be freely available for everyone (whether they were scientists or religious leaders), have been attacked or killed. They were seen as a threat to the authorities' perceived control.

Jesus reminds us to be as wise, shrewd, and discerning as snakes. Snakes are careful creatures; they hide when people are near and do not reveal themselves, ensuring they are not killed when a person strikes at them out of fear. There are, in fact, many snakes in our surrounding, but we don't know that they are there. This allows them to work under the radar.

Jesus also says to be as innocent as doves. This highlights the complex nature of the world. One must be vigilant because there are real dangers — forces and people who seek to withhold growth and light from others. However, we must still maintain our innocence to be able to hear the kingdom within. When we fight those who seek to destroy us, we risk becoming entangled in worldly affairs and we fight darkness with more darkness. Ultimately, this is about being smart and strategic so that we can remain innocent while living in this world. If we feel, for example, that a situation or action is not good for our soul, we should listen to that inner guidance.`,
    contemplationPrompt: '',
    concepts: [
      {
        term: 'The Keys of Knowledge',
        definition: 'A metaphor for the tools, teachings, or insights required to unlock spiritual understanding and access the "kingdom."'
      },
      {
        term: 'Shrewd / Discerning (Wise as serpents)',
        definition: 'Having sharp powers of judgment; being highly observant, strategic, and cautious. It means being aware of your surroundings and potential dangers so you aren\'t needlessly harmed.'
      },
      {
        term: 'Guileless / Innocent (Innocent as doves)',
        definition: 'Devoid of deception, manipulation, or malice. In your reflection, this means maintaining the purity of your soul and not becoming corrupted, bitter, or vengeful, even when facing hostile forces.'
      }
    ],
    relatedSayings: [3, 5, 102, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 40  Stub
  // ─────────────────────────────────────────────────────────────
  {
    id: 40, number: 40,
    text: 'Saying 40 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 41  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 41,
    number: 41,
    text: 'Jesus said: He who has in his hand, to him shall be given; and he who has not, from him shall be taken even the little that he has.',
    reflection: `This statement may seem unfair to some, as many people believe that those who do not have will inherit everything and those who do have will lose what they have — which speaks to a jealous nature, one that seeks others to suffer as they suffer. They don't yet see a world where all can thrive. Some want to believe that if they struggle and possess fewer things now, they will receive a nice, big reward when they get to heaven. This is a scarcity perspective. It views resources and grace as finite, allowing a competitive nature to possess us.

If we solely view the material world as a place of "haves" and "have-nots," we actively create that reality. I have often found that people who have many things to be grateful for frequently focus only on what they lack, and in doing so, create even more lack in their lives. This idea challenges us to understand that when we have something to give (when there is something "in our hand"), that is more than material possessions. We are the divine spark. We are thus not losing something by giving it away.

Conversely, when we say that we have nothing to give, we are denying the gift of our divine spark. By looking only at our possessions and believing that they define us, we inevitably create more lack. We lose what we have because we do not live from our inner light. Things will change. Furniture may break. Material items may get lost or stolen, but it can't touch our light.

Some equate this teaching with working hard in the material world to gain more, not realising that it is not about hard work either. In fact, many people work tirelessly due to a scarcity mindset — constantly feeling behind the curve or believing they never have enough yet.

Interestingly, the material and mental worlds are deeply connected. As another commentator noted: to enter the Kingdom means to see the real world behind mental concepts. Such a person truly "possesses," and will therefore be given more — all the joy of life one can accept, which is Life itself. Those who continue to view the world through their mental concepts do not "possess." They live in their minds and are thus condemned to lose what they have, since what they have is subject to the law of change and perishes in the end.

Ultimately, our inner attitude and perspective shape our world. We can try to make great choices, do everything right, and work incredibly hard, yet still feel like victims if we haven't dug up the treasure within and started living from Source.`,
    contemplationPrompt: 'Our perception of the world and ourselves shapes what we do or don\'t see. Do you hold onto any beliefs or identities that keep you tethered to old patterns you have actually outgrown?',
    concepts: [
      {
        term: 'Spiritual Abundance vs. Scarcity Mindset',
        definition: 'The understanding that true wealth is an internal state of being rather than a collection of material assets. When a person operates from spiritual abundance — recognising their connection to Source or the "divine spark" — they experience the world as limitless, which naturally cultivates more grace, peace, and joy. Conversely, a scarcity mindset operates on the illusion of separation and finite resources. It breeds fear, jealousy, and competition, creating a self-fulfilling prophecy of lack, regardless of how much material wealth a person actually possesses.'
      },
      {
        term: 'Gnosis (Self-Knowledge) / The Divine Spark',
        definition: 'In the context of the Gospel of Thomas, salvation or "entering the Kingdom" is not about a future reward, but about waking up to your true nature right now. To "have in your hand" means to possess this direct, experiential knowledge (gnosis) of your own inner light. When you know who you truly are, you cannot lose yourself. When you lack this self-knowledge (identifying only with your body, mind, or possessions), you live in a state of spiritual poverty and are subject to losing even the fleeting things you think you own.'
      },
      {
        term: 'Mental Concepts vs. Direct Reality (Non-Attachment)',
        definition: 'The practice of seeing the world as it is, rather than through the filters, labels, and judgements created by the ego. Clinging to mental concepts creates a false reality that is entirely subject to the law of change and decay. To let go of these mental constructs is a form of non-attachment. By dropping the conceptual mind, a person "possesses" the present moment and Life itself, rather than being possessed by their thoughts and anxieties.'
      }
    ],
    relatedSayings: [3, 29, 70, 109, 113],
    published: true
  },

  {
    id: 42,
    number: 42,
    text: 'Jesus said: Become passers-by!',
    reflection: `Other related texts:
- **Romans 12:2:** Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will.
- **John 17:14:** I have given them your word and the world has hated them, for they are not of the world any more than I am of the world.

**Scholarly Quote:**

Marvin Meyer writes: "This saying may also be translated 'Be wanderers'; compare descriptions in early Christian literature of wandering teachers and missionaries. Another possible but less likely translation is, 'Come into being as you pass away'; compare the use of the same word parage as 'pass away' in the first riddle in saying 11, and other statements similar to this translation of saying 42 (for example, 2 Corinthians 4:16; Acts of John 76: 'Die so that you may live'). Tjitze Baarda, 'Jesus Said: Be Passers-By,' suggests yet another possible translation, 'Be Hebrews,' with the understanding of Philo of Alexandria that the word 'Hebrews' may be taken as 'migrants.' A medieval author, Petrus Alphonsi, preserves a saying much like saying 42 in his Clerical Instruction: 'This world is, as it were, a bridge. Therefore, pass over it, only do not lodge there.'"

Jesus is guiding his followers to be in the world without being of the world. Though brief, the text is rich with meaning. Becoming a "passer-by" requires a level of detachment, but this does not mean we cannot enjoy life or engage with society. Instead, it means remaining true to our inner light, even when pressured to conform to mainstream thought. We are meant to experience this world, learn from it, and then move forward. Often, we remain stuck — refusing to grow after learning new truths — because we fear becoming too different and losing our sense of belonging. Yet, if our true identity was not created here, it makes perfect sense to feel like a foreigner. You may feel as though you do not fit in; you are not meant to.

This philosophy does not require nihilism or living in isolation; it simply requires staying true to the light within. The world, our personalities, our jobs, the weather, and other people will inevitably change, but our inner light is a constant. It provides the stability we need to avoid fear and hatred when we feel threatened by change. Society constantly tempts us to adopt false identities to fit a specific mold, and speaking the truth often leads to judgment or rejection. Our primal fear of rejection frequently prevents us from embracing our truth and following our inner guidance. However, when we live from Source, we learn to trust our inner world more than our external circumstances — and in doing so, we change the world around us. Not by forcing others to see what we see, but by living it. Conversely, when we allow ourselves to be ruled by the external world, our inner world fractures, trapping us in a cycle of chaos.

The meaning of this text also shifts depending on the listener. For a disciple who has not yet realized their true nature and views Jesus primarily as an external Savior, becoming a "passer-by" might mean adhering to strict rules or dietary laws that others ignore. However, for those who understand they are not of this world, this text serves as a profound reminder of how to navigate earthly life.`,
    contemplationPrompt: 'Where do you feel pressured to conform to the world\'s expectations? Have you noticed how certain worldly attachments naturally lose their pull once you have outgrown them?',
    concepts: [
      {
        term: 'Passers-by (Detachment)',
        definition: 'The practice of moving through the physical world — experiencing, learning, and engaging with it — without becoming deeply attached to it or conforming to its transient identities and expectations. It is the state of being in the world but not of the world.'
      },
      {
        term: 'The Light Within (Source)',
        definition: 'The constant, unchanging spiritual essence or true identity inside a person. It provides internal stability, guidance, and a sense of home that anchors an individual against the chaos, fears, and shifting nature of the external world.'
      }
    ],
    relatedSayings: [21, 56, 80, 110, 111],
    published: true
  },

  {
    id: 43,
    number: 43,
    text: `His disciples said to him: Who are you, that you say these things to us? <Jesus said to them:> From what I say to you, do you not know who I am? But you have become like the Jews; for they love the tree (and) hate its fruit, and they love the fruit (and) hate the tree.`,
    reflection: `There is a tension between who Jesus is and what people expected him to be. This is still true today. We often cannot see in others what we refuse to recognize within ourselves. Because the disciples did not recognize their own inner light, they couldn't reconcile Jesus' humanity with his divinity. They were expecting a conventional, worldly king – and therefore missed the reality of seeing the divine in the ordinary. This speaks to a common human blind spot: we struggle to accept extraordinary truths when they come in ordinary packages.

Jesus compares his disciples to the Jews (you can replace Jews with any school of thought). The Jews hoarded knowledge. They loved being the teacher or the knowledgeable one. However, actually carrying the fruit – living the wisdom daily – requires stripping away the ego, engaging in deep self-reflection and fundamentally changing how one lives. It takes time, patience and requires change.

We often split the tree and the fruit into palatable and unpalatable parts.

- **Loving the fruit, hating the tree:** We might love the art, the philosophy, or the benefits someone provides, but we despise the flawed, plain, or complex human being who produced it.
- **Loving the tree, hating the fruit:** We might love a person for their familiarity or plainness, but resent them when they grow, speak hard truths, or challenge our world view ("Who do you think you are?").

By separating the tree and the fruit, we are avoiding the challenging reality of oneness. True wisdom is not just the words spoken or the person speaking them – it is the living integration of the two.`,
    contemplationPrompt: `Considering this dynamic of "splitting" the tree and the fruit, where else in modern life or society do you see people struggling to accept the whole picture because they prefer to separate the message from the messenger?`,
    concepts: [
      {
        term: 'Embodiment ("Carrying the Fruit")',
        definition: 'The physical and practical manifestation of spiritual knowledge. It is the demanding process of moving beyond the mere intellectual hoarding of information to actively integrating, living, and reflecting that wisdom in everyday life through continuous change.'
      },
      {
        term: 'Non-dualism (Oneness)',
        definition: "The recognition that the source (the tree) and its output (the fruit) are an integrated, indivisible whole. It is the rejection of the ego's tendency to fragment reality into separate, opposing categories—such as dividing a person's ordinary humanity from their profound wisdom."
      }
    ],
    relatedSayings: [3, 5, 24, 45, 52, 91, 108, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 44  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 44,
    number: 44,
    text: 'Jesus said: He who blasphemes against the Father will be forgiven, and he who blasphemes against the Son will be forgiven; but he who blasphemes against the Holy Spirit will not be forgiven, either on earth or in heaven.',
    reflection: `### Understanding Some Context

**The Meaning of Forgiveness**

In orthodox dogma, "forgiveness" is often viewed as a legal pardon from a judge. But in esoteric, Gnostic, and psychological traditions, forgiveness is closer to its original Greek root in the New Testament, aphesis, which means "release," "letting go," or "return to wholeness." It is returning to wholeness from a state of separation. If we look at sin as ignorance or a state of fragmentation, then being "forgiven" means being successfully reintegrated. It is the restoration of balance.

**The Holy Spirit (Ruach)**

Ruach in Hebrew means "spirit," "wind," or "breath." The Spirit is literally what births/gives life. Ruach is grammatically feminine in Hebrew. Rucha (Aramaic) is feminine. Many early Christian authors — in particular those belonging to so-called "Jewish Christianity" — spoke of the Holy Spirit as Mother. The Greek translation for Spirit is "Pneuma," which is a neutral noun. In the Catholic Church, the Holy Spirit is referred to in English as "He." This may also point to how people relate to aspects of the All.

For this saying, in particular, it is important to understand the significance of the Holy Spirit as "Mother," "divine feminine," or feminine in nature. The Holy Spirit represents the animating life force, the inner connective tissue, the dark stillness (internal), the receptive womb of transformation. It is the subtle, internal voice of the Divine moving over the "waters" of our subconscious (see Genesis). The Father and Son (Masculine/Logos/Light) represent external manifestations of the Divine — structure, the law, the spoken word, the intellect, and the historical figure of Jesus.

Therefore, if you reject, slander, or completely close yourself off to the internal, life-giving connective force (the Holy Spirit / Divine Feminine), you are severing the very mechanism of healing and wholeness. It is "unforgivable" not because God is too angry to forgive you, but because entirely shutting out the inner connective Spirit is like locking the door from the inside.

**In Jungian Terms**

If a person purely operates from the masculine principle (intellect, logic, structure, outward action) and totally rejects the feminine principle (intuition, feeling, the unconscious, receptivity), they become rigid and fragmented. If you make a mistake in the external world (the domain of the animus), the psyche can correct it. But if you blaspheme — meaning to hold in utter contempt and deny the existence of your own unconscious/anima (the inner feminine) — you block the path to wholeness.

> *Note: In environments that overvalue the masculine, women often face intense pressure to exile their feminine essence, moulding themselves to fit a society that fails to nurture receptivity and intuition.*

**The Collective Wound**

The collective story has trampled on the feminine aspect. When cultures or religions suppress the Divine Mother, Sophia, or the Ruach, they create highly dogmatic, rigid, and ultimately destructive systems that lack empathy, inner connection, and oneness. A society that blasphemes its own feminine nature cannot find peace ("forgiveness") because it has destroyed the very principle of harmony.

Jesus' warning in Saying 44 can be read as a law of spiritual physics. You can misunderstand the external teachings (the Son) or the abstract concept of God (the Father) and still find your way back to balance. But if you fundamentally reject the inner, connective, nurturing, and transformative life-force (the Divine Feminine/Holy Spirit), you remain in a state of eternal fragmentation — "unforgiven" — because you have rejected the only force capable of making the two into one.`,
    contemplationPrompt: 'Where in my current routine am I treating stillness, sensitivity, or intuition as a vulnerability rather than the foundation of my own power?',
    concepts: [
      {
        term: 'The Primordial Matrix (The Mother)',
        definition: 'In both archetypal psychology and ancient cosmology, the feminine principle represents the primordial state of unmanifested potential. She is the darkness, the stillness, the void, and the "waters of the deep." She is the container — the infinite womb of creation — that must exist before anything specific can be formed within it. Psychologically, this mirrors the vast, collective unconscious out of which the conscious mind eventually emerges.'
      },
      {
        term: 'The Active Spark (The Father)',
        definition: 'If The Mother is the infinite, dark potential, The Father represents the active, differentiating spark. He is the "Let there be light," the structure, the spoken word (Logos), and the conscious ego — the masculine spark interacting with the feminine waters to initiate life, form, and order.'
      },
      {
        term: 'Reversing the Orthodox Hierarchy',
        definition: 'Traditional religious structures often place the Father first, treating the feminine as secondary or derived. By restoring the older, mystical understanding that the Divine Feminine — the Ruach or Holy Spirit — is the fundamental root of all things, we recognise that rejecting or "blaspheming" her means destroying the very foundation upon which the rest of the psyche and creation is built. This is not a hierarchy — it is a divine flow. The Mother does not rank above the Father; rather, she is the primordial ground from which the active spark of the Father naturally arises. One is the womb; the other is the seed. Together they form an unbroken, cyclical movement of creation rather than a ladder of authority.'
      }
    ],
    relatedSayings: [22, 101, 106],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 45  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 45,
    number: 45,
    text: 'Jesus said, "Grapes are not harvested from thorn trees, nor are figs gathered from thorn bushes, for those do not bear fruit. Good people produce good from their store. Evil people produce wicked things from their evil store within their hearts, and say wicked things. For out of the heart\'s abundance they produce wicked things."',
    reflection: `### See also: Matthew 7:15–20

This saying teaches us a valuable life lesson where one judges (knows) someone by the fruit they bear rather than by outward appearance. People are identified by the consequences of their actions ("you will know them by their fruits"), rather than their outward appearance.

One will not/cannot expect to harvest grapes from thorn trees, or gather figs from thorn bushes. These trees/bushes do not produce fruit. Therefore, it is important to discern whether a person produces from wholeness or fragmentation. It is not about judging others for being good or bad. Someone doing evil is not necessarily a malicious soul choosing the dark over the light; rather, they are acting out of ignorance of who they truly are. It is about understanding that someone who is hurt and in pain won't offer fruit from the abundance of their heart, because they have invested in pain, hurt, and suffering, and therefore deliver thorns.

Fruit is simply the visible result of the unseen root system and the health of the soil. If a tree is drawing from depleted soil — or in human terms, a storehouse of unexamined pain, resentment, or trauma — it cannot produce nourishing fruit. It produces thorns as a defence mechanism, or spoiled fruit as a symptom of internal disease. The tree is not consciously choosing to be "wicked"; the output is a direct, systemic result of what it is being fed.

The type of tree refers to the inner nature or character of a person. The fruit refers to the actions, works, teaching, or lifestyle that flow from the inner nature of the person. One won't create pain from a place of joy, gratefulness, and love.

False prophets draw attention away from our inner light. While a false prophet can be an external person, it can also be understood as a fragmented voice within ourselves. A voice of ego, fear, or unresolved pain can easily masquerade as protection or wisdom (sheep's clothing). Ultimately, however, it acts as a wolf — devouring our energy, distracting us from the quiet, grounded truth of our actual nature, and making it harder to have the energy to bear fruit.`,
    contemplationPrompt: `Think of a recent moment in your life where you reacted with frustration, defensiveness, or exhaustion — a moment where you felt yourself producing "thorns."

When you pause and look quietly at the root of that reaction, is the voice driving it coming from your grounded center, or is it an old, fragmented fear dressed up as self-protection? What does that specific, hidden root need in order to integrate, so it no longer drains your energy and distracts from your inner light?`,
    concepts: [
      {
        term: 'Ponēros (Evil/Bad)',
        definition: 'In the context of the Greek New Testament, this goes beyond a simple moral failing. It signifies an actively destructive force or behavior born from being "burdened by toil." It represents the outward, harmful manifestation (the spoiled fruit) of an inner life that is in turmoil and burdened by unresolved pain.'
      },
      {
        term: 'Fragmentation',
        definition: 'A state of inner division where a person is operating from a place of unintegrated pain, trauma, or hurt (the "depleted soil"). In this state, a person\'s actions are often defensive and disconnected from their true nature, leading them to produce "thorns" rather than the nourishing fruit that comes from a state of wholeness and joy.'
      }
    ],
    relatedSayings: [24, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 46  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 46,
    number: 46,
    text: 'Jesus said: From Adam to John the Baptist there is among the children of women none higher than John the Baptist, for his eyes were not destroyed (?). But I have said: Whoever among you becomes small will know the kingdom and will be higher than John.\nJesus says: "From Adam to John the Baptist, among those who have been born of women, there is none greater than John the Baptist! But for fear that the eyes <of such a one> should be lost I have said: He who among you shall be the small<est> shall know the Kingdom and be higher than John!"',
    reflection: `John the Baptist is described as the greatest of those who came before. When Jesus mentions that John's "eyes were not destroyed"—or expresses the "fear that the eyes of such a one should be lost"—He is likely referring to the ability to see beyond the physical veil. This implies that many people have become entirely absorbed by the world (the physical plane) and can no longer access higher wisdom or consciousness. Therefore, when Jesus says "whoever becomes small," He is once again referring to becoming like a child rather than becoming like the world. This means that embracing higher wisdom and insight provides a person with the clarity to navigate life differently—learning to listen to the quiet truth of the inner kingdom rather than the noise and confusion of the external world.

The smallness is about recognizing that the answer is simple and straightforward. When we strip away the ego, the need for status, and the endless overthinking that the "world" demands of us, what remains is that quiet, straightforward truth. Children don't overcomplicate reality with hidden agendas or anxieties about tomorrow; they accept and engage with what is right in front of them. Recognizing that the deepest answers are simple is the very essence of that "smallness."`,
    contemplationPrompt: 'Where in your life has the noise and ambition of the world clouded your inner vision, and how might embracing "smallness"—a return to childlike simplicity and humility—help you reconnect with the quiet wisdom of your inner kingdom?',
    concepts: [
      {
        term: 'The Kingdom (The Inner Realm)',
        definition: 'In Thomas, the "Kingdom" is not a future, physical paradise or a place you go after death. Instead, it is a present state of expanded consciousness and spiritual realization. It is already here, embedded within and around us, but it requires a shift in perception (or unclouded "eyes") to see it.'
      },
      {
        term: 'The Child / The Infant (Embracing "Smallness")',
        definition: 'The "child" represents a person who is stripped of societal conditioning, ego, and the complications of the world. An infant does not yet divide the world into dualities; they experience reality simply and directly.'
      }
    ],
    relatedSayings: [3, 70, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 47  Stub
  // ─────────────────────────────────────────────────────────────
  {
    id: 47,
    number: 47,
    text: 'Saying 47 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 48  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 48,
    number: 48,
    text: 'Jesus said: If two make peace with one another in this one house, they will say to the mountain: Be removed, and it will be removed.',
    reflection: `When Jesus speaks of the "one house," he is talking about the temple of the self. If the internal architecture is divided against itself, the structure cannot stand, let alone move mountains. Conversely, when you do the work to build a unified internal base, your external impact naturally changes. You stop reacting from a place of unhealed wounds or an internal civil war. You are able to engage with other people, complex systems, and societal challenges with clear eyes and grounded energy. You no longer add your own unconscious chaos to the "greater whole"; instead, your internal stability becomes a stabilizing force for the environments you inhabit.

This echoes the ancient philosophical principle: "As within, so without." The work you do on your own base is never strictly personal; it is the blueprint for how you build and influence the world around you.

In psychological terms, the "masculine" and "feminine" are not about gender roles, but about modes of being. You correctly identified these through the lens of MBTI and ancient mythology:
•\tThe Masculine (Logos/Thinking): Order, logic, discernment, and the "sword" that cuts through confusion.
•\tThe Feminine (Eros/Feeling): Connection, intuition, compassion, and the "vessel" that holds and nurtures life.

When these two are at war—for instance, when logic mocks intuition, or when emotion rejects structure—the "house" is divided. This internal friction consumes all our energy. We become so exhausted by our own inner civil war that a "mountain" (a life challenge) looks insurmountable.

**Why the "Mountain" Moves**

When you achieve internal peace, the "mountain" doesn't necessarily physically vanish; rather, your relationship to the obstacle changes.
•\tFrom a Divided State: A challenge feels like an attack. You react with either pure cold logic (ignoring the human element) or pure overwhelmed emotion (losing the ability to act).
•\tFrom a Whole State: You see the challenge clearly. You use the feminine aspect to empathize and understand the root of the problem, and the masculine aspect to strategize and execute a solution.

For example, Hapi, the god of the Nile's inundation, was often depicted with both a beard and female breasts. This wasn't a statement on biology, but a symbol of fertility and total providence. To the ancients, true power and creativity required the union of both polarities. To be "one" is to be "fertile" in thought and spirit.`,
    contemplationPrompt: 'How do you feel this internal integration changes the way you specifically handle stress or "mountains" in your daily life?',
    concepts: [
      {
        term: 'Non-duality (Advaita)',
        definition: 'A spiritual and philosophical concept found in many Eastern traditions asserting that the division we see in the world (self vs. other, mind vs. body, good vs. bad) is an illusion. Ultimately, all forces are expressions of a single, unified reality.'
      },
      {
        term: 'Syzygy',
        definition: 'Derived from a Greek word meaning "yoked together," Jung used this term to describe the union of opposites. It specifically refers to the divine couple, or the perfect internal balance and communication between one\'s Anima (inner feminine) and Animus (inner masculine).'
      }
    ],
    relatedSayings: [22, 106, 114],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 49  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 49,
    number: 49,
    text: 'Jesus said: Blessed are the solitary and the elect, for you will find the kingdom, for you came forth from it, (and) you will return to it again.',
    reflection: `**The hermit/sage/shaman/seer**
This text reminds me of the hermit archetype. A hermit is isolated either by the group, by circumstances (e.g., illness), or by choosing to isolate themselves.

**The Oracle or Seer:** In many ancient cultures, an individual was selected (often from youth) to serve as a conduit for information or prophecy. They were typically secluded in a temple, cave, or remote location away from the general public, only interacting when the community needed guidance.

**The Shaman:** While practices vary widely by culture, a shaman is often "called" or chosen by the community (or the spirits). Because their role requires them to navigate between the physical and spiritual worlds, they frequently live on the fringes or outskirts of the village, maintaining a necessary distance from everyday social life. This distance helps them to see clearly without being influenced by social conventions.

This isolation or solitude is where one finds the threshold (the in-between state). It is the place where the conscious and the unconscious meet. Jesus tells us that those who are alone or chosen are blessed. Interestingly, we see how solitary figures are usually chosen for certain roles in stories. Our society is conditioned to find solace and safety in groups, and many of us struggle to feel safe and good when we are on our own. Our survival instincts have taught us that it is dangerous to be alone. So, why does Jesus say that we are blessed if we are on our own? The invitation is to recognize that the inner planes—the space of solitude (stillness, darkness, void)—are where we find the kingdom.

This recognition allows us to stop seeking and thirsting after things that can never quench our thirst. A quiet room behind a closed door is a place where there is no interference or noise (if nobody is at home 😊). It is a place inside us that looks dark from the outside but contains the real truth of ourselves. When we sit with ourselves, we can hear the truth of ourselves again. This is where the shedding of false structures takes place. It is a place we fear because society has taught us to fear the quiet and the dark (i.e., the feminine). However, the dark place we go to is where the feminine and masculine meet. This restores balance.

Note: Jesus talks about the solitary and the elect. The elect can easily be viewed by the ego as meaning that someone is special or chosen because they are more important. This leads to an unfortunate cycle of jealousy and misunderstanding. For example, the *pharmakos* (a historical/sacrificial figure) was a person chosen by the community to be exiled or isolated in times of crisis to carry away the group's bad luck or guilt (i.e., the scapegoat).

**Finding the kingdom**
One will struggle to find the kingdom outside of oneself, as the world we live in often leads us away from the inner planes and tells us that everything worth having is outside of us. Learning to sit on your own with your fears, unwanted thoughts, stillness, and discomfort leads to more stability within. It helps us to make choices from a place of strength and not feel pressured when companies or others pressure us or make us feel uncomfortable. We are programmed to want to get away from feeling uncomfortable as quickly as possible, and this makes us vulnerable to predators. It is about learning to respect ourselves as whole and not fracturing ourselves for something that is not beneficial to us or others.

**Coming forth**
We have come forth from this wholeness and will return to it again. It reminds me of returning to dust again (in Genesis). Many scholars emphasize that Genesis 2:7 explicitly links the dust to the earth (*adamah*), referring specifically to local, terrestrial soil rather than cosmic debris. In Job 38:37-38, some interpretations connect *aphar* to metallic ore or dust that "sticks together," linking it to materials from the sky. For me, this returning to dust (cosmic parts) is not only about our physical bodies dying but also about returning to our fullness or wholeness.`,
    contemplationPrompt: 'Do you think that only the solitary and elect come from the pleroma (fullness)?',
    concepts: [
      {
        term: 'Pleroma',
        definition: 'A Greek word meaning "fullness." In psychological and Gnostic contexts, it refers to the totality of all existence or the state of perfect wholeness where all opposites are unified.'
      },
      {
        term: 'Pharmakos',
        definition: 'An ancient Greek term for a person selected to be a scapegoat. This individual was exiled or sacrificed during times of crisis to purify the community and carry away its collective guilt or bad luck.'
      },
      {
        term: 'The hermit/sage/shaman/seer',
        definition: 'Archetypal figures who step away from standard society—whether by choice, selection, or circumstance—to act as bridges to the spiritual or unconscious realms, gaining wisdom that serves the collective.'
      }
    ],
    relatedSayings: [16, 18, 75],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 50  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 50,
    number: 50,
    text: "Jesus said: If they say to you: Whence have you come?, say to them: We have come from the light, the place where the light came into being of itself. It [established itself], and it revealed itself in their image. If they say to you: Who are you?, say: We are his sons, and we are the elect of the living Father. If they ask you: What is the sign of your Father in you?, say to them: It is movement and rest.",
    reflection: `The questions asked are foundational questions and a map for consciousness on how to move in the world.

"Whence have you come?" is a question of origin. This helps us to understand that consciousness originates from the light, which wasn't born from a person. It established that consciousness stands outside of physical matter. It helps us to then to see ourselves and our circumstances in a completely different way. It helps us to anchor/align, preventing us from getting lost in the superficial details and dualities of the world.

"Who are you?" is the question of identity. When we identify with the innate traveller instead of with the temporary labels, ego and societal roles, it allows us to interact with the world from a place of wholeness rather than insecurity or fear. This is probably why texts like these were burned or hidden as it makes people less controllable.

"What is the sign within you?" is the compass. It helps us to know how to move and when to rest. It helps us to return to balance/wholeness. Recognizing the natural cycles of action and stillness helps us to understand when we are genuinely progressing and when we are simply caught in "frantic movement" of unconscious, repetitive patterns.

The Father/the innate Self is the part of you that can't be hurt or broken by life and experiences. It stands outside of time and physical matter. It can't be controlled and it can't be killed. It is the part that doesn't change. It is the stability and the foundation of a house that can withstand life's challenges.

**Understanding movement and rest better**
Society often applauds people who are constantly busy, achieving, and moving. However, as the text points out, this can be a disguise for profound stagnation. We tend to see only one side of the coin. Constant motion is one of the most effective ways to avoid sitting with oneself. If we never stop, we never have to face our deeper wounds or ask the difficult questions or reflect on our life. A person might change jobs, relationships or cities rapidly (appearing to grow), but if they are driven by the same unhealed insecurities or unconscious patterns, they haven't actually moved an inch. When someone is in a deep depressive episode or a period of severe burnout, to the outside eye — and often the person themselves — it looks like a complete breakdown or failure to function (move). In reality the psyche and nervous system might be forcing a hard stop because the previous way of living was unsustainable. Just like a seed buried in dark soil during winter appears dead, monumental structural changes are happening beneath the surface. It is a period of intense, albeit invisible, internal recalibration.

When we apply this lens to ourselves and others, it fundamentally changes how we offer grace. If we view the "innate Self as whole," we stop judging a person's worth by their current season. We realize that the friend who seems stuck in a rut might actually be doing the hardest internal work of their life, and the colleague who never stops working might be the one who desperately needs an intervention.

This reframing requires a lot of trust in the invisible processes of the mind and spirit.

**Other interpretations**
*Mystic:*
We have come from the light of perception / self-perception / consciousness, which has self-generated from the primordial potential into the Source, our "Father." We are the sons and daughters of that Source of Consciousness, in the image of that Consciousness. We are here to act/move and to contemplate (on our actions)/rest, and thereby learn of our true nature and right way of being.

*Stevan Davies writes of 50a:*
"As all things came from the light (saying 77), so those who came from the light are distinguished not by their manner of origin but by their realization of the fact. The place in which the light came into being is the place of Gen 1:3. Because the light persists in the world as the kingdom of God, there is no idea here of a fall of the light. A person who is the restored unmanifest image of God will manifest to himself the primordial light which is upon the world (sayings 22, 24, 83, 84)."

**Related text**
James 1:17: Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.`,
    contemplationPrompt: 'Are you functioning like a machine of constant output, or honouring the balance of movement and rest?',
    concepts: [
      {
        term: 'The Light (Primordial Light)',
        definition: 'The self-generated source of consciousness and the origin of all things. It is not a physical place or origin, but the underlying, subtle truth and our innate connection to the universe.'
      },
      {
        term: 'Movement and Rest',
        definition: 'The sign of the Father (and Mother) within. It represents the necessary cycle of action and stillness, reflecting true wholeness and conscious progression rather than frantic, unconscious repetition.'
      },
      {
        term: 'The Innate Self (Child of the Living Father)',
        definition: "A person's true, underlying identity. It is recognized not by physical birth, location, or societal labels, but by the conscious realization of one's connection to the primordial source."
      }
    ],
    relatedSayings: [22, 24, 50, 77, 83, 84],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 51  Stub — add text and reflection via admin
  // ─────────────────────────────────────────────────────────────
  ...Array.from({ length: 1 }, (_, i) => ({
    id: i + 51,
    number: i + 51,
    text: `Saying ${i + 51} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  })),

  // ─────────────────────────────────────────────────────────────
  // SAYING 52  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 52,
    number: 52,
    text: 'His disciples said to him: Twenty-four prophets spoke in Israel, and they all spoke of you. He said to them: You have abandoned the living one before your eyes, and spoken about the dead.',
    reflection: `**Texts in the New Testament that are similar:**

**John 5:37–40:** Jesus tells the religious leaders, "You study the Scriptures diligently because you think that in them you have eternal life. These are the very Scriptures that testify about me, yet you refuse to come to me to have life."

**John 8:52–53:** The authorities argue with Jesus, saying, "Now we know that you are demon-possessed! Abraham died and so did the prophets, yet you say that whoever obeys your word will never taste death. Are you greater than our father Abraham? He died, and so did the prophets."

The disciples represent a material perspective by stating that the "twenty-four prophets spoke in Israel, and they all spoke of you." When they see Jesus, they see a prophecy being fulfilled. The twenty-four prophets refer to the number of books in the Hebrew Bible (the law). When they speak about the prophets, it means that they are looking to the authority and status of those seen as having the right credentials to speak about God. It speaks to the part of us that sees hierarchy in coming from the right family, history, and status.

Jesus then says to them that they "have abandoned the living one before your eyes and spoken about the dead." It is like saying: you are looking, but you are not seeing. In Layton's translation it is clearer: "You have abandoned the one who is living in your presence, and you have spoken of those who are dead." The prophets they were discussing died long ago and had a specific role to play in society when they were alive. Jesus/the teacher notes how these old ways of thinking about God still have authority over his disciples.

If they were present to what they saw in front of them — if all the layers fell off — they would see that the presence of God was in Jesus and in them. They would recognise themselves in the mirror Jesus was showing to them. However, like most of us, they were taught to seek external authority to decide for them and to take responsibility for their lives.

The text is a reminder to stop denying ourselves and stop giving our power away — the gift that we received, our inner light — to dead things (law, status, rank, and so on) and to live from the inner light that has been inside us all along.

**Additional note — Theological parallel: The Acts of Thomas (Section 170)**

*"Since you do not believe in the living, how do you wish to believe in the dead? But do not fear. Jesus the Christ, through his great goodness, treats you humanely."*

The Acts of Thomas is an early 3rd-century apocryphal narrative — a legendary account of the Apostle Thomas's missionary journeys to India. In it, a similar rebuke is given to people who place all their faith in historical figures while remaining spiritually blind to the living, divine reality right in front of them.`,
    contemplationPrompt: 'To whom are we looking today to decide what and who is important? Think of how people introduce so-called "truths" by providing rank, titles, and historical relevance.',
    concepts: [
      {
        term: 'External Authority vs. Inner Light',
        definition: 'The tendency to rely on established, historical credentials (titles, texts, family lineage) rather than trusting the present, living divine presence and intuition within oneself.'
      },
      {
        term: 'The "Living" vs. The "Dead"',
        definition: 'A metaphor contrasting direct, present-moment spiritual experience (the living) with dogmatic, historical, or traditional religious structures that no longer hold active spiritual vitality (the dead).'
      }
    ],
    relatedSayings: [3, 43, 52, 113],
    published: true
  },

  {
    id: 53,
    number: 53,
    text: 'His disciples said to him: Is circumcision useful or not? He said to them: If it were useful, their father would beget him from their mothers (already) circumcised. But the true circumcision in the Spirit has proved useful in every way.',
    reflection: `The question: To circumcise or not? What is the intention of the question the disciples are asking? Is it to see whether Jesus confirms their beliefs, making them right and the Pharisees wrong? Is to know what the right thing is to do? The question is dualistic in nature, but Jesus sees past the question. It isn't about validating the rule; it is about redirecting the focus to the orientation of the inner life.

Jesus says that if it were important, they would be born that way already - showing the trust that Jesus had in the higher intelligence. This doesn't mean that he is now arguing for one or the other. One can easily take this text to mean that it is wrong to circumcise and miss the point. What Jesus says next is what is powerful: "[T]rue circumcision in the Spirit has proved useful in every way."

If we really want to focus on what is important, we should focus on the circumcision of the Spirit (the inner life). What is the circumcision of the spirit? It is the act of cutting away meaningless social conventions and shedding the false masks and societal expectations we wear to unearth the authentic, unfragmented true self. It is the return to wholeness.

The true self doesn't worry about social conventions and rules that isn't meaningful or useful but looks at the heart of the matter. What really fulfils you? What is important for you and what is really helping. If certain societal conventions or rules fragments you, it is better to cut it off (remove the falsities). Shedding these ingrained societal rules isn't a simple mental shift, but often a painful severing of old, comfortable identities.

One should keep in mind that these are invitations for those who are open to receive it.`,
    contemplationPrompt: 'What unintegrated part of myself is this opposing view agitating, and why do I feel so compelled to defeat it? This question tests your inner stability. If your peace of mind shatters the moment you stop defending your viewpoint, it reveals that your sense of grounding was attached to an external idea rather than your own internal alignment. Ask yourself: What am I defending? Is it a constructed identity?',
    concepts: [
      {
        term: 'The Persona',
        definition: 'The constructed social mask or identity we present to the world. In conflicts, it is highly fragile and often the true root of defensiveness, as the ego fights relentlessly to prevent this artificial, curated image from being dismantled by opposing views.'
      },
      {
        term: 'The Shadow',
        definition: 'The unconscious, unintegrated, or suppressed aspects of the psyche. When an opposing viewpoint agitates us deeply, it is frequently because the conflict is acting as a mirror, exposing these hidden internal fragments that we have yet to accept or make peace with.'
      },
      {
        term: 'Friction of Resistance',
        definition: 'The psychological and emotional suffering generated by the immense energy required to maintain heavy psychic defenses. The deepest pain arises not from the conflicting idea itself, but from the exhausting, rigid attempt to control the narrative and block out vulnerability.'
      }
    ],
    relatedSayings: [22, 26, 37, 89],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 54–114  Stubs — add text and reflections via admin
  // ─────────────────────────────────────────────────────────────
  {
    id: 54,
    number: 54,
    text: 'Saying 54 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  {
    id: 55,
    number: 55,
    text: 'Jesus said: He who does not hate his father and his mother cannot be a disciple to me. And (he who does not) hate his brothers and sisters and take up his cross like me, will not be worthy of me.',
    reflection: `Similar texts in the Bible:
Luke 14:26-27
"If anyone comes to me and does not hate father and mother, wife and children, brothers and sisters—yes, even their own life—such a person cannot be my disciple. And whoever does not carry their cross and follow me cannot be my disciple." (NIV)
Matthew 10:37-38
"Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me. Whoever does not take up their cross and follow me is not worthy of me." (NIV)

The Threshold of Growth
There are different phases in the life cycle of a tree. A seed can lie dormant for many years and will wait for the right time to sprout. Jesus invites disciples who are ready to grow and expand further. To step into an expanded consciousness (more awareness), one must inevitably cross a threshold that separates you from the "ordinary world" of established social and familial norms. For the seeker, it usually starts with an unease or frustration with the world, society, family etc. They have questions about life, such as whether there is more to it than working or mere human existence. They struggle to fit society's mould, and this is usually when the invitation comes.

Jesus is talking about a transformative journey here (the archetypal Hero's Journey). He understood that following him would require much more from his disciples, as their family and friends might accuse them of selfishness or abandonment for the choices they make—choices that don't look like following the conventional rules of society, leading others to think they no longer care. The friction doesn't necessarily come from malice, but from a divergence in reality. When you dismantle old paradigms and expand your awareness, your very presence can become an uncomfortable mirror for those who remain bound by conventional rules. To them, your growth may look like rejection, "hate," or antisocial behaviour simply because you no longer fit the shape of the person they used to know.

Jesus' disciples may have been very eager to follow him, as he could teach them things that would open them to new possibilities and wider perspectives (which sounds exciting and adventurous). However, Jesus had already walked the path and knew that there was a naivety about following him. He knows that they won't be able to view the world in the same way once they have expanded their consciousness.

It is important to note that Jesus doesn't ask everyone to be his disciple. He chooses them with intention, and they must choose the path as well. This text should thus not be read as a failing or shortcoming if you are close to your family and love spending time with them. It doesn't mean that you are not worthy, nor does it mean that you are doing something wrong. It isn't even about leaving your family behind and never talking to them again. It is about understanding that taking this road will alter your understanding of your family and friends, and therefore, it will change family dynamics. Not everyone is ready, or meant, to dismantle their current understanding of the world. Finding joy, comfort, and deep connection within the conventional family structure is not a failure or a sign of unworthiness; it is simply a different phase of human experience.

Jesus requires his disciples to take up their cross like he did. To take up your cross is about taking responsibility for your life, making the necessary changes, and knowing that you will change and be changed in the process. The cross is not a mandate for physical martyrdom, but the ultimate symbol of radical personal responsibility. It is the heavy, solitary work of embodying what you learn. It means accepting the consequences of your own growth, knowing that you cannot unsee what you have seen, even if it permanently alters the dynamics of your most cherished relationships.`,
    contemplationPrompt: 'When that profound internal shift happens and the old family dynamics are inevitably altered, how do you think one best navigates the tension between honouring that new, expanded consciousness and maintaining a bridge of love to those who might not understand the change?',
    concepts: [
      {
        term: 'Hate',
        definition: 'In ancient Semitic languages and idioms, to "hate" in a comparative context did not mean to hold malice, animosity, or emotional disgust. Rather, it was an idiom meaning "to love less" or to place secondary in priority. Jesus was using hyperbole to make a radical point: a disciple\'s loyalty and devotion to Him must be so absolute that, by comparison, even the deepest family loyalties look like "hate."'
      }
    ],
    relatedSayings: [16, 99, 101, 105],
    published: true
  },

  {
    id: 56,
    number: 56,
    text: 'Saying 56 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },
  {
    id: 57,
    number: 57,
    text: 'Jesus said: The kingdom of the Father is like a man who had [good] seed. His enemy came by night and sowed weeds among the good seed. The man did not allow them to pull up the weeds. He said to them: Lest you go and pull up the weeds, (and) pull up the wheat with it. For on the day of the harvest the weeds will be manifest; they will be pulled up and burned.',
    reflection: `Similar text in the Bible:
Matthew 13:24–30 (NIV)
Jesus told them another parable: "The kingdom of heaven is like a man who sowed good seed in his field. But while everyone was sleeping, his enemy came and sowed weeds among the wheat, and went away. When the wheat sprouted and formed heads, then the weeds also appeared.
"The owner's servants came to him and said, 'Sir, didn't you sow good seed in your field? Where then did the weeds come from?'
"'An enemy did this,' he replied.
"The servants asked him, 'Do you want us to go and pull them up?'
"'No,' he answered, 'because while you are pulling the weeds, you may uproot the wheat with them. Let both grow together until the harvest. At that time I will tell the harvesters: First collect the weeds and tie them in bundles to be burned; then gather the wheat and bring it into my barn.'"
Food for thought: In the original context of this story, the specific weed mentioned is "darnel." In its early stages of growth, darnel looks completely identical to wheat; they can only be told apart once they mature and bear seed. This serves as a powerful metaphor: humans often cannot immediately discern between what is good for us and what is not. We must wait for things to mature before we can see their true nature.
The text: If you look at the inner life of a person who has good intentions and wants to see themselves and others thrive in a healthy, balanced manner (the good seed), the ego or external conditioning (the enemy) can often come and sow weeds among the plants that are still growing within.
The wise person does not immediately pull up these false stories or negative ideas. Doing so prematurely might uproot the good ideas, as well as the essential teachings and learnings hidden within what appears to be bad. Instead, they wait until the plants have grown. Once mature, the person can clearly discern what is "wheat" and what are "weeds."
The weeds, which are no longer useful and have served their purpose, can now be burned away. This highlights how one can extract good out of what is seemingly bad (spiritual alchemy) by allowing it time. When the day of the harvest comes, the weeds will be easy to identify and separate from what is healthy and good, leading to ultimate purification.`,
    contemplationPrompt: 'Have you recognized how many of your toxic or painful experiences, after being given time, have turned into wisdom—allowing us to have a better perspective and make choices that brings us to healthier places/spaces?',
    concepts: [
      {
        term: 'Spiritual Alchemy',
        definition: 'The process of transforming negative, painful, or "toxic" internal experiences into profound wisdom and personal growth over time.'
      },
      {
        term: 'Discernment',
        definition: 'The ability to judge well; in this context, the cultivated patience to wait until thoughts and experiences mature before deciding whether they are beneficial (wheat) or harmful (weeds).'
      },
      {
        term: 'The Inner Field',
        definition: 'A metaphor for our inner landscape, where both authentic truths (good seeds) and ego-driven conditioning (weeds) are planted and grow together.'
      }
    ],
    relatedSayings: [9, 21],
    published: true
  },

  {
    id: 58,
    number: 58,
    text: 'Jesus said: "Blessed is the man who has suffered; he has found life." Alternatively: Jesus said, "Blessed is the person who has laboured and found life."',
    reflection: `Suffering is a difficult topic to discuss. Most of us have memories of times and places where we have suffered. This pain can be intense, especially when rooted in a lack of understanding. For example, we may push against something that is happening; by fighting or trying to prevent it, we only intensify and prolong our pain. Therefore, suffering is sometimes related to our unwillingness to move with the flow of life.

This is not a judgement, but simply a part of the human experience. Jesus says that the man who has suffered is blessed. Often, the world around us sees someone who is suffering as "less than," or judges them as having done something wrong. As a result, we tend to hide our pain. Revealing it can sometimes lead to further isolation, as most people are uncomfortable with suffering and want to keep it as far away from themselves as possible.

But Jesus focuses on the blessing. His perspective is profoundly different: He knows that suffering brings us back home, back to life. This does not mean we should romanticize suffering. Rather, it means we can recognize that it is not there to break us. Instead, it strips away what is unreal to point to what was always real. Ultimately, this brings us back to life, guiding us toward deeper relationships and a more profound sense of meaning.`,
    contemplationPrompt: 'In what way has the poison become the cure in your own life?',
    concepts: [
      {
        term: 'Suffered',
        definition: 'In the Coptic manuscript of Saying 58, the phrase used is ϣⲡ ϩⲓⲥⲉ (shep hise). Shep means "to receive" or "to take on." Hise means "labour," "toil," "fatigue," or "hardship." Therefore, shep hise literally translates to "receiving hardship" or "taking on labor." This is why translators debate whether "suffered" or "laboured" is the more accurate English word. It implies an active, exhausting effort rather than passive victimization. In Gnostic texts, however, the paradigm is entirely different. Suffering is not a punishment or a legal transaction; it is a profound psychological and spiritual catalyst. However, Saying 58 suggests that when this inherent friction is met with conscious awareness (when it is actively laboured through, rather than blindly reacted to), it becomes the very friction needed to strike the spark of gnosis (knowledge). Suffering is the alchemical fire.'
      },
      {
        term: 'Life',
        definition: 'The Root Meaning: In the Greek language of the era when these texts were compiled, there were two distinct words for life. Bios refers to biological, physical existence—the daily survival of the body that eventually ends. Zoe, on the other hand, refers to absolute, spiritual, or divine vitality. It is the indestructible essence of being. When these sayings speak of finding "life," they are almost exclusively referring to Zoe. It is the direct experience of gnosis (deep, experiential knowledge). To find life is to remember the divine spark within, stepping out of a state of spiritual forgetfulness and into luminous awareness.'
      }
    ],
    relatedSayings: [69, 2, 29, 112],
    published: true
  },

  {
    id: 59,
    number: 59,
    text: 'Jesus said: Look upon the Living One so long as you live, that you may not die and seek to see him, and be unable to see him.',
    reflection: `In the context of the Gospel of Thomas and similar early wisdom texts, "death" often does not merely mean biological passing. It frequently serves as a metaphor for spiritual ignorance or a state of unconscious "sleep". To "die" without seeing the Living One is to pass through the physical existence entirely asleep to the divine reality around you.

**The deferred life syndrome**

We are culturally conditioned to treat the present moment merely as a stepping stone to a better future—whether that future is a vacation, retirement, or the afterlife. Saying 59 radically challenges this by suggesting that the divine (and true joy) is only accessible in the eternal now. If we practice missing the present moment our whole lives, we will inevitably lack the capacity to see it at the end.

Mainstream traditions often emphasize *believing* in a historical figure (e.g. no longer living) or *waiting* for a future event (e.g. the second coming). Saying 59 shifts the focus entirely from passive belief to direct experience. The "Living One" is an active, present reality that requires the practitioner to "look upon" and engage with it actively while they have the breath to do so.

We tend to live in the past or for someday, in the future. We tend to be anywhere but here. We tend to live for weekends or events (getting married, getting the job etc.). We are not present to what is in front of us now. We often speak about how we miss those that have passed. However, when they are living next to us, we are not present. This is part of the tragedy of having this gift of life and not seeing it.

The Living One can be interpreted as seeing God/The All in everything. However, we miss that God is with us, in us and all around us now. We can live with him now. To experience with joy and wonder all that is now.`,
    contemplationPrompt: 'If we have never truly been separated from the Source, what drives our human tendency to project God into the "beyond" instead of awakening to the presence right here?\n\nThink about how we have looked for God in history, in future events, in the sky – everywhere that we are not.',
    concepts: [
      {
        term: 'The Living One',
        definition: 'The active, ever-present divine reality—often understood as Christ, God, or the awakened state of being. It emphasizes experiencing the divine in the present moment ("the now"), rather than treating God as a purely historical figure from the past or a distant promise waiting in the afterlife.'
      }
    ],
    relatedSayings: [3, 38, 113],
    published: true
  },

  {
    id: 60,
    number: 60,
    text: '<They saw> a Samaritan carrying a lamb, who was going to Judaea. He said to his disciples: (What will) this man (do) with the lamb? They said to him: Kill it and eat it. He said to them: While it is alive he will not eat it, but (only) when he kills it (and) it becomes a corpse. They said to him: Otherwise he cannot do it. He said to them: You also, seek a place for yourselves in rest, that you may not become a corpse and be eaten.',
    reflection: `Some Jews viewed Samaritans with deep hostility, regarding them as religious heretics, social outcasts and "half-breeds". When Jesus introduces a Samaritan, it usually signals to the listener that expectations are about to be subverted, forcing the disciples to look at the situation with fresh eyes (not with preconceived ideas/judgements). 
A Samaritan carries a lamb. The lamb may feel a false sense of security in the Samaritan's arms, yet the disciples know it is being carried to its death. The lamb is unaware of the fact that he is being taken to be killed. Jesus's use of the word "corpse" invites us to pause and redefine life and death. The striking use of the word "corpse" blurs the line between the living and the dead. A person can be physically alive but entirely asleep, passively carried toward their own destruction—rendering them a corpse long before their physical end.
When Jesus says "seek a place in rest," he is talking about anchoring yourself in your divine, eternal nature. In the ancient world, there was a heavy philosophical focus on the hierarchy of nature—what eats what. In Thomas, the spiritual realm must consume the physical (transforming it into spirit), otherwise, the physical realm will consume the spirit. If you do not establish your "rest," you become part of the food chain of the material world. When we come to rest in what we really are, we are no longer pulled in all directions. It becomes easier to discern. 
Practically, it comes down to not being consumed by the modern drive for busyness, which keeps us spiritually asleep. When we lack awareness, our time, energy, and very identity is "slaughtered" and consumed by external forces (work, societal expectations, digital noise). It comes back to rest and movement.
If we are always active in the world (e.g. think about the drive to be busy), we become like a corpse. We don't recognize that we are being slaughtered, because we are only focused on working. Ultimately, it comes down to the balance between rest and movement—both are essential. Rest allows us to receive and become deeply aware of what we are doing and why. This clarity makes our actions more intentional and protects us from being consumed by external forces.`,
    contemplationPrompt: 'Where in your life are you moving mindlessly, unaware of the forces consuming your energy and time? How can you cultivate a deliberate practice of \'rest\' today to awaken to your true state and avoid being consumed by the noise of the world?',
    concepts: [
      {
        term: 'corpse',
        definition: 'A state of spiritual unconsciousness or mechanical busyness. Being physically alive but spiritually asleep, rendering one vulnerable to being mindlessly consumed or \'eaten\' by worldly demands and distractions.'
      },
      {
        term: 'seek a place in rest',
        definition: 'The deliberate act of stepping away from constant action to find stillness, silence, and internal awareness. It is a protective and restorative state that allows for clear discernment of one\'s true nature and purpose.'
      }
    ],
    relatedSayings: [50, 56, 90],
    published: true
  },

  {
    id: 61,
    number: 61,
    text: `Jesus said, "Two will rest on a bed: the one will die, and the other will live." Salome said, "Who are you, man, that you ... have come up on my couch and eaten from my table?" Jesus said to her, "I am he who exists from the undivided. I was given some of the things of my father." "I am your disciple." "Therefore I say, if he is destroyed, he will be filled with light, but if he is divided, he will be filled with darkness."`,
    reflection: `**Authority born from "Gnosis", Not Hierarchy**

In the orthodox church, authority was strictly hierarchical (bishops, priests, apostolic succession) and male-dominated.

In this text, Salome sits at the dinner table with Jesus and participates. Salome questions Jesus' authority to teach when he says that "two will rest on a bed: the one will die, and the other will live."

In Gnosticism, authority is derived entirely from gnosis (direct, experiential inner knowing). Jesus has authority because he has realized his connection to the "undivided" source. Salome has the authority to sit at the table, question him, and declare herself his disciple because she possesses the spiritual maturity to recognize that truth. When the physical world (and its gender roles) is viewed as an illusion, spiritual equality becomes the natural default.

To understand this text, we have to understand a different cosmology than the one that we were taught.

**The Original Wholeness:** Before the physical universe existed, there was only the ultimate, undivided source — often called the Monad or the Pleroma (Divine Fullness). In this state, there are no opposites. There is no male or female, no life or death, no light or dark. Everything exists as a singular, perfect, androgynous whole.

**The Fracture into Duality:** In Gnostic thought, the creation of the material world wasn't a triumph; it was a cosmic error or a fall from grace. The physical universe is inherently fractured. To exist in the material world is to be trapped in the "split" of binaries. The material realm operates on division — you cannot have physical life without physical death, or up without down.

Then Jesus continues his teaching telling us something that sounds counterintuitive: if "he is destroyed, he will be filled with light, but if he is divided he will be filled with darkness." In traditional frameworks, destruction is seen as the ultimate negative — punishment or death. But in this cosmology, what must be "destroyed" is the illusion of separation.

Depending on the translation of the original Coptic text, the word for "destroyed" is sometimes translated as "empty" or "desolate." It means to be emptied of the divided ego, the societal labels, and the binary identities (male/female, rich/poor, master/servant). Only when that separated, dualistic state "dies" can the original, undivided light rush in.`,
    contemplationPrompt: `Think about how light fills all the space in a room. It doesn't discriminate between sides. Why do we expect God to choose between men and women, rich or poor, master or slave?`,
    concepts: [
      {
        term: 'Who is Salome?',
        definition: `The New Testament portrays Salome as a relatively minor figure — she appears briefly in the Gospel of Mark as one of the women at the crucifixion and as a "Myrrhbearer" who visits Jesus' empty tomb. However, in Gnostic and early apocryphal traditions, Salome is dramatically elevated. She emerges as a prominent, inner-circle disciple who engages Jesus in deep theological dialogue. In these texts, she isn't just a follower; she is a seeker of esoteric knowledge who helps illustrate some of the core tenets of Gnosticism — particularly the rejection of the physical world and the spiritual unification of opposites.`
      }
    ],
    relatedSayings: [],
    published: true
  },

  {
    id: 62,
    number: 62,
    text: `Jesus said: I speak my mysteries to those [who are worthy of my] mysteries. What your right hand does, let not your left hand know what it does.`,
    reflection: `**Similar text in Bible:** Matthew 6:3 — "But when you do a charitable deed, do not let your left hand know what your right hand is doing."

In the Gospel of Matthew, the core mechanism of the teaching is about bypassing the ego. When we do things to be loved, admired, or even to "go to heaven," our ego acts as an internal accountant. The "left hand" is watching the "right hand" to keep score. Ultimately, it comes down to not seeing others as us. When we view people as separate entities to "help," our actions become a way to feel superior or earn praise. One can easily read Matthew and think, "Well, as long as I don't brag about it when I do nice things for others, I am a good person." We may stop there and miss the gold.

The text in the Gospel of Thomas does strip away the external context of almsgiving. Why? In Gnostic texts, the goal is not moral perfection, but divine oneness (wholeness) through lived experience. So how is it possible for us to not know what our right hand does? The answer is to stop doing and return to wholeness. By saying the left hand shouldn't know what the right is doing, it points to a state of action where the "doer" disappears. The act of kindness simply flows through you as a natural expression of what is, rather than a transaction you are orchestrating for personal gain.

When we realize that we are one with the Source of all things, we recognize that there is no separation. Separation makes us split things, like giving alms, into separate categories (i.e., something we should do). This creates the very division we are trying to avoid in the first place. By pairing "I speak my mysteries to those who are worthy" directly with the metaphor of the hands, the text implies that the ultimate spiritual mystery is the state of undivided oneness. You cannot understand the "mysteries" intellectually; you can only experience them when you stop causing division within yourself.

When we are whole and we live our lives, we give and receive all the time without knowing it.

**The Ancient and Modern Mind**

While the ancients living in the 1st century didn't understand neurobiology or brain hemispheres, they used "right" and "left" as universal metaphors for profound dualities: conscious and unconscious, light and dark, male and female, spirit and matter.

When the logical, analysing self (right hand—left brain) and the intuitive, connected self (left hand—right brain) are no longer separated, you achieve a state of flow.

It was never about alms. It is about living fully. When you are in a state of wholeness, you don't try to do good; good simply happens through you because you no longer view yourself as separate from the person next to you.`,
    contemplationPrompt: `What part of this text speaks to you?`,
    concepts: [],
    relatedSayings: [11, 14, 22, 67, 106],
    published: true
  },

  {
    id: 63,
    number: 63,
    text: `Jesus said: There was a rich man who had many possessions. He said: I will use my possessions to sow and reap and plant, to fill my barns with fruit, that I may have need of nothing. Those were his thoughts in his heart; and in that night he died. He who has ears, let him hear.`,
    reflection: `**Similar text in the New Testament:** Luke 12:13–21.

The story is told about a "rich man" – an archetype. It is someone we can all recognize. If we define this archetype as anyone who uses external accumulation — whether that's money, status, accomplishments, or even knowledge — to build a fortress against the unpredictability of life, the "shoe fits" almost everyone at some point. This is why the text needn't scare us but can invite us to look deeper.

Ways we tend to interpret the text when we look at it through the eyes of our ego: we are scared that Jesus is talking about us, so when we hear the story, we focus on the fact that the man is rich and then hear: "Oh, don't worry — I am not rich, so this isn't applicable to me. I don't have that much so I am okay." Strangely enough, it is still the same mindset that creates the problem. When we live as separated people, we confuse having with being. We start seeing the things around us as possessions — things to attain. We start focusing on having enough to never worry about anything or anyone. We become producers and consumers of things and therefore we see a need to obtain to be safe or to remain ahead of the curve. We avoid living. There is no judgement in this. But what is the text inviting us to see? What is the gift?

We are looking at someone who has identified with having and possessing as something that makes them secure and whole. It is the idea of "I am what I have." The story takes a turn when the man's plan doesn't come to fruition as he died before he got to experience what he wanted. Interestingly, the text refers to the thoughts that were in his heart — pointing to the fact that there wasn't space for something more than having and possessing. His anxieties ran his life.

We then encounter the familiar invocation: "He who has ears, let him hear." Far from a simple concluding remark, this phrase acts as an invitation for deeper reflection. It signals that the narrative operates well below the surface, quietly challenging the reader: if this resonates with your own experience, sit with it, internalize it, and let its deeper truth unfold. On the surface, we may hear the message to not think that we will be safe if we possess everything, or that we will be condemned for being rich. The issue isn't that the man is rich or that he plans. The issue isn't that he lives comfortably. The message doesn't speak to our ego. It speaks to our wholeness.

There is a misunderstanding about our physical experience when we argue as the rich man does. The rich man wasn't rich at all if you listen closely. He was seeing scarcity and created from that scarcity. That is why he needed to sow and reap and plant, and to fill his barns with fruit — it helped him to feel more whole, more secure. But there is no mention of relationships with others or really enjoying nature. He was plagued by scarcity.

What did the rich man actually have in the end? Nothing. He died without ever experiencing the life he desired, simply because he was always saving it for a future that never arrived.

So then the question becomes: what are we working towards? When we understand life to be something to overcome or to survive, we don't live — we start possessing, competing, stressing, and splitting things. But a person who is truly whole doesn't seek riches, because they are already rich. They are not what they own, as they don't need to possess to feel whole. Their beingness and not their doingness makes them experience life in a deeper, more meaningful sense. The world is then not something to consume, but something for relationship, for living, for experiencing. The tragedy doesn't lie in the fact that the man was rich — it lies in what was really going on beneath the surface.

When we argue the way the rich man does, we are saying that happiness or fulfilment lies somewhere outside of us, or somewhere in a future event. The future event never comes, and we are still in lack.`,
    contemplationPrompt: `What did the rich man have when he died? What do you think his life was really like?`,
    concepts: [],
    relatedSayings: [3, 70, 109, 110],
    published: true
  },

  ...Array.from({ length: 2 }, (_, i) => ({
    id: i + 64,
    number: i + 64,
    text: `Saying ${i + 64} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  })),

  {
    id: 66,
    number: 66,
    text: `Jesus said: "Show me the stone which the builders rejected; it is the cornerstone."`,
    reflection: `This verse is interesting. It reminds us of the Bible text in which Peter is called the stone on which the church is built.

> **Matthew 16:18**
> And I tell you, you are Peter [Greek, Petros—a large piece of rock], and on this rock [Greek, petra—a huge rock like Gibraltar] I will build My church, and the gates of Hades (the powers of the infernal region) shall not overpower it [or be strong to its detriment or hold out against it]. (AMPC version)

Here, we get the chance to let the text speak for itself. It is stripped of its context, and it allows us to sit with it and think for ourselves. So, the first question which comes to mind is: who are the builders?

Well, one only has to think about one's lived experience to know which information is valued by society and what is being fought against or rejected. Some ideas/keys that could help people were withheld from them, as it would empower them in such a way as to no longer conform to controlling forces in the same way. This meant that that information was dangerous for the existing rulers or those who wanted to remain in power/control. It was, therefore, important for some people to provide a narrative/a foundational story that would keep people tethered to a certain frame and make them easier to be controlled.

However, if one builds on a weak cornerstone (one that is built on fear, greed, or control), it cannot last. It tells us something about structures and how they function. It helps us to see that some structures aren't built to last. This allows us to look for the rejected keys/words that offer a cornerstone that can really provide stability when storms come our way.

If we, for example, believe that we are sinners and need saving, we will create that narrative, and when the storms hit, we will wait for someone to save us — remaining in a state of fear, victimhood, or even anger if nobody shows up. However, when we recognize that we are the sons and daughters of the living Father, we reclaim our sovereignty and true origin. We no longer see the ocean as something that will destroy us, but as something that *is* us, and we learn to swim and move in a different way through life. We stop fighting the systems and recognize that we are not the systems that we try to keep there for safety, as they were never meant to last and never meant to protect like we may have thought at one time.

**Definition: Cornerstone**
A cornerstone was the critical first stone laid during construction. It determined the level, angle, and orientation for the entire structure. If the cornerstone was slightly off, the entire building would be structurally unstable and could eventually collapse. Beyond its physical necessity, the cornerstone held deep cultural, spiritual, and astronomical significance.

- **Cosmic Orientation:** Ancient builders in Egypt, Mesopotamia, and the Levant laid buildings according to precise astronomical points, and the cornerstone established this vital compass orientation.

### Traditions and Interpretations
**1. The Greek vs. Aramaic Language Distinction**
The linguistic debate centres heavily on the shift in gender between the two Greek words used in Matthew 16:18.

**The Greek Wordplay**
In the original Greek text of Matthew, the sentence reads: "You are Petros (masculine), and on this petra (feminine) I will build my church."

- **Petros (Πέτρος):** A masculine noun typically meaning a detached stone, pebble, or boulder.
- **Petra (πέτρα):** A feminine noun meaning a massive, immovable bedrock cliff or mountain ridge.

Protestant apologists historically argued that Jesus used *Petros* for Peter to show he was just a small stone, but *petra* to show that the church's true foundation was Christ Himself or Peter's faith.

**The Aramaic Reality**
However, Jesus and his disciples spoke Aramaic as their daily language. Matthew's Greek gospel is a translation of those spoken words. In Aramaic, there is no distinction between a small stone and a bedrock cliff for this word; both are Kepha (כֵּיפָא). The underlying Aramaic statement would have sounded like this:

"You are Kepha, and on this kepha I will build my church."`,
    contemplationPrompt: `Think about the foundation as an archetype. How do we create, and what is the effect of our creations? For example, if you build on sand, the moment the waves come, they will destroy the house.`,
    concepts: [
      {
        term: 'Cornerstone',
        definition: 'The critical first stone laid during construction — it determined the level, angle, and orientation for the entire structure. If even slightly off, the whole building became unstable. Ancient builders also used it to establish cosmic and astronomical orientation, giving the structure its fundamental alignment with the world.'
      },
      {
        term: 'The Builders',
        definition: 'Those who shape the dominant structures of society — cultural, religious, and political. In this saying, "builders" points to the forces that decide which knowledge, stories, and foundations are acceptable, and which are rejected as dangerous or disruptive to existing power.'
      },
      {
        term: 'Petros & Petra',
        definition: 'Two distinct Greek words in Matthew 16:18. Petros (masculine) refers to a detached stone or boulder; Petra (feminine) refers to a massive, immovable bedrock. In the original Aramaic spoken by Jesus, no such distinction existed — both meanings were carried by a single word, Kepha.'
      },
      {
        term: 'Kepha (כֵּיפָא)',
        definition: 'The Aramaic word meaning both a small stone and a bedrock cliff — a unity that the Greek translation split into two distinct words. When Jesus said "You are Kepha, and on this kepha I will build my church," the wordplay was seamless in Aramaic, suggesting an identity between Peter and the foundation itself.'
      }
    ],
    relatedSayings: [],
    published: true
  },

  {
    id: 67,
    number: 67,
    text: `Jesus said: "He who knows the all, (but) fails (to know) himself, misses everything." (Blatz)\n\nJesus said: "If anyone should become acquainted with the entirety and should fall short of all (?), that person falls short utterly." (Layton)`,
    reflection: `This text reminds us of the text: "When you come to know yourselves, then you will become known, and you will realize that it is you who are the sons of the living father. But if you will not know yourselves, you dwell in poverty, and it is you who are that poverty."

This is the key – the kingdom is within. One will feel "less than," betray yourself, perform and identify with what is small, and live on the surface. This means that you are not rooted in deep soil, and therefore you will also be more prone to being smothered by weeds or falling over. Going within is like growing a big root system and breaking the hard soil down, so that new life can be born and grow. It helps us to become more flexible throughout the changes that life brings and helps us to understand that who we are is not a problem to be solved or fixed, but that we are the sons of the living Father.

Here is a metaphor that will make it more clear: When we treat the world around us and our world within as enemies, we behave like a virus in the system, and the system doesn't recognize us. However, when we recognize ourselves, the system recognizes us (think of resonance), and it therefore doesn't see us as a threat, but as part of the harmonious whole.

The requirement is not that we go within and lie to ourselves. It is to go within, shine a light on what is there: the fear, the pain, the shadows, and things we try to hide because we think that we will be rejected. But we have rejected ourselves, and in rejecting ourselves, we also reject what is outside of us. When we look for the truth outside of us, we only see reflections, and reflections aren't the real/full truth of ourselves, so we still feel like something is amiss.

### Some Bible verses that are similar:
Psalm 18:25 shows some of the reflectiveness of the outside world, which we sometimes mistake for the whole: "With the merciful You will show Yourself merciful; With a blameless man You will show Yourself blameless."

Matthew 7:21-23:

> 21 "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven. 22 Many will say to me on that day, 'Lord, Lord, did we not prophesy in your name and in your name drive out demons and in your name perform many miracles?' 23 Then I will tell them plainly, 'I never knew you. Away from me, you evildoers!'"

This verse also points to how surface-level ways of living don't recognize the full picture and think that we can somehow trick the system to see how good we are by doing "good" things.

The world is sometimes obsessed with the information age. It tells us what knowledge is important/makes one important. However, Source doesn't measure in the same way. When pretense falls, we get to know ourselves, and when knowing ourselves, we are known (not necessarily by people around us), but we acknowledge our divinity and oneness with all, and we are recognized within the greater system.

The sheep that leaves (that is seen as lost) is found eventually. The prodigal son finds out that the life with his father meant more than the life lived on the surface and is welcomed home. His father recognizes him, and he recognizes his father. The son returns as someone who sees and knows why he wants to return home.`,
    contemplationPrompt: `Think about how our failure to recognize ourselves prevents us from seeing the blessings, support, and treasure that we are already worthy.`,
    concepts: [
      {
        term: 'The All',
        definition: 'In Gnostic and Thomas tradition, "the All" refers to the totality of existence — the divine whole, the complete reality of which all things are a part. To know the All without knowing oneself is to possess knowledge without wisdom; the doorway to the All runs through the self.'
      },
      {
        term: 'Self-knowledge',
        definition: 'Not intellectual self-analysis but a direct inner recognition of one\'s true nature and origin. Throughout the Gospel of Thomas, knowing yourself is equivalent to knowing the Father — the two are inseparable. Without this root, all outer knowledge remains rootless.'
      },
      {
        term: 'Resonance',
        definition: 'The principle that inner recognition creates outer recognition. When we are aligned with our true nature, we are perceived as part of the harmonious whole rather than as a foreign element. Like tuning forks, like recognises like — the system responds to what is genuinely present within us.'
      },
      {
        term: 'Reflection',
        definition: 'The outer world as a mirror of the inner world. What we encounter outside returns to us what we carry within — our mercy, our blame, our openness. Reflections are partial truths; they reveal something real but are never the full picture, which is why seeking truth only outward leaves us feeling something is always missing.'
      }
    ],
    relatedSayings: [3, 56, 70, 80, 111],
    published: true
  },

  {
    id: 68,
    number: 68,
    text: `Saying 68 — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  {
    id: 69,
    number: 69,
    text: `Jesus said: Blessed are those who have been persecuted in their heart; these are they who have known the Father in truth. Blessed are the hungry, for the belly of him who desires will be filled.`,
    reflection: `To be persecuted in your heart may evoke different imagery for different people, depending on their experiences. But to some extent, we can all resonate with stages in our lives where we were in a profound state of internal conflict (and aware of it). If not, we have probably just focused that conflict outward. So, when Jesus says that we are blessed for being persecuted in our hearts, it sounds strange because it doesn't feel like a blessing. It feels like inner turmoil, guilt, and spiritual friction—not because of what the outside world is doing to you, but because of what you are wrestling with internally.

Inner persecution is usually seen as a form of punishment by people. However, it can also be seen as the necessary crucible for spiritual awakening. It is part of the alchemical process of turning lead into gold. This process is a process of shaking illusions. It is the deep, sometimes agonizing friction that occurs when your higher awareness (or true self) clashes with your ego, your ingrained habits or your past actions. It doesn't allow you to settle for superficiality, but to really know yourself.

**The Inner Persecutor:** Often, the part of you doing the "persecuting" is an internalized archetype—perhaps the strict inner critic, the perfectionist, or the judge. This part attacks your sense of self-worth or creates a constant hum of anxiety.

**The Shadow at Work:** If there are aspects of yourself that you have repressed or rejected (your shadow), they do not disappear. They demand to be felt. This can manifest as an intense, heavy feeling in the heart—a sense of being hounded by your own unresolved grief, anger, or unlived potential. The persecution is actually an invitation (albeit a painful one) to integrate those rejected parts of yourself.

On a practical, day-to-day level, being persecuted in your heart can look like:

- **Moral Injury or Deep Regret:** Holding onto a past action that violated your own core values, resulting in a persistent, quiet self-punishment.
- **The Imposter Syndrome:** A relentless internal voice that tells you that you are fraudulent, inadequate, or undeserving of your life, regardless of external evidence to the contrary.
- **The Burden of Empathy:** Sometimes, highly sensitive people internalize the suffering of the world or those around them so deeply that it feels like a personal persecution, a heavy weight carried directly in the emotional center.

Ultimately, being persecuted in your heart means you are engaged in the heavy lifting of being human. It is the painful, chaotic, but ultimately transformative space where deep self-knowledge is forged.

"Blessed are the hungry, for the belly of him who desires will be filled" points to the person who is no longer satisfied with things as they are. They hunger for something more than what they are told is possible. Especially after going through such internal persecution, typical material rewards don't appeal to them in the same way anymore. Instead, they start looking for something real.`,
    contemplationPrompt: `Matthew 5:8: Blessed are the pure in heart, for they shall see God — for him the vision of God is equivalent to knowing the Father in truth. Hunger for what is right (finding problems with the world as is).

Could these two "seemingly" contrasting teachings actually be mapping a single spiritual journey? How does the agonizing stage of inner persecution break down our illusions so that the stage of a 'pure heart' can finally emerge?`,
    concepts: [
      {
        term: 'The Inner Persecutor',
        definition: 'An internalized archetype — the strict inner critic, the perfectionist, or the judge — that attacks one\'s sense of self-worth or creates a constant hum of anxiety. Recognizing this voice as a part of the psyche rather than the truth about oneself is a key step in inner work.'
      },
      {
        term: 'The Shadow at Work',
        definition: 'The repressed or rejected aspects of the self that do not disappear but demand to be felt. They manifest as a heavy feeling in the heart — grief, anger, or unlived potential — and the inner persecution they create is ultimately an invitation to integrate those rejected parts of the self.'
      },
      {
        term: 'Moral Injury',
        definition: 'The persistent, quiet self-punishment that arises from holding onto a past action that violated one\'s own core values. Unlike ordinary guilt that fades, moral injury lodges in the heart and becomes a source of ongoing inner persecution.'
      },
      {
        term: 'Imposter Syndrome',
        definition: 'A relentless internal voice that insists one is fraudulent, inadequate, or undeserving, regardless of external evidence. A form of inner persecution rooted in the gap between the constructed self-image and the unknown depths of one\'s actual nature.'
      },
      {
        term: 'The Burden of Empathy',
        definition: 'The experience of highly sensitive people who internalize the suffering of the world or those around them so deeply that it registers as a personal persecution — a heavy weight carried in the emotional center. A sign of deep relational attunement that requires conscious integration.'
      }
    ],
    relatedSayings: [3, 58, 67],
    published: true
  },

  {
    id: 70,
    number: 70,
    text: `Jesus said: If you have gained this within you, what you have will save you. If you do not have this in [you], what you do not have in you [will] kill you.`,
    reflection: `The Gospel of Thomas focuses on what is within you. We often hear that we are the temple or that the kingdom is found within.

**1 Corinthians 6:19:** *"Do you not know that your body is a temple of the Holy Spirit who is in you, whom you have received from God? You are not your own;"*

Jesus talks about the spark, the inner wisdom and knowledge (your inner knowing or intuition), or awakening spiritually — becoming aware of more than just material existence. So, why will this save us? Interestingly enough, salvation is often related to Jesus dying for our sins and saving us (becoming the external saviour). However, the Gospel of Thomas reminds us that saving doesn't come from the outside; it is actually what is within you that saves you.

We can also relate this to the psyche. Remember the verse from Matthew 12:32: *"Anyone who speaks a word against the Son of Man will be forgiven, but anyone who speaks against the Holy Spirit will not be forgiven, either in this age or in the age to come."* We know from experience that we suffer immensely if we ignore or deny our inner knowing. It is what makes us real and alive. Without it, we are like puppets and are often possessed by unowned content.

Now, the question becomes whether someone really doesn't have this within them, and I can't really speak to that. However, what I do find is that when people become too entangled in their material identity (and do not listen to that inner guidance), the voice grows softer and softer. When they no longer hear that inner voice, they become lost and feel separated. For the psyche, this is like living in hell. It destroys one's wholeness because the guidance that you received was helping you to remain whole.`,
    contemplationPrompt: `How do we receive and listen more closely to this inner guidance so that life can overflow from us?`,
    concepts: [
      {
        term: 'The Inner Spark',
        definition: 'The divine wisdom, intuition, or inner knowing that resides within every person. In the Gospel of Thomas this is not a metaphor but the most real thing about us — the living source that, when connected to, orients the whole person toward wholeness and truth.'
      },
      {
        term: 'Salvation from Within',
        definition: 'The understanding that saving does not come from an external source but from aligning with the inner reality that is already present. This reframes salvation not as rescue from outside but as the fruit of self-knowledge and inner attunement.'
      },
      {
        term: 'Unowned Content',
        definition: 'A psychological concept describing the repressed or unacknowledged parts of the self that, when ignored, do not disappear but instead begin to drive behaviour unconsciously — making a person feel like a puppet, controlled by forces they do not recognise as their own.'
      },
      {
        term: 'Material Entanglement',
        definition: 'The state of being so absorbed in one\'s external, material identity — possessions, status, roles — that the inner voice grows progressively quieter. The more one identifies only with what is outer, the more cut off one becomes from the guidance that maintains inner wholeness.'
      }
    ],
    relatedSayings: [3, 24, 67, 108, 113],
    published: true
  },

  ...Array.from({ length: 2 }, (_, i) => ({
    id: i + 71,
    number: i + 71,
    text: `Saying ${i + 71} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  })),

  {
    id: 73,
    number: 73,
    text: `Jesus said: The harvest is indeed great, but the labourers are few. But pray the Lord, that he send forth labourers into the harvest.`,
    reflection: `This text carries different layers of meaning depending on one's perspective. Typically, it is read as a call to an external mission.

Consider **Luke 10:1–4:**

*After this the Lord appointed seventy-two others and sent them two by two ahead of him to every town and place where he was about to go. He told them, "The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field. Go! I am sending you out like lambs among wolves. Do not take a purse or bag or sandals; and do not greet anyone on the road."*

In a traditional church setting, this passage is often interpreted to mean that the "harvest" consists of souls to be collected, while the "labourers" (disciples or missionaries) are those few individuals willing to go out into the world to share the message of the Kingdom — from the church's perspective, the promise of heaven.

There is nothing inherently wrong with wanting to help others. However, it is vital to examine your motives for doing so. If you are not careful, 'helping' can become a way to control others, pushing them toward a path you deem correct rather than the one meant for them — potentially leading them further away from the Kingdom.

Furthermore, if your service is fuelled by a desire for praise, a need to be favoured by God over others, or a fear that you are 'not enough' — or that you must earn your way into heaven — your efforts may be rooted in ego rather than true presence. We often forget that when the disciples' intentions were truly aligned with God's will, the outcome was vastly different from our own ego-driven efforts, which often aim merely to prove others wrong. Genuine service requires us to be aware of why we act, ensuring our labour comes from a place of clarity rather than a need for validation or security.

However, if we understand the text through the lens that the Kingdom is within, a different image emerges. The message is for everyone willing to listen. Each of us has lived a life and can work this harvest. The task is not limited to an external figure coming to tell us the news, nor is it a mission to 'save' others who are unaware of a destination called heaven. Even though there are times when that external influence was necessary, the harvest ultimately comes from the experiences we have collected over years, decades, or lifetimes.

There is sorting to be done. Yet, the labourers are few. In this context, few of us enter this inner plane to sort the chaff from the wheat. We do not take the time to consider what we have learned, what has served us well, and what has not. In many cases, we become like puppets, simply going through the motions, never allowing our experiences to truly transform us.

Ultimately, the reward of that transformation is heaven here and now.

So, wherever you are, keep what resonates and let the text speak to your current journey.`,
    contemplationPrompt: `If your recent life experiences are the harvest, what is one belief or habit that acts as 'chaff' — taking up space without feeding your soul — and what is the 'wheat' that you are ready to gather and keep?`,
    concepts: [
      {
        term: 'The Inner Harvest',
        definition: 'The accumulated experiences, lessons, and encounters of a lifetime — not yet sorted or integrated. The inner harvest is already abundant; the question is whether we are willing to do the work of examining it.'
      },
      {
        term: 'Chaff and Wheat',
        definition: 'The ancient threshing metaphor applied inwardly: wheat represents the insights, values, and wisdom that genuinely nourish; chaff represents the habits, beliefs, and patterns we carry out of inertia, fear, or ego — taking up space without feeding the soul.'
      },
      {
        term: 'Ego-driven Service',
        definition: 'Service or spiritual effort motivated not by genuine presence but by a need for validation, praise, or divine favour. When the motive is unexamined, even seemingly good deeds can become a means of control or self-justification rather than true labour in the harvest.'
      },
      {
        term: 'Inner Transformation',
        definition: 'The process of allowing life experience to genuinely change us — moving from merely going through the motions to integrating what we have lived. This is the work of the labourer in the inner harvest, and the text suggests it is rare.'
      }
    ],
    relatedSayings: [3, 70, 77],
    published: true
  },

  ...Array.from({ length: 1 }, (_, i) => ({
    id: i + 74,
    number: i + 74,
    text: `Saying ${i + 74} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  })),

  {
    id: 75,
    number: 75,
    text: `Jesus said, 'There are many standing at the door, but it is the solitary [monachos] who will enter the bridal chamber.'`,
    reflection: `Traditional readings of this parable often frame it as a "pass/fail" test — you either have oil or you don't, you're either "in" or you're "out." This study discards that transactional view entirely. You are not being tested here. You are not earning an invitation. **Worthiness is the baseline of existence, not the finish line.**

The spiritual journey Saying 75 describes is a shift in *mode of engagement* — from a **Borrowed Narrative** (living by external scripts, waiting for others to define your worth and grant you entry) to an **Internal Reality** (embodying your own truth, carrying your own light).

**The "Many" at the Door**

The "many" are those who have zoomed in so deeply on the world that they have forgotten their own divinity. Standing at the door is a state of dependency — waiting for the Host to open it, for the Feast to begin, for permission to enter. This is the "Hard Mode" of existence: the belief that your worth is conditional, that you must be let in.

The trap of the threshold is this: by looking *outward* for the door to open, you become a spectator of your own life. You wait for life to happen to you, not realising that you are the one creating the experience.

**The *Monachos* — Undivided, Not Lonely**

The word *monachos* does not mean "lonely." It means **undivided.** The *monachos* is the one who has stopped seeking external validation — who has realised that the Groom (the Divine, the Truth) is not coming from the outside. The Groom is the reality of their own consciousness.

To be *monachos* is to carry your own light — the "oil" that cannot be borrowed. You no longer need the "many" to validate your existence or let you in. You are whole within yourself.

**Entering the Chamber**

The Bridal Chamber is not a physical place you arrive at after passing a test. It is the state of **Union** you inhabit when you realise you were never separate from the source. You can be physically present at the Feast with the many — playing your social roles — while remaining *monachos* in your heart. You are not escaping the world; you are simply no longer *of* the world's rules.

This is the act of zooming out: seeing the game for what it is. You don't quit the game, but you stop believing the "Hard Mode" constraints are absolute. You play — but you play knowing you are inherently worthy and eternally connected.

**The Sovereign Choice**

The transition Saying 75 describes is a shift in *perception.* Nothing external changes. Everything internal does.

*Also read: The Parable of the Ten Virgins (Matthew 25:1–13)*`,
    contemplationPrompt: `On Solitude vs. Loneliness: How does it change your understanding of your own life to realise that *monachos* means "undivided" rather than "alone"? Do you feel "divided" (seeking validation from many sources) or "unified" (centred in your own truth)?\n\nOn the "Door": What "doors" are you currently waiting for someone else to open for you? (Career milestones, relationship approval, social status.) What would it look like to walk away from the door and realise the Chamber is already within you?\n\nOn Difficulty Levels: When you step into the "Hard Mode" of the feast — social pressures, drama, performance — can you maintain your *monachos* state? How do you remain undivided when the world demands you split yourself into pieces to fit in?\n\nOn the "Many": How can you view those standing at the door with compassion rather than elitism? They aren't "wrong" — they are simply zoomed in on a different part of the human experience.`,
    concepts: [
      {
        term: 'Monachos (Undivided)',
        definition: 'The Greek/Coptic word often translated "solitary" literally means undivided — one who is inwardly unified, no longer fractured by the need for external validation. It describes a mode of being, not a condition of isolation.'
      },
      {
        term: 'The Bridal Chamber',
        definition: 'Not a future destination earned by passing a test, but the present state of Union — the realisation that you were never separate from the source. It is entered through a shift in perception, not through permission granted from outside.'
      },
      {
        term: 'Borrowed Narrative',
        definition: 'The mode of existence in which you live by external scripts: waiting for others to open the door, to validate your worth, to grant you entry. Standing at the door is its emblematic image — dependency mistaken for devotion.'
      },
      {
        term: '"And" Thinking',
        definition: 'The capacity to be fully present in the world — at the Feast, among the many, playing social roles — while simultaneously remaining monachos in your heart. Not withdrawal from the world, but non-identification with its "Hard Mode" rules.'
      }
    ],
    relatedSayings: [49, 22, 3],
    published: true
  },

  {
    id: 76,
    number: 76,
    text: `Jesus said: The kingdom of the Father is like a merchant who had a load (of goods) and found a pearl. That merchant was wise. He sold the load and bought for himself the pearl alone. You also, seek after his treasure which does not fail (but) endures, where moth does not come near to devour nor worm to destroy.`,
    reflection: `**The story of subtraction**

Typically, the merchant archetype is the master of **diversification**. They manage a portfolio of goods, navigate complex market dynamics, and measure success through the accumulation of variety. In this story the merchant is doing something strange – he is letting go of the many goods and focusing on one specific treasure.

Stories like this challenge how we think. The merchant is expected to be one way. However, in the story he is portrayed as someone who's actions are counter intuitive. In a world driven by accumulation, the "wise" merchant practices **radical subtraction**.

The load (of goods) is his earthly identity, roles and societal expectations. These are the things we carry to prove our worth to others — the "goods" that occupy our inventory. It usually keeps us in a divided state as we don't have time to focus on that which is important.

The pearl refers to the internal world. By selling everything for the pearl alone, the merchant isn't just making a transaction; but is committing to oneness. The pearl represents a singular, unified truth that replaces the fragmented, material "load". Furthermore, if one thinks of the alchemy of the pearl, it gives us further insight into the story. The pearl is formed by a mollusk coating an irritant (it takes the many to make the one). Our divine self-recognition are often formed by the hardships and irritations of our earthly experience.

When we stop investing all of our time and effort into worldly pursuits, we transform seeking from an external search for a reward into an internal cultivation of worth – something that is already true, but we struggle to see at times and therefore when we find it, we are willing to pursue it with everything we have as we recognize real worth.

The warning about moths and worms acts as a boundary marker between the **transient** and the **eternal**. The identity you wear will not hold; it will change. By recognizing that physical identity and the material body are subject to decay, the focus is shifted toward the **Observer** — the part of the self that experiences the dance, the walk, and the world, but is not consumed by them. This is the "treasure that does not fail."

This story isn't advocating for withdrawal or asceticism, but for **conscious engagement**. You can still enjoy the dance and the world, but your foundation is no longer at risk because you are no longer anchoring your value to things that can be destroyed.`,
    contemplationPrompt: `This passage essentially asks: *What is the one thing you own that no one can take away, and that death cannot touch?*\n\nWhen we find that, we realize that everything else we have been "loading" into our cart — our reputations, our physical status, our anxieties about the future — is secondary. By selling off the need to manage those secondary things, we free up the "currency" of our attention to focus entirely on that singular, enduring truth.\n\n**Does this perspective shift how you prioritize your daily activities, or do you find that the "load" often creeps back into your cart despite this awareness?**`,
    concepts: [],
    relatedSayings: [],
    published: true
  },

  {
    id: 77,
    number: 77,
    text: `Jesus said: I am the light that is above them all. I am the all; the all came forth from me, and the all attained to me. Cleave a (piece of) wood; I am there. Raise up a stone, and you will find me there.`,
    reflection: `For a materialist, these claims can seem contradictory: how can one be the "All" from which everything comes, yet also be found in the mundane act of splitting wood or lifting a stone? From my perspective, this is a profound way to explain the complexity of existence. It demonstrates that nothing is truly separate and that we cannot exist outside the "All," even if we perceive ourselves as distinct entities. This language is incredibly grounded; by using everyday tasks, the text shows that there is no separation between the observer and the stone or wood. It is a reminder that we often struggle to explain truths for which we lack the proper language. To label this simply as "pantheism" is an oversimplification; rather, it speaks to those who have integrated opposing concepts and can finally perceive the underlying oneness.

When we measure and categorize the world, we separate things to make sense of them, but in doing so, we lose the fullness of the experience. In practice, this means participating in a greater story, whether you are cooking a meal or walking the dog. We are not separate from nature. Existence operates in a circular motion; we were present before birth and remain after death, even though the ego insists on measuring life as a linear experience to navigate this reality. We are born with this sense of oneness, only to be taught how to categorize and separate during our earthly experience. When we are quiet enough, we realize we were never separate to begin with — we simply return to being a child again. As the text concludes: from the primordial light, all comes forth, and to that light, all returns.

Being the light means being everywhere, even within the logs and under the stones. Interestingly, logs and stones might appear to be the densest of things, seemingly devoid of light, yet we find that the light is present there just as it is everywhere else. If we see ourselves as dense, separate, and removed from that light, it inevitably distorts how we view everything else. Because we are interconnected, this sense of separation breeds judgment; for instance, when someone falls ill, we may fall into the trap of believing that health is the only indicator of worth, suggesting that they have done something wrong and are therefore unworthy of grace.

Conversely, when we ourselves are unwell, this mindset leaves us blind to anything but the darkness, leading us to believe that God has abandoned us — a perspective born from the false assumption that God exists only "outside" of us. These moments of suffering challenge our core ideas of where the Divine is to be found. They force us to reconsider if grace is something earned through a state of "health" or "perfection," or if it is an inherent presence that remains, even in the depths of our own density and illness.

The paradox of the earthly experience is this: we use our senses to judge things as heavy, dull, or separate, while the truth of their nature is that they are luminous and interconnected.`,
    contemplationPrompt: `If the light is as present in the "dense" and "strenuous" moments of my life — my struggles, my physical limitations, and my daily labour — as it is in my moments of peace, what would change about the way I carry my burdens today?`,
    concepts: [],
    relatedSayings: [],
    published: true
  },

  {
    id: 78,
    number: 78,
    text: `Jesus said: Why have you come out into the countryside? To see a reed shaken by the wind? Or to see a person dressed in fine clothing, like your rulers and powerful ones? They are dressed in fine clothing and they cannot know truth.`,
    reflection: `The text echoes a passage found in the New Testament (Matthew 11:7–9 and Luke 7:24–26), where Jesus asks the crowds about John the Baptist — but in the Gospel of Thomas, the focus shifts slightly, making it a powerful critique of how human beings look for truth in all the wrong places.

**Who Is Jesus Speaking To?**

The typical assumption is the crowds that followed him. There might have been people of high rank who followed him out of suspicion or curiosity. But here, Jesus is turning a mirror back onto the ordinary people. He is essentially asking what they are really expecting to find. Why are they following him "out into the countryside"?

Jesus usually spoke to those who were open to listen. Many of the people following him may have had other intentions. So here he is asking about their true motivations for following him.

**The Critique of Mediocrity: "Did you come out into the countryside to see a reed shaken by the wind?"**

If they have travelled all the way out into the wilderness — a place associated with testing, fasting, and John the Baptist — only to look for something as common as a blade of grass blowing in the wind, then their "seeking" is fundamentally superficial.

He is exposing the leisure-seeking nature of the crowd. They are treating a spiritual encounter like a trip to the local market or a stroll through a park. They want a "nature show" — something to watch, observe, and talk about over dinner — rather than a transformative experience that demands anything from them.

**The Illusion of "Nature" as Spiritual**

There is also a deeper, more cynical layer to this. Sometimes, people mistake their own aimless wandering for a spiritual quest. By using the image of the reed, Jesus might be suggesting that many of the people following him are just as "shaken by the wind" as the reed itself. They are moved by whatever happens to be the popular trend or the latest movement, lacking any internal root or stability.

They are looking for a spectacle because **they themselves are moved by every passing influence.**

Spiritual seeking can become a way to avoid the actual work of integration.

**The Trap of "The Fine Clothing"**

We are easily fooled by the characters people play.

In antiquity, fabric was a primary indicator of power. The elites wore soft, expensive, dyed clothing to signal that they didn't have to work in the fields. Jesus points out a profound paradox here: **the very garments that grant them authority in society are the things that blind them.**

The "garments" are symbols of the ego, social roles, and institutional power. When someone is fully invested in protecting their status, their title, or their reputation, they *cannot recognise truth* because truth is inherently levelling. It doesn't care about titles.

**The Desire for a King vs. The Hard Work of the Self**

This connects deeply to 1 Samuel 8, where the Israelites beg for a king so they can "be like all the other nations," even though the prophet Samuel warns them that a king will tax them, take their children for armies, and enslave them. They wanted it anyway.

Why? Because **having a king is psychologically easier than being personally responsible.**

If you have a king, a saviour, or a guru on a pedestal:

- They make the rules.
- They take the blame when things go wrong.
- You get to worship them instead of doing the messy, difficult inner work of changing yourself.

When people make someone into a martyr or a king to worship, *they don't see themselves or you.* They are projecting their own unmet spiritual needs onto an external figure.

**What Do We Do with This Text?**

If we take this as a mirror, Jesus is challenging the listener to stop looking for truth in external packaging.

If we look for truth in people who have "fine clothing" — whether that means money, massive social media followings, corporate titles, or religious robes — we will always be fooled. Similarly, if we treat spiritual teachers like fragile "reeds" or untouchable gods, we miss the point.

The text invites us to drop the act, look past the "garments" of the people around us, and step out of the crowd that is just looking for a show. It asks us to become people who can recognise truth in the ordinary, unpolished "countryside" of our own lives.`,
    contemplationPrompt: `In my own professional and personal life, what are the 'fine garments' or 'shaking reeds' that I am currently using to validate my authority or entertain my curiosity — and what is the uncomfortable truth I might be avoiding by focusing on those external things instead?`,
    concepts: [
      {
        term: 'Reed shaken by the wind',
        definition: 'An image of instability and superficiality — something that moves with every passing breeze. Used here to describe both the aimless seeker and the trivial spectacle they are looking for. The reed has no inner root; it is shaped entirely by external forces.'
      },
      {
        term: 'Fine clothing',
        definition: "In antiquity, clothing was the primary signal of social rank and power. To wear 'fine' or 'soft' garments was to announce that you did not labour. Jesus uses this image to represent the ego's investment in status, title, and reputation — the very things that prevent the powerful from recognising truth."
      },
      {
        term: 'Countryside / Wilderness',
        definition: 'A space associated with testing, stripping away, and encounter with the essential — John the Baptist lived and preached there. To travel there merely for entertainment is to miss the entire point of the journey.'
      }
    ],
    relatedSayings: [3, 39, 56, 76],
    published: true
  },

  {
    id: 79,
    number: 79,
    text: 'Saying 79 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  {
    id: 80,
    number: 80,
    text: 'Jesus said: He who has known the world has found the body; and he who has found the body, the world is not worthy of him.',
    reflection: `The world can be seen as a construct — a mental framework or story we build for safety and predictability — and as an experience, a stage of becoming (from a linear perspective) that leads to something deeper.

We create "files and folders" for the people and events around us because the raw, unfiltered vastness of reality is overwhelming. To engage with every person as an infinite, evolving mystery would be paralyzing; by narrowing people into roles — such as "the honest leader" or "the party friend" — we create a sense of control.

However, the danger arises when we confuse the map (the story) with the territory (the person or the truth). The shock we feel when a "good" person does something "bad" is merely the collapse of our mental model. It isn't a failure of the person; it is a failure of our rigid, simplified filing system. When we are forced to see the discrepancy, it creates a "fissure" in our reality. This is often where the real work begins.

**The Story of the Lost Son**

In the beginning, the world — the stories, the popularity, the "boxes" — seems full of colour and promise. Our original house seems boring, so we participate in the world because we believe the narrative. As we move through experience, however, that narrative begins to lose its vitality. The things that once provided "pleasure" feel empty, or like a corpse. This is not a state of clinical depression, but rather a state of outgrowing. The transition from seeking worth in the world (the story) to finding the "treasure within" (the Self) is the point of the journey. The world, which once looked like a playground, now looks flat.

The son then returns to the Father and his true home. The world — that story — is no longer worthy of him. He understands the true value of his home; having outgrown the "constructed world," he moves on. He recognises the treasure within, and what once provided much pleasure no longer holds the same appeal; it feels like a corpse (as referenced in the *Gospel of Thomas*).

Framing the journey in this way removes the temptation to see the person who still lives in the world as "wrong." It is simply a different stage of becoming — much like the egg, the caterpillar, the chrysalis, and the butterfly.`,
    contemplationPrompt: 'This metaphor of metamorphosis highlights the necessity of the "caterpillar" stage (a caterpillar constantly consumes), even though it must eventually be discarded; do you believe that one can consciously accelerate the transition through these stages, or is it a process that must be endured passively until the change is ready to happen?',
    concepts: [],
    relatedSayings: [],
    published: true
  },

  {
    id: 81,
    number: 81,
    text: 'Jesus said: He who has become rich, let him become king, and he who has power, let him renounce (it).',
    reflection: `There are two ways to look at the text that currently speaks to me.

The first is to focus on the **inner kingdom**. We must recognize that the ego seeks power, yet it should renounce that power because, at its core, it is still poor. The one who is truly "rich"—having recognized their inherent fullness—is the one fit to be king in the inner kingdom. Because they don't require anything from the outside world, they bring total harmony to the inner system.

It is important to clarify that this isn't "egoic" in a way that suggests withdrawing from life; you still eat food, visit people, and do work. Rather, it means that the *neediness*—the frantic urge that once dictated your life and made you feel that the external world held power over you—is no longer in the driver's seat. You are no longer fighting to contain a sense of control because the external world is no longer the source of your security. In this sense, we can distinguish between the ego and the Higher Self; the latter possesses the wisdom of "more information" and therefore does not need to grasp at straws.

The second way to look at the text is through the lens of the **human journey**. The person who goes out into the world to live and experience it eventually becomes "rich" in experience. Through this, they realize that the power they once sought is not real and ultimately cannot fulfil them; only then are they truly able to renounce the role. Think of actors who strive to experience the world and become famous, only to find that the world is ultimately empty—an illusion—leading them to find meaning in something more grounded and real. Of course, this is not to say that everyone will choose to renounce that power.

Ultimately, this saying points to a profound paradox of human existence: When you are finally able to give up the need for control, the irony—for us as humans—is that you actually gain it.

Consider how we typically act when faced with the vast, daunting nature of the unknown: we grasp at anything to feel secure, even for a moment, yet we are left with the lingering sense that it hasn't truly helped. However, when we fix our relationship with the unknown, we feel calmer, knowing that our current circumstances are not the full story. By moving past the inner turmoil of frantically chasing people, jobs, or events to feel whole, decision-making becomes less dramatic and more grounded. Whether through the mastery of the inner kingdom or the exhaustion of external illusions, true power is found not in the grasping, but in the release.`,
    contemplationPrompt: `When we look back at times we felt the most "turmoil," was it because the situation itself was difficult, or because we were fighting to control an outcome we didn't fully understand?

**On the Nature of Friction:** If I stopped treating my current discomfort as a problem to be solved, what would I see the "turmoil" is actually trying to teach me?

**On Trusting the Process:** What would it look like to treat my inner critic like a child who is just scared of the dark, rather than an authority figure telling me that I am failing?

**On the "Unknown" as a Container:** If the unknown is a cocoon rather than an abyss, how does that change the way I hold the uncertainty I am currently facing?

**On Surrender:** When the pressure of the chrysalis feels at its most intense, how can I consciously shift from "trying to survive" to "allowing the emergence"?`,
    concepts: [],
    relatedSayings: [],
    published: true
  },

  {
    id: 82,
    number: 82,
    text: 'Jesus said: He who is near to me is near the fire, and he who is far from me is far from the kingdom.',
    reflection: `**The Fire of Integration and the Distance of Separation**

**I. The Deconstruction of "Distance"**

In our standard 3rd-density model of reality, we define our lives by coordinates: North/South, Up/Down, Left/Right. These measurements are tools, but when we start mistaking them as the ultimate model of reality, we create a spatial trap.

If we look for Jesus or the Kingdom in the sky (space) or in a distant future (time), we treat the Divine as an object "over there". This creates a psychological distance (also called separation). For example, by viewing ourselves as "below" God, we solidify a hierarchical distance that prevents us from realizing that we are, in fact, an expression of that same Source — and we limit our potential.

Nearness to Jesus is not a matter of physical proximity or moral proximity, but it is a matter of resonance. When you recognize who you truly are — not as a separate entity adrift in space, but as an integral part of the whole — you are immediately near the fire. You are no longer navigating toward a destination; you have arrived at the source of your own life.

When you recognize that the kingdom is within (everywhere), the concept of "distance" vanishes. This shift in perspective fundamentally alters how we experience distance from others, transforming both the quality of our communication and the limits of what we believe is possible between us.

**II. The Alchemy of the Fire**

The text equates proximity to the Teacher with proximity to "the fire". Fire is not a tool for judgement or hell-fire; it is the primary agent of transmutation. In alchemy, the "lead" is the accumulation of heavy, dense energies — trauma, rigid belief systems, ego-attachments, and the sheer weight of living in 3rd-density reality.

The influence of the Teacher (Jesus) acts as the furnace or the catalyst that provides the necessary heat to remember your true self. The internal fire can be seen as the "inner spark" within the human. This is the gold — the authentic self — that is waiting to be remembered and refined. The fire provides the necessary light to see the world as it truly is (oneness), burning away the "dross" — our ego, our attachment to mundane things, and the heavy, dead weight of our worldly conditioning. This allows the soul to move from a state of raw material to a state of maturity. In essence, it allows us to stop living as stories or myths.

**The Shift from Story to Presence**

The alchemical process described here offers a radical departure from how we usually live. By burning away the "dross" — the conditioned patterns, ego-defences, and past traumas — we are doing more than just becoming "better" people. We are transitioning from a state of raw material to a state of **maturity**.

- **From "Living Stories" to Being:** For most of our lives, we operate through the lens of a "story." We define ourselves by our past, our grievances, our roles, and the narratives we have constructed to protect our sense of self. These stories are heavy; they are the "lead" that keeps us tethered to the 3rd-density illusion of distance.
- **The Maturity of Essence:** To be "mature" in the alchemical sense is to stop performing the story and to start embodying the Essence. It is the realization that you do not need to "become" anything — you only need to allow the fire of truth to consume the layers that are not you.`,
    contemplationPrompt: 'The Problem of Measurement: How often do we define our spiritual progress by "waiting" for a future event or looking toward a God we perceive as distant? How does this keep us from experiencing the present moment?',
    concepts: [
      {
        term: 'Resonance',
        definition: 'Nearness to the Teacher is not a matter of physical or moral proximity but of inner attunement — recognizing oneself as an expression of the same Source rather than a separate entity looking toward it from a distance.'
      },
      {
        term: 'Transmutation',
        definition: 'The alchemical process by which the "lead" of dense conditioning — trauma, ego-attachments, and rigid belief systems — is transformed by the heat of awareness into the "gold" of the authentic self.'
      },
      {
        term: 'Dross',
        definition: 'The impurities burned away in the alchemical fire: conditioned patterns, ego-defences, past traumas, and the stories we perform in place of genuine presence.'
      },
      {
        term: '3rd-density',
        definition: 'The ordinary material level of experience characterized by the illusion of separation, measurement, and distance — where the self mistakes the map (coordinates, hierarchy, narrative) for the territory.'
      }
    ],
    relatedSayings: [10, 3, 80, 81],
    published: true
  },

  {
    id: 83,
    number: 83,
    text: 'Jesus said, "Images are visible to human beings. And the light within these (images) is hidden by the image of the father\'s light; it will be disclosed. And his image is hidden by his light."',
    reflection: `**The Conflict Between the "Image" and the "Light"**

The conflict between the "image" (the mental construct/projection) and the "light" (the unfiltered, infinite reality)

In trying to understand the light — putting it into a container — we distort it. It is a byproduct of putting things into a container. When we label, define, or "figure out" a person or the Divine, we are essentially reducing a vast, dynamic reality into a static, manageable image.

**1. The Illusion**

By creating an image of a person (e.g. enemy, best friend, mother etc.), we stop interacting with their living, changing essence and begin interacting with our own internal script. The consequence of this is that the projection dims the light and creates a sense of density, separation and fear. We all experience this, and knowing that we do can empower us to challenge our own narratives.

**2. Light is Both the Revealer and the Blinder**

Because our human eyes and minds are limited, we use "light" (our interpretations) to categorize the world. If we see everything through the lens of a specific, narrow ideal (our "image" of what things should be), the light itself becomes an obstacle because it reinforces our preconceived notions. For example, if we project our ideas of "good" or "holy" onto the Divine, we become blind to the true, vast nature of the Source. It becomes a mirror of our own feelings rather than the raw, infinite truth. We can also easily fall into a state of controlling or worshipping the light, failing to recognize that we emanate from it — that we are one with it.

**3. The Shift in Perception**

If Jesus didn't project an image onto others (by being present), he was essentially practicing a form of "seeing" that bypassed the social and egoic masks. When we stop projecting our "ideal" or "fearing" images onto others, the "image" loses its power to obscure the light.

Bringing the "light of the Father" into the inner plane (not projecting it outward) reveals the illusionary nature of these constructs. This is the process of de-conditioning: realizing that your previous "story" about yourself, others, and the Divine was not the Truth, but a projection.

Movement from seeing the Image (the illusion) to the Light (the hidden truth — behind the image) is essentially a transition from judgment to presence. The more I learn the more I believe that we are so vast and infinite that there is some injustice to try to fit ourselves, others or the Divine into a mold. To acknowledge that we cannot "grasp" the fullness of a person or the Divine is not a failure of intelligence; it is the ultimate respect for their infinite nature. As we start to embody this, we provide others with the opportunity to reveal parts of themselves that would have previously been hidden; in doing so, we find that we feel more connected.

**4. In Conclusion**

The physical world ("images") is what we naturally see, but these images are incomplete. They act as a veil, obscuring the true essence — the "light" — that dwells within them. The "light of the Father" (the ultimate, divine reality) is so vast and radiant that it cannot be captured or defined. Because our human minds try to force this infinite light into a static "image" or concept, our own limited projections end up hiding the very light we seek. The text suggests that the light is not lost; it is simply "hidden." There is an inevitable process of "disclosure" where the true nature of reality will be revealed, stripping away the distortions created by our mental constructs.`,
    contemplationPrompt: `The Power of "Opening to What Is": When you move from "forcing" to "opening," you shift your internal state from contraction to expansion. By accepting the present moment as it is, you stop blocking the light with your own demands. This is why you then "find many options": when your vision isn't narrowed by the need to control, you suddenly see the nuance, the opportunities, and the possibilities that were invisible to you while you were busy trying to force things into a mold.

What would it actually feel like to stand in the middle of a situation without a 'mold' for how it should turn out, and simply observe the light as it is?`,
    concepts: [
      {
        term: 'Image',
        definition: 'The mental construct or projection we place over a person, ourselves, or the Divine. By reducing a vast, dynamic reality into a static, manageable image, we stop interacting with the living essence and begin interacting with our own internal script.'
      },
      {
        term: 'Light',
        definition: 'The unfiltered, infinite reality that dwells within all things. It is both the revealer and the blinder — our interpretations illuminate the world but can simultaneously obscure the deeper truth when our lens is too narrow.'
      },
      {
        term: 'De-conditioning',
        definition: 'The process of realizing that one\'s previous "story" about oneself, others, and the Divine was not the Truth but a projection — and releasing those constructs so that the hidden light can be disclosed.'
      },
      {
        term: 'Presence',
        definition: 'Seeing without projecting an image onto what is seen. When we meet a person or situation without a predetermined mold, the image loses its power to obscure the light, and genuine connection becomes possible.'
      }
    ],
    relatedSayings: [3, 24, 77],
    published: true
  },

  {
    id: 84,
    number: 84,
    text: 'Jesus said: When you see your likeness, you rejoice. But when you see your images which came into existence before you, which neither die nor are made manifest, how much will you bear?',
    reflection: `When we see our superficial likeness mirrored in another person — someone of the same skin colour, family lineage, or cultural heritage — we feel a deep sense of safety and relief. We recognize a tiny, manageable reflection of ourselves. Conversely, anything that disrupts this narrow context is treated as "other," foreign, or threatening.

If a person's starting orientation is clouded, cynical, or fixated on brokenness, their internal "model" projects that distortion onto everything else. They see shadows everywhere.

Trapped in this story of reality, we unconsciously replay old childhood patterns, casting everyday people in the roles of figures from our past who hurt us. We become actors in a psychological play, reliving our wounds according to the scripts we believe about ourselves.

If humans internalize a fundamental premise that they are inherently flawed, trapped, and defined by evil, they will actively build social, psychological, and moral models that hunt for corruption. They treat the shadows on the wall as reality, and consequently, their entire lived experience conforms to that illusion.

In the Allegory of the Cave, the prisoners aren't just looking at shadows; they *believe* the shadows are the absolute truth because that is all they have ever known. What we encounter through our physical senses — sight, smell, and hearing — does not constitute true reality. Our senses are inherently limited, trapping us in a cycle where we mistake shadows for the world.

One requires a deliberate "turning around" of the soul. Instead of letting the mind stay fixated on the lowest level of reality (flaws, passing physical desires, and temporary pains), the soul must be trained to look upward toward higher, unchanging truths. If you begin from a baseline assumption of inherent value, order, and light — the lower problems (flaws, errors, and evil) are seen merely as deficiencies or absences of the good, rather than the fundamental substance of reality.

Beyond the physical plane lie images and archetypes that were never born from a father or mother. These forms cannot be created or destroyed; they live outside our temporal dimension. To witness the images that came into existence before us — the deep, underlying patterns of our past and the totality of consciousness across all times — is staggering. Our standard human container is simply too small to hold the fullness of ourselves.

The text asks, "How much will you bear?" When the mind encounters the vastness of the Whole, the *rigid, defensive structure* of the ego doesn't have to be obliterated; it must expand and transform. You aren't being asked to erase yourself; you are being invited to change your form. The small, defensive self naturally feels threatened by that expansion because it requires outgrowing its old boundaries, but the underlying energy simply wakes up to what it has always been: whole, unbroken, and continuous across all time.`,
    contemplationPrompt: 'If your current "human container" is too small to hold the fullness of your consciousness across time, what are you afraid would spill out if the container finally expanded?',
    concepts: [
      {
        term: 'Likeness',
        definition: 'The surface-level resemblance we recognize in others — shared appearance, lineage, or culture — that offers a comforting but narrow reflection of ourselves.'
      },
      {
        term: 'Images which came into existence before you',
        definition: 'Timeless archetypes and patterns that were never born and cannot die — the deep, underlying forms of consciousness that precede and exceed our individual, temporal identity.'
      },
      {
        term: 'Allegory of the Cave',
        definition: "Plato's image of prisoners mistaking shadows on a wall for reality. Used here to describe how limited sense-perception and a wounded self-story can be mistaken for the whole of truth."
      },
      {
        term: 'Turning around of the soul',
        definition: 'A deliberate reorientation away from fixation on flaws and passing sensation, toward higher, unchanging truths — so that evil is seen as an absence of the good rather than its own substance.'
      }
    ],
    relatedSayings: [3, 83, 77],
    published: true
  },

  {
    id: 85,
    number: 85,
    text: 'Jesus said: Adam came into being out of a great power and a great wealth, and he was not worthy of you; for if he had been worthy, [he would] not [have tasted] of death.',
    reflection: `Death in this context may symbolize a machine-like existence, echoing the ancient myth of Adam's creation. According to Gnostic tradition, Adam's physical body and psyche were formed, yet they remained lifeless until the divine spirit was breathed into them to animate the form. This narrative outlines the journey of the human soul: the vital spark or spirit that awakens Adam mirrors our own potential to come alive.

The myth we received was told by people who did not separate things the way we do in a dualistic sense. They were telling the story of the inner world and how it affects the outer world. It tells us that while we identify only with our ego-self — the skin we wear and our thoughts — we are not yet truly living. We are still imprisoned in a story of competition, hierarchy and victimhood.

It makes us fear death. It makes us think that there is a start and an end, and that we need to fear the end. It makes us enemies with ourselves. While we falsely believe ourselves to be flesh or mind (intellectual), we fear the end as we see our bodies as ending. We become set in our frame of mind — the story that we have built. If anything changes, we are afraid that our story won't hold. Therefore, we are like death because we see death in everything.

However, when we meet the spark and operate from that place, we can let go of the story, as change does not change anything about our worth. We can finally allow ourselves to become bigger, have more space, and contain more light. In the Gnostic texts, Adam dies in the end after eating from the tree of good and evil (dualism). If he cannot reconcile and find union again — the source that gives life, which is the tree of life — he walks around like a program, like Pinocchio (just going along with what the world tells him to). We are like Adam; we sometimes become so automated and lifeless by only running a program that we forget we were supposed to become a real boy.

In summary, when we consciously integrate body, mind, and spirit into a unified whole, we move beyond automated survival, anchoring ourselves in a deeper vitality that makes us fundamentally healthier, more resilient, and truly alive.`,
    contemplationPrompt: `In what areas of your daily life are you operating on "autopilot" or following a rigid script, and what would it look like to bring your conscious, living spirit into those moments?

How balanced is the relationship between your body, mind, and spirit right now, and which of these three needs more nurturance to help you feel fully whole?`,
    concepts: [
      {
        term: 'Great power and great wealth',
        definition: "The physical body and psyche formed at Adam's creation — a fully shaped form that remained lifeless until animated by the divine spirit breathed into it."
      },
      {
        term: 'Tasting death',
        definition: 'A machine-like, automated existence — living as a program rather than as a fully awakened being. Not the end of the body, but a life untouched by the vital spark.'
      },
      {
        term: 'The spark',
        definition: 'The vital spirit that animates Adam and mirrors our own potential to come alive — the point of contact where we stop identifying only with the ego-self.'
      },
      {
        term: 'Tree of life vs. tree of good and evil',
        definition: 'The tree of good and evil represents dualism, the split that leads to death; the tree of life represents the source and union that reconciles body, mind, and spirit into a whole.'
      },
      {
        term: 'Pinocchio metaphor',
        definition: 'Walking around "like a program," going along with what the world tells us, without ever becoming a "real boy" — an image for automated, lifeless living in place of true aliveness.'
      }
    ],
    relatedSayings: [1, 11, 18],
    published: true
  },

  ...Array.from({ length: 29 }, (_, i) => ({
    id: i + 86,
    number: i + 86,
    text: `Saying ${i + 86} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  }))
]
