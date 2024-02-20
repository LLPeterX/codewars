/* 
6kyu - D&D Character generator #2: psion power points
https://www.codewars.com/kata/596b1d44224071b9f5000010/train/javascript

your task in this kata is to create a function 
that returns how many power points you get as a psion..

http://www.dandwiki.com/wiki/SRD:Psion#Making_a_Psion
http://www.d20pfsrd.com/psionics-unleashed/classes/#Table_Ability_Modifiers_and_Bonus_Power_Points

Consider both the [psion power points/days table] and [bonus power points] 
to figure out the correct reply, returned as an integer; 
the usual interpretation is that bonus power points stop increasing after level 20, 
but for the scope of this kata, we will pretend they keep increasing as they did before.

To compute the total, you will be provided, both as non-negative integers:

* class level (base power points/day halts after level 20)

* manifesting attribute score (Intelligence) to determine the total, 
  provided the score is high enough for the character to manifest at least one power.
  -------
Level BasePw  PPD Known
1st	  +0		  2	  3     // +2     
2nd	  +1		  6	  5     // +4
3rd	  +1		  11	7     // +5
4th	  +2		  17	9     // +6
5th	  +2	    25	11    // +8
6th	  +3		  35	13    // +10  
7th	  +3		  46	15    // +11  
8th	  +4		  58	17    // +12  
9th	  +4		  72	19    // +14
10th	+5	    88	21    // +16
11th	+5		  106	22    // +18
12th	+6/+1		126	24    // +20
13th	+6/+1		147	25    // +21
14th	+7/+2		170	27    // +23
15th	+7/+2   195	28    // +25
16th	+8/+3		221	30    // +26
17th	+8/+3		250	31    // +29
18th	+9/+4		280	33    // +30
19th	+9/+4		311	34    // +31
20th	+10/+5	343	36    // +32

21th	?????	  348 = 343(от 20)+5
------------------------------
  Table: Ability Modifiers and Bonus Power Points
Ability Score	    Bonus Power Points (by Manifester Level)
      1st	2nd	3rd	4th	5th	6th	7th	8th	9th	10th  11th	12th	13th	14th	15th	16th	17th	18th	19th	20th
10-11	0	  0	  0	  0	  0	  0	  0	  0	  0	  0	    0	    0	    0	    0	    0	    0	    0	    0	    0	    0
12-13	0	  1	  1	  2	  2	  3	  3	  4	  4	  5	    5	    6	    6	    7	    7	    8	    8	    9	    9	    10
14-15	1	  2	  3	  4	  5	  6	  7	  8	  9	  10	  11	  12	  13	  14	  15	  16	  17	  18	  19	  20
16-17	1	  3	  4	  6	  7	  9	  10	12	13	15	  16	  18	  19	  21	  22	  24	  25	  27	  28	  30
18-19	2	  4	  6	  8	  10	12	14	16	18	20	  22	  24	  26	  28	  30	  32	  34	  36	  38	  40
20-21	2	  5	  7	  10	12	15	17	20	22	25	  27	  30	  32	  35	  37	  40	  42	  45	  47	  50
22-23	3	  6	  9	  12	15	18	21	24	27	30	  33	  36	  39	  42	  45	  48	  51	  54	  57	  60
24-25	3	  7	  10	14	17	21	24	28	31	35	  38	  42	  45	  49	  52	  56	  59	  63	  66	  70
26-27	4	  8	  12	16	20	24	28	32	36	40	  44	  48	  52	  56	  60	  64	  68	  72	  76	  80
28-29	4	  9	  13	18	22	27	31	36	40	45	  49	  54	  58	  63	  67	  72	  76	  81	  85	  90
30-31	5	  10	15	20	25	30	35	40	45	50	  55	  60	  65	  70	  75	  80	  85	  90	  95	  100
32-33	5	  11	16	22	27	33	38	44	49	55	  60	  66	  71	  77	  82	  88	  93	  99	  104	  110
34-35	6	  12	18	24	30	36	42	48	54	60	  66	  72	  78	  84	  90	  96	  102	  108	  114	  120
36-37	6	  13	19	26	32	39	45	52	58	65	  71	  78	  84	  91	  97	  104	  110	  117	  123	  130
38-39	7	  14	21	28	35	42	49	56	63	70	  77	  84	  91	  98	  105	  112	  119	  126	  133	  140
40-41	7	  15	22	30	37	45	52	60	67	75	  82	  90	  97	  105	  112	  120	  127	  135	  142	  150

*/



function psionPowerPoints(level, score) {
  //const ppd = [0, 2, 6, 11, 17, 25, 35, 46, 58, 72, 88, 106, 126, 147, 170, 195, 221, 250, 280, 311, 343];
  if (score < 11 || level < 1) return 0;
  let basePower = [0, 2, 6, 11, 17, 25, 35, 46, 58, 72, 88, 106, 126, 147, 170, 195, 221, 250, 280, 311, 343][Math.min(20, level)]
  let bonusPower = Math.floor(level * Math.floor((score - 10) / 2) / 2);
  return basePower + bonusPower;
}

console.log(psionPowerPoints(1, 0), 0);
console.log(psionPowerPoints(1, 10), 0); //bonus(10, 1) = 0, base = 0
console.log(psionPowerPoints(1, 11), 2); //bonus(11, 1) =
console.log(psionPowerPoints(0, 11), 0);
console.log(psionPowerPoints(1, 20), 4);
console.log(psionPowerPoints(21, 30), 448); // bonusPower=100