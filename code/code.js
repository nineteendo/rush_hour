/*jshint esversion: 6 */
// Puzzles:
const level_sets = [
[
// SET 1 BEGINNER 1 (DELUXE BEGINNER 1)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 0, 0, 0, 1,10],
	[10, 1, 0, 0, 1, 0, 9,10],
	[10, 9,-7,-3, 9, 0, 5,11],
	[10, 5, 0, 0, 5, 0, 0,10],
	[10, 1, 0, 0, 0, 7, 3,10],
	[10, 5, 0, 7, 9, 3, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 2 (DELUXE BEGINNER 2)
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 0, 0, 7, 9, 3,10],
	[10, 5, 0, 0, 1, 0, 1,10],
	[10,-7,-3, 0, 5, 1, 9,11],
	[10, 7, 9, 3, 0, 5, 5,10],
	[10, 0, 0, 1, 0, 7, 3,10],
	[10, 7, 3, 5, 7, 3, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 3 (DELUXE BEGINNER 3)
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10, 0,-7,-3, 1, 0, 0,11],
	[10, 0, 7, 3, 9, 0, 1,10],
	[10, 0, 1, 0, 5, 0, 9,10],
	[10, 0, 5, 7, 3, 0, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 4 (DELUXE BEGINNER 4)
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 0, 0, 1, 0, 0,10],
	[10, 9, 0, 0, 9, 0, 0,10],
	[10, 5,-7,-3, 5, 0, 0,11],
	[10, 0, 0, 1, 7, 9, 3,10],
	[10, 0, 0, 5, 0, 0, 1,10],
	[10, 0, 0, 7, 9, 3, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 5 (DELUXE BEGINNER 5)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 0, 1, 0, 1,10],
	[10, 1, 0, 0, 9, 1, 5,10],
	[10, 9,-7,-3, 5, 9, 1,11],
	[10, 5, 7, 9, 3, 5, 5,10],
	[10, 1, 0, 0, 0, 7, 3,10],
	[10, 5, 0, 0, 0, 7, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 6 (DELUXE BEGINNER 6)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 0, 1, 0, 0,10],
	[10, 7, 3, 0, 5, 1, 1,10],
	[10, 0,-7,-3, 1, 9, 9,11],
	[10, 7, 3, 1, 9, 5, 5,10],
	[10, 1, 0, 5, 5, 0, 0,10],
	[10, 5, 0, 0, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 7 (DELUXE BEGINNER 7)
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 1, 7, 3, 1, 1,10],
	[10, 0, 5, 0, 1, 5, 5,10],
	[10, 0,-7,-3, 5, 0, 1,11],
	[10, 0, 0, 7, 3, 0, 5,10],
	[10, 0, 0, 0, 1, 0, 0,10],
	[10, 0, 0, 0, 5, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 8 (DELUXE BEGINNER 8)
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 0, 7, 3, 1,10],
	[10, 0, 0, 7, 3, 1, 9,10],
	[10,-7,-3, 1, 1, 5, 5,11],
	[10, 7, 3, 5, 5, 7, 3,10],
	[10, 7, 3, 1, 7, 9, 3,10],
	[10, 7, 3, 5, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 9 (DELUXE BEGINNER 9)
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 1, 7, 3, 7, 3,10],
	[10, 0, 5, 0, 1, 7, 3,10],
	[10,-7,-3, 0, 5, 1, 1,11],
	[10, 1, 7, 9, 3, 9, 5,10],
	[10, 9, 0, 1, 0, 5, 1,10],
	[10, 5, 0, 5, 0, 0, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 BEGINNER 10 (DELUXE BEGINNER 10)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 0, 7, 3,10],
	[10, 7, 3, 5, 0, 0, 1,10],
	[10, 1,-7,-3, 0, 0, 9,11],
	[10, 9, 7, 9, 3, 0, 5,10],
	[10, 5, 0, 0, 1, 7, 3,10],
	[10, 7, 3, 0, 5, 7, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 11 (DELUXE INTERMEDIATE 15)
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 7, 3, 1, 0, 0,10],
	[10, 9, 0, 0, 9, 0, 0,10],
	[10, 5,-7,-3, 5, 0, 0,11],
	[10, 0, 0, 1, 7, 9, 3,10],
	[10, 0, 0, 5, 0, 0, 1,10],
	[10, 0, 0, 7, 9, 3, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 12
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 7, 3, 0, 0, 1,10],
	[10, 5, 0, 1, 0, 0, 9,10],
	[10,-7,-3, 9, 0, 0, 5,11],
	[10, 0, 0, 5, 7, 9, 3,10],
	[10, 0, 0, 0, 0, 1, 0,10],
	[10, 7, 9, 3, 0, 5, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 13
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 7, 3, 1, 0,10],
	[10, 0, 0, 1, 0, 5, 1,10],
	[10, 0, 1, 5,-7,-3, 9,11],
	[10, 1, 5, 0, 7, 3, 5,10],
	[10, 9, 0, 0, 1, 7, 3,10],
	[10, 5, 7, 3, 5, 7, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 14
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 0, 0, 0,10],
	[10, 0, 0, 5, 0, 7, 3,10],
	[10, 1, 1,-7,-3, 1, 1,11],
	[10, 5, 5, 7, 3, 5, 5,10],
	[10, 0, 0, 1, 0, 7, 3,10],
	[10, 7, 3, 5, 0, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 15 (DELUXE INTERMEDIATE 13)
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 7, 3, 7, 3, 0,10],
	[10, 7, 3, 7, 3, 1, 1,10],
	[10, 1, 1,-7,-3, 9, 9,11],
	[10, 9, 9, 1, 1, 5, 5,10],
	[10, 5, 5, 5, 5, 7, 3,10],
	[10, 0, 7, 3, 7, 3, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 16 (DELUXE INTERMEDIATE 11)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 7, 3, 1, 1,10],
	[10, 1, 0, 7, 3, 5, 9,10],
	[10, 5, 1, 1,-7,-3, 5,11],
	[10, 0, 5, 9, 7, 9, 3,10],
	[10, 0, 0, 5, 0, 0, 0,10],
	[10, 7, 3, 0, 0, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 17
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 7, 9, 3, 0, 0,10],
	[10, 5, 0, 7, 3, 7, 3,10],
	[10,-7,-3, 1, 0, 0, 0,11],
	[10, 7, 3, 5, 1, 0, 0,10],
	[10, 7, 9, 3, 9, 1, 1,10],
	[10, 7, 9, 3, 5, 5, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 18 (example_intermediate.png)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 1, 0, 0,10],
	[10, 7, 3, 5, 9, 0, 0,10],
	[10, 1,-7,-3, 5, 0, 0,11],
	[10, 9, 7, 9, 3, 0, 0,10],
	[10, 5, 7, 3, 0, 0, 0,10],
	[10, 7, 9, 3, 0, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 19
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 1, 7, 3, 0,10],
	[10, 0, 0, 5, 0, 1, 0,10],
	[10, 0, 1,-7,-3, 5, 0,11],
	[10, 0, 5, 7, 3, 1, 0,10],
	[10, 0, 7, 9, 3, 5, 0,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 INTERMEDIATE 10
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 0, 0, 7, 9, 3,10],
	[10, 5, 7, 3, 1, 0, 0,10],
	[10,-7,-3, 1, 5, 0, 1,11],
	[10, 0, 0, 5, 0, 0, 9,10],
	[10, 0, 0, 1, 7, 3, 5,10],
	[10, 0, 0, 5, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 21
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 1, 0, 0,10],
	[10, 1, 0, 5, 9, 0, 0,10],
	[10, 9,-7,-3, 5, 0, 0,11],
	[10, 5, 7, 9, 3, 0, 0,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10, 0, 0, 0, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 22
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 1, 7, 9, 3,10],
	[10, 1, 0, 5, 1, 7, 3,10],
	[10, 5,-7,-3, 9, 0, 0,11],
	[10, 0, 1, 0, 5, 7, 3,10],
	[10, 1, 5, 7, 3, 0, 1,10],
	[10, 5, 7, 9, 3, 0, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 23
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 7, 9, 3, 1,10],
	[10, 0, 0, 1, 7, 3, 9,10],
	[10, 0, 0, 5,-7,-3, 5,11],
	[10, 0, 0, 1, 1, 7, 3,10],
	[10, 0, 0, 5, 5, 7, 3,10],
	[10, 0, 0, 7, 9, 3, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 24
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 1, 7, 3, 0,10],
	[10, 0, 1, 5, 0, 0, 0,10],
	[10, 1, 5,-7,-3, 1, 0,11],
	[10, 5, 7, 3, 0, 5, 0,10],
	[10, 7, 9, 3, 0, 1, 0,10],
	[10, 7, 3, 0, 0, 5, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 25 (DELUXE INTERMEDIATE 21)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 0, 7, 3,10],
	[10, 7, 3, 5, 0, 0, 1,10],
	[10, 1,-7,-3, 0, 1, 9,11],
	[10, 9, 7, 9, 3, 5, 5,10],
	[10, 5, 1, 0, 1, 7, 3,10],
	[10, 0, 5, 0, 5, 7, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 26 (example_advanced.png)
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 1, 0, 7, 9, 3,10],
	[10, 1, 5, 0, 1, 1, 0,10],
	[10, 5,-7,-3, 5, 9, 1,11],
	[10, 1, 7, 9, 3, 5, 5,10],
	[10, 5, 0, 1, 0, 0, 1,10],
	[10, 0, 0, 5, 7, 3, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 27 (DELUXE INTERMEDIATE 22)
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 7, 3, 1, 0, 0,10],
	[10, 5, 7, 3, 9, 0, 0,10],
	[10,-7,-3, 1, 5, 0, 1,11],
	[10, 0, 0, 5, 7, 3, 9,10],
	[10, 0, 0, 1, 0, 0, 5,10],
	[10, 0, 0, 5, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 28
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 9, 3, 1, 0, 0,10],
	[10, 0, 0, 1, 5, 7, 3,10],
	[10,-7,-3, 9, 0, 0, 0,11],
	[10, 1, 1, 5, 7, 3, 1,10],
	[10, 5, 5, 7, 9, 3, 9,10],
	[10, 7, 3, 7, 3, 0, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 29
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 9, 3, 0, 1, 0,10],
	[10, 0, 0, 1, 0, 9, 0,10],
	[10,-7,-3, 5, 0, 5, 1,11],
	[10, 1, 7, 3, 7, 3, 5,10],
	[10, 5, 7, 3, 1, 0, 1,10],
	[10, 7, 9, 3, 5, 0, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 ADVANCED 20
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 0, 1, 7, 9, 3,10],
	[10, 9, 0, 5, 1, 0, 0,10],
	[10, 5,-7,-3, 5, 0, 0,11],
	[10, 7, 3, 7, 3, 0, 1,10],
	[10, 0, 0, 0, 0, 0, 9,10],
	[10, 7, 3, 7, 3, 0, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 31
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 0, 7, 9, 3,10],
	[10, 0, 0, 0, 1, 7, 3,10],
	[10, 1,-7,-3, 5, 0, 1,11],
	[10, 5, 0, 1, 7, 3, 9,10],
	[10, 7, 3, 9, 0, 0, 5,10],
	[10, 0, 0, 5, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 32
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 1, 7, 3,10],
	[10, 0, 0, 9, 5, 0, 0,10],
	[10,-7,-3, 5, 0, 0, 0,11],
	[10, 1, 7, 3, 7, 3, 1,10],
	[10, 5, 0, 0, 1, 0, 9,10],
	[10, 7, 3, 0, 5, 0, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 33
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 1, 1, 0, 7, 3,10],
	[10, 0, 5, 9, 0, 0, 0,10],
	[10,-7,-3, 5, 0, 0, 0,11],
	[10, 1, 7, 3, 7, 3, 1,10],
	[10, 5, 7, 3, 1, 1, 9,10],
	[10, 7, 9, 3, 5, 5, 5,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 34
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 0, 0, 7, 9, 3,10],
	[10, 5, 0, 0, 1, 0, 1,10],
	[10,-7,-3, 0, 5, 1, 9,11],
	[10, 7, 9, 3, 1, 5, 5,10],
	[10, 0, 0, 1, 5, 7, 3,10],
	[10, 7, 3, 5, 7, 3, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 35
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 1, 7, 3, 1,10],
	[10, 0, 0, 9, 1, 0, 9,10],
	[10,-7,-3, 5, 5, 0, 5,11],
	[10, 1, 7, 9, 3, 0, 0,10],
	[10, 5, 7, 3, 1, 1, 0,10],
	[10, 7, 3, 0, 5, 5, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 36
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 7, 9, 3, 7, 3,10],
	[10, 9, 1, 7, 3, 0, 1,10],
	[10, 5, 5,-7,-3, 0, 9,11],
	[10, 7, 9, 3, 1, 0, 5,10],
	[10, 0, 0, 1, 5, 7, 3,10],
	[10, 7, 3, 5, 0, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 37
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 0, 7, 3,10],
	[10, 7, 3, 5, 0, 1, 1,10],
	[10, 1,-7,-3, 0, 9, 9,11],
	[10, 9, 7, 9, 3, 5, 5,10],
	[10, 5, 0, 0, 1, 7, 3,10],
	[10, 7, 3, 0, 5, 7, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 38 (example_expert.png)
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 0, 0, 7, 9, 3,10],
	[10, 5, 7, 3, 1, 0, 0,10],
	[10,-7,-3, 1, 5, 0, 1,11],
	[10, 0, 0, 5, 7, 3, 9,10],
	[10, 0, 0, 1, 7, 3, 5,10],
	[10, 0, 0, 5, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 39
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 1, 7, 9, 3,10],
	[10, 0, 0, 5, 1, 0, 0,10],
	[10,-7,-3, 1, 5, 0, 1,11],
	[10, 7, 3, 5, 7, 3, 9,10],
	[10, 1, 1, 7, 3, 0, 5,10],
	[10, 5, 5, 7, 3, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// SET 1 EXPERT 40
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 7, 3, 0, 1, 0,10],
	[10, 9, 1, 1, 0, 5, 1,10],
	[10, 5, 5, 5,-7,-3, 9,11],
	[10, 7, 9, 3, 1, 0, 5,10],
	[10, 0, 0, 1, 5, 7, 3,10],
	[10, 7, 3, 5, 7, 3, 0,10],
	[10,10,10,10,10,10,10,10]
]
],
[
// example_intermediate.png (SET 1 INTERMEDIATE 18)
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 1, 0, 0,10],
	[10, 7, 3, 5, 9, 0, 0,10],
	[10, 1,-7,-3, 5, 0, 0,11],
	[10, 9, 7, 9, 3, 0, 0,10],
	[10, 5, 7, 3, 0, 0, 0,10],
	[10, 7, 9, 3, 0, 0, 0,10],
	[10,10,10,10,10,10,10,10]
],
// example_advanced.png (SET 1 ADVANCED 26)
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 1, 0, 7, 9, 3,10],
	[10, 1, 5, 0, 1, 1, 0,10],
	[10, 5,-7,-3, 5, 9, 1,11],
	[10, 1, 7, 9, 3, 5, 5,10],
	[10, 5, 0, 1, 0, 0, 1,10],
	[10, 0, 0, 5, 7, 3, 5,10],
	[10,10,10,10,10,10,10,10]
],
// example_expert.png (SET 1 EXPERT 38)
[
	[10,10,10,10,10,10,10,10],
	[10, 1, 0, 0, 7, 9, 3,10],
	[10, 5, 7, 3, 1, 0, 0,10],
	[10,-7,-3, 1, 5, 0, 1,11],
	[10, 0, 0, 5, 7, 3, 9,10],
	[10, 0, 0, 1, 7, 3, 5,10],
	[10, 0, 0, 5, 7, 9, 3,10],
	[10,10,10,10,10,10,10,10]
],
// example_grand_master.png
[
	[10,10,10,10,10,10,10,10],
	[10, 7, 3, 1, 0, 7, 3,10],
	[10, 7, 3, 5, 0, 1, 0,10],
	[10, 1, 0,-7,-3, 9, 0,11],
	[10, 9, 7, 9, 3, 5, 1,10],
	[10, 5, 0, 0, 1, 0, 5,10],
	[10, 7, 3, 0, 5, 7, 3,10],
	[10,10,10,10,10,10,10,10]
]
/*EMPTY LEVEL
// SET 1 EXPERT 31
[
	[10,10,10,10,10,10,10,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10, 0, 0, 0, 0, 0, 0,11],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10, 0, 0, 0, 0, 0, 0,10],
	[10,10,10,10,10,10,10,10]
]
*/
],
[
// MOVEMENT TEST 1
[
	[10,10,10,10,10,10,10],
	[10, 0, 0, 0, 0, 0,10],
	[10, 0, 8, 1, 2, 0,10],
	[10, 0, 7, 9, 3, 0,10],
	[10, 0, 6, 5, 4, 0,10],
	[10, 0, 0, 0, 0, 0,10],
	[10,10,10,10,10,10,10]
],
// MOVEMENT TEST 2
[
	[11,10,10,11,11,11,10,10,11],
	[10, 0, 0, 0, 0, 0, 0, 0,10],
	[10, 0,-8,-1,-1,-1,-2, 0,10],
	[11, 0,-7,-4,-5,-6,-3, 0,11],
	[11, 0,-7,-3,10,-7,-3, 0,11],
	[11, 0,-7,-2,-1,-8,-3, 0,11],
	[10, 0,-6,-5,-5,-5,-4, 0,10],
	[10, 0, 0, 0, 0, 0, 0, 0,10],
	[11,10,10,11,11,11,10,10,11]
],
// COLOR TEST 1
[
	[10,10,10],
	[10, 0,10],
	[10,10,10]
],
// COLOR TEST 2
[
	[10,10,10,10,10,10],
	[10, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9,10],
	[10,10,10,10,10,10]
],
// COLOR TEST 3
[
	[10,10,10,10,10,10,10,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10,10,10,10,10,10,10,10]
],
// COLOR TEST 4
[
	[10,10,10,10,10,10,10,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9,10],
	[10,10,10,10,10,10,10,10]
],
// COLOR TEST 5
[
	[10,10,10,10,10,10,10,10,10,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10,10,10,10,10,10,10,10,10,10]
],
// COLOR TEST 6
[
	[10,10,10,10,10,10,10,10,10,10,10,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,10],
	[10,10,10,10,10,10,10,10,10,10,10,10]
]
]
];

