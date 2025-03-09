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
        <tr><td>🥇</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=1cf687904979439e58e6629628a0dd41b32a591b&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>413</td><td>1.58K</td></tr><tr><td>🥈</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>337</td><td>1.23K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>220</td><td>1.21K</td></tr><tr><td>4</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.25K</td><td>1.01K</td></tr><tr><td>5</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>598</td><td>982</td></tr><tr><td>6</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>601</td><td>780</td></tr><tr><td>7</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>700</td><td>551</td></tr><tr><td>8</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.52K</td><td>536</td></tr><tr><td>9</td><td><a href="https://github.com/Bubhux">
        <img src="https://avatars.githubusercontent.com/u/110377006?s=72&u=0309cab6fd716667c5e7e7d50f14c51803135a83&v=4" height="12" />
        <b>Bubhux</b>
    </a></td><td>-</td><td>France</td><td>254</td><td>369</td></tr><tr><td>10</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>343</td><td>210</td></tr><tr><td>11</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>266</td><td>173</td></tr><tr><td>12</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>493</td><td>162</td></tr><tr><td>13</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>336</td><td>159</td></tr><tr><td>14</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>232</td><td>141</td></tr><tr><td>15</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=bced413b47ba8604871f6b4ac28f623f72bcf56d&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>536</td><td>98</td></tr><tr><td>16</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>246</td><td>93</td></tr><tr><td>17</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>211</td><td>87</td></tr><tr><td>18</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>299</td><td>71</td></tr><tr><td>19</td><td><a href="https://github.com/zoriya">
        <img src="https://avatars.githubusercontent.com/u/32224410?s=72&u=966b19ce0af0d82661baaea34396db0526f52f9d&v=4" height="12" />
        <b>zoriya</b>
    </a></td><td>-</td><td>France</td><td>239</td><td>68</td></tr><tr><td>20</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.4K</td><td>67</td></tr><tr><td>21</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>321</td><td>67</td></tr><tr><td>22</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.1K</td><td>64</td></tr><tr><td>23</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>266</td><td>64</td></tr><tr><td>24</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6K</td><td>60</td></tr><tr><td>25</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>44</td></tr><tr><td>26</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>585</td><td>36</td></tr><tr><td>27</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Open-source engineer @probabl-ai </td><td>Paris-Saclay / France</td><td>804</td><td>32</td></tr><tr><td>28</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=fc4800d819397a6bc72c65257ae230c3348b8627&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>425</td><td>31</td></tr><tr><td>29</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>davidbrochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>332</td><td>29</td></tr><tr><td>30</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>264</td><td>29</td></tr><tr><td>31</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>215</td><td>28</td></tr><tr><td>32</td><td><a href="https://github.com/Kehrlann">
        <img src="https://avatars.githubusercontent.com/u/5676779?s=72&u=98595e18b5106e4526c48d984983ea525890f588&v=4" height="12" />
        <b>Kehrlann</b>
    </a></td><td>@broadcom </td><td>Paris, France</td><td>458</td><td>23</td></tr><tr><td>33</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>344</td><td>23</td></tr><tr><td>34</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>410</td><td>22</td></tr><tr><td>35</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>307</td><td>22</td></tr><tr><td>36</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>863</td><td>21</td></tr><tr><td>37</td><td><a href="https://github.com/pawamoy">
        <img src="https://avatars.githubusercontent.com/u/3999221?s=72&u=b030e4c89df2f3a36bc4710b925bdeb6745c9856&v=4" height="12" />
        <b>pawamoy</b>
    </a></td><td>@pawamoy-insiders </td><td>France</td><td>514</td><td>21</td></tr><tr><td>38</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>445</td><td>21</td></tr><tr><td>39</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>281</td><td>21</td></tr><tr><td>40</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>248</td><td>21</td></tr><tr><td>41</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>232</td><td>20</td></tr><tr><td>42</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.37K</td><td>18</td></tr><tr><td>43</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>387</td><td>18</td></tr><tr><td>44</td><td><a href="https://github.com/nkallen">
        <img src="https://avatars.githubusercontent.com/u/699?s=72&v=4" height="12" />
        <b>nkallen</b>
    </a></td><td>self-employed</td><td>Paris</td><td>720</td><td>16</td></tr><tr><td>45</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>315</td><td>16</td></tr><tr><td>46</td><td><a href="https://github.com/johnBuffer">
        <img src="https://avatars.githubusercontent.com/u/9960400?s=72&u=bc8911ac87edb913bca811d23f14c109d11e9dfa&v=4" height="12" />
        <b>johnBuffer</b>
    </a></td><td>-</td><td>France</td><td>2.94K</td><td>15</td></tr><tr><td>47</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=33f733fea40d7af3b4528613c8c40a015492349c&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.25K</td><td>15</td></tr><tr><td>48</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>469</td><td>15</td></tr><tr><td>49</td><td><a href="https://github.com/poolpOrg">
        <img src="https://avatars.githubusercontent.com/u/895503?s=72&u=e63aa059ea0657a703518f1374c8a30fdf2d02ac&v=4" height="12" />
        <b>poolpOrg</b>
    </a></td><td>poolp.org</td><td>Nantes, France</td><td>227</td><td>15</td></tr><tr><td>50</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.28K</td><td>14</td></tr><tr><td>51</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=6c520432e20d5ed603246764658accea4b4043c3&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>5.01K</td><td>14</td></tr><tr><td>52</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.59K</td><td>14</td></tr><tr><td>53</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>897</td><td>14</td></tr><tr><td>54</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>zoontek</b>
    </a></td><td>Swan</td><td>Paris</td><td>743</td><td>14</td></tr><tr><td>55</td><td><a href="https://github.com/NicolasPetton">
        <img src="https://avatars.githubusercontent.com/u/123539?s=72&u=5ddba75ca916a17ce1d818279b70ab97573c0a7a&v=4" height="12" />
        <b>NicolasPetton</b>
    </a></td><td>-</td><td>Brest, France</td><td>413</td><td>14</td></tr><tr><td>56</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>392</td><td>14</td></tr><tr><td>57</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>paraboul</b>
    </a></td><td>-</td><td>France</td><td>347</td><td>14</td></tr><tr><td>58</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>252</td><td>14</td></tr><tr><td>59</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>237</td><td>14</td></tr><tr><td>60</td><td><a href="https://github.com/aureleoules">
        <img src="https://avatars.githubusercontent.com/u/22493292?s=72&u=19b0f7ab53a1842345673fed0988ba870a5c3e31&v=4" height="12" />
        <b>aureleoules</b>
    </a></td><td>Datadog</td><td>France</td><td>221</td><td>14</td></tr><tr><td>61</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=41b673444a231d4b51158f19405660bead34e360&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>220</td><td>14</td></tr><tr><td>62</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>216</td><td>14</td></tr><tr><td>63</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>372</td><td>13</td></tr><tr><td>64</td><td><a href="https://github.com/Tripouille">
        <img src="https://avatars.githubusercontent.com/u/49202412?s=72&u=76785d33c55894d68245685e62b1aa7ae5ed831a&v=4" height="12" />
        <b>Tripouille</b>
    </a></td><td>fabriq</td><td>France</td><td>344</td><td>13</td></tr><tr><td>65</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>512</td><td>12</td></tr><tr><td>66</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>212</td><td>12</td></tr><tr><td>67</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>515</td><td>11</td></tr><tr><td>68</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>473</td><td>11</td></tr><tr><td>69</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris</td><td>2.35K</td><td>10</td></tr><tr><td>70</td><td><a href="https://github.com/Amagash">
        <img src="https://avatars.githubusercontent.com/u/20380447?s=72&u=1c5deea446e3f81f4e86708d96bad45cbd633fe3&v=4" height="12" />
        <b>Amagash</b>
    </a></td><td>AWS</td><td>France</td><td>577</td><td>10</td></tr><tr><td>71</td><td><a href="https://github.com/amineHorseman">
        <img src="https://avatars.githubusercontent.com/u/15238963?s=72&u=991e3dcd209c7f34536868cc6013690fc279c0a5&v=4" height="12" />
        <b>amineHorseman</b>
    </a></td><td>-</td><td>Paris</td><td>206</td><td>10</td></tr><tr><td>72</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>deepnight</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.47K</td><td>9</td></tr><tr><td>73</td><td><a href="https://github.com/Eschults">
        <img src="https://avatars.githubusercontent.com/u/8090140?s=72&u=8a860a3b8066c1c6fe7ddba93065bd8272c38f45&v=4" height="12" />
        <b>Eschults</b>
    </a></td><td>@lewagon</td><td>Paris</td><td>426</td><td>9</td></tr><tr><td>74</td><td><a href="https://github.com/jderusse">
        <img src="https://avatars.githubusercontent.com/u/578547?s=72&u=df76d0514c86209a3fff8c9fb9d15ae8592c43c9&v=4" height="12" />
        <b>jderusse</b>
    </a></td><td>Blackfire</td><td>Paris, France</td><td>270</td><td>9</td></tr><tr><td>75</td><td><a href="https://github.com/BoD">
        <img src="https://avatars.githubusercontent.com/u/372852?s=72&u=7569719a93bcc9da6dbec73e93464aded3bacfb7&v=4" height="12" />
        <b>BoD</b>
    </a></td><td>-</td><td>Paris, France</td><td>203</td><td>9</td></tr><tr><td>76</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.34K</td><td>8</td></tr><tr><td>77</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>benjamincanac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux</td><td>636</td><td>8</td></tr><tr><td>78</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>512</td><td>8</td></tr><tr><td>79</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Thales</td><td>Paris, France</td><td>326</td><td>8</td></tr><tr><td>80</td><td><a href="https://github.com/benjamincrozat">
        <img src="https://avatars.githubusercontent.com/u/3613731?s=72&v=4" height="12" />
        <b>benjamincrozat</b>
    </a></td><td>-</td><td>France</td><td>314</td><td>8</td></tr><tr><td>81</td><td><a href="https://github.com/mickaelandrieu">
        <img src="https://avatars.githubusercontent.com/u/1247388?s=72&u=599f6e73e452a9453f2bd91e5c3100750e731ad4&v=4" height="12" />
        <b>mickaelandrieu</b>
    </a></td><td>Article-1</td><td>Bordeaux, France</td><td>295</td><td>8</td></tr><tr><td>82</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>205</td><td>8</td></tr><tr><td>83</td><td><a href="https://github.com/pcarrier">
        <img src="https://avatars.githubusercontent.com/u/8641?s=72&u=8af20e7520afb49a09ce94ae561931c70e4abb21&v=4" height="12" />
        <b>pcarrier</b>
    </a></td><td>-</td><td>Grenoble, France</td><td>197</td><td>8</td></tr><tr><td>84</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.88K</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>FaridSafi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.8K</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.46K</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.26K</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>714</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>595</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/ndeloof">
        <img src="https://avatars.githubusercontent.com/u/132757?s=72&v=4" height="12" />
        <b>ndeloof</b>
    </a></td><td>Docker</td><td>Rennes, France</td><td>423</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/raphaelvallat">
        <img src="https://avatars.githubusercontent.com/u/25703792?s=72&u=106689cdafc3ba03b63d8311b08a54344a56d831&v=4" height="12" />
        <b>raphaelvallat</b>
    </a></td><td>ŌURA</td><td>Lyon, France</td><td>415</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/albertvillanova">
        <img src="https://avatars.githubusercontent.com/u/8515462?s=72&u=72a51bbb90c88db85efbc9260c63b0d6adfdfceb&v=4" height="12" />
        <b>albertvillanova</b>
    </a></td><td>@huggingface @aiinnova</td><td>Paris (France)</td><td>402</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/AdrienTorris">
        <img src="https://avatars.githubusercontent.com/u/1014357?s=72&u=14c98f93eda7208d6ae186a550d63dd63378cbc3&v=4" height="12" />
        <b>AdrienTorris</b>
    </a></td><td>-</td><td>France</td><td>396</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>378</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/MathisHammel">
        <img src="https://avatars.githubusercontent.com/u/6159437?s=72&u=a53de197adab2db63fd75671f1277043ae6f00b6&v=4" height="12" />
        <b>MathisHammel</b>
    </a></td><td>-</td><td>Paris</td><td>358</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>336</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>328</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/vindarel">
        <img src="https://avatars.githubusercontent.com/u/3721004?s=72&u=1dd339c8791cde01920fd5235e5ce82cda9049e4&v=4" height="12" />
        <b>vindarel</b>
    </a></td><td>-</td><td>France</td><td>302</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/Marsup">
        <img src="https://avatars.githubusercontent.com/u/796194?s=72&v=4" height="12" />
        <b>Marsup</b>
    </a></td><td>-</td><td>Lyon, France</td><td>295</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>291</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/Neamar">
        <img src="https://avatars.githubusercontent.com/u/536844?s=72&v=4" height="12" />
        <b>Neamar</b>
    </a></td><td>-</td><td>France</td><td>272</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/alexkirsz">
        <img src="https://avatars.githubusercontent.com/u/1621758?s=72&u=1920fad1c4b2656b527fea8cdfdfbb7d5f51753f&v=4" height="12" />
        <b>alexkirsz</b>
    </a></td><td>-</td><td>Paris</td><td>266</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/lra">
        <img src="https://avatars.githubusercontent.com/u/122286?s=72&u=5b877e8eca464d7f4351a20c1531828f99db6090&v=4" height="12" />
        <b>lra</b>
    </a></td><td>-</td><td>Toulouse, NY, SF</td><td>266</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>258</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/jcarpent">
        <img src="https://avatars.githubusercontent.com/u/1567317?s=72&v=4" height="12" />
        <b>jcarpent</b>
    </a></td><td>Inria, Paris</td><td>Paris</td><td>235</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/Julow">
        <img src="https://avatars.githubusercontent.com/u/2310568?s=72&v=4" height="12" />
        <b>Julow</b>
    </a></td><td>@tarides</td><td>France</td><td>229</td><td>7</td></tr><tr><td>107</td><td><a href="https://github.com/aymeric-roucher">
        <img src="https://avatars.githubusercontent.com/u/69208727?s=72&u=132c8ca18143866b79253a6fcbc10f58984f61ab&v=4" height="12" />
        <b>aymeric-roucher</b>
    </a></td><td>Hugging Face</td><td>Paris</td><td>221</td><td>7</td></tr><tr><td>108</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>219</td><td>7</td></tr><tr><td>109</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>216</td><td>7</td></tr><tr><td>110</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>205</td><td>7</td></tr><tr><td>111</td><td><a href="https://github.com/topheman">
        <img src="https://avatars.githubusercontent.com/u/985982?s=72&u=9319a164fa8c3c905b48e00bb554c4243d9c734b&v=4" height="12" />
        <b>topheman</b>
    </a></td><td>-</td><td>Paris</td><td>197</td><td>7</td></tr><tr><td>112</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>-</td><td>Grenoble - France</td><td>1.45K</td><td>6</td></tr><tr><td>113</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=dc9333a6798810e941a0240566fe2a38a5f55bd7&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.44K</td><td>6</td></tr><tr><td>114</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>908</td><td>6</td></tr><tr><td>115</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>765</td><td>6</td></tr><tr><td>116</td><td><a href="https://github.com/hbredin">
        <img src="https://avatars.githubusercontent.com/u/1080837?s=72&v=4" height="12" />
        <b>hbredin</b>
    </a></td><td>@pyannoteai and CNRS</td><td>France</td><td>423</td><td>6</td></tr><tr><td>117</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>371</td><td>6</td></tr><tr><td>118</td><td><a href="https://github.com/brunosimon">
        <img src="https://avatars.githubusercontent.com/u/5439991?s=72&u=d7f9a046776f0960769c8d90ca8ced4d896c8e6a&v=4" height="12" />
        <b>brunosimon</b>
    </a></td><td>Creative Journey</td><td>Paris</td><td>19.47K</td><td>5</td></tr><tr><td>119</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>4.19K</td><td>5</td></tr><tr><td>120</td><td><a href="https://github.com/sdispater">
        <img src="https://avatars.githubusercontent.com/u/555648?s=72&v=4" height="12" />
        <b>sdispater</b>
    </a></td><td>-</td><td>France</td><td>2.23K</td><td>5</td></tr><tr><td>121</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.13K</td><td>5</td></tr><tr><td>122</td><td><a href="https://github.com/Yanlry">
        <img src="https://avatars.githubusercontent.com/u/122649131?s=72&u=ed01f26921d8c98ec9c54de3db9568fe88dae0b9&v=4" height="12" />
        <b>Yanlry</b>
    </a></td><td>Fsociety</td><td>Lille, France</td><td>325</td><td>5</td></tr><tr><td>123</td><td><a href="https://github.com/hussein-aitlahcen">
        <img src="https://avatars.githubusercontent.com/u/9103813?s=72&u=8ae26cf794cdbfc36ce096a69330bc31b582eec1&v=4" height="12" />
        <b>hussein-aitlahcen</b>
    </a></td><td>Block 6.282e+10</td><td>France</td><td>305</td><td>5</td></tr><tr><td>124</td><td><a href="https://github.com/yogsototh">
        <img src="https://avatars.githubusercontent.com/u/93899?s=72&v=4" height="12" />
        <b>yogsototh</b>
    </a></td><td>@cisco</td><td>France</td><td>304</td><td>5</td></tr><tr><td>125</td><td><a href="https://github.com/ysbaddaden">
        <img src="https://avatars.githubusercontent.com/u/47380?s=72&v=4" height="12" />
        <b>ysbaddaden</b>
    </a></td><td>Ruby, JavaScript, Crystal</td><td>Nogent sur Oise, France</td><td>258</td><td>5</td></tr><tr><td>126</td><td><a href="https://github.com/madeindjs">
        <img src="https://avatars.githubusercontent.com/u/11815139?s=72&v=4" height="12" />
        <b>madeindjs</b>
    </a></td><td>-</td><td>Lyon, France</td><td>218</td><td>5</td></tr><tr><td>127</td><td><a href="https://github.com/Grafikart">
        <img src="https://avatars.githubusercontent.com/u/395137?s=72&u=490adebe004adb66140ca0d5f14e4f2e1a986f9d&v=4" height="12" />
        <b>Grafikart</b>
    </a></td><td>-</td><td>Montpellier</td><td>6.05K</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>2.09K</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/Carreau">
        <img src="https://avatars.githubusercontent.com/u/335567?s=72&v=4" height="12" />
        <b>Carreau</b>
    </a></td><td>@Quansight-Labs</td><td>France</td><td>1.32K</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.02K</td><td>4</td></tr><tr><td>131</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>967</td><td>4</td></tr><tr><td>132</td><td><a href="https://github.com/mgcrea">
        <img src="https://avatars.githubusercontent.com/u/108273?s=72&u=379828073e655f59a77fe54a362673c3fc60ec0a&v=4" height="12" />
        <b>mgcrea</b>
    </a></td><td>Freelance</td><td>Paris, France</td><td>799</td><td>4</td></tr><tr><td>133</td><td><a href="https://github.com/angeluriot">
        <img src="https://avatars.githubusercontent.com/u/46031994?s=72&u=8636531cc02d42681ad0935a16c18c6100ef0feb&v=4" height="12" />
        <b>angeluriot</b>
    </a></td><td>@blablacar</td><td>France</td><td>723</td><td>4</td></tr><tr><td>134</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>melix</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>621</td><td>4</td></tr><tr><td>135</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>394</td><td>4</td></tr><tr><td>136</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>326</td><td>4</td></tr><tr><td>137</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>300</td><td>4</td></tr><tr><td>138</td><td><a href="https://github.com/avivace">
        <img src="https://avatars.githubusercontent.com/u/14352721?s=72&u=a7dc8be3aa7851dd1521ab77b98bb49749178634&v=4" height="12" />
        <b>avivace</b>
    </a></td><td>@EUROCONTROL</td><td>Paris</td><td>246</td><td>4</td></tr><tr><td>139</td><td><a href="https://github.com/zhouzi">
        <img src="https://avatars.githubusercontent.com/u/2291025?s=72&u=f9dbd23893a5f81e51834472df344596d2b90668&v=4" height="12" />
        <b>zhouzi</b>
    </a></td><td>-</td><td>France</td><td>232</td><td>4</td></tr><tr><td>140</td><td><a href="https://github.com/Akryum">
        <img src="https://avatars.githubusercontent.com/u/2798204?s=72&u=d45556d7e920c0f57552d1dc1250a7cdb807eddb&v=4" height="12" />
        <b>Akryum</b>
    </a></td><td>-</td><td>France</td><td>5.12K</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>4.14K</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>Antibes, France</td><td>3.9K</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/angristan">
        <img src="https://avatars.githubusercontent.com/u/11699655?s=72&u=03a18584b40e4d9fd656b2120c3e75232960b9ac&v=4" height="12" />
        <b>angristan</b>
    </a></td><td>Backend Engineer @qonto</td><td>Paris</td><td>1.85K</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/mxrch">
        <img src="https://avatars.githubusercontent.com/u/17338428?s=72&u=78e744ba686776918a36fcc0047e2f031e3a3d50&v=4" height="12" />
        <b>mxrch</b>
    </a></td><td>HideAndSec</td><td>France</td><td>1.64K</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.25K</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/potatoqualitee">
        <img src="https://avatars.githubusercontent.com/u/8278033?s=72&u=5a511a15023e5852701b547a867cb56c1dcb21a7&v=4" height="12" />
        <b>potatoqualitee</b>
    </a></td><td>@dataplat</td><td>North of France</td><td>945</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>778</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>739</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/forax">
        <img src="https://avatars.githubusercontent.com/u/828220?s=72&v=4" height="12" />
        <b>forax</b>
    </a></td><td>University Gustave Eiffel (Paris)</td><td>Paris, France</td><td>567</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble</td><td>545</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>505</td><td>3</td></tr><tr><td>152</td><td><a href="https://github.com/arnaud-lb">
        <img src="https://avatars.githubusercontent.com/u/365207?s=72&u=b7116aa4d644d6b20bed3122a1d03cf8b2a514ee&v=4" height="12" />
        <b>arnaud-lb</b>
    </a></td><td>-</td><td>Paris, France</td><td>488</td><td>3</td></tr><tr><td>153</td><td><a href="https://github.com/f4exb">
        <img src="https://avatars.githubusercontent.com/u/6192319?s=72&u=3f1ea59769818046445a4377305f55687ee4ad6b&v=4" height="12" />
        <b>f4exb</b>
    </a></td><td>-</td><td>Antibes, France</td><td>455</td><td>3</td></tr><tr><td>154</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>444</td><td>3</td></tr><tr><td>155</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>421</td><td>3</td></tr><tr><td>156</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>418</td><td>3</td></tr><tr><td>157</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>408</td><td>3</td></tr><tr><td>158</td><td><a href="https://github.com/laluka">
        <img src="https://avatars.githubusercontent.com/u/7013722?s=72&u=99ab7a21f20471afc4643db1f6fa326d9218cc57&v=4" height="12" />
        <b>laluka</b>
    </a></td><td>ThinkLoveShare</td><td>FRANCE</td><td>387</td><td>3</td></tr><tr><td>159</td><td><a href="https://github.com/kylekatarnls">
        <img src="https://avatars.githubusercontent.com/u/5966783?s=72&v=4" height="12" />
        <b>kylekatarnls</b>
    </a></td><td>-</td><td>France</td><td>371</td><td>3</td></tr><tr><td>160</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>353</td><td>3</td></tr><tr><td>161</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=84bad792fc870bdc31b2a05a06d2c886dd7e42f9&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>341</td><td>3</td></tr><tr><td>162</td><td><a href="https://github.com/Cpasjuste">
        <img src="https://avatars.githubusercontent.com/u/51077?s=72&v=4" height="12" />
        <b>Cpasjuste</b>
    </a></td><td>-</td><td>France</td><td>290</td><td>3</td></tr><tr><td>163</td><td><a href="https://github.com/geromegrignon">
        <img src="https://avatars.githubusercontent.com/u/32737308?s=72&u=65991e3f02f05e572ae435e24659ba65ed5d6005&v=4" height="12" />
        <b>geromegrignon</b>
    </a></td><td>Lucca</td><td>France</td><td>280</td><td>3</td></tr><tr><td>164</td><td><a href="https://github.com/pascalgrimaud">
        <img src="https://avatars.githubusercontent.com/u/9156882?s=72&u=048a3f914bddbb33320df8ec2c7cc22c26f22646&v=4" height="12" />
        <b>pascalgrimaud</b>
    </a></td><td>Freelance</td><td>Lyon, France</td><td>274</td><td>3</td></tr><tr><td>165</td><td><a href="https://github.com/abique">
        <img src="https://avatars.githubusercontent.com/u/31200?s=72&u=19e037bfe18806c410947eba3bab6d8e70c4654d&v=4" height="12" />
        <b>abique</b>
    </a></td><td>@bitwig </td><td>Sisteron, France</td><td>270</td><td>3</td></tr><tr><td>166</td><td><a href="https://github.com/xviniette">
        <img src="https://avatars.githubusercontent.com/u/4215051?s=72&u=e874cefa62c45b8f135ac77ae1b0457e4076d2b3&v=4" height="12" />
        <b>xviniette</b>
    </a></td><td>-</td><td>France, Montpellier</td><td>265</td><td>3</td></tr><tr><td>167</td><td><a href="https://github.com/baptadn">
        <img src="https://avatars.githubusercontent.com/u/1102595?s=72&u=449ce37c0361651279198ca5e178e3410b7d200f&v=4" height="12" />
        <b>baptadn</b>
    </a></td><td>Premier Octet</td><td>Paris</td><td>263</td><td>3</td></tr><tr><td>168</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>251</td><td>3</td></tr><tr><td>169</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>Lyon, France</td><td>247</td><td>3</td></tr><tr><td>170</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>243</td><td>3</td></tr><tr><td>171</td><td><a href="https://github.com/bugsounet">
        <img src="https://avatars.githubusercontent.com/u/30669209?s=72&u=09764eac7a1ed73a3e63048003cb379fe0ee391d&v=4" height="12" />
        <b>bugsounet</b>
    </a></td><td>-</td><td>France</td><td>207</td><td>3</td></tr><tr><td>172</td><td><a href="https://github.com/kevinmarrec">
        <img src="https://avatars.githubusercontent.com/u/25272043?s=72&u=406b360245c00ec63bcfdfbb1171d714030ad3a4&v=4" height="12" />
        <b>kevinmarrec</b>
    </a></td><td>@steeple-org</td><td>Rennes, France</td><td>199</td><td>3</td></tr><tr><td>173</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.29K</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/noraj">
        <img src="https://avatars.githubusercontent.com/u/16578570?s=72&u=a95cbd7b496e688d77205c934c8ef9ebeb273a73&v=4" height="12" />
        <b>noraj</b>
    </a></td><td>Rawsec</td><td>FRANCE</td><td>1.92K</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/bclozel">
        <img src="https://avatars.githubusercontent.com/u/103264?s=72&u=7003334e562971b7b0fabb6bed21b940dce0cf89&v=4" height="12" />
        <b>bclozel</b>
    </a></td><td>Spring team</td><td>Lyon, France</td><td>1.55K</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/lo-th">
        <img src="https://avatars.githubusercontent.com/u/1553208?s=72&u=b7331513e3ccb7d86e20d61cbf685fb0363e2957&v=4" height="12" />
        <b>lo-th</b>
    </a></td><td>3th</td><td>france</td><td>964</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>830</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/fraxken">
        <img src="https://avatars.githubusercontent.com/u/4438263?s=72&u=5e2d0c11f001871b76e25dd3a96bd662d6a706ba&v=4" height="12" />
        <b>fraxken</b>
    </a></td><td>@MyUnisoft</td><td>Paris</td><td>664</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/darrachequesne">
        <img src="https://avatars.githubusercontent.com/u/13031701?s=72&u=f4865fe7225a33a7c187123c47ed8254eba8d40a&v=4" height="12" />
        <b>darrachequesne</b>
    </a></td><td>-</td><td>Lille, France</td><td>575</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>529</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>517</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/glaforge">
        <img src="https://avatars.githubusercontent.com/u/47907?s=72&v=4" height="12" />
        <b>glaforge</b>
    </a></td><td>Google</td><td>Paris, France</td><td>514</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/femtotrader">
        <img src="https://avatars.githubusercontent.com/u/5049737?s=72&v=4" height="12" />
        <b>femtotrader</b>
    </a></td><td>-</td><td>France</td><td>498</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>mrkkrp</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>465</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/guenchi">
        <img src="https://avatars.githubusercontent.com/u/25831936?s=72&u=bfcf8564dd7f8e5fbc69c67223bb87fc9276360a&v=4" height="12" />
        <b>guenchi</b>
    </a></td><td>-</td><td>Paris, France</td><td>427</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/pchaigno">
        <img src="https://avatars.githubusercontent.com/u/1764210?s=72&v=4" height="12" />
        <b>pchaigno</b>
    </a></td><td>Isovalent</td><td>Rennes, France</td><td>415</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/luislavena">
        <img src="https://avatars.githubusercontent.com/u/4182?s=72&u=baab980311df526d41631de7362837955f474076&v=4" height="12" />
        <b>luislavena</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>412</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/matt-42">
        <img src="https://avatars.githubusercontent.com/u/846584?s=72&u=538f0051652ef017ffd90141e1979d73e04042b1&v=4" height="12" />
        <b>matt-42</b>
    </a></td><td>-</td><td>Paris, France</td><td>408</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Fox2Code">
        <img src="https://avatars.githubusercontent.com/u/42963271?s=72&u=eda7b7e168250557f0dacb7b689f5a91dbff4104&v=4" height="12" />
        <b>Fox2Code</b>
    </a></td><td>-</td><td>France</td><td>383</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/xroche">
        <img src="https://avatars.githubusercontent.com/u/4313143?s=72&u=6654239a3b10c8155a29487188f5c642b66bd25d&v=4" height="12" />
        <b>xroche</b>
    </a></td><td>httrack.com</td><td>Paris</td><td>355</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/LelouchFR">
        <img src="https://avatars.githubusercontent.com/u/75901978?s=72&u=e02a223c2f042f614bfa881e4f7c9771d88a4bb0&v=4" height="12" />
        <b>LelouchFR</b>
    </a></td><td>IUT Haguenau</td><td>France</td><td>355</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/Alex-D">
        <img src="https://avatars.githubusercontent.com/u/426843?s=72&u=1d9cd86448135a8b992038c8a43c5833a8157780&v=4" height="12" />
        <b>Alex-D</b>
    </a></td><td>@Spilium, @Colllect, @Monitoror</td><td>Lille, France</td><td>354</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/lihbr">
        <img src="https://avatars.githubusercontent.com/u/25330882?s=72&u=40027b74b9c4fef25782af3d68db978d261ce9cf&v=4" height="12" />
        <b>lihbr</b>
    </a></td><td>@prismicio</td><td>France</td><td>347</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>346</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/stephomi">
        <img src="https://avatars.githubusercontent.com/u/4750281?s=72&u=12cfc00bab02813ea071f8098d749191f5a3748b&v=4" height="12" />
        <b>stephomi</b>
    </a></td><td>Hexanomad</td><td>Paris, France</td><td>346</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/HungryProton">
        <img src="https://avatars.githubusercontent.com/u/52043844?s=72&u=9a018a7316016546d7208a0d6289200e17a283bf&v=4" height="12" />
        <b>HungryProton</b>
    </a></td><td>-</td><td>France</td><td>346</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/kelu124">
        <img src="https://avatars.githubusercontent.com/u/2452634?s=72&u=55b50a96ed1143c6cf84704446464eb7c069daf5&v=4" height="12" />
        <b>kelu124</b>
    </a></td><td>-</td><td>Paris</td><td>335</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/dymafr">
        <img src="https://avatars.githubusercontent.com/u/32801166?s=72&u=54f9519d572841f83c32ef4d2f9fb1afe732088b&v=4" height="12" />
        <b>dymafr</b>
    </a></td><td>Dyma</td><td>France</td><td>323</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>323</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/matbesancon">
        <img src="https://avatars.githubusercontent.com/u/7623090?s=72&u=5a4fa8371bbdd4b7647ebb0ec12d6c3b203f45e3&v=4" height="12" />
        <b>matbesancon</b>
    </a></td><td>Inria</td><td>Grenoble, France</td><td>313</td><td>2</td></tr>
    </tbody>
</table>
