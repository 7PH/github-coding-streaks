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
        <tr><td>🥇</td><td><a href="https://github.com/seanpm2001">
        <img src="https://avatars.githubusercontent.com/u/65933340?s=72&u=629d16e8108b55c194e5afddb8995d9156ef1eeb&v=4" height="12" />
        <b>seanpm2001</b>
    </a></td><td>Self-employed; looking for tips</td><td>Walla Walla Washington, USA, Earth, Milky way, <Universe></td><td>2.08K</td><td>2.11K</td></tr><tr><td>🥈</td><td><a href="https://github.com/eddelbuettel">
        <img src="https://avatars.githubusercontent.com/u/673121?s=72&u=0487fed564e4d06bc4d4800d38ae649a9a632951&v=4" height="12" />
        <b>eddelbuettel</b>
    </a></td><td>-</td><td>Chicago, IL, USA</td><td>1.93K</td><td>1.71K</td></tr><tr><td>🥉</td><td><a href="https://github.com/vladmandic">
        <img src="https://avatars.githubusercontent.com/u/57876960?s=72&u=5d0c2c03561ff068d88bf3633a827540e23cadc1&v=4" height="12" />
        <b>vladmandic</b>
    </a></td><td>-</td><td>Miami, Florida</td><td>1.11K</td><td>1.14K</td></tr><tr><td>4</td><td><a href="https://github.com/ahmadawais">
        <img src="https://avatars.githubusercontent.com/u/960133?s=72&u=1a1a9863b2dd635be4ddfae7692060b0963c5c4b&v=4" height="12" />
        <b>ahmadawais</b>
    </a></td><td>Founder & CEO @CommandCodeAI, VP DevTools @Google gDAB GDE </td><td>San Francisco Bay Area</td><td>6.57K</td><td>1.11K</td></tr><tr><td>5</td><td><a href="https://github.com/timkpaine">
        <img src="https://avatars.githubusercontent.com/u/3105306?s=72&u=19fd91c674b181e9e1b8998b08f4131af57b604f&v=4" height="12" />
        <b>timkpaine</b>
    </a></td><td>@Point72</td><td>New York, NY, USA</td><td>1.12K</td><td>970</td></tr><tr><td>6</td><td><a href="https://github.com/RamiKrispin">
        <img src="https://avatars.githubusercontent.com/u/12760966?s=72&u=654c914d9df714991b890ea38ac4fce0e55c0d8f&v=4" height="12" />
        <b>RamiKrispin</b>
    </a></td><td>-</td><td>Cupertino, California, US</td><td>2.57K</td><td>752</td></tr><tr><td>7</td><td><a href="https://github.com/jgamblin">
        <img src="https://avatars.githubusercontent.com/u/8428124?s=72&u=a3f223010423324b7f1f734f84f0000ef798b201&v=4" height="12" />
        <b>jgamblin</b>
    </a></td><td>-</td><td>United States</td><td>1.98K</td><td>619</td></tr><tr><td>8</td><td><a href="https://github.com/kbroman">
        <img src="https://avatars.githubusercontent.com/u/53972?s=72&u=3f87e8b72f35bde7342672a1c0a1231e38c1c662&v=4" height="12" />
        <b>kbroman</b>
    </a></td><td>University of Wisconsin-Madison</td><td>Madison, Wisconsin, USA</td><td>1.47K</td><td>532</td></tr><tr><td>9</td><td><a href="https://github.com/bdraco">
        <img src="https://avatars.githubusercontent.com/u/663432?s=72&v=4" height="12" />
        <b>bdraco</b>
    </a></td><td>-</td><td>Houston, TX</td><td>1.89K</td><td>423</td></tr><tr><td>10</td><td><a href="https://github.com/santosomar">
        <img src="https://avatars.githubusercontent.com/u/1690898?s=72&u=3580435cb2e123b261ff7cd3d19192bb194804b7&v=4" height="12" />
        <b>santosomar</b>
    </a></td><td>-</td><td>United States</td><td>2.17K</td><td>323</td></tr><tr><td>11</td><td><a href="https://github.com/zhaoolee">
        <img src="https://avatars.githubusercontent.com/u/15868458?s=72&u=aa3a39fdb2c4a16abeb527f343ab7909d10e1b4e&v=4" height="12" />
        <b>zhaoolee</b>
    </a></td><td>kingsware</td><td>New York</td><td>1.87K</td><td>313</td></tr><tr><td>12</td><td><a href="https://github.com/hadley">
        <img src="https://avatars.githubusercontent.com/u/4196?s=72&u=381fe2cce7ecc86993a19168bcf6638e9805326a&v=4" height="12" />
        <b>hadley</b>
    </a></td><td>@posit-pbc</td><td>Houston, TX</td><td>26.54K</td><td>294</td></tr><tr><td>13</td><td><a href="https://github.com/anvaka">
        <img src="https://avatars.githubusercontent.com/u/225407?s=72&u=ae5ab58bd50a325fdd0b8fa419f42f983a3f04ba&v=4" height="12" />
        <b>anvaka</b>
    </a></td><td>-</td><td>Seattle </td><td>5.5K</td><td>293</td></tr><tr><td>14</td><td><a href="https://github.com/mitchellh">
        <img src="https://avatars.githubusercontent.com/u/1299?s=72&u=cc88a733b0c95bdfd323ec661c0da4c6768c4e4b&v=4" height="12" />
        <b>mitchellh</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>20.65K</td><td>258</td></tr><tr><td>15</td><td><a href="https://github.com/aarondfrancis">
        <img src="https://avatars.githubusercontent.com/u/881931?s=72&u=9016ef90a1002f72f681fc9ee282148dc9b6a47d&v=4" height="12" />
        <b>aarondfrancis</b>
    </a></td><td>Try Hard Studios</td><td>Dallas, TX</td><td>1.49K</td><td>243</td></tr><tr><td>16</td><td><a href="https://github.com/tananaev">
        <img src="https://avatars.githubusercontent.com/u/1161863?s=72&v=4" height="12" />
        <b>tananaev</b>
    </a></td><td>@openai & @traccar </td><td>San Francisco Bay Area</td><td>1.76K</td><td>175</td></tr><tr><td>17</td><td><a href="https://github.com/borismus">
        <img src="https://avatars.githubusercontent.com/u/277632?s=72&u=bb2c5b541f3ee3c3ef0d5630250b9f1bf6d293a5&v=4" height="12" />
        <b>borismus</b>
    </a></td><td>-</td><td>Seattle</td><td>1.21K</td><td>169</td></tr><tr><td>18</td><td><a href="https://github.com/bcherny">
        <img src="https://avatars.githubusercontent.com/u/1761758?s=72&u=a7b1ed42ce41cc6761d0f6a67c8ef9a029a2fa8f&v=4" height="12" />
        <b>bcherny</b>
    </a></td><td>@Anthropic</td><td>San Francisco</td><td>4.84K</td><td>149</td></tr><tr><td>19</td><td><a href="https://github.com/basnijholt">
        <img src="https://avatars.githubusercontent.com/u/6897215?s=72&u=a7d69832481ceabbd1a99ab22413a7141d2b1183&v=4" height="12" />
        <b>basnijholt</b>
    </a></td><td>@IonQ</td><td>Seattle, USA</td><td>1.32K</td><td>134</td></tr><tr><td>20</td><td><a href="https://github.com/glenn-jocher">
        <img src="https://avatars.githubusercontent.com/u/26833433?s=72&u=950e3c64c42597a4927c49c61f5a54f0df430770&v=4" height="12" />
        <b>glenn-jocher</b>
    </a></td><td>@ultralytics</td><td>United States</td><td>3.97K</td><td>127</td></tr><tr><td>21</td><td><a href="https://github.com/rafalab">
        <img src="https://avatars.githubusercontent.com/u/5330134?s=72&u=18caf428f80d7b11c5e052d485303583ac16a530&v=4" height="12" />
        <b>rafalab</b>
    </a></td><td>Harvard and Dana-Farber Cancer Institute</td><td>Boston, MA</td><td>1.63K</td><td>112</td></tr><tr><td>22</td><td><a href="https://github.com/harperreed">
        <img src="https://avatars.githubusercontent.com/u/18504?s=72&v=4" height="12" />
        <b>harperreed</b>
    </a></td><td>Harper Rules, LLC</td><td>Chicago, Il</td><td>1.08K</td><td>106</td></tr><tr><td>23</td><td><a href="https://github.com/swannodette">
        <img src="https://avatars.githubusercontent.com/u/13516?s=72&u=d4b32c4b3c703a42094564713d162a8ddd05fc22&v=4" height="12" />
        <b>swannodette</b>
    </a></td><td>-</td><td>New York</td><td>4.36K</td><td>94</td></tr><tr><td>24</td><td><a href="https://github.com/searls">
        <img src="https://avatars.githubusercontent.com/u/79303?s=72&u=99e3bc7887879138e88a4538ca623b0a3d7538cb&v=4" height="12" />
        <b>searls</b>
    </a></td><td>@searlsco</td><td>Orlando, FL, USA</td><td>1.08K</td><td>84</td></tr><tr><td>25</td><td><a href="https://github.com/josh">
        <img src="https://avatars.githubusercontent.com/u/137?s=72&u=b8ae2314a4931c4a82a27d4fbbfffdc049779e89&v=4" height="12" />
        <b>josh</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>2.57K</td><td>83</td></tr><tr><td>26</td><td><a href="https://github.com/idimetrix">
        <img src="https://avatars.githubusercontent.com/u/6536323?s=72&u=8bdc3b5ad5ad63a6956ba6890107e8efc6c2d67c&v=4" height="12" />
        <b>idimetrix</b>
    </a></td><td>@elevanceit</td><td>New York</td><td>15.22K</td><td>78</td></tr><tr><td>27</td><td><a href="https://github.com/vinniefalco">
        <img src="https://avatars.githubusercontent.com/u/1503976?s=72&u=4adad34ba11380e4b13abf141e8fe91ddd6aa427&v=4" height="12" />
        <b>vinniefalco</b>
    </a></td><td>https://cpp.al</td><td>Los Angeles, CA.</td><td>1.12K</td><td>78</td></tr><tr><td>28</td><td><a href="https://github.com/jlevy">
        <img src="https://avatars.githubusercontent.com/u/2058167?s=72&u=49d8a5df94e131b1b699162ab7a97119102742ed&v=4" height="12" />
        <b>jlevy</b>
    </a></td><td>-</td><td>San Francisco</td><td>4.5K</td><td>70</td></tr><tr><td>29</td><td><a href="https://github.com/EvanBacon">
        <img src="https://avatars.githubusercontent.com/u/9664363?s=72&u=46ba6d5fbd29729df2950b845c9ca2cd085a1c2b&v=4" height="12" />
        <b>EvanBacon</b>
    </a></td><td>@expo </td><td>San Francisco</td><td>5.91K</td><td>65</td></tr><tr><td>30</td><td><a href="https://github.com/Dhravya">
        <img src="https://avatars.githubusercontent.com/u/63950637?s=72&u=a1d804b135132cac15090fd93440a02ab5ce29b9&v=4" height="12" />
        <b>Dhravya</b>
    </a></td><td>@supermemoryai </td><td>San Francisco</td><td>3.4K</td><td>65</td></tr><tr><td>31</td><td><a href="https://github.com/tommoor">
        <img src="https://avatars.githubusercontent.com/u/380914?s=72&u=2e13c3aef0960f3a857e82136d8110af27b2d896&v=4" height="12" />
        <b>tommoor</b>
    </a></td><td>@outline, @linear</td><td>Brooklyn, New York</td><td>1.37K</td><td>65</td></tr><tr><td>32</td><td><a href="https://github.com/TooTallNate">
        <img src="https://avatars.githubusercontent.com/u/71256?s=72&u=d6a9598cd7963ae290923ab12afeff947f542f80&v=4" height="12" />
        <b>TooTallNate</b>
    </a></td><td>@vercel </td><td>San Francisco, CA</td><td>6.45K</td><td>64</td></tr><tr><td>33</td><td><a href="https://github.com/kentcdodds">
        <img src="https://avatars.githubusercontent.com/u/1500684?s=72&u=f35a28c4eead6ba9636a8ff5858f6977d8593c43&v=4" height="12" />
        <b>kentcdodds</b>
    </a></td><td>@epicweb-dev </td><td>Salt Lake City, Utah, USA</td><td>34.61K</td><td>63</td></tr><tr><td>34</td><td><a href="https://github.com/abhshkdz">
        <img src="https://avatars.githubusercontent.com/u/1156489?s=72&u=515c5c6dd12a34a76aeac615e078363794d61f2a&v=4" height="12" />
        <b>abhshkdz</b>
    </a></td><td>Yutori</td><td>San Francisco</td><td>1.86K</td><td>59</td></tr><tr><td>35</td><td><a href="https://github.com/Jarred-Sumner">
        <img src="https://avatars.githubusercontent.com/u/709451?s=72&u=c72c2dd8b0368dc63bf2278e0f4f2ff290449cfb&v=4" height="12" />
        <b>Jarred-Sumner</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>8K</td><td>56</td></tr><tr><td>36</td><td><a href="https://github.com/wshobson">
        <img src="https://avatars.githubusercontent.com/u/553618?s=72&u=260f177b1d8737e10e1e7a07a188852479771ede&v=4" height="12" />
        <b>wshobson</b>
    </a></td><td>UDT | Major 7 Apps</td><td>NC, USA</td><td>1.56K</td><td>56</td></tr><tr><td>37</td><td><a href="https://github.com/ardan-bkennedy">
        <img src="https://avatars.githubusercontent.com/u/2280005?s=72&u=931a4e4bd1959fa84b370a840b804196235da451&v=4" height="12" />
        <b>ardan-bkennedy</b>
    </a></td><td>Ardan Labs</td><td>Miami, FL</td><td>1.15K</td><td>56</td></tr><tr><td>38</td><td><a href="https://github.com/mimoo">
        <img src="https://avatars.githubusercontent.com/u/1316043?s=72&u=c921fcf31b84b66f869df0071e17c737eddb3bf3&v=4" height="12" />
        <b>mimoo</b>
    </a></td><td>@zksecurity</td><td>New York</td><td>1.22K</td><td>54</td></tr><tr><td>39</td><td><a href="https://github.com/indirect">
        <img src="https://avatars.githubusercontent.com/u/78?s=72&u=173b3b2341359a50b8bad0123029d8cb76d13eca&v=4" height="12" />
        <b>indirect</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.19K</td><td>50</td></tr><tr><td>40</td><td><a href="https://github.com/mikecao">
        <img src="https://avatars.githubusercontent.com/u/477975?s=72&v=4" height="12" />
        <b>mikecao</b>
    </a></td><td>@umami-software </td><td>San Francisco, CA</td><td>1.1K</td><td>50</td></tr><tr><td>41</td><td><a href="https://github.com/jverkoey">
        <img src="https://avatars.githubusercontent.com/u/45670?s=72&u=927810ea447867116b0968537626045dd3175b94&v=4" height="12" />
        <b>jverkoey</b>
    </a></td><td>Clutch Engineering</td><td>New York</td><td>1.64K</td><td>49</td></tr><tr><td>42</td><td><a href="https://github.com/WillKoehrsen">
        <img src="https://avatars.githubusercontent.com/u/17484616?s=72&u=05a7c27224789b6fa84d24864e5d852b24f7f125&v=4" height="12" />
        <b>WillKoehrsen</b>
    </a></td><td>@gridstatus </td><td>Chicago, IL</td><td>4.65K</td><td>43</td></tr><tr><td>43</td><td><a href="https://github.com/stephentoub">
        <img src="https://avatars.githubusercontent.com/u/2642209?s=72&u=1f14e8d00a8c59e57c9d193baab69bf0f52a95ec&v=4" height="12" />
        <b>stephentoub</b>
    </a></td><td>Microsoft</td><td>Boston, MA</td><td>4.47K</td><td>42</td></tr><tr><td>44</td><td><a href="https://github.com/khuyentran1401">
        <img src="https://avatars.githubusercontent.com/u/49108771?s=72&u=0c9388accdb6344a9e0ef2cf28c8ee53ef270ae7&v=4" height="12" />
        <b>khuyentran1401</b>
    </a></td><td>-</td><td>United States</td><td>3.76K</td><td>42</td></tr><tr><td>45</td><td><a href="https://github.com/brianlovin">
        <img src="https://avatars.githubusercontent.com/u/1923260?s=72&u=36aacd5307a88dfb8e42d014b4107d9c7e3411e1&v=4" height="12" />
        <b>brianlovin</b>
    </a></td><td>@makenotion</td><td>San Francisco</td><td>3.31K</td><td>42</td></tr><tr><td>46</td><td><a href="https://github.com/umputun">
        <img src="https://avatars.githubusercontent.com/u/535880?s=72&v=4" height="12" />
        <b>umputun</b>
    </a></td><td>-</td><td>USA</td><td>2.57K</td><td>42</td></tr><tr><td>47</td><td><a href="https://github.com/jwiegley">
        <img src="https://avatars.githubusercontent.com/u/8460?s=72&u=83d9c6bfa0b8453d616e7c7701cba6ef2d53df52&v=4" height="12" />
        <b>jwiegley</b>
    </a></td><td>@kadena-io </td><td>California, USA</td><td>2.69K</td><td>38</td></tr><tr><td>48</td><td><a href="https://github.com/stevekinney">
        <img src="https://avatars.githubusercontent.com/u/251000?s=72&u=744cf65c3cf52e36c61a990fcc8ca1e9db625a80&v=4" height="12" />
        <b>stevekinney</b>
    </a></td><td>-</td><td>Denver, Colorado, USA</td><td>3.42K</td><td>36</td></tr><tr><td>49</td><td><a href="https://github.com/liyin2015">
        <img src="https://avatars.githubusercontent.com/u/14322677?s=72&u=988ef4836ed1a63e06c8159daa1adc21f136983c&v=4" height="12" />
        <b>liyin2015</b>
    </a></td><td>SylphAI</td><td>San Francisco, California</td><td>1.17K</td><td>36</td></tr><tr><td>50</td><td><a href="https://github.com/ekzhang">
        <img src="https://avatars.githubusercontent.com/u/7550632?s=72&u=14bb98217af15123593097a2406e379258c89484&v=4" height="12" />
        <b>ekzhang</b>
    </a></td><td>@thinking-machines-lab</td><td>New York, NY</td><td>3.04K</td><td>35</td></tr><tr><td>51</td><td><a href="https://github.com/jlowin">
        <img src="https://avatars.githubusercontent.com/u/153965?s=72&u=1eeda2a3053b2cfb4d2cc4bb206438612c4eef04&v=4" height="12" />
        <b>jlowin</b>
    </a></td><td>@PrefectHQ </td><td>Washington, DC</td><td>2.19K</td><td>35</td></tr><tr><td>52</td><td><a href="https://github.com/c4pt0r">
        <img src="https://avatars.githubusercontent.com/u/773853?s=72&v=4" height="12" />
        <b>c4pt0r</b>
    </a></td><td>PingCAP</td><td>San Francisco Bay Area</td><td>1.67K</td><td>31</td></tr><tr><td>53</td><td><a href="https://github.com/haydenbleasel">
        <img src="https://avatars.githubusercontent.com/u/4142719?s=72&u=2271ee0201b40d7ea8d939b3e72090797a461a0f&v=4" height="12" />
        <b>haydenbleasel</b>
    </a></td><td>@vercel</td><td>San Francisco, CA</td><td>1.26K</td><td>31</td></tr><tr><td>54</td><td><a href="https://github.com/swyxio">
        <img src="https://avatars.githubusercontent.com/u/6764957?s=72&u=97ad815028595b73b06ee4b0510e66bbe391228d&v=4" height="12" />
        <b>swyxio</b>
    </a></td><td>smol.ai</td><td>San Francisco</td><td>7.27K</td><td>29</td></tr><tr><td>55</td><td><a href="https://github.com/kdn251">
        <img src="https://avatars.githubusercontent.com/u/16903644?s=72&u=7ae585948bc92fb0986bc73b7d38660718aefff1&v=4" height="12" />
        <b>kdn251</b>
    </a></td><td>Google</td><td>New York, New York</td><td>4.65K</td><td>29</td></tr><tr><td>56</td><td><a href="https://github.com/zardus">
        <img src="https://avatars.githubusercontent.com/u/3453847?s=72&u=4113aabc2fe96038acf6f578c11545f8cc3e9fb0&v=4" height="12" />
        <b>zardus</b>
    </a></td><td>-</td><td>Tempe, AZ, USA</td><td>2.23K</td><td>29</td></tr><tr><td>57</td><td><a href="https://github.com/woodruffw">
        <img src="https://avatars.githubusercontent.com/u/3059210?s=72&u=0130215a165dbf5cbb0fc1f794a2d1ace0a91e23&v=4" height="12" />
        <b>woodruffw</b>
    </a></td><td>@astral-sh</td><td>New York, NY</td><td>1.12K</td><td>29</td></tr><tr><td>58</td><td><a href="https://github.com/holman">
        <img src="https://avatars.githubusercontent.com/u/2723?s=72&u=af4e36d0aca5cf5a6a1f73948f7873a53735ab81&v=4" height="12" />
        <b>holman</b>
    </a></td><td>@americanoutlaws </td><td>San Francisco</td><td>6.5K</td><td>28</td></tr><tr><td>59</td><td><a href="https://github.com/DavidWells">
        <img src="https://avatars.githubusercontent.com/u/532272?s=72&u=e7b96b32a71ed740a741cb666fbe8c3f7fd65c5c&v=4" height="12" />
        <b>DavidWells</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.75K</td><td>28</td></tr><tr><td>60</td><td><a href="https://github.com/jamtur01">
        <img src="https://avatars.githubusercontent.com/u/4365?s=72&u=a3c633a6c5302d5bdd448213321350f4bf566eeb&v=4" height="12" />
        <b>jamtur01</b>
    </a></td><td>-</td><td>Brooklyn, New York</td><td>1.15K</td><td>28</td></tr><tr><td>61</td><td><a href="https://github.com/ankane">
        <img src="https://avatars.githubusercontent.com/u/220358?s=72&u=ba13f3240d7992dc4124a33a4fc65bf4924e5375&v=4" height="12" />
        <b>ankane</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>6.82K</td><td>27</td></tr><tr><td>62</td><td><a href="https://github.com/BinaryMuse">
        <img src="https://avatars.githubusercontent.com/u/189606?s=72&u=8639fa9115ecc6030419dffcd5ed61e057800ba9&v=4" height="12" />
        <b>BinaryMuse</b>
    </a></td><td>Atuin</td><td>San Francisco, CA</td><td>2.1K</td><td>27</td></tr><tr><td>63</td><td><a href="https://github.com/topfunky">
        <img src="https://avatars.githubusercontent.com/u/26?s=72&u=fd35cfe4e635388710c9e186ac206986db798656&v=4" height="12" />
        <b>topfunky</b>
    </a></td><td>@datadog</td><td>Seattle, USA</td><td>1.42K</td><td>27</td></tr><tr><td>64</td><td><a href="https://github.com/Trinkle23897">
        <img src="https://avatars.githubusercontent.com/u/8189182?s=72&v=4" height="12" />
        <b>Trinkle23897</b>
    </a></td><td>@openai </td><td>San Francisco</td><td>6.6K</td><td>26</td></tr><tr><td>65</td><td><a href="https://github.com/JimLiu">
        <img src="https://avatars.githubusercontent.com/u/648674?s=72&v=4" height="12" />
        <b>JimLiu</b>
    </a></td><td>-</td><td>Chicago, IL</td><td>2.39K</td><td>25</td></tr><tr><td>66</td><td><a href="https://github.com/affaan-m">
        <img src="https://avatars.githubusercontent.com/u/124439313?s=72&u=9a9e442dbb6a4a4b9ce24c7548bf9071fef54651&v=4" height="12" />
        <b>affaan-m</b>
    </a></td><td>Itô</td><td>San Francisco, CA / Bellevue, WA</td><td>1.59K</td><td>25</td></tr><tr><td>67</td><td><a href="https://github.com/schollz">
        <img src="https://avatars.githubusercontent.com/u/6550035?s=72&u=991583b3f086b7f4cef5d2b4629e1440fd73f00b&v=4" height="12" />
        <b>schollz</b>
    </a></td><td>-</td><td>Seattle, WA</td><td>3.54K</td><td>24</td></tr><tr><td>68</td><td><a href="https://github.com/lalalune">
        <img src="https://avatars.githubusercontent.com/u/18633264?s=72&u=e2e906c3712c2506ebfa98df01c2cfdc50050b30&v=4" height="12" />
        <b>lalalune</b>
    </a></td><td>Eliza Labs</td><td>San Francisco</td><td>1.86K</td><td>24</td></tr><tr><td>69</td><td><a href="https://github.com/tenderlove">
        <img src="https://avatars.githubusercontent.com/u/3124?s=72&u=6ece6a5a8b8ea32c5fa94c325d151bc01d1e44e8&v=4" height="12" />
        <b>tenderlove</b>
    </a></td><td>@Shopify</td><td>Seattle</td><td>9.6K</td><td>23</td></tr><tr><td>70</td><td><a href="https://github.com/CharlieGreenman">
        <img src="https://avatars.githubusercontent.com/u/8540141?s=72&u=e34e2ea06418cd9e5ec871b04e30dd59298df496&v=4" height="12" />
        <b>CharlieGreenman</b>
    </a></td><td>-</td><td>New York</td><td>1.88K</td><td>23</td></tr><tr><td>71</td><td><a href="https://github.com/vczh">
        <img src="https://avatars.githubusercontent.com/u/773569?s=72&u=6e9b51d46dc1c12778b42b944d1ccaa3cda5446f&v=4" height="12" />
        <b>vczh</b>
    </a></td><td>-</td><td>Seattle, WA, USA</td><td>17.53K</td><td>22</td></tr><tr><td>72</td><td><a href="https://github.com/kevmoo">
        <img src="https://avatars.githubusercontent.com/u/17034?s=72&v=4" height="12" />
        <b>kevmoo</b>
    </a></td><td>@dart-lang @flutter @google</td><td>Seattle, WA, USA</td><td>2.37K</td><td>22</td></tr><tr><td>73</td><td><a href="https://github.com/TimDettmers">
        <img src="https://avatars.githubusercontent.com/u/5260050?s=72&v=4" height="12" />
        <b>TimDettmers</b>
    </a></td><td>University of Washington</td><td>Seattle, USA</td><td>1.38K</td><td>22</td></tr><tr><td>74</td><td><a href="https://github.com/jacoblee93">
        <img src="https://avatars.githubusercontent.com/u/6952323?s=72&u=d785f9406c5a78ebd75922567b2693fb643c3bb0&v=4" height="12" />
        <b>jacoblee93</b>
    </a></td><td>@langchain-ai</td><td>San Francisco</td><td>1.34K</td><td>22</td></tr><tr><td>75</td><td><a href="https://github.com/aslushnikov">
        <img src="https://avatars.githubusercontent.com/u/746130?s=72&u=bc83ba749f90def9710c03f1502595f1c3af49a9&v=4" height="12" />
        <b>aslushnikov</b>
    </a></td><td>@degulabs </td><td>San Francisco, CA</td><td>2.07K</td><td>21</td></tr><tr><td>76</td><td><a href="https://github.com/jnunemaker">
        <img src="https://avatars.githubusercontent.com/u/235?s=72&u=7b204d858092947a7a1bc8b2955d210c999d164e&v=4" height="12" />
        <b>jnunemaker</b>
    </a></td><td>@verygoodsoftwarellc, @fewerandfaster and @boxoutsports </td><td>US</td><td>2.03K</td><td>21</td></tr><tr><td>77</td><td><a href="https://github.com/jamesward">
        <img src="https://avatars.githubusercontent.com/u/65043?s=72&v=4" height="12" />
        <b>jamesward</b>
    </a></td><td>@aws</td><td>Crested Butte, CO, USA</td><td>1.87K</td><td>21</td></tr><tr><td>78</td><td><a href="https://github.com/ericniebler">
        <img src="https://avatars.githubusercontent.com/u/225757?s=72&v=4" height="12" />
        <b>ericniebler</b>
    </a></td><td>@NVIDIA</td><td>Seattle, WA</td><td>1.79K</td><td>21</td></tr><tr><td>79</td><td><a href="https://github.com/refcell">
        <img src="https://avatars.githubusercontent.com/u/21288394?s=72&u=aa732a4cd2aa9dfe3cc16aeb019032792b933831&v=4" height="12" />
        <b>refcell</b>
    </a></td><td>@base</td><td>United States</td><td>1.24K</td><td>21</td></tr><tr><td>80</td><td><a href="https://github.com/josephmisiti">
        <img src="https://avatars.githubusercontent.com/u/246302?s=72&u=9242c80bcb25acbc66683faf0d5d9fb92674689b&v=4" height="12" />
        <b>josephmisiti</b>
    </a></td><td>Math & Pencil </td><td>Miami, FL</td><td>4.42K</td><td>20</td></tr><tr><td>81</td><td><a href="https://github.com/apoelstra">
        <img src="https://avatars.githubusercontent.com/u/1351933?s=72&u=fb54e413f387c1a6d1bff29ca1209a1922e7b17d&v=4" height="12" />
        <b>apoelstra</b>
    </a></td><td>@Blockstream </td><td>Austin, TX, USA</td><td>1.19K</td><td>20</td></tr><tr><td>82</td><td><a href="https://github.com/ZacSweers">
        <img src="https://avatars.githubusercontent.com/u/1361086?s=72&u=f718c2d2774c7e8b85b5cf1c12df4b6aac6c13f4&v=4" height="12" />
        <b>ZacSweers</b>
    </a></td><td>-</td><td>New York</td><td>2.54K</td><td>18</td></tr><tr><td>83</td><td><a href="https://github.com/mytechnotalent">
        <img src="https://avatars.githubusercontent.com/u/7095767?s=72&u=1365991cb5fb57aac63660b8b0ac89ef14b3ba12&v=4" height="12" />
        <b>mytechnotalent</b>
    </a></td><td>-</td><td>Washington, D.C.</td><td>1.54K</td><td>17</td></tr><tr><td>84</td><td><a href="https://github.com/rebornix">
        <img src="https://avatars.githubusercontent.com/u/876920?s=72&v=4" height="12" />
        <b>rebornix</b>
    </a></td><td>Microsoft</td><td>Seattle</td><td>1.35K</td><td>17</td></tr><tr><td>85</td><td><a href="https://github.com/jdx">
        <img src="https://avatars.githubusercontent.com/u/216188?s=72&u=e6ed73b780fca5bd9dea18dfea51ce138e8f6a13&v=4" height="12" />
        <b>jdx</b>
    </a></td><td>@figma</td><td>Dallas, TX</td><td>3.49K</td><td>16</td></tr><tr><td>86</td><td><a href="https://github.com/dcramer">
        <img src="https://avatars.githubusercontent.com/u/23610?s=72&v=4" height="12" />
        <b>dcramer</b>
    </a></td><td>@getsentry</td><td>San Francisco, CA</td><td>3.19K</td><td>16</td></tr><tr><td>87</td><td><a href="https://github.com/felixrieseberg">
        <img src="https://avatars.githubusercontent.com/u/1426799?s=72&u=4f954e789d82f34fdc808de92622fb0e22996032&v=4" height="12" />
        <b>felixrieseberg</b>
    </a></td><td>Anthropic</td><td>San Francisco</td><td>5.36K</td><td>15</td></tr><tr><td>88</td><td><a href="https://github.com/gordicaleksa">
        <img src="https://avatars.githubusercontent.com/u/29271842?s=72&u=6b9f534546b35391ab89ea077ab927a75fa834b9&v=4" height="12" />
        <b>gordicaleksa</b>
    </a></td><td>ex-DeepMind, ex-Microsoft</td><td>San Francisco</td><td>4.39K</td><td>15</td></tr><tr><td>89</td><td><a href="https://github.com/kangax">
        <img src="https://avatars.githubusercontent.com/u/383?s=72&u=b13e9504cc41bc1c4441f4c49e1b67c10fa86ffb&v=4" height="12" />
        <b>kangax</b>
    </a></td><td>Facebook → WeWork → LinkedIn</td><td>New York</td><td>3.39K</td><td>15</td></tr><tr><td>90</td><td><a href="https://github.com/wu-sheng">
        <img src="https://avatars.githubusercontent.com/u/5441976?s=72&u=81295cafac69af5a655b94b73e839f10e6e1657b&v=4" height="12" />
        <b>wu-sheng</b>
    </a></td><td>@apache  @tetrateio </td><td>Beijing & HK (China), SF(US)</td><td>3.35K</td><td>15</td></tr><tr><td>91</td><td><a href="https://github.com/rogerwang">
        <img src="https://avatars.githubusercontent.com/u/165401?s=72&v=4" height="12" />
        <b>rogerwang</b>
    </a></td><td>-</td><td>United States</td><td>3.25K</td><td>15</td></tr><tr><td>92</td><td><a href="https://github.com/leereilly">
        <img src="https://avatars.githubusercontent.com/u/121322?s=72&u=dace6bc679e551a0876fb357304e337aa5539dc0&v=4" height="12" />
        <b>leereilly</b>
    </a></td><td>GitHub</td><td>San Francisco, CA</td><td>2.35K</td><td>15</td></tr><tr><td>93</td><td><a href="https://github.com/maryrosecook">
        <img src="https://avatars.githubusercontent.com/u/2716?s=72&u=f7f4465635c06cb589291e6f694a4d44178f88f7&v=4" height="12" />
        <b>maryrosecook</b>
    </a></td><td>Notion</td><td>San Francisco</td><td>2.17K</td><td>15</td></tr><tr><td>94</td><td><a href="https://github.com/abi">
        <img src="https://avatars.githubusercontent.com/u/23818?s=72&u=20a6bb441ca25e49b4d8bdb602c171c5e1a065bf&v=4" height="12" />
        <b>abi</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.91K</td><td>15</td></tr><tr><td>95</td><td><a href="https://github.com/fffaraz">
        <img src="https://avatars.githubusercontent.com/u/895678?s=72&u=c4d7f1d0c7893275b2f777f47a2ebad2dc20d1a0&v=4" height="12" />
        <b>fffaraz</b>
    </a></td><td>Software Engineer</td><td>San Francisco Bay Area</td><td>1.84K</td><td>15</td></tr><tr><td>96</td><td><a href="https://github.com/gpeal">
        <img src="https://avatars.githubusercontent.com/u/1307745?s=72&u=28c696bad7ad38b2b800efc0c3fea347b22147cf&v=4" height="12" />
        <b>gpeal</b>
    </a></td><td>OpenAI</td><td>San Francisco, CA</td><td>1.13K</td><td>15</td></tr><tr><td>97</td><td><a href="https://github.com/felangel">
        <img src="https://avatars.githubusercontent.com/u/8855632?s=72&u=4a3d7c7d18ec5ead905d12f9ba8401f1de495d8b&v=4" height="12" />
        <b>felangel</b>
    </a></td><td>-</td><td>Chicago</td><td>9.18K</td><td>14</td></tr><tr><td>98</td><td><a href="https://github.com/migueldeicaza">
        <img src="https://avatars.githubusercontent.com/u/36863?s=72&u=dc9e3a0b2967a62ce34b7b503ee33b0adcc2bd3b&v=4" height="12" />
        <b>migueldeicaza</b>
    </a></td><td>Xibbon</td><td>Boston, MA.</td><td>5.12K</td><td>14</td></tr><tr><td>99</td><td><a href="https://github.com/csev">
        <img src="https://avatars.githubusercontent.com/u/1197222?s=72&u=d6dc85c064736ab851c6d9e3318dcdd1be00fb2c&v=4" height="12" />
        <b>csev</b>
    </a></td><td>University of Michigan </td><td>Ann Arbor, MI USA</td><td>3.59K</td><td>14</td></tr><tr><td>100</td><td><a href="https://github.com/nedbat">
        <img src="https://avatars.githubusercontent.com/u/23789?s=72&u=76b163dcfe4c4f1cdcea32b9f97be0ce037c5e4c&v=4" height="12" />
        <b>nedbat</b>
    </a></td><td>-</td><td>Boston</td><td>2.42K</td><td>14</td></tr><tr><td>101</td><td><a href="https://github.com/alesanchezr">
        <img src="https://avatars.githubusercontent.com/u/426452?s=72&v=4" height="12" />
        <b>alesanchezr</b>
    </a></td><td>@learnpack and 4Geeks.com</td><td>Miami, Florida.</td><td>2.06K</td><td>14</td></tr><tr><td>102</td><td><a href="https://github.com/Swizec">
        <img src="https://avatars.githubusercontent.com/u/56883?s=72&v=4" height="12" />
        <b>Swizec</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.96K</td><td>14</td></tr><tr><td>103</td><td><a href="https://github.com/gr2m">
        <img src="https://avatars.githubusercontent.com/u/39992?s=72&u=1ee38610bb2d8a082b3e84db7ecacf78149d061b&v=4" height="12" />
        <b>gr2m</b>
    </a></td><td>@vercel @octokit @octoherd @probot @nock @semantic-release @AllContributors @hearts</td><td>Los Angeles</td><td>1.72K</td><td>14</td></tr><tr><td>104</td><td><a href="https://github.com/jeremyevans">
        <img src="https://avatars.githubusercontent.com/u/3846?s=72&u=42e153d8b1f8e31db8d838217fd6f849ad0f6b1c&v=4" height="12" />
        <b>jeremyevans</b>
    </a></td><td>Ubicloud, Inc.</td><td>Sacramento, California, USA</td><td>1.71K</td><td>14</td></tr><tr><td>105</td><td><a href="https://github.com/apsdehal">
        <img src="https://avatars.githubusercontent.com/u/3616806?s=72&u=b5dda1c519449cb9856edf5846bf8f1de4b533a7&v=4" height="12" />
        <b>apsdehal</b>
    </a></td><td>Something new. Past @ContextualAI @huggingface @facebookresearch </td><td>San Francisco</td><td>1.67K</td><td>14</td></tr><tr><td>106</td><td><a href="https://github.com/RocketGod-git">
        <img src="https://avatars.githubusercontent.com/u/57732082?s=72&u=abb95259509864b1ac6b0ba211a2cb27ee34d835&v=4" height="12" />
        <b>RocketGod-git</b>
    </a></td><td>The Pirates' Plunder</td><td>Los Angeles </td><td>1.65K</td><td>14</td></tr><tr><td>107</td><td><a href="https://github.com/richlander">
        <img src="https://avatars.githubusercontent.com/u/2608468?s=72&u=8344507340302c70f124f9c9b5a48a42afedb04e&v=4" height="12" />
        <b>richlander</b>
    </a></td><td>@dotnet </td><td>Seattle / Toronto</td><td>1.58K</td><td>14</td></tr><tr><td>108</td><td><a href="https://github.com/adamdotdevin">
        <img src="https://avatars.githubusercontent.com/u/2363879?s=72&u=4d65cd9ffa79fc8a53ba10a3a716f985fc8c20a0&v=4" height="12" />
        <b>adamdotdevin</b>
    </a></td><td>-</td><td>United States</td><td>1.51K</td><td>14</td></tr><tr><td>109</td><td><a href="https://github.com/jlopp">
        <img src="https://avatars.githubusercontent.com/u/288011?s=72&u=c101c840881910966d00ec3139340fc973bda7ed&v=4" height="12" />
        <b>jlopp</b>
    </a></td><td>Casa</td><td>United States</td><td>1.3K</td><td>14</td></tr><tr><td>110</td><td><a href="https://github.com/yurishkuro">
        <img src="https://avatars.githubusercontent.com/u/3523016?s=72&u=543cac5c83237325d63bab776c01fe7ecb400d8c&v=4" height="12" />
        <b>yurishkuro</b>
    </a></td><td>-</td><td>New York</td><td>1.22K</td><td>14</td></tr><tr><td>111</td><td><a href="https://github.com/jbranchaud">
        <img src="https://avatars.githubusercontent.com/u/694063?s=72&u=89fa47040e07830c648c881b1efada15d3993c6d&v=4" height="12" />
        <b>jbranchaud</b>
    </a></td><td>Independent, work with me --> visualmode.dev</td><td>Chicago, IL</td><td>1.16K</td><td>14</td></tr><tr><td>112</td><td><a href="https://github.com/TylerLeonhardt">
        <img src="https://avatars.githubusercontent.com/u/2644648?s=72&u=ebccd1380f75cc485b0654c883aa34edbbfc3b27&v=4" height="12" />
        <b>TylerLeonhardt</b>
    </a></td><td>@Microsoft @Visual-Studio-Code</td><td>Seattle, WA</td><td>1.15K</td><td>14</td></tr><tr><td>113</td><td><a href="https://github.com/artem-zinnatullin">
        <img src="https://avatars.githubusercontent.com/u/967132?s=72&v=4" height="12" />
        <b>artem-zinnatullin</b>
    </a></td><td>Launch Fall 2025</td><td>Colorado, United States</td><td>1.09K</td><td>14</td></tr><tr><td>114</td><td><a href="https://github.com/Slava">
        <img src="https://avatars.githubusercontent.com/u/2608446?s=72&u=012be52918624b4a1684288e5cfd2b8816571870&v=4" height="12" />
        <b>Slava</b>
    </a></td><td>-</td><td>USA</td><td>1.06K</td><td>14</td></tr><tr><td>115</td><td><a href="https://github.com/benawad">
        <img src="https://avatars.githubusercontent.com/u/7872329?s=72&u=fe75ed131c7e03df13fedd43c03aed86fdf85dcc&v=4" height="12" />
        <b>benawad</b>
    </a></td><td>Voidpet</td><td>San Francisco, CA</td><td>29.06K</td><td>13</td></tr><tr><td>116</td><td><a href="https://github.com/mwaskom">
        <img src="https://avatars.githubusercontent.com/u/315810?s=72&u=940fea4957256c5443fed77f081db2fbdc91ac32&v=4" height="12" />
        <b>mwaskom</b>
    </a></td><td>@modal-labs</td><td>New York, NY</td><td>3.37K</td><td>13</td></tr><tr><td>117</td><td><a href="https://github.com/vkarpov15">
        <img src="https://avatars.githubusercontent.com/u/1620265?s=72&u=99e980f553265b6c0463884ca842f19d1c0856d6&v=4" height="12" />
        <b>vkarpov15</b>
    </a></td><td>MeanIT Software</td><td>Miami, FL</td><td>1.72K</td><td>13</td></tr><tr><td>118</td><td><a href="https://github.com/gunthercox">
        <img src="https://avatars.githubusercontent.com/u/2030578?s=72&v=4" height="12" />
        <b>gunthercox</b>
    </a></td><td>@Jellyfish-AI</td><td>United States</td><td>1.34K</td><td>13</td></tr><tr><td>119</td><td><a href="https://github.com/JaviSoto">
        <img src="https://avatars.githubusercontent.com/u/666807?s=72&u=deeb52bb786b2345916fdb12c63e161281cdd476&v=4" height="12" />
        <b>JaviSoto</b>
    </a></td><td>-</td><td>San Francisco</td><td>1.12K</td><td>13</td></tr><tr><td>120</td><td><a href="https://github.com/drkostas">
        <img src="https://avatars.githubusercontent.com/u/22260005?s=72&u=61add69a51604dfb468e81b99016200981f18a2a&v=4" height="12" />
        <b>drkostas</b>
    </a></td><td>Amazon</td><td>Seattle</td><td>8.26K</td><td>12</td></tr><tr><td>121</td><td><a href="https://github.com/kdrag0n">
        <img src="https://avatars.githubusercontent.com/u/7930239?s=72&u=ff09f9ad902b038246cd5cdd689c3068870595d5&v=4" height="12" />
        <b>kdrag0n</b>
    </a></td><td>@OrbStack</td><td>United States</td><td>3.27K</td><td>12</td></tr><tr><td>122</td><td><a href="https://github.com/ethanflower1903">
        <img src="https://avatars.githubusercontent.com/u/84658436?s=72&u=fa4791c10bdb6d04372f788f4f6250ab0d27a090&v=4" height="12" />
        <b>ethanflower1903</b>
    </a></td><td>-</td><td>san francisco</td><td>8.06K</td><td>11</td></tr><tr><td>123</td><td><a href="https://github.com/samuelclay">
        <img src="https://avatars.githubusercontent.com/u/44229?s=72&u=f9c72e1a1cc9fae7f49996ae58d885d77bfe71f2&v=4" height="12" />
        <b>samuelclay</b>
    </a></td><td>NewsBlur</td><td>San Francisco + Massachusetts</td><td>1.53K</td><td>11</td></tr><tr><td>124</td><td><a href="https://github.com/amir20">
        <img src="https://avatars.githubusercontent.com/u/260667?s=72&u=e184f47fa8a05899a86e8a4de86fc7a5e90207f1&v=4" height="12" />
        <b>amir20</b>
    </a></td><td>Netflix</td><td>San Francisco, CA</td><td>1.22K</td><td>11</td></tr><tr><td>125</td><td><a href="https://github.com/ianb">
        <img src="https://avatars.githubusercontent.com/u/44390?s=72&v=4" height="12" />
        <b>ianb</b>
    </a></td><td>-</td><td>Minneapolis, Minnesota, USA</td><td>1.07K</td><td>11</td></tr><tr><td>126</td><td><a href="https://github.com/nikomatsakis">
        <img src="https://avatars.githubusercontent.com/u/155238?s=72&u=c09aaff33aa53ea99359e53bef06aa5058ac8d15&v=4" height="12" />
        <b>nikomatsakis</b>
    </a></td><td>-</td><td>Boston, MA</td><td>4.41K</td><td>10</td></tr><tr><td>127</td><td><a href="https://github.com/JoshuaKGoldberg">
        <img src="https://avatars.githubusercontent.com/u/3335181?s=72&u=cf3e1a65097168437b053eb9bb5ce023ba49989e&v=4" height="12" />
        <b>JoshuaKGoldberg</b>
    </a></td><td>@getsentry</td><td>Somerville, MA, USA</td><td>2.91K</td><td>10</td></tr><tr><td>128</td><td><a href="https://github.com/evanphx">
        <img src="https://avatars.githubusercontent.com/u/7?s=72&v=4" height="12" />
        <b>evanphx</b>
    </a></td><td>@mirendev </td><td>Los Angeles, CA</td><td>1.75K</td><td>10</td></tr><tr><td>129</td><td><a href="https://github.com/itzg">
        <img src="https://avatars.githubusercontent.com/u/988985?s=72&u=444fc4688b09d508685c277a9cbcae5c97f4e1c5&v=4" height="12" />
        <b>itzg</b>
    </a></td><td>-</td><td>Texas, United States</td><td>1.49K</td><td>10</td></tr><tr><td>130</td><td><a href="https://github.com/meowgorithm">
        <img src="https://avatars.githubusercontent.com/u/25087?s=72&u=1dc2f182860e2771dbb0c33226a0ef89aecd5f17&v=4" height="12" />
        <b>meowgorithm</b>
    </a></td><td>@charmbracelet </td><td>New York</td><td>1.09K</td><td>10</td></tr><tr><td>131</td><td><a href="https://github.com/cassidoo">
        <img src="https://avatars.githubusercontent.com/u/1454517?s=72&u=92a133438fecfefc65c4c73143a0f717bd5e7515&v=4" height="12" />
        <b>cassidoo</b>
    </a></td><td>GitHub</td><td>Chicago, IL</td><td>14.62K</td><td>9</td></tr><tr><td>132</td><td><a href="https://github.com/lattner">
        <img src="https://avatars.githubusercontent.com/u/15152540?s=72&u=bb801174d6fe5cea542dfb3ff8c59a2b55c0b5e0&v=4" height="12" />
        <b>lattner</b>
    </a></td><td>-</td><td>Bay Area, California, USA</td><td>11.47K</td><td>9</td></tr><tr><td>133</td><td><a href="https://github.com/mxcl">
        <img src="https://avatars.githubusercontent.com/u/58962?s=72&u=33477efff17d27ee1c7fed995525c4294f305ebc&v=4" height="12" />
        <b>mxcl</b>
    </a></td><td>-</td><td>Apex, NC, USA</td><td>7.72K</td><td>9</td></tr><tr><td>134</td><td><a href="https://github.com/Atry">
        <img src="https://avatars.githubusercontent.com/u/601530?s=72&u=ab242d6500886c4f8799101543d5b1f7841f1104&v=4" height="12" />
        <b>Atry</b>
    </a></td><td>-</td><td>California, United States</td><td>1.08K</td><td>9</td></tr><tr><td>135</td><td><a href="https://github.com/JakeWharton">
        <img src="https://avatars.githubusercontent.com/u/66577?s=72&v=4" height="12" />
        <b>JakeWharton</b>
    </a></td><td>Skylight</td><td>Pittsburgh, PA, USA</td><td>68.19K</td><td>8</td></tr><tr><td>136</td><td><a href="https://github.com/ry">
        <img src="https://avatars.githubusercontent.com/u/80?s=72&v=4" height="12" />
        <b>ry</b>
    </a></td><td>@denoland </td><td>New York City</td><td>33.04K</td><td>8</td></tr><tr><td>137</td><td><a href="https://github.com/gvanrossum">
        <img src="https://avatars.githubusercontent.com/u/2894642?s=72&u=3fd95e46e081102446b1ebdf31e1cf3d77406c0b&v=4" height="12" />
        <b>gvanrossum</b>
    </a></td><td>Microsoft</td><td>San Francisco Bay Area</td><td>25.74K</td><td>8</td></tr><tr><td>138</td><td><a href="https://github.com/t3dotgg">
        <img src="https://avatars.githubusercontent.com/u/6751787?s=72&u=69a6486b20fc980615e51457f6a5b56103cea295&v=4" height="12" />
        <b>t3dotgg</b>
    </a></td><td>CEO @ Ping.gg</td><td>San Francisco, CA</td><td>16.9K</td><td>8</td></tr><tr><td>139</td><td><a href="https://github.com/bradfitz">
        <img src="https://avatars.githubusercontent.com/u/2621?s=72&u=6deb06d9916328265486504f364c80ec2d969f2c&v=4" height="12" />
        <b>bradfitz</b>
    </a></td><td>Tailscale</td><td>Seattle</td><td>13.14K</td><td>8</td></tr><tr><td>140</td><td><a href="https://github.com/alex">
        <img src="https://avatars.githubusercontent.com/u/772?s=72&u=59560f511e4e0fb5521237148ea6e8f43b168960&v=4" height="12" />
        <b>alex</b>
    </a></td><td>Anthropic</td><td>Washington D.C.</td><td>10.51K</td><td>8</td></tr><tr><td>141</td><td><a href="https://github.com/creationix">
        <img src="https://avatars.githubusercontent.com/u/89353?s=72&u=04618167d8f04b9f4127d7718174cb13179051a8&v=4" height="12" />
        <b>creationix</b>
    </a></td><td>@vercel  </td><td>Mountainburg, AR, USA</td><td>5.26K</td><td>8</td></tr><tr><td>142</td><td><a href="https://github.com/antonputra">
        <img src="https://avatars.githubusercontent.com/u/9362325?s=72&u=22bb3ba589b13bf0b4179bae4924f3018716c210&v=4" height="12" />
        <b>antonputra</b>
    </a></td><td>-</td><td>San Francisco Bay Area</td><td>3.23K</td><td>8</td></tr><tr><td>143</td><td><a href="https://github.com/chrislusf">
        <img src="https://avatars.githubusercontent.com/u/1543151?s=72&u=b4788cca0e39aab9a6033218962aff65e0dff053&v=4" height="12" />
        <b>chrislusf</b>
    </a></td><td>-</td><td>San Francisco</td><td>2.85K</td><td>8</td></tr><tr><td>144</td><td><a href="https://github.com/hyperb1iss">
        <img src="https://avatars.githubusercontent.com/u/102151?s=72&u=c58674a24e82575091da1893726390b34e35fac2&v=4" height="12" />
        <b>hyperb1iss</b>
    </a></td><td>@gradial </td><td>Seattle, WA</td><td>2.67K</td><td>8</td></tr><tr><td>145</td><td><a href="https://github.com/edemaine">
        <img src="https://avatars.githubusercontent.com/u/2218736?s=72&v=4" height="12" />
        <b>edemaine</b>
    </a></td><td>Massachusetts Institute of Technology</td><td>Cambridge, Massachusetts, USA</td><td>2.53K</td><td>8</td></tr><tr><td>146</td><td><a href="https://github.com/timholy">
        <img src="https://avatars.githubusercontent.com/u/1525481?s=72&u=8140f1dbbae459ea55c0c27272e429dac5ce0a6a&v=4" height="12" />
        <b>timholy</b>
    </a></td><td>Washington University in St. Louis</td><td>St. Louis, Missouri, USA</td><td>1.4K</td><td>8</td></tr><tr><td>147</td><td><a href="https://github.com/kylebarron">
        <img src="https://avatars.githubusercontent.com/u/15164633?s=72&u=560350ef0d706c8538b3a4dbe202ea07a709505a&v=4" height="12" />
        <b>kylebarron</b>
    </a></td><td>@developmentseed</td><td>New York, New York</td><td>1.24K</td><td>8</td></tr><tr><td>148</td><td><a href="https://github.com/jonrohan">
        <img src="https://avatars.githubusercontent.com/u/54012?s=72&u=5314beb53bec3929050766bc25d9a4d7821a2946&v=4" height="12" />
        <b>jonrohan</b>
    </a></td><td>GitHub</td><td>Seattle, WA</td><td>1.17K</td><td>8</td></tr><tr><td>149</td><td><a href="https://github.com/cameronmcefee">
        <img src="https://avatars.githubusercontent.com/u/72919?s=72&u=15d648157029cf8999bd246a95d77fd1561b3c89&v=4" height="12" />
        <b>cameronmcefee</b>
    </a></td><td>GitHub</td><td>San Francisco</td><td>1.07K</td><td>8</td></tr><tr><td>150</td><td><a href="https://github.com/buckyroberts">
        <img src="https://avatars.githubusercontent.com/u/8547538?s=72&u=8a4be84ff4870a332fe94c11fca02b432fb9f83e&v=4" height="12" />
        <b>buckyroberts</b>
    </a></td><td>thenewboston</td><td>New York, NY</td><td>27.05K</td><td>7</td></tr><tr><td>151</td><td><a href="https://github.com/joshlong">
        <img src="https://avatars.githubusercontent.com/u/54473?s=72&v=4" height="12" />
        <b>joshlong</b>
    </a></td><td>the Spring team (https://spring.io) </td><td>San Francisco, CA</td><td>9.92K</td><td>7</td></tr><tr><td>152</td><td><a href="https://github.com/ahmetb">
        <img src="https://avatars.githubusercontent.com/u/159209?s=72&u=7484858b12e4c4a7fe1351d1f0b406076805deb2&v=4" height="12" />
        <b>ahmetb</b>
    </a></td><td>@linkedin </td><td>Seattle, WA</td><td>8.78K</td><td>7</td></tr><tr><td>153</td><td><a href="https://github.com/Nutlope">
        <img src="https://avatars.githubusercontent.com/u/63742054?s=72&u=befe4ae74b906698be965bad482d0e02fc7707ab&v=4" height="12" />
        <b>Nutlope</b>
    </a></td><td>-</td><td>New York City, NY</td><td>7.77K</td><td>7</td></tr><tr><td>154</td><td><a href="https://github.com/terrytangyuan">
        <img src="https://avatars.githubusercontent.com/u/4269898?s=72&u=f9e0df9a02b44366ac6b33f9ab32c080d37c5d9e&v=4" height="12" />
        <b>terrytangyuan</b>
    </a></td><td>Red Hat</td><td>USA</td><td>3.79K</td><td>7</td></tr><tr><td>155</td><td><a href="https://github.com/ottomated">
        <img src="https://avatars.githubusercontent.com/u/31470743?s=72&u=26ed8041f671da5b051f4cad76b016cea348d662&v=4" height="12" />
        <b>ottomated</b>
    </a></td><td>-</td><td>Los Angeles</td><td>3.76K</td><td>7</td></tr><tr><td>156</td><td><a href="https://github.com/ijjk">
        <img src="https://avatars.githubusercontent.com/u/22380829?s=72&u=0d3d36a4bef923933ffa54c609191dbae9988642&v=4" height="12" />
        <b>ijjk</b>
    </a></td><td>@Vercel</td><td>San Francisco, CA</td><td>3.76K</td><td>7</td></tr><tr><td>157</td><td><a href="https://github.com/SteveMacenski">
        <img src="https://avatars.githubusercontent.com/u/14944147?s=72&u=0925d37e9d3569c71d930114b66e6394c2efb3c6&v=4" height="12" />
        <b>SteveMacenski</b>
    </a></td><td>@open-navigation </td><td>San Francisco, CA, USA</td><td>3.68K</td><td>7</td></tr><tr><td>158</td><td><a href="https://github.com/andymatuschak">
        <img src="https://avatars.githubusercontent.com/u/2771?s=72&v=4" height="12" />
        <b>andymatuschak</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>3.32K</td><td>7</td></tr><tr><td>159</td><td><a href="https://github.com/zeux">
        <img src="https://avatars.githubusercontent.com/u/1106629?s=72&u=620ee97d58fc4c0e915bc36c992c86e94bd76efe&v=4" height="12" />
        <b>zeux</b>
    </a></td><td>-</td><td>San Francisco</td><td>3.06K</td><td>7</td></tr><tr><td>160</td><td><a href="https://github.com/sferik">
        <img src="https://avatars.githubusercontent.com/u/10308?s=72&u=5a2785be9d9bf021907c5c53dc1345edd137604c&v=4" height="12" />
        <b>sferik</b>
    </a></td><td>-</td><td>San Francisco</td><td>2.63K</td><td>7</td></tr><tr><td>161</td><td><a href="https://github.com/DanielRosenwasser">
        <img src="https://avatars.githubusercontent.com/u/972891?s=72&u=5a4dfe64fb09433dfa589b588361f04231144416&v=4" height="12" />
        <b>DanielRosenwasser</b>
    </a></td><td>@Microsoft</td><td>Seattle, WA</td><td>2.49K</td><td>7</td></tr><tr><td>162</td><td><a href="https://github.com/Iron-Ham">
        <img src="https://avatars.githubusercontent.com/u/3388381?s=72&u=767aeeb299a41613663a3408c68cb10cafca079d&v=4" height="12" />
        <b>Iron-Ham</b>
    </a></td><td>@makenotion</td><td>New York</td><td>2.12K</td><td>7</td></tr><tr><td>163</td><td><a href="https://github.com/brianchandotcom">
        <img src="https://avatars.githubusercontent.com/u/282080?s=72&v=4" height="12" />
        <b>brianchandotcom</b>
    </a></td><td>Liferay, Inc.</td><td>Los Angeles, CA</td><td>2.06K</td><td>7</td></tr><tr><td>164</td><td><a href="https://github.com/modocache">
        <img src="https://avatars.githubusercontent.com/u/552921?s=72&u=469a0337ef1e244285e6b65af1567cb792fff359&v=4" height="12" />
        <b>modocache</b>
    </a></td><td>-</td><td>New York, USA</td><td>2.01K</td><td>7</td></tr><tr><td>165</td><td><a href="https://github.com/ttscoff">
        <img src="https://avatars.githubusercontent.com/u/47833?s=72&v=4" height="12" />
        <b>ttscoff</b>
    </a></td><td>-</td><td>Winona, MN USA</td><td>1.87K</td><td>7</td></tr><tr><td>166</td><td><a href="https://github.com/Trott">
        <img src="https://avatars.githubusercontent.com/u/718899?s=72&u=d8a77b28610eec920d8744ed76d3f625e3f06a48&v=4" height="12" />
        <b>Trott</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.57K</td><td>7</td></tr><tr><td>167</td><td><a href="https://github.com/jonathantneal">
        <img src="https://avatars.githubusercontent.com/u/188426?s=72&u=5029ae346892ad6d2e3893c29edeeb8efff623b0&v=4" height="12" />
        <b>jonathantneal</b>
    </a></td><td>-</td><td>Georgia, USA</td><td>1.43K</td><td>7</td></tr><tr><td>168</td><td><a href="https://github.com/ngokevin">
        <img src="https://avatars.githubusercontent.com/u/674727?s=72&u=4e38d7f90ff58e6d82b8f82eafee135ed06facaa&v=4" height="12" />
        <b>ngokevin</b>
    </a></td><td>-</td><td>Los Angeles, CA</td><td>1.37K</td><td>7</td></tr><tr><td>169</td><td><a href="https://github.com/natemcmaster">
        <img src="https://avatars.githubusercontent.com/u/2696087?s=72&v=4" height="12" />
        <b>natemcmaster</b>
    </a></td><td>@anthropics</td><td>Seattle, WA</td><td>1.32K</td><td>7</td></tr><tr><td>170</td><td><a href="https://github.com/dblock">
        <img src="https://avatars.githubusercontent.com/u/542335?s=72&u=0be97a8b8201d4f206bda1a9dfd891fe829d0f67&v=4" height="12" />
        <b>dblock</b>
    </a></td><td>unemployed at poor artist</td><td>New York, NY</td><td>1.29K</td><td>7</td></tr><tr><td>171</td><td><a href="https://github.com/jethrokuan">
        <img src="https://avatars.githubusercontent.com/u/1667473?s=72&u=40997f60932070c577f9efcc9c3dc8a4028a8be1&v=4" height="12" />
        <b>jethrokuan</b>
    </a></td><td>@abnormal-security </td><td>San Francisco</td><td>1.26K</td><td>7</td></tr><tr><td>172</td><td><a href="https://github.com/nicolasgramlich">
        <img src="https://avatars.githubusercontent.com/u/287060?s=72&u=51940fe5ae8c2c043c77a008eeda841090edbe27&v=4" height="12" />
        <b>nicolasgramlich</b>
    </a></td><td>Yeet Studios</td><td>San Francisco, CA</td><td>1.23K</td><td>7</td></tr><tr><td>173</td><td><a href="https://github.com/lokesh">
        <img src="https://avatars.githubusercontent.com/u/51469?s=72&u=50714c37abe75bb24064456b6378feea9dec7500&v=4" height="12" />
        <b>lokesh</b>
    </a></td><td>Square</td><td>San Francisco, CA</td><td>1.21K</td><td>7</td></tr><tr><td>174</td><td><a href="https://github.com/tpn">
        <img src="https://avatars.githubusercontent.com/u/629986?s=72&u=a4bf017f389eb07e5f9fc588711e7d14e032ad9e&v=4" height="12" />
        <b>tpn</b>
    </a></td><td>NVIDIA</td><td>Seattle, WA</td><td>1.14K</td><td>7</td></tr><tr><td>175</td><td><a href="https://github.com/philipwalton">
        <img src="https://avatars.githubusercontent.com/u/326742?s=72&u=3ee52ffd1fa9675494bb35d258dced356476015b&v=4" height="12" />
        <b>philipwalton</b>
    </a></td><td>Google</td><td>Los Angeles, CA</td><td>5K</td><td>6</td></tr><tr><td>176</td><td><a href="https://github.com/zodiacon">
        <img src="https://avatars.githubusercontent.com/u/4227784?s=72&u=61eb6f40dc2f7fdf010001f1a1bd7781150b3b0f&v=4" height="12" />
        <b>zodiacon</b>
    </a></td><td>Trainsec.net</td><td>United States</td><td>3.75K</td><td>6</td></tr><tr><td>177</td><td><a href="https://github.com/ezyang">
        <img src="https://avatars.githubusercontent.com/u/13564?s=72&v=4" height="12" />
        <b>ezyang</b>
    </a></td><td>-</td><td>New York, NY</td><td>3.57K</td><td>6</td></tr><tr><td>178</td><td><a href="https://github.com/chrisalbon">
        <img src="https://avatars.githubusercontent.com/u/3612307?s=72&u=3396e48cd171028c56ae91938043438a4ed8d865&v=4" height="12" />
        <b>chrisalbon</b>
    </a></td><td>Wikimedia Foundation</td><td>San Francisco</td><td>2.59K</td><td>6</td></tr><tr><td>179</td><td><a href="https://github.com/inancgumus">
        <img src="https://avatars.githubusercontent.com/u/621232?s=72&u=4825c5449290026dd31c681af1e04f2b3ed9944d&v=4" height="12" />
        <b>inancgumus</b>
    </a></td><td>@grafana</td><td>USA</td><td>1.47K</td><td>6</td></tr><tr><td>180</td><td><a href="https://github.com/jtauber">
        <img src="https://avatars.githubusercontent.com/u/24426?s=72&v=4" height="12" />
        <b>jtauber</b>
    </a></td><td>-</td><td>Greater Boston Area, US</td><td>1.31K</td><td>6</td></tr><tr><td>181</td><td><a href="https://github.com/michaelficarra">
        <img src="https://avatars.githubusercontent.com/u/218840?s=72&u=d473d2de0596d110caab980fb5b4496b9cccf9d8&v=4" height="12" />
        <b>michaelficarra</b>
    </a></td><td>@shapesecurity, part of @f5networks</td><td>Colorado, USA</td><td>1.11K</td><td>6</td></tr><tr><td>182</td><td><a href="https://github.com/trishume">
        <img src="https://avatars.githubusercontent.com/u/887610?s=72&u=5aa9a0e9d96da4985178c8d7a55ab2f31785b70b&v=4" height="12" />
        <b>trishume</b>
    </a></td><td>-</td><td>San Francisco</td><td>3.66K</td><td>5</td></tr><tr><td>183</td><td><a href="https://github.com/holdenk">
        <img src="https://avatars.githubusercontent.com/u/59893?s=72&v=4" height="12" />
        <b>holdenk</b>
    </a></td><td>Open Source Big Data Dev</td><td>San Francisco, CA, USA</td><td>2.54K</td><td>5</td></tr><tr><td>184</td><td><a href="https://github.com/jcheng5">
        <img src="https://avatars.githubusercontent.com/u/129551?s=72&u=2fe43e5af94b85097afb28f5046e7c1138e6b5bb&v=4" height="12" />
        <b>jcheng5</b>
    </a></td><td>@rstudio</td><td>Redmond, WA (United States)</td><td>2.34K</td><td>5</td></tr><tr><td>185</td><td><a href="https://github.com/zhaochenyang20">
        <img src="https://avatars.githubusercontent.com/u/74843776?s=72&u=5d11cbd6799102bca437e5aa67ecece9316a7a7f&v=4" height="12" />
        <b>zhaochenyang20</b>
    </a></td><td>University of California, Los Angeles</td><td>Los Angeles</td><td>1.99K</td><td>5</td></tr><tr><td>186</td><td><a href="https://github.com/rodydavis">
        <img src="https://avatars.githubusercontent.com/u/31253215?s=72&u=e8a2701b44f7966e5cb95525413ab50600e99e4c&v=4" height="12" />
        <b>rodydavis</b>
    </a></td><td>@Google</td><td>San Francisco, CA</td><td>1.88K</td><td>5</td></tr><tr><td>187</td><td><a href="https://github.com/joewalnes">
        <img src="https://avatars.githubusercontent.com/u/48950?s=72&v=4" height="12" />
        <b>joewalnes</b>
    </a></td><td>-</td><td>San Francisco Bay Area</td><td>1.37K</td><td>5</td></tr><tr><td>188</td><td><a href="https://github.com/masonliiu">
        <img src="https://avatars.githubusercontent.com/u/138553405?s=72&u=01a32c9ea9023bea68320dd39178fc54a36d99bd&v=4" height="12" />
        <b>masonliiu</b>
    </a></td><td>-</td><td>dallas, texas</td><td>1.19K</td><td>5</td></tr><tr><td>189</td><td><a href="https://github.com/aturon">
        <img src="https://avatars.githubusercontent.com/u/709807?s=72&u=78515923f95344564d0f5de924b168ff8e85ba34&v=4" height="12" />
        <b>aturon</b>
    </a></td><td>Fastly</td><td>Portland, OR, USA</td><td>1.18K</td><td>5</td></tr><tr><td>190</td><td><a href="https://github.com/chinmaygarde">
        <img src="https://avatars.githubusercontent.com/u/44085?s=72&u=0d4d2ac59f3ad098ad89fdef8802e3c4aff70960&v=4" height="12" />
        <b>chinmaygarde</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.06K</td><td>5</td></tr><tr><td>191</td><td><a href="https://github.com/bahmutov">
        <img src="https://avatars.githubusercontent.com/u/2212006?s=72&u=23b522c7384c4322687171ba919f2ed17b6fb0b4&v=4" height="12" />
        <b>bahmutov</b>
    </a></td><td>-</td><td>Boston, MA</td><td>4.92K</td><td>4</td></tr><tr><td>192</td><td><a href="https://github.com/eugeneyan">
        <img src="https://avatars.githubusercontent.com/u/6831355?s=72&u=4b5cf1f33cb65e8026be3858d624530ec62bbd04&v=4" height="12" />
        <b>eugeneyan</b>
    </a></td><td>@anthropics</td><td>Seattle</td><td>4.8K</td><td>4</td></tr><tr><td>193</td><td><a href="https://github.com/nolimits4web">
        <img src="https://avatars.githubusercontent.com/u/999588?s=72&u=00cb264515ffc319920eb10637bcfe7986eabb52&v=4" height="12" />
        <b>nolimits4web</b>
    </a></td><td>-</td><td>USA</td><td>4.38K</td><td>4</td></tr><tr><td>194</td><td><a href="https://github.com/yzhao062">
        <img src="https://avatars.githubusercontent.com/u/15079146?s=72&u=91133df299b4f29279d8bc9d55e5a85242cc657f&v=4" height="12" />
        <b>yzhao062</b>
    </a></td><td>University of Southern California</td><td>Los Angeles, CA, USA</td><td>4.06K</td><td>4</td></tr><tr><td>195</td><td><a href="https://github.com/devongovett">
        <img src="https://avatars.githubusercontent.com/u/19409?s=72&u=16bbca03b15ec1cd3ec4f7cdddc4164ab6c8e425&v=4" height="12" />
        <b>devongovett</b>
    </a></td><td>Adobe</td><td>San Francisco</td><td>3.78K</td><td>4</td></tr><tr><td>196</td><td><a href="https://github.com/kognise">
        <img src="https://avatars.githubusercontent.com/u/42556441?s=72&u=ccc56414ff350d84a464dec8b9a013484560aa1b&v=4" height="12" />
        <b>kognise</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>3.33K</td><td>4</td></tr><tr><td>197</td><td><a href="https://github.com/mahmoud">
        <img src="https://avatars.githubusercontent.com/u/130193?s=72&u=87d388d2ceb804aabda330a5f81cf078a2342b03&v=4" height="12" />
        <b>mahmoud</b>
    </a></td><td>@hatnote</td><td>San Francisco, CA</td><td>2.45K</td><td>4</td></tr><tr><td>198</td><td><a href="https://github.com/mike-north">
        <img src="https://avatars.githubusercontent.com/u/558005?s=72&u=a27f905c8f24e1ad227d32905fa5512fd615153d&v=4" height="12" />
        <b>mike-north</b>
    </a></td><td>@Stripe</td><td>USA</td><td>2K</td><td>4</td></tr><tr><td>199</td><td><a href="https://github.com/huytd">
        <img src="https://avatars.githubusercontent.com/u/613943?s=72&u=1c4907aec0dbf090114152e8ca1c4c3243f9fbed&v=4" height="12" />
        <b>huytd</b>
    </a></td><td>-</td><td>California, US</td><td>1.9K</td><td>4</td></tr><tr><td>200</td><td><a href="https://github.com/pcwalton">
        <img src="https://avatars.githubusercontent.com/u/157897?s=72&u=fab8268f5338550918b6e4379bb3ac6f6dce67c6&v=4" height="12" />
        <b>pcwalton</b>
    </a></td><td>-</td><td>San Francisco, CA</td><td>1.61K</td><td>4</td></tr>
    </tbody>
</table>
