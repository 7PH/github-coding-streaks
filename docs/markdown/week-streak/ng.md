# Weekly Commit Streak Leaderboard @ Nigeria <img src="https://flagsapi.com/NG/flat/24.png">

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
			<b>Other <img src="https://flagsapi.com/NG/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/ng.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../day-streak/ng.md">
				Daily Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `50` followers
-   Have one of `nigeria,lagos,abuja,port harcourt,ibadan,kano,enugu,benin city,kaduna` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `1000` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > 50)
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
        
    </tbody>
</table>
