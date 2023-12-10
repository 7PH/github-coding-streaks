# Daily Commit Streak Leaderboard @ {{countryName}} <img src="https://flagsapi.com/{{countryCodeUppercase}}/flat/24.png">

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
			<b>Other <img src="https://flagsapi.com/{{countryCodeUppercase}}/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/{{countryCode}}.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../week-streak/{{countryCode}}.md">
				Weekly Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `{{minFollowerCount}}` followers
-   Have one of `{{countryMatch}}` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `{{userCount}}` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > {{minFollowerCount}})
    .sortBy(user => getCurrentDailyCommitStreak(user), 'desc')
    .take({{userCount}})
```

</details>

---

{{table}}
