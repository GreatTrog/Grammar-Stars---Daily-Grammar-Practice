
import { Curriculum } from './types';

export const GRAMMAR_DATA: Curriculum = {
  "title": "6-Week Daily Grammar Starters",
  "audience": "UKS2",
  "structure": {
    "weeks": 6,
    "days_per_week": 5,
    "daily_duration_minutes": 10
  },
  "weeks": [
    {
      "week": 1,
      "focus": "Progressive tenses: identify + form (present & past)",
      "days": [
        {
          "day": "Monday",
          "teaching_point": "Present progressive = is/are + -ing (happening now).",
          "questions": [
            { "id": "Q1", "type": "circle", "prompt": "Circle the present progressive verb: The puppies are chasing a ball." },
            { "id": "Q2", "type": "mcq", "prompt": "Which sentence is present progressive?", "options": ["The dog barks.", "The dog is barking.", "The dog barked."] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Complete with a present progressive verb: I ____ ____ my coat. (to put on)" },
            { "id": "Q4", "type": "tick_box", "prompt": "Tick the correct auxiliary: She __ reading.", "options": ["am", "is", "are"] },
            { "id": "Q5", "type": "rewrite", "prompt": "Rewrite in present progressive: They play football. → They ____ ____ football." }
          ],
          "answers": { "Q1": "are chasing", "Q2": "The dog is barking.", "Q3": "am putting on", "Q4": "is", "Q5": "are playing" }
        },
        {
          "day": "Tuesday",
          "teaching_point": "Past progressive = was/were + -ing (happening at that time).",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the past progressive verb: Yesterday, we were waiting in the rain." },
            { "id": "Q2", "type": "mcq", "prompt": "Which is past progressive?", "options": ["I was singing.", "I sang.", "I sing."] },
            { "id": "Q3", "type": "tick_box", "prompt": "Tick the correct auxiliary: They __ shouting.", "options": ["was", "were"] },
            { "id": "Q4", "type": "complete_sentence", "prompt": "Complete: At 7pm, Mum ____ ____ dinner. (to cook)" },
            { "id": "Q5", "type": "rewrite", "prompt": "Rewrite in past progressive: He ran home. → He ____ ____ home." }
          ],
          "answers": { "Q1": "were waiting", "Q2": "I was singing.", "Q3": "were", "Q4": "was cooking", "Q5": "was running" }
        },
        {
          "day": "Wednesday",
          "teaching_point": "Progressive tense uses an auxiliary + present participle (-ing).",
          "questions": [
            {
              "id": "Q1", "type": "table_complete", "prompt": "Complete the table: Write the progressive verb phrase.",
              "table": {
                "columns": ["Subject", "Time", "Verb", "Progressive form"],
                "rows": [["I", "now", "write", "am writing"], ["They", "then", "laugh", ""], ["She", "now", "play", ""]]
              }
            },
            { "id": "Q2", "type": "mcq", "prompt": "Which pair are BOTH progressive phrases?", "options": ["is running / was running", "run / ran", "has run / will run"] },
            { "id": "Q3", "type": "spot_error", "prompt": "Spot and fix the error: We is playing outside." },
            { "id": "Q4", "type": "circle", "prompt": "Circle the auxiliary verb: The children were racing down the hill." },
            { "id": "Q5", "type": "rewrite", "prompt": "Change to past progressive: I eat my lunch. → I ____ ____ my lunch." }
          ],
          "answers": { "Q1": ["were laughing", "is playing"], "Q2": "is running / was running", "Q3": "We are playing outside.", "Q4": "were", "Q5": "was eating" }
        },
        {
          "day": "Thursday",
          "teaching_point": "Choose progressive when the action is ongoing (not finished).",
          "questions": [
            { "id": "Q1", "type": "mcq", "prompt": "Choose the action happening now:", "options": ["I read a book.", "I am reading a book.", "I read a book yesterday."] },
            { "id": "Q2", "type": "rewrite", "prompt": "Rewrite using present progressive: The cat sleeps. → The cat ____ ____ ." },
            { "id": "Q3", "type": "tick_box", "prompt": "Tick the ongoing action in the past:", "options": ["We walked.", "We were walking.", "We will walk."] },
            { "id": "Q4", "type": "complete_sentence", "prompt": "Complete: While I ____ ____ , the bell rang. (to tidy)" },
            { "id": "Q5", "type": "circle", "prompt": "Circle the -ing verb: They were talking loudly." }
          ],
          "answers": { "Q1": "I am reading a book.", "Q2": "is sleeping", "Q3": "We were walking.", "Q4": "was tidying", "Q5": "talking" }
        },
        {
          "day": "Friday",
          "teaching_point": "Check: choose the correct tense (present vs past progressive).",
          "questions": [
            { "id": "Q1", "type": "choose_one", "prompt": "Choose: Right now, we (are watching / were watching) the match." },
            { "id": "Q2", "type": "choose_one", "prompt": "Choose: At 9pm last night, I (am sleeping / was sleeping)." },
            { "id": "Q3", "type": "rewrite", "prompt": "Rewrite in past progressive: They cheered. → They ____ ____ ." },
            { "id": "Q4", "type": "underline", "prompt": "Underline the progressive phrase: The class is listening carefully." },
            { "id": "Q5", "type": "tick_box", "prompt": "Which auxiliary is for 'I'?: I __ working.", "options": ["is", "am", "are"] }
          ],
          "answers": { "Q1": "are watching", "Q2": "was sleeping", "Q3": "were cheering", "Q4": "is listening", "Q5": "am" }
        }
      ]
    },
    {
      "week": 2,
      "focus": "Past tense accuracy + mixing with progressive",
      "days": [
        {
          "day": "Monday",
          "teaching_point": "Simple past shows a finished action (often -ed).",
          "questions": [
            { "id": "Q1", "type": "mcq", "prompt": "Choose the past tense: Yesterday I ____ home.", "options": ["run", "ran"] },
            { "id": "Q2", "type": "complete_sentence", "prompt": "Complete with past tense: She ____ her lunch. (to eat)" },
            { "id": "Q3", "type": "match", "prompt": "Match the verb to its past tense:", "pairs": [["write", "wrote"], ["catch", "caught"], ["take", "took"]] },
            { "id": "Q4", "type": "spot_error", "prompt": "Fix the error: We goes to the park yesterday." },
            { "id": "Q5", "type": "rewrite", "prompt": "Change to simple past: I see a bird. → I ____ a bird." }
          ],
          "answers": { "Q1": "ran", "Q2": "ate", "Q3": {"write": "wrote", "catch": "caught", "take": "took"}, "Q4": "went", "Q5": "saw" }
        },
        {
          "day": "Tuesday",
          "teaching_point": "Verbs tell what someone/something does or is.",
          "questions": [
            { "id": "Q1", "type": "circle", "prompt": "Circle the verbs: The wind howled and the trees swayed." },
            { "id": "Q2", "type": "mcq", "prompt": "Which word is the verb?", "options": ["carefully", "jumped", "happy"] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Complete: The crowd ____ when the goal went in. (to cheer)" },
            { "id": "Q4", "type": "rewrite", "prompt": "Rewrite in simple past: I walk to school. → I ____ to school." },
            { "id": "Q5", "type": "underline", "prompt": "Underline the irregular verb: He brought his homework to school." }
          ],
          "answers": { "Q1": "howled, swayed", "Q2": "jumped", "Q3": "cheered", "Q4": "walked", "Q5": "brought" }
        },
        {
          "day": "Wednesday",
          "teaching_point": "A main clause can stand alone as a sentence.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the main clause: Because it was late, we went home." },
            { "id": "Q2", "type": "tick_box", "prompt": "Tick the main clause:", "options": ["Although I was tired", "I finished my work", "Because it rained"] },
            { "id": "Q3", "type": "rewrite", "prompt": "Finish the sentence: When the whistle blew, ____ ." },
            { "id": "Q4", "type": "choose_one", "prompt": "Choose for a finished event: The bell (rang / was ringing) at 3pm." },
            { "id": "Q5", "type": "mcq", "prompt": "Which is NOT a main clause?", "options": ["The sun came out.", "When the sun came out.", "It was sunny."] }
          ],
          "answers": { "Q1": "we went home", "Q2": "I finished my work", "Q3": "Any valid clause.", "Q4": "rang", "Q5": "When the sun came out." }
        },
        {
          "day": "Thursday",
          "teaching_point": "Don’t join two sentences with just a comma (comma splice).",
          "questions": [
            { "id": "Q1", "type": "fix_punctuation", "prompt": "Fix this comma splice with a full stop: I was tired, I went to bed." },
            { "id": "Q2", "type": "mcq", "prompt": "Which is correct?", "options": ["I was tired, I went to bed.", "I was tired. I went to bed.", "I was tired I went to bed."] },
            { "id": "Q3", "type": "choose_one", "prompt": "Choose the connector: I stayed in ____ it was raining.", "options": ["because", "although", "so"] },
            { "id": "Q4", "type": "rewrite", "prompt": "Rewrite using a semicolon: The match ended, we cheered." },
            { "id": "Q5", "type": "circle", "prompt": "Circle the conjunction: I like apples but I hate pears." }
          ],
          "answers": { "Q1": "I was tired. I went to bed.", "Q2": "I was tired. I went to bed.", "Q3": "because", "Q4": "The match ended; we cheered.", "Q5": "but" }
        },
        {
          "day": "Friday",
          "teaching_point": "Interleave: choose the correct past tense.",
          "questions": [
            { "id": "Q1", "type": "choose_one", "prompt": "Choose: We ____ (bring/brought) snacks." },
            { "id": "Q2", "type": "choose_one", "prompt": "Choose: She ____ (think/thought) carefully." },
            { "id": "Q3", "type": "rewrite", "prompt": "Rewrite with past progressive: I read when it rang. → I ____ ____ when it rang." },
            { "id": "Q4", "type": "spot_error", "prompt": "Fix the shift: We walked to the gate and then we are waiting." },
            { "id": "Q5", "type": "underline", "prompt": "Underline the progressive verb: They were laughing at the joke." }
          ],
          "answers": { "Q1": "brought", "Q2": "thought", "Q3": "was reading", "Q4": "waited", "Q5": "were laughing" }
        }
      ]
    },
    {
      "week": 3,
      "focus": "Verb-building suffixes (-en, -ify, -ise, -ate)",
      "days": [
        {
          "day": "Monday",
          "teaching_point": "Suffix -ise changes a noun or adjective into a verb.",
          "questions": [
            { "id": "Q1", "type": "rewrite", "prompt": "Add -ise to make a verb: modern → ____" },
            { "id": "Q2", "type": "mcq", "prompt": "Which is a verb?", "options": ["apology", "apologise", "apologetic"] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Complete: I need to ____ the data. (from memory)" },
            { "id": "Q4", "type": "tick_box", "prompt": "Tick the verb:", "options": ["finalise", "final", "finally"] },
            { "id": "Q5", "type": "rewrite", "prompt": "Add -ise: magnet → ____" }
          ],
          "answers": { "Q1": "modernise", "Q2": "apologise", "Q3": "memorise", "Q4": "finalise", "Q5": "magnetise" }
        },
        {
          "day": "Tuesday",
          "teaching_point": "Suffix -ify means 'to make' or 'to become'.",
          "questions": [
            { "id": "Q1", "type": "rewrite", "prompt": "Add -ify: simple → ____" },
            { "id": "Q2", "type": "mcq", "prompt": "Which means 'to make clear'?", "options": ["clearify", "clarify", "clared"] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Complete: The teacher asked him to ____ his answer. (to make clear)" },
            { "id": "Q4", "type": "tick_box", "prompt": "Which is the verb form of 'terror'?", "options": ["terrible", "terrify", "terrific"] },
            { "id": "Q5", "type": "rewrite", "prompt": "Add -ify: solid → ____" }
          ],
          "answers": { "Q1": "simplify", "Q2": "clarify", "Q3": "clarify", "Q4": "terrify", "Q5": "solidify" }
        },
        {
          "day": "Wednesday",
          "teaching_point": "Suffix -ate is often used to turn nouns into verbs.",
          "questions": [
            { "id": "Q1", "type": "rewrite", "prompt": "Add -ate to make a verb: pollen → ____" },
            { "id": "Q2", "type": "mcq", "prompt": "Which is a verb?", "options": ["active", "activity", "activate"] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Complete: You must ____ the handle to open it. (from rotation)" },
            { "id": "Q4", "type": "tick_box", "prompt": "Tick the verb meaning 'to explain'?", "options": ["illuminate", "illustrate", "illusion"] },
            { "id": "Q5", "type": "rewrite", "prompt": "Change 'vaccine' to a verb: ____" }
          ],
          "answers": { "Q1": "pollinate", "Q2": "activate", "Q3": "rotate", "Q4": "illustrate", "Q5": "vaccinate" }
        },
        {
          "day": "Thursday",
          "teaching_point": "Suffix -en means 'to become' or 'to make'.",
          "questions": [
            { "id": "Q1", "type": "rewrite", "prompt": "Add -en: bright → ____" },
            { "id": "Q2", "type": "mcq", "prompt": "Which verb means 'to make wider'?", "options": ["widen", "wider", "widest"] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Complete: I need to ____ my pencil. (from sharp)" },
            { "id": "Q4", "type": "tick_box", "prompt": "Tick the verb:", "options": ["loosen", "loose", "loss"] },
            { "id": "Q5", "type": "rewrite", "prompt": "Add -en: length → ____" }
          ],
          "answers": { "Q1": "brighten", "Q2": "widen", "Q3": "sharpen", "Q4": "loosen", "Q5": "lengthen" }
        },
        {
          "day": "Friday",
          "teaching_point": "Retrieval: suffixes and verb phrases.",
          "questions": [
            { "id": "Q1", "type": "choose_one", "prompt": "Choose the verb: The sun will (bright/brighten) the room." },
            { "id": "Q2", "type": "rewrite", "prompt": "Rewrite in present progressive: He simplifies it. → He ____ ____ it." },
            { "id": "Q3", "type": "underline", "prompt": "Underline the verb suffix: Can you clarify your point?" },
            { "id": "Q4", "type": "complete_sentence", "prompt": "Complete: We ____ our trip yesterday. (from finalise)" },
            { "id": "Q5", "type": "circle", "prompt": "Circle the auxiliary: They were sharpening their tools." }
          ],
          "answers": { "Q1": "brighten", "Q2": "is simplifying", "Q3": "-ify", "Q4": "finalised", "Q5": "were" }
        }
      ]
    },
    {
      "week": 4,
      "focus": "Word class flexibility (Nouns, Verbs, Adjectives)",
      "days": [
        {
          "day": "Monday",
          "teaching_point": "Some words can be both nouns and verbs depending on context.",
          "questions": [
            { "id": "Q1", "type": "mcq", "prompt": "Is 'point' a noun or verb here?: He made a good point.", "options": ["noun", "verb"] },
            { "id": "Q2", "type": "mcq", "prompt": "Is 'point' a noun or verb here?: Don't point your finger.", "options": ["noun", "verb"] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Use 'brush' as a verb: I will ____ my hair." },
            { "id": "Q4", "type": "complete_sentence", "prompt": "Use 'brush' as a noun: Pick up the ____ ." },
            { "id": "Q5", "type": "circle", "prompt": "Circle the word that can be both noun and verb:", "options": ["book", "happily", "slowly"] }
          ],
          "answers": { "Q1": "noun", "Q2": "verb", "Q3": "brush", "Q4": "brush", "Q5": "book" }
        },
        {
          "day": "Tuesday",
          "teaching_point": "Adjectives describe nouns. Some nouns can act like adjectives.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the adjectives: The brave knight rode a black horse." },
            { "id": "Q2", "type": "mcq", "prompt": "Which word is an adjective?", "options": ["run", "quickly", "enormous"] },
            { "id": "Q3", "type": "rewrite", "prompt": "Add an adjective to: The ____ dog barked." },
            { "id": "Q4", "type": "circle", "prompt": "Circle the noun used as an adjective: I love my school bag." },
            { "id": "Q5", "type": "tick_box", "prompt": "Tick the adjective:", "options": ["bright", "brighten", "brightly"] }
          ],
          "answers": { "Q1": "brave, black", "Q2": "enormous", "Q3": "Any valid adj.", "Q4": "school", "Q5": "bright" }
        },
        {
          "day": "Wednesday",
          "teaching_point": "Adverbs tell us how, when, where or how often.",
          "questions": [
            { "id": "Q1", "type": "circle", "prompt": "Circle the adverb: She danced gracefully." },
            { "id": "Q2", "type": "complete_sentence", "prompt": "Add an adverb of time: We will go to the park ____ ." },
            { "id": "Q3", "type": "mcq", "prompt": "Which word is an adverb?", "options": ["soon", "table", "jolly"] },
            { "id": "Q4", "type": "rewrite", "prompt": "Change 'happy' into an adverb: ____" },
            { "id": "Q5", "type": "underline", "prompt": "Underline the adverb of place: Put the box there." }
          ],
          "answers": { "Q1": "gracefully", "Q2": "today/soon/etc.", "Q3": "soon", "Q4": "happily", "Q5": "there" }
        },
        {
          "day": "Thursday",
          "teaching_point": "Determiners come before a noun (a, the, some, those).",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the determiners: Those boys stole some apples." },
            { "id": "Q2", "type": "choose_one", "prompt": "Choose (a / an): I saw ____ owl." },
            { "id": "Q3", "type": "mcq", "prompt": "Which is NOT a determiner?", "options": ["the", "very", "every"] },
            { "id": "Q4", "type": "complete_sentence", "prompt": "Add a determiner: I found ____ cat in the garden." },
            { "id": "Q5", "type": "circle", "prompt": "Circle the determiner: Can I have that pen?" }
          ],
          "answers": { "Q1": "Those, some", "Q2": "an", "Q3": "very", "Q4": "the/a/my/etc.", "Q5": "that" }
        },
        {
          "day": "Friday",
          "teaching_point": "Retrieval: Mixed word classes.",
          "questions": [
            { "id": "Q1", "type": "mcq", "prompt": "Identify the word class of 'fast' here: The car is fast.", "options": ["adjective", "verb", "noun"] },
            { "id": "Q2", "type": "mcq", "prompt": "Identify 'fast' here: The car drove fast.", "options": ["adjective", "adverb"] },
            { "id": "Q3", "type": "circle", "prompt": "Circle the verb suffix: Can you loosen the knot?" },
            { "id": "Q4", "type": "underline", "prompt": "Underline the determiner: Several people arrived early." },
            { "id": "Q5", "type": "complete_sentence", "prompt": "Complete with an adverb: The lion roared ____ ." }
          ],
          "answers": { "Q1": "adjective", "Q2": "adverb", "Q3": "-en", "Q4": "Several", "Q5": "loudly/fiercely/etc." }
        }
      ]
    },
    {
      "week": 5,
      "focus": "Main and Subordinate Clauses",
      "days": [
        {
          "day": "Monday",
          "teaching_point": "A subordinate clause needs a main clause to make sense.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the subordinate clause: While I was eating, the cat meowed." },
            { "id": "Q2", "type": "mcq", "prompt": "Which is a main clause?", "options": ["Until the bell rang.", "The bell rang.", "When the bell rang."] },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Finish the sentence: Although it was cold, ____ ." },
            { "id": "Q4", "type": "circle", "prompt": "Circle the subordinating conjunction: I will go if you go." },
            { "id": "Q5", "type": "rewrite", "prompt": "Add a subordinate clause: ____ , I felt happy." }
          ],
          "answers": { "Q1": "While I was eating", "Q2": "The bell rang.", "Q3": "Any main clause.", "Q4": "if", "Q5": "Any valid clause." }
        },
        {
          "day": "Tuesday",
          "teaching_point": "Relative clauses start with who, which, where, when, whose or that.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the relative clause: The man, who was wearing a hat, left." },
            { "id": "Q2", "type": "choose_one", "prompt": "Choose the relative pronoun: The house ____ I live is big.", "options": ["who", "where", "that"] },
            { "id": "Q3", "type": "mcq", "prompt": "Which sentence has a relative clause?", "options": ["I like cake.", "The cake that I ate was nice.", "I ate cake."] },
            { "id": "Q4", "type": "circle", "prompt": "Circle the relative pronoun: That is the dog whose tail wags." },
            { "id": "Q5", "type": "rewrite", "prompt": "Add a relative clause: The car ____ belongs to my dad." }
          ],
          "answers": { "Q1": "who was wearing a hat", "Q2": "where", "Q3": "The cake that I ate was nice.", "Q4": "whose", "Q5": "Any valid relative clause." }
        },
        {
          "day": "Wednesday",
          "teaching_point": "Subordinating conjunctions (ISAWAWABUB).",
          "questions": [
            { "id": "Q1", "type": "tick_box", "prompt": "Tick the subordinating conjunction:", "options": ["and", "because", "but"] },
            { "id": "Q2", "type": "circle", "prompt": "Circle the conjunction: I did it since I had time." },
            { "id": "Q3", "type": "complete_sentence", "prompt": "Complete: ____ it was raining, we stayed in." },
            { "id": "Q4", "type": "mcq", "prompt": "Which conjunction shows a contrast?", "options": ["because", "although", "when"] },
            { "id": "Q5", "type": "underline", "prompt": "Underline the conjunction: Wash your hands before you eat." }
          ],
          "answers": { "Q1": "because", "Q2": "since", "Q3": "Because/As/Since", "Q4": "although", "Q5": "before" }
        },
        {
          "day": "Thursday",
          "teaching_point": "Fronted adverbials are followed by a comma.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the fronted adverbial: Every morning, I go for a run." },
            { "id": "Q2", "type": "fix_punctuation", "prompt": "Add the missing comma: Without a doubt he is the best." },
            { "id": "Q3", "type": "mcq", "prompt": "Which is a fronted adverbial of place?", "options": ["Quietly", "In the garden", "At 6pm"] },
            { "id": "Q4", "type": "rewrite", "prompt": "Rewrite with a fronted adverbial: I ate my lunch slowly. → ____ , I ate my lunch." },
            { "id": "Q5", "type": "circle", "prompt": "Circle the comma after the fronted adverbial: Inside the cave, it was dark." }
          ],
          "answers": { "Q1": "Every morning", "Q2": "Without a doubt, he is...", "Q3": "In the garden", "Q4": "Slowly", "Q5": "," }
        },
        {
          "day": "Friday",
          "teaching_point": "Retrieval: Clauses and conjunctions.",
          "questions": [
            { "id": "Q1", "type": "mcq", "prompt": "Is this a main or subordinate clause?: Although it was hot.", "options": ["main", "subordinate"] },
            { "id": "Q2", "type": "underline", "prompt": "Underline the relative pronoun: This is the book that I wanted." },
            { "id": "Q3", "type": "circle", "prompt": "Circle the verb suffix: We will lengthen the rope." },
            { "id": "Q4", "type": "rewrite", "prompt": "Add a comma: Suddenly the dog barked." },
            { "id": "Q5", "type": "complete_sentence", "prompt": "Complete: She is the girl ____ won the race." }
          ],
          "answers": { "Q1": "subordinate", "Q2": "that", "Q3": "-en", "Q4": "Suddenly, the dog barked.", "Q5": "who" }
        }
      ]
    },
    {
      "week": 6,
      "focus": "Advanced Punctuation & Boundary Review",
      "days": [
        {
          "day": "Monday",
          "teaching_point": "Comma splices are errors. Use a full stop, semicolon or conjunction.",
          "questions": [
            { "id": "Q1", "type": "fix_punctuation", "prompt": "Fix this comma splice: I am hungry, I will eat." },
            { "id": "Q2", "type": "mcq", "prompt": "Which is correct?", "options": ["I like dogs, they are cute.", "I like dogs; they are cute.", "I like dogs they are cute."] },
            { "id": "Q3", "type": "rewrite", "prompt": "Join with 'because': I was late, the bus was delayed." },
            { "id": "Q4", "type": "circle", "prompt": "Circle the error: It was cold, I wore a coat." },
            { "id": "Q5", "type": "tick_box", "prompt": "Tick the best fix for 'I ran, I fell':", "options": ["I ran. I fell.", "I ran I fell.", "I ran, and I fell."] }
          ],
          "answers": { "Q1": "I am hungry. I will eat.", "Q2": "I like dogs; they are cute.", "Q3": "I was late because the bus was delayed.", "Q4": ",", "Q5": ["I ran. I fell.", "I ran, and I fell."] }
        },
        {
          "day": "Tuesday",
          "teaching_point": "Semicolons join two related main clauses.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the semicolon: It was raining; we stayed inside." },
            { "id": "Q2", "type": "rewrite", "prompt": "Add a semicolon: The sun rose the birds sang." },
            { "id": "Q3", "type": "mcq", "prompt": "Where does the semicolon go?: I love cake it is my favourite.", "options": ["after 'cake'", "after 'it'", "after 'love'"] },
            { "id": "Q4", "type": "tick_box", "prompt": "Tick the correctly used semicolon:", "options": ["I like; cake.", "I like cake; it is tasty.", "I like; cake and sweets."] },
            { "id": "Q5", "type": "circle", "prompt": "Circle the semicolon: Bring these items: a pen; a pencil; and a ruler." }
          ],
          "answers": { "Q1": ";", "Q2": "The sun rose; the birds sang.", "Q3": "after 'cake'", "Q4": "I like cake; it is tasty.", "Q5": ";" }
        },
        {
          "day": "Wednesday",
          "teaching_point": "Colons introduce a list or an explanation.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the colon: You need three things: flour, milk and eggs." },
            { "id": "Q2", "type": "rewrite", "prompt": "Add a colon: I have a secret I am a robot." },
            { "id": "Q3", "type": "mcq", "prompt": "Which is correct?", "options": ["I want: a dog.", "I want one thing: a dog.", "I: want a dog."] },
            { "id": "Q4", "type": "complete_sentence", "prompt": "Add a list after the colon: My favourite sports are: ____ ." },
            { "id": "Q5", "type": "circle", "prompt": "Circle the colon: Warning: keep out!" }
          ],
          "answers": { "Q1": ":", "Q2": "I have a secret: I am a robot.", "Q3": "I want one thing: a dog.", "Q4": "Any list.", "Q5": ":" }
        },
        {
          "day": "Thursday",
          "teaching_point": "Parenthesis (brackets, dashes, commas) adds extra info.",
          "questions": [
            { "id": "Q1", "type": "underline", "prompt": "Underline the parenthesis: The dog (a poodle) barked." },
            { "id": "Q2", "type": "rewrite", "prompt": "Add brackets for extra info: Mr Jones our teacher is nice." },
            { "id": "Q3", "type": "mcq", "prompt": "Which punctuation adds a dramatic pause?", "options": ["comma", "dash", "full stop"] },
            { "id": "Q4", "type": "circle", "prompt": "Circle the dash: It was late - very late." },
            { "id": "Q5", "type": "tick_box", "prompt": "Tick the parenthesis using commas:", "options": ["The cat, who was fat, sat.", "The cat (who was fat) sat.", "The cat sat."] }
          ],
          "answers": { "Q1": "(a poodle)", "Q2": "Mr Jones (our teacher) is nice.", "Q3": "dash", "Q4": "-", "Q5": "The cat, who was fat, sat." }
        },
        {
          "day": "Friday",
          "teaching_point": "Ultimate Retrieval: Mixed Practice.",
          "questions": [
            { "id": "Q1", "type": "mcq", "prompt": "Which is past progressive?", "options": ["I run.", "I was running.", "I ran."] },
            { "id": "Q2", "type": "rewrite", "prompt": "Fix the comma splice: I am cold, I need a coat." },
            { "id": "Q3", "type": "circle", "prompt": "Circle the relative pronoun: That is the girl who won." },
            { "id": "Q4", "type": "underline", "prompt": "Underline the verb suffix: Can you modernise this?" },
            { "id": "Q5", "type": "complete_sentence", "prompt": "Complete: I ____ my homework yesterday. (from finish)" }
          ],
          "answers": { "Q1": "I was running.", "Q2": "I am cold. I need a coat.", "Q3": "who", "Q4": "-ise", "Q5": "finished" }
        }
      ]
    }
  ]
};
