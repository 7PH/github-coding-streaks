# Daily Commit Streak Leaderboard @ United States <img src="https://flagsapi.com/US/flat/24.png">

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
			<b>Other <img src="https://flagsapi.com/US/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/us.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../week-streak/us.md">
				Weekly Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `250` followers
-   Have one of `usa,us,america,united states,new york,los angeles,chicago,houston,miami,san francisco,boston,seattle,dallas,washington` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `200` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > 250)
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
        <tr><td>🥇</td><td><a href="https://github.com/kentcdodds">
        <img src="https://avatars.githubusercontent.com/u/1500684?s=72&u=f35a28c4eead6ba9636a8ff5858f6977d8593c43&v=4" height="12" />
        <b>kentcdodds</b>
    </a></td><td>@epicweb-dev </td><td>Salt Lake City, Utah, USA</td><td>34.6K</td><td>33</td></tr><tr><td>🥈</td><td><a href="https://github.com/lucidrains">
        <img src="https://avatars.githubusercontent.com/u/108653?s=72&u=6d8a8e8d28f8512933d729d7503ae3e622d59c64&v=4" height="12" />
        <b>lucidrains</b>
    </a></td><td>-</td><td>San Francisco</td><td>58.75K</td><td>19</td></tr><tr><td>🥉</td><td><a href="https://github.com/JakeWharton">
        <img src="https://avatars.githubusercontent.com/u/66577?s=72&v=4" height="12" />
        <b>JakeWharton</b>
    </a></td><td>-</td><td>Pittsburgh, PA, USA</td><td>68.15K</td><td>12</td></tr>
    </tbody>
</table>