// Constanten: 
const urlParams = new URLSearchParams(window.location.search);
const icons = " ▲◥▶◢▼◣◀◤   ";
const x_decode = [0, 0, 1, 1, 1, 0,-1,-1,-1, 0, 0];
const y_decode = [0,-1,-1, 0, 1, 1, 1, 0,-1, 0, 0];
const end_code = [0, 5, 6, 7, 8, 1, 2, 3, 4, 9, 0];

// Globale variablen:
let my_puzzle = [];
let my_colors = [];
let current_color = 0;
let moves = 0;
let remaining = null;
let time_elapsed = 0;
let timer_loop = null;

// Wanneer de volledige HTML-pagina geladen is wordt onderstaande functie uitgevoerd
window.onload = start;
function start() {
	my_puzzle = load_puzzle();
	let colors = load_colors();
	let color_html = generate_color_html(colors);
	document.getElementById("colors").innerHTML = color_html;
	draw_puzzle();
}

// Laad puzzle uit set
function load_puzzle() {
	let level_set_min = Math.min(1, level_sets.length);
	let level_set = clamp(1, urlParams.get("set"), level_sets.length);
	let level_set_element = document.getElementById("set");
	level_set_element.min = level_set_min;
	level_set_element.value = level_set;
	level_set_element.max = level_sets.length;

	let puzzles = [];
	if (0 < level_set)
		puzzles = level_sets[level_set - 1];

	let puzzle_min = Math.min(1, puzzles.length);
	let puzzle = clamp(1, urlParams.get("level"), puzzles.length);
	let puzzle_element = document.getElementById("level");
	puzzle_element.min = puzzle_min;
	puzzle_element.value = puzzle;
	puzzle_element.max = puzzles.length;

	if (0 == puzzle)
		return [];
	return puzzles[puzzle - 1];
}

