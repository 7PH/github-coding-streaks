# Weekly Commit Streak Leaderboard @ Switzerland <img src="https://flagsapi.com/CH/flat/24.png">

Users that have been contributing at least once a week for the longest time.

<table align="right">
	<tr>
		<td>
			Give a 🌟 to make this project gain visibility
		</td>
	</tr>
</table>

<table align="center">
	<tr>
		<td>
			<b>Other <img src="https://flagsapi.com/CH/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/ch.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../day-streak/ch.md">
				Daily Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `70` followers
-   Have one of `switzerland,suisse,schweiz,svizzera,zurich,lausanne,basel,geneva,bern,zug,lugano,fribourg,nyon` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `1000` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > 70)
    .sortBy(user => getCurrentWeeklyCommitStreak(user), 'desc')
    .take(1000)
```

</details>

---


<table style="width: 100%">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Followers</th>
            <th>Weekly Commit Streak</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>🥇</td><td><a href="https://github.com/cclauss">
        <img src="https://avatars.githubusercontent.com/u/3709715?s=72&u=0745d1d2473894c33f3b35f0b965d71cc9aec553&v=4" height="12" />
        <b>cclauss</b>
    </a></td><td>Christian Clauss</td><td>Switzerland</td><td>5.05K</td><td>473</td></tr><tr><td>🥈</td><td><a href="https://github.com/mafintosh">
        <img src="https://avatars.githubusercontent.com/u/376661?s=72&u=69e0f4e7e2dc9e575ef93b329babfa773302622e&v=4" height="12" />
        <b>mafintosh</b>
    </a></td><td>@holepunchto</td><td>Switzerland</td><td>6.32K</td><td>318</td></tr><tr><td>🥉</td><td><a href="https://github.com/twpayne">
        <img src="https://avatars.githubusercontent.com/u/6942?s=72&u=227a4496aba8d3f526c53bdb6aa7713b22c56906&v=4" height="12" />
        <b>twpayne</b>
    </a></td><td>-</td><td>Zürich, Switzerland</td><td>4.89K</td><td>118</td></tr><tr><td>4</td><td><a href="https://github.com/danistefanovic">
        <img src="https://avatars.githubusercontent.com/u/1736595?s=72&u=31804dc71d739de0972aa1b99a10a64d1856149b&v=4" height="12" />
        <b>danistefanovic</b>
    </a></td><td>-</td><td>Switzerland</td><td>4.94K</td><td>13</td></tr>
    </tbody>
</table>
