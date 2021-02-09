# reserveKayak
As you know, a kayaking competition is going on as we speak. Unfortunately
strong winds have damaged a few kayaks, and the race starts in 5 minutes!.
Fortunately, some teams have brought reserve kayaks. Since kayaks are
bulky and hard to carry, teams are willing to lend kayaks to opposing teams
if and only if they are starting immediately next to them. For example, team
with the starting number 4 will lend its reserve kayak only to teams 3 and 5.
Of course if some team did bring a reserve and its' kayak was damaged, they
will use it themselves and not lend it to anyone.
You as the organizer now need to know, what is the minimal number of teams
that cannot start the race, not even in borrowed kayaks.

# Input
- The first line of input is total number of teams **N** (2 ≤ N ≤ 10) `number`
- The second line contains exactly **S** numbers, the starting numbers of teams
with damaged kayaks. **The second line will not contain duplicates.** `array`
- The third line contains exactly **R** numbers, the starting numbers of teams with
reserve kayaks. **The third line will not contain duplicates.** `array`

# Output
The first and only line of output should contain the largest number of teams
that can start the competition. `number`

```
// input
5
[2,4]
[1, 3, 5]

// output
5

// input
5
[2, 4]
[3]

//output
4
```

# authorship
[authorship](https://hsin.hr/coci/archive/2009_2010/contest6_tasks.pdf)