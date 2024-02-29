let myJokes =  [
    {
      "category": "Programming",
      "type": "single",
      "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
            },
      "id": 123,
      "safe": true,
      "lang": "en"
        },
    {
      "category": "Dark",
      "type": "twopart",
      "setup": "Everyone says that Hitler really loved animals.",
      "delivery": "Then why did he kill 6 million of them?",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": true,
        "sexist": false,
        "explicit": true
            },
      "id": 106,
      "safe": false,
      "lang": "en"
        },
    {
      "category": "Programming",
      "type": "twopart",
      "setup": "Why does no one like SQLrillex?",
      "delivery": "He keeps dropping the database.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
            },
      "id": 13,
      "safe": true,
      "lang": "en"
        },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
            },
      "id": 9,
      "safe": false,
      "lang": "en"
        },
    {
      "category": "Dark",
      "type": "single",
      "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": true,
        "sexist": false,
        "explicit": false
            },
      "id": 133,
      "safe": false,
      "lang": "en"
        },
    {
      "category": "Dark",
      "type": "twopart",
      "setup": "How does a black woman fight crime?",
      "delivery": "She has an abortion.",
      "flags": {
        "nsfw": true,
        "religious": false,
        "political": false,
        "racist": true,
        "sexist": false,
        "explicit": false
            },
      "id": 227,
      "safe": false,
      "lang": "en"
        },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
            },
      "id": 37,
      "safe": true,
      "lang": "en"
        },
    {
      "category": "Dark",
      "type": "single",
      "joke": "Me and my Jewish friend were eating lunch and I farted. He got mad so I said \"cmon man a little gas never killed anyone\".",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": true,
        "sexist": false,
        "explicit": true
            },
      "id": 103,
      "safe": false,
      "lang": "en"
        },
    {
      "category": "Dark",
      "type": "single",
      "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
            },
      "safe": false,
      "id": 274,
      "lang": "en"
        },
    {
      "category": "Dark",
      "type": "single",
      "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
            },
      "id": 96,
      "safe": false,
      "lang": "en"
        }
  ]
  
  let index=Math.floor(Math.random()*(myJokes.length-1))
  joke.innerHTML=myJokes[index].joke