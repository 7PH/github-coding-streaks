# Daily Commit Streak Leaderboard @ France <img src="https://flagsapi.com/FR/flat/24.png">

Users that have been contributing every day for the longest time.

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
			<b>Other <img src="https://flagsapi.com/FR/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/fr.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../week-streak/fr.md">
				Weekly Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `150` followers
-   Have one of `france,frankreich,paris,lyon,nantes,toulouse,rennes,bordeaux,lille,grenoble,montpellier,nancy` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `200` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > 150)
    .sortBy(user => getCurrentDailyCommitStreak(user), 'desc')
    .take(200)
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
            <th>Daily Commit Streak</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>🥇</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=cbf78192d42e983fce3c9131d547f697f684f21f&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>@Smylen</td><td>Paris, La Défense</td><td>15.84K</td><td>296</td></tr><tr><td>🥈</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.29K</td><td>22</td></tr><tr><td>🥉</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Upsun</td><td>Paris, France</td><td>13.35K</td><td>8</td></tr><tr><td>4</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=06259cb98f3d65c5901edf488b6bf4ab5f4bccec&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.44K</td><td>5</td></tr><tr><td>5</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=6c520432e20d5ed603246764658accea4b4043c3&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@vercel</td><td>France</td><td>5.4K</td><td>5</td></tr><tr><td>6</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>5.67K</td><td>4</td></tr>
    </tbody>
</table>