// Laad colors
function load_colors() {
	for (let i = 0; i < my_puzzle.length; i++) {
		let row = [];
		for (let j = 0; j < my_puzzle[i].length; j++)
			row.push(0);
		my_colors.push(row);
	}
	let color = 1;
	for (let i = 0; i < my_puzzle.length; i++)
		for (let j = 0; j < my_puzzle[i].length; j++)
			color = set_colors(my_colors, i, j, color);
	return color + 1;
}

// Stel kleuren in in de matrix
function set_colors(colors, row, col, color) {
	let type = Math.abs(my_puzzle[row][col]);
	let increase = false;
	let x = x_decode[type];
	let y = y_decode[type];
	let old_type = 0;
	let end = end_code[type];
	while (0 < type && type < 10 && old_type != end) {
		old_type = type;
		if (colors[row][col] == 0) {
			increase = true;
			colors[row][col] = color;
		}
		row -= y;
		col -= x;
		type = Math.abs(my_puzzle[row][col]);
	}
	if (increase)
		color++;
	return color;
}

function generate_color_html(coloramount) {
	let hsl = urlParams.get("hsl");
	document.getElementById("hsl").checked = hsl;
	if (hsl)
		return generate_hsl_colors(coloramount);
	return generate_rgb_colors(coloramount);
}

