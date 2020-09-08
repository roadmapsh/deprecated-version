I asked the same question in two places and received two different answers. So, do you wanna talk about bias?

![The same question, two places: two different answers (image: Paulo Vasconcellos)](https://miro.medium.com/max/700/1*GloWrB16Z-LyZfGU6AVX1w.png)

**If you torture the data, they are able to say anything you want to know, including what is not true.** One thing I always talk about in discussions I participate in, and even among my team members, is to always play the role of the devil’s advocate, to doubt our analysis, to look at it from another perspective, or simply ask ourselves: “What am i forgetting? ”.

Recently, I did an experiment on the two social media I use most: Linkedin and Twitter. There, I asked the same question in a poll, wanting to know which social media the person would prefer to end (see cover of the post). **On Linkedin, most chose Twitter; and on Twitter, most wanted to end Linkedin.** But, what does such research say about the way scientists and data analysts work? I explain:

***Disclaimer**: There are over 200 different biases in our world, each of which is categorized into different groups, such as social biases, statistical and cognitive. This post will focus on the latter, which influences not only the way we think, but also how we make decisions. Added to this, it is worth mentioning that I am no expert in social psychology, either in behavioral economics, and this post my personal opinion on the subject, given my experience.*


## Bias and Heuristics

**Heuristics are nothing more than mental shortcuts that your brain makes.** The Law of Minimum Effort, explained by Daniel Kahneman in the book ["Thinking, Fast and Slow"](https://www.amazon.com.br/Thinking-Fast-English-Daniel-Kahneman-ebook/dp/B00555X8OA/ref=asc_df_B00555X8OA/?tag=googleshopp00-20&linkCode=df0&hvadid=379765265654&hvpos=&hvnetw=g&hvrand=2279093752658419772&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031577&hvtargid=pla-813349100305&psc=1), says that our brain "... will often follow the path of least effort and that it endorses a heuristic response, without much discernment as to whether it is appropriate". **The problem occurs when there is a *gap* between normal behavior and the behavior that your heuristic has brought. This *gap* is called bias.**

This does not mean that your brain wants to end your life, but **that it is a remnant of our evolutionary process.** Our ancestors needed to make quick decisions to survive, such as identifying a possible predator quickly and in advance, for example. However, even though it is a vestige of evolution, this type of behavior often causes problems and disorders.

![Is the city of Rio de Janeiro more dangerous than a city in the South?](https://miro.medium.com/max/694/0*n86Tu360xynJxEWt.jpg)

Want an example? **Answer me a question: which city do you think has the most homicides per 100,000 inhabitants: Rio de Janeiro (RJ) or Alvorada (RS)?** Even though Rio is not among the 10 most dangerous in this statistic - where Alvorada is in the sixth position - it is common for people to think that it is more dangerous, after all, we see Rio much more in homicide news than cities in the South, it is not ? **This is a good example of the [Availability Heuristic](https://en.wikipedia.org/wiki/Availability_heuristic), where we predict the frequency or probability of an event occurring based on the one we remember most easily.**

## How to Lie with Data Science

The title of this post does not look like the book ["How to Lie with Statistics"](https://www.amazon.com/How-Lie-Statistics-Darrell-Huff/dp/0393310728) for nothing. This classic is, among other things, how analyzes are deliberately shown in a biased way so that they influence their decision, or to believe in the message they want to send. It would be very presumptuous of me to want to compare this simple post to this work, but I want to show you the biases that most disturb the life of the Data Scientist and decision makers. At the end of the post, I give tips on how to avoid these biases in your work.

### Selection Bias

![](https://miro.medium.com/max/700/1*nz1IuFb3wrY0iLrsKkdppw.png)

Take my research as an example: can you identify what her mistakes are? First, you could argue - rightly - that the data are not representative of a population who need to analyze, for example, a Brazilian population. After all, in my research I considered only users of social networks and who are in my bubble - people of professionals and technology enthusiasts - something that does not reflect at all a sample of a population.

**Selection bias occurs when not selected - deliberately or not - a representative sample and / or random.** This occurs when the data is easier to access, or when we are not aware of how representative our data is.

### Recall Bias

We are terrible at remembering facts exactly, and it gets worse when we need to remember very old events. **Recall bias occurs when our memories of past events are affected by exposure to present events.**

![](https://miro.medium.com/max/498/0*rIT_YQF5Mq657PRr)

**If I ask you how your 2010 vacation went, it is very likely that you will remember them happier than you really were.** When we talk about experiments, this can generate results that do not match reality.

Want an example? Imagine that you did an event and decided to send a satisfaction survey - for example, NPS - to your audience after I finish. If you divide the event participants into two random groups (A and B) and send the SPL survey one day after the event to group A and only after a week to group B, **it is very likely that the second group will give a grade higher than the first group.**

### Confirmation Bias

![](https://miro.medium.com/max/700/0*1aSvnSM4dxJpwCAN.jpg)

This is one of the most dangerous biases, in my opinion. He is the one who, even when the person knows that he exists, he is ignored. **Confirmation bias occurs when you give more weight to facts, data or information that confirm your predefined beliefs, while underestimating those that contradict you.** This is what happens when people prefer to consume content that reinforces their political position, while disparaging other perspectives and thoughts.

**In business, confirmation bias can occur when you want to validate a hypothesis and give more weight to the one who believes most**, or who wants to believe. Imagine the damage you can do to your company with that kind of mindset.

### Bandwagon Effect

The human being is a social animal, **and to be accepted into different groups tend to have some behaviors that facilitate such acceptance.** Fields like neuroscience have tried to explain how the simple fact of having an accent has to do with our empathy, in addition to having some controversial experiments showing the tendency of human beings to agree with the majority, even when they are wrong, an effect also known as compliance bias.

![](https://miro.medium.com/max/600/0*D0bIpWTuBHcAHAbw.jpg)

Another bias similar to these is the **"Adhesion Effect", better known as the Bandwagon Effect, where we tend to believe - or discredit - something because "most believe or discredit".** Have you ever faced a situation where you were asked to do an analysis and a group of people - teams, board of directors, more senior people, etc. - already had an answer they believed? This type of scenario can influence how you conduct your analysis, much of the time delivering what they want to hear, rather than what is true.

## How to Deal with Bias

You could write a book - and there are several already - about how bias and heuristics can shape our behavior and influence our decisions or beliefs. And, in fact, there are many studies of social psychology and behavioral economics that are able to teach you much better than me how to deal with cognitive biases.
However, I want to share how I usually think to avoid making my decision as biased as possible:

    1. Awareness: the simple fact of knowing that there are biases that can influence your behavior or decision is already a great first step. There are other incredible sources to educate you about biases and fallacies, which I will leave at the end of the post.

    2. Metacognition: think as someone else would think. What kind of questions would she ask? What kind of influence can your analysis or result have on it? Develop personas for your different analysis of project stakeholders and understand how the possible interactions would be.

    3. Be skeptical and find blind spots: be skeptical about the work of others, but especially about yours. What are you forgetting? Is it possible to validate your answer with other sources? Can you ask someone to review your work?
    
    4. Check your ego: don't forget the confirmation bias. Do you want to answer a question and discover something new, or do you just want to be right?

    5. Avoid “influential” questions: when conducting analysis, research and experiments, avoid showing your preferences and generating biased questions. Examples: “Even with higher interest rates, do you prefer to choose this card?”, Or “The whole company liked the color blue, but which color do you prefer?”