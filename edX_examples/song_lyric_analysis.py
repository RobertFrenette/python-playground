# Song Lyric Analysis
limelight = ['living', 'on', 'a', 'lighted', 'stage', 'approaches', 'the', 'unreal', 'for', 'those', 'who', 'think', 'and', 'feel', 'in', 'touch', 'with', 'some', 'reality', 'beyond', 'the', 'gilded', 'cage', 'cast', 'in', 'this', 'unlikely', 'role', 'ill-equipped', 'to', 'act', 'with', 'insufficient', 'tact', 'one', 'must', 'put', 'up', 'barriers', 'to', 'keep', 'oneself', 'intact', 'living', 'in', 'the', 'limelight', 'the', 'universal', 'dream', 'for', 'those', 'who', 'wish', 'to', 'seem', 'those', 'who', 'wish', 'to', 'be', 'must', 'put', 'aside', 'the', 'alienation', 'get', 'on', 'with', 'the', 'fascination', 'the', 'real', 'relation', 'the', 'underlying', 'theme', 'living', 'in', 'a', 'fisheye', 'lens', 'caught', 'in', 'the', 'camera', 'eye', 'i', 'have', 'no', 'heart', 'to', 'lie', 'i', 'can?t', 'pretend', 'a', 'stranger', 'is', 'a', 'long-awaited', 'friend', 'all', 'the', 'world?s', 'indeed', 'a', 'stage', 'and', 'we', 'are', 'merely', 'players', 'performers', 'and', 'portrayers', 'each', 'another?s', 'audience', 'outside', 'the', 'gilded', 'cage']

def lyrics_to_frequencies(lyrics):
    lyricDict = {}
    for word in lyrics:
        if word in lyricDict:
            lyricDict[word] += 1
        else:
            lyricDict[word] = 1
    return lyricDict

song = lyrics_to_frequencies(limelight)


def most_common_words(freqs):        
    best = max(freqs.values())
    words = []
    for k in freqs:
        if freqs[k] == best:
            words.append(k)
    return (words, best)

def words_often(freqs, minTimes):
    result = []
    done = False
    while not done:
        temp = most_common_words(freqs)
        if temp[1] >= minTimes:
            result.append(temp)
            for w in temp[0]:
                del(freqs[w])
            else:
                done = True
    return result

print(words_often(song, 5))
print('\n')
    

# now remove 'the' from lyrics and run again
song = lyrics_to_frequencies(limelight)
del song['the']
print(words_often(song, 5))