//Deze functie neemt als invoer de lijstrepresentatie van onze puzzel
function draw_puzzle() {
	let puzzle_html = generate_puzzle_html();
	document.getElementById("puzzle_container").innerHTML = puzzle_html;
	let counter_html = generate_counter_html(moves, "Moves");
	document.getElementById("counter").innerHTML = counter_html;
	let counter_cars_html = generate_counter_html(remaining, "Cars Left");
	document.getElementById("counter_cars").innerHTML = counter_cars_html;
}

function generate_puzzle_html() {
	let remaining_colors = [];
	let puzzle_html = "";
	for (let i = 0; i < my_puzzle.length; i++) {
		let row_html = "<tr>";
		for (let j = 0; j < my_puzzle[i].length; j++) {
			let type = my_puzzle[i][j];
			let color = my_colors[i][j];
			if (type < 0) {
				type *= -1;
				if (!remaining_colors.includes(color))
					remaining_colors.push(color);
			}
			row_html += generate_square(type, color);
		}
		puzzle_html += row_html + "</tr>";
	}
	let new_remaining = remaining_colors.length;
	if (0 < remaining && 0 == new_remaining) {
		clearInterval(timer_loop);
		timer_loop = null;
		setTimeout(congratulations, 100);
	}
	remaining = new_remaining;
	return "<table>" + puzzle_html + "</table>";
}

