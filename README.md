# lyric-parser
lyric-parser base on javascript

## Install

```
 npm install lyric-parser
```

## Usage

```
 import Lyric from 'lyric-parser'
 let lyric = new Lyric(lyricStr, handler)

 function hanlder({lineNum, txt}){
   // this hanlder called when lineNum change
 }
```

## API

#### play()

play the lyric 

#### stop()

stop play

#### seek(startTime)

seek to correspond starTime

#### togglePlay()

toggle play state
