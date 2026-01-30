# Daily Commit Streak Leaderboard @ India <img src="https://flagsapi.com/IN/flat/24.png">

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
			<b>Other <img src="https://flagsapi.com/IN/flat/16.png"> leaderboards</b>
		</td>
		<td>
			<a href="../contribution-count/in.md">
				Top Contributor
			</a>
		</td>
		<td>
			<a href="../week-streak/in.md">
				Weekly Commit Streak
			</a>
		</td>
	</tr>
</table>

<details>
<summary>How is this leaderboard computed?</summary>

To be in this leaderboard, you need:

-   At least `200` followers
-   Have one of `india,bharat,delhi,mumbai,bangalore,kolkata,chennai,hyderabad,pune,jaipur,ahmedabad,kochi` in your profile location. [Ask to add a city name if you think it's missing.](https://github.com/7PH/github-top-users/issues/new).
-   Be part of the first `200` users based the ranking criteria

Here is the pseudocode generating this leaderboard:

```js
github
    .users
    .filter(user => user.followerCount > 200)
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
        <tr><td>🥇</td><td><a href="https://github.com/gopinav">
        <img src="https://avatars.githubusercontent.com/u/13146172?s=72&u=38754f4894c755bda75885d2a273d6c7e87b4e55&v=4" height="12" />
        <b>gopinav</b>
    </a></td><td>Builder.io</td><td>India</td><td>15.67K</td><td>6</td></tr><tr><td>🥈</td><td><a href="https://github.com/hiteshchoudhary">
        <img src="https://avatars.githubusercontent.com/u/11613311?s=72&u=eb5b71a918effbaf14260160d8d7dee7caaffe1f&v=4" height="12" />
        <b>hiteshchoudhary</b>
    </a></td><td>-</td><td>India</td><td>54.39K</td><td>2</td></tr><tr><td>🥉</td><td><a href="https://github.com/anuraghazra">
        <img src="https://avatars.githubusercontent.com/u/35374649?s=72&u=3125539259bebd2d8af05462a37f22a4fba763e4&v=4" height="12" />
        <b>anuraghazra</b>
    </a></td><td>@razorpay</td><td>India, West Bengal</td><td>14.59K</td><td>2</td></tr><tr><td>4</td><td><a href="https://github.com/iam-veeramalla">
        <img src="https://avatars.githubusercontent.com/u/43399466?s=72&u=91e78018b666dba78f75f296340e3251942158c9&v=4" height="12" />
        <b>iam-veeramalla</b>
    </a></td><td>Red Hat</td><td>Hyderabad, India</td><td>28.88K</td><td>1</td></tr>
    </tbody>
</table>