function generate_square(type, color) {
	if (type == 0)
		return "<td class='noHover'>" + icons[0] + "</td>";
	if (type < 9)
		return "<td class='color" + color + "' onclick='square_click_handler(this)'>" + icons[type] + "</td>";
	if (type == 9)
		return "<td class='color" + color + " noHover'>" + icons[9] + "</td>";
	if (type == 10)
		return "<td class='noHover border color0'>" + icons[10] + "</td>";
	return "<td class='noHover border'>" + icons[11] + "</td>";
}

function square_click_handler(cell) {
	let col = cell.cellIndex;
	let row = cell.parentNode.rowIndex;
	let new_color = my_colors[row][col];
	let moved = move(row, col);
	if (0 < remaining && moved && current_color != new_color) {
		current_color = new_color;
		if (++moves == 1)
			timer_loop = setInterval(stopwatch, 100);
	}
	draw_puzzle();
}

function move(row, col) {
	let type = Math.abs(my_puzzle[row][col]);
	let moved = false;
	let clear = false;
	let x = x_decode[type];
	let y = y_decode[type];
	let old_type = 0;
	let end = end_code[type];
	while (0 < type && type < 10 && old_type != end) {
		old_type = type;
		let i = row + y;
		let j = col + x;
		if (my_puzzle[i][j] == 11)
			clear = moved = true;
		if (clear) {
			my_puzzle[row][col] = 0;
			my_colors[row][col] = 0;
		} else if (my_puzzle[i][j] == 0) {
			moved = true;
			my_puzzle[i][j] = my_puzzle[row][col];
			my_puzzle[row][col] = 0;
			my_colors[i][j] = my_colors[row][col];
			my_colors[row][col] = 0;
		}
		row -= y;
		col -= x;
		type = Math.abs(my_puzzle[row][col]);
	}
	return moved;
}

function stopwatch() {
	document.getElementById("time").textContent = format_time(++time_elapsed);
}

// Algemene functies:
function congratulations() {
	alert("Proficiat!");
}
function generate_hsl_colors(coloramount) {
	let color_codes = [];
	color_codes.push(".color0{background-color:hsl(0, 0%, 0%)}");
	let color = 1;
	let huedelta = Math.floor(360 / (coloramount - 2));
	for (let hue = 0; hue < 360; hue += huedelta)
		color_codes.push(".color" + color++ + "{background-color:hsl(" + hue + ", 100%, 50%)}");
	return color_codes.join("\n");
}
function generate_rgb_colors(coloramount) {
	let color_codes = [];
	let color = 0;
	// Groen>=blauw>=rood is het best onderscheidbaar
	let root_g = Math.ceil(Math.cbrt(coloramount));
	let root_b = Math.ceil(Math.sqrt(coloramount / root_g));
	let root_r = Math.ceil(coloramount / root_g / root_b);
	let gridspacing_r = 255;
	if (root_r > 1) gridspacing_r /= root_r - 1;
	let gridspacing_g = 255;
	if (root_g > 1) gridspacing_g /= root_g - 1;
	let gridspacing_b = 255;
	if (root_b > 1) gridspacing_b /= root_b - 1;
	// Groen>=blauw>=rood is het best onderscheidbaar
	for (let r = 0; r <= 255; r += gridspacing_r)
		for (let b = 0; b <= 255; b += gridspacing_b)
			for (let g = 0; g <= 255; g += gridspacing_g)
				color_codes.push(".color" + color++ + "{background-color:rgb(" + r + ", " + g + ", " + b + ")}");
	return color_codes.join("\n");
}
function generate_counter_html(number, quantity) {
	if (number > 999)
		return "999+" + quantity;
	return pad(number, 3) + " " + quantity;
}
function format_time(tenths_of_a_second) {
	let ss = round_time(tenths_of_a_second / 10);
	if (ss >= 604800) // 1 week
		return format_weeks(ss);
	if (ss >= 86400) // 1 dag
		return format_days(ss);
	if (ss >= 3600) // 1 uur
		return format_hours(ss);
	return format_minutes(ss);
}
function round_time(ss) {
	if (ss >= 60480000) // 100 weken
		return nearest_multiple(ss, 604800); // 1 week
	if (ss >= 6048000) // 10 weken
		return nearest_multiple(ss, 60480); // 0.1 week
	if (ss >= 604800) // 1 week
		return nearest_multiple(ss, 6048); // 0.01 week
	if (ss >= 86400) // 1 dag
		return nearest_multiple(ss, 864); // 0.01 dag
	if (ss >= 3600) // 1 uur
		return Math.round(ss); // 1 seconde
	return nearest_multiple(ss, 0.1); // 0.1 seconden
}
function format_weeks(ss) {
	let ww = ss / 604800;
	if (ww >= 10000) // 10,000 weken
		return "9999+wks"; // 10,000 weken
	if (ww >= 100) // 100 weken
		return pad(ww, 4) + " wks"; // 1 week
	if (ww >= 10) // 10 weken
		return pad(ww.toFixed(1), 4) + " wks"; // 0.1 week
	return ww.toFixed(2) + " wks"; // 0.01 week
}
function format_days(ss) {
	let dd = ss / 86400;
	return dd.toFixed(2) + " dys"; // 0.01 dag
}
function format_hours(ss) {
	let mm = Math.floor(ss / 60);
	ss %= 60;
	let hh = Math.floor(mm / 60);
	mm %= 60;
	return pad(hh, 2) + ":" + pad(mm, 2) + ":" + pad(ss, 2); // 1 seconde
}
function format_minutes(ss) {
	let mm = Math.floor(ss / 60);
	ss %= 60;
	return pad(mm, 2) + ":" + pad(ss.toFixed(2), 5); //0.1 seconden
}
function nearest_multiple(num, div) {
	return Math.round(num / div) * div;
}
function pad(num, size) {
	return String(num).padStart(size, "0");
}
function clamp(min, value, max) {
	return Math.min(Math.max(value, min), max);
}