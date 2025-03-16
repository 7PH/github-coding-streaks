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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>412</td><td>1.58K</td></tr><tr><td>🥈</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>338</td><td>1.24K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>221</td><td>1.22K</td></tr><tr><td>4</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>599</td><td>989</td></tr><tr><td>5</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>605</td><td>787</td></tr><tr><td>6</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>701</td><td>558</td></tr><tr><td>7</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.53K</td><td>543</td></tr><tr><td>8</td><td><a href="https://github.com/Bubhux">
        <img src="https://avatars.githubusercontent.com/u/110377006?s=72&u=0309cab6fd716667c5e7e7d50f14c51803135a83&v=4" height="12" />
        <b>Bubhux</b>
    </a></td><td>-</td><td>France</td><td>256</td><td>376</td></tr><tr><td>9</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>343</td><td>217</td></tr><tr><td>10</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>266</td><td>180</td></tr><tr><td>11</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>494</td><td>169</td></tr><tr><td>12</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>336</td><td>166</td></tr><tr><td>13</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>232</td><td>148</td></tr><tr><td>14</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>248</td><td>100</td></tr><tr><td>15</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>218</td><td>94</td></tr><tr><td>16</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>299</td><td>78</td></tr><tr><td>17</td><td><a href="https://github.com/zoriya">
        <img src="https://avatars.githubusercontent.com/u/32224410?s=72&u=966b19ce0af0d82661baaea34396db0526f52f9d&v=4" height="12" />
        <b>zoriya</b>
    </a></td><td>-</td><td>France</td><td>241</td><td>75</td></tr><tr><td>18</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.4K</td><td>74</td></tr><tr><td>19</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>323</td><td>74</td></tr><tr><td>20</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.11K</td><td>71</td></tr><tr><td>21</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>275</td><td>71</td></tr><tr><td>22</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.01K</td><td>67</td></tr><tr><td>23</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>51</td></tr><tr><td>24</td><td><a href="https://github.com/AkechiShiro">
        <img src="https://avatars.githubusercontent.com/u/14914796?s=72&u=467624ac1d1ab89ce51c8e4ba3b37d2f66088582&v=4" height="12" />
        <b>AkechiShiro</b>
    </a></td><td>-</td><td>France</td><td>199</td><td>47</td></tr><tr><td>25</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>272</td><td>45</td></tr><tr><td>26</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>585</td><td>43</td></tr><tr><td>27</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>807</td><td>39</td></tr><tr><td>28</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=fc4800d819397a6bc72c65257ae230c3348b8627&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>427</td><td>38</td></tr><tr><td>29</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>264</td><td>36</td></tr><tr><td>30</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>216</td><td>35</td></tr><tr><td>31</td><td><a href="https://github.com/Kehrlann">
        <img src="https://avatars.githubusercontent.com/u/5676779?s=72&u=98595e18b5106e4526c48d984983ea525890f588&v=4" height="12" />
        <b>Kehrlann</b>
    </a></td><td>@broadcom </td><td>Paris, France</td><td>460</td><td>30</td></tr><tr><td>32</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>344</td><td>30</td></tr><tr><td>33</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>414</td><td>29</td></tr><tr><td>34</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>446</td><td>28</td></tr><tr><td>35</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>248</td><td>28</td></tr><tr><td>36</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>233</td><td>27</td></tr><tr><td>37</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>387</td><td>25</td></tr><tr><td>38</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>913</td><td>21</td></tr><tr><td>39</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>paraboul</b>
    </a></td><td>-</td><td>France</td><td>347</td><td>21</td></tr><tr><td>40</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>252</td><td>21</td></tr><tr><td>41</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>236</td><td>21</td></tr><tr><td>42</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>216</td><td>21</td></tr><tr><td>43</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>373</td><td>20</td></tr><tr><td>44</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>213</td><td>19</td></tr><tr><td>45</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>517</td><td>18</td></tr><tr><td>46</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>480</td><td>18</td></tr><tr><td>47</td><td><a href="https://github.com/Akryum">
        <img src="https://avatars.githubusercontent.com/u/2798204?s=72&u=d45556d7e920c0f57552d1dc1250a7cdb807eddb&v=4" height="12" />
        <b>Akryum</b>
    </a></td><td>-</td><td>France</td><td>5.14K</td><td>17</td></tr><tr><td>48</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris</td><td>2.36K</td><td>17</td></tr><tr><td>49</td><td><a href="https://github.com/BoD">
        <img src="https://avatars.githubusercontent.com/u/372852?s=72&u=7569719a93bcc9da6dbec73e93464aded3bacfb7&v=4" height="12" />
        <b>BoD</b>
    </a></td><td>-</td><td>Paris, France</td><td>203</td><td>16</td></tr><tr><td>50</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.26K</td><td>15</td></tr><tr><td>51</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>511</td><td>15</td></tr><tr><td>52</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Thales</td><td>Paris, France</td><td>329</td><td>15</td></tr><tr><td>53</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>207</td><td>15</td></tr><tr><td>54</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.88K</td><td>14</td></tr><tr><td>55</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>FaridSafi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.8K</td><td>14</td></tr><tr><td>56</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.46K</td><td>14</td></tr><tr><td>57</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>595</td><td>14</td></tr><tr><td>58</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>379</td><td>14</td></tr><tr><td>59</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>328</td><td>14</td></tr><tr><td>60</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>292</td><td>14</td></tr><tr><td>61</td><td><a href="https://github.com/lra">
        <img src="https://avatars.githubusercontent.com/u/122286?s=72&u=5b877e8eca464d7f4351a20c1531828f99db6090&v=4" height="12" />
        <b>lra</b>
    </a></td><td>-</td><td>Toulouse, NY, SF</td><td>267</td><td>14</td></tr><tr><td>62</td><td><a href="https://github.com/alexkirsz">
        <img src="https://avatars.githubusercontent.com/u/1621758?s=72&u=1920fad1c4b2656b527fea8cdfdfbb7d5f51753f&v=4" height="12" />
        <b>alexkirsz</b>
    </a></td><td>-</td><td>Paris</td><td>266</td><td>14</td></tr><tr><td>63</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>260</td><td>14</td></tr><tr><td>64</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=dc9333a6798810e941a0240566fe2a38a5f55bd7&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.44K</td><td>13</td></tr><tr><td>65</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>912</td><td>13</td></tr><tr><td>66</td><td><a href="https://github.com/hussein-aitlahcen">
        <img src="https://avatars.githubusercontent.com/u/9103813?s=72&u=8ae26cf794cdbfc36ce096a69330bc31b582eec1&v=4" height="12" />
        <b>hussein-aitlahcen</b>
    </a></td><td>Block 6.282e+10</td><td>France</td><td>320</td><td>12</td></tr><tr><td>67</td><td><a href="https://github.com/angeluriot">
        <img src="https://avatars.githubusercontent.com/u/46031994?s=72&u=8636531cc02d42681ad0935a16c18c6100ef0feb&v=4" height="12" />
        <b>angeluriot</b>
    </a></td><td>@blablacar</td><td>France</td><td>723</td><td>11</td></tr><tr><td>68</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble</td><td>547</td><td>10</td></tr><tr><td>69</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>425</td><td>10</td></tr><tr><td>70</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=84bad792fc870bdc31b2a05a06d2c886dd7e42f9&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>345</td><td>10</td></tr><tr><td>71</td><td><a href="https://github.com/geromegrignon">
        <img src="https://avatars.githubusercontent.com/u/32737308?s=72&u=65991e3f02f05e572ae435e24659ba65ed5d6005&v=4" height="12" />
        <b>geromegrignon</b>
    </a></td><td>Lucca</td><td>France</td><td>281</td><td>10</td></tr><tr><td>72</td><td><a href="https://github.com/LostInBrittany">
        <img src="https://avatars.githubusercontent.com/u/726476?s=72&u=5f9c71501700a15d727e15fd0ddd699b884d2a11&v=4" height="12" />
        <b>LostInBrittany</b>
    </a></td><td>@CleverCloud</td><td>Brest, Brittany, France</td><td>305</td><td>9</td></tr><tr><td>73</td><td><a href="https://github.com/aymanfarhat">
        <img src="https://avatars.githubusercontent.com/u/823713?s=72&u=5b4b31ed1641df460cebae7853788310d92e9f96&v=4" height="12" />
        <b>aymanfarhat</b>
    </a></td><td>@Google</td><td>Paris</td><td>283</td><td>9</td></tr><tr><td>74</td><td><a href="https://github.com/BUZZARDGTA">
        <img src="https://avatars.githubusercontent.com/u/62464560?s=72&u=7cfb6146a33a4a29064e5d77c481cdd7916428ab&v=4" height="12" />
        <b>BUZZARDGTA</b>
    </a></td><td>IB_U_Z_Z_A_R_Dl</td><td>France</td><td>260</td><td>9</td></tr><tr><td>75</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.28K</td><td>8</td></tr><tr><td>76</td><td><a href="https://github.com/StanGirard">
        <img src="https://avatars.githubusercontent.com/u/19614572?s=72&u=173c2e47345431892f3101b4febe851ea99c08ad&v=4" height="12" />
        <b>StanGirard</b>
    </a></td><td>@QuivrHQ </td><td>Paris</td><td>2.32K</td><td>8</td></tr><tr><td>77</td><td><a href="https://github.com/gregberge">
        <img src="https://avatars.githubusercontent.com/u/266302?s=72&u=7b1d8d84bfbaf6cf8b340896f3cea02da2669c46&v=4" height="12" />
        <b>gregberge</b>
    </a></td><td>Argos</td><td>Paris, France</td><td>2.01K</td><td>8</td></tr><tr><td>78</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>bzg</b>
    </a></td><td>@codegouvfr</td><td>Paris</td><td>799</td><td>8</td></tr><tr><td>79</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>747</td><td>8</td></tr><tr><td>80</td><td><a href="https://github.com/baptisteArno">
        <img src="https://avatars.githubusercontent.com/u/16015833?s=72&u=176af81234c692c3b2ecc37aaae5dbb815fa0a36&v=4" height="12" />
        <b>baptisteArno</b>
    </a></td><td>-</td><td>Paris, France</td><td>606</td><td>8</td></tr><tr><td>81</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>455</td><td>8</td></tr><tr><td>82</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>eko</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>433</td><td>8</td></tr><tr><td>83</td><td><a href="https://github.com/franky47">
        <img src="https://avatars.githubusercontent.com/u/1174092?s=72&u=031f74d0f1d64c317fb1d79b883b42f4434b17d1&v=4" height="12" />
        <b>franky47</b>
    </a></td><td>@47ng | @chiffre-io</td><td>Grenoble, France</td><td>362</td><td>8</td></tr><tr><td>84</td><td><a href="https://github.com/johnvuko">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>johnvuko</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>349</td><td>8</td></tr><tr><td>85</td><td><a href="https://github.com/apierr">
        <img src="https://avatars.githubusercontent.com/u/1194257?s=72&u=d97d044969d4ab3ad7bd97fed446777456d5221a&v=4" height="12" />
        <b>apierr</b>
    </a></td><td>Inria - Nord Europe</td><td>Paris</td><td>327</td><td>8</td></tr><tr><td>86</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>8</td></tr><tr><td>87</td><td><a href="https://github.com/jeherve">
        <img src="https://avatars.githubusercontent.com/u/426388?s=72&u=ab6b17c6d89ec3a3d06b9e352ca6b985f8b0cb3e&v=4" height="12" />
        <b>jeherve</b>
    </a></td><td>Automattic, Inc.</td><td>Brittany, France</td><td>222</td><td>8</td></tr><tr><td>88</td><td><a href="https://github.com/AliSoftware">
        <img src="https://avatars.githubusercontent.com/u/216089?s=72&v=4" height="12" />
        <b>AliSoftware</b>
    </a></td><td>Freelance on iOS Tooling and DX</td><td>Rennes, France</td><td>3.06K</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/GitSquared">
        <img src="https://avatars.githubusercontent.com/u/24496417?s=72&u=161b0a8aa57c55e6bfff0c1ee6ac59aaeeb774f5&v=4" height="12" />
        <b>GitSquared</b>
    </a></td><td>@carbonfact</td><td>Paris, France</td><td>1.87K</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=33f733fea40d7af3b4528613c8c40a015492349c&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.26K</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/arv">
        <img src="https://avatars.githubusercontent.com/u/45845?s=72&v=4" height="12" />
        <b>arv</b>
    </a></td><td>@rocicorp</td><td>Paris</td><td>811</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>zoontek</b>
    </a></td><td>Swan</td><td>Paris</td><td>747</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>740</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/Amxx">
        <img src="https://avatars.githubusercontent.com/u/2432299?s=72&v=4" height="12" />
        <b>Amxx</b>
    </a></td><td>-</td><td>Lyon</td><td>692</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>melix</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>621</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/chalasr">
        <img src="https://avatars.githubusercontent.com/u/7502063?s=72&u=56b8ba0944e917bd324d87ec7c2074665a0e699d&v=4" height="12" />
        <b>chalasr</b>
    </a></td><td>@bakslashHQ</td><td>Lyon, France</td><td>569</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/Wenzel">
        <img src="https://avatars.githubusercontent.com/u/964610?s=72&u=f244bab6b14967638a88cef92752379e64b15996&v=4" height="12" />
        <b>Wenzel</b>
    </a></td><td>-</td><td>Paris, France</td><td>539</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>513</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/sebsto">
        <img src="https://avatars.githubusercontent.com/u/401798?s=72&u=dc5e8355d22fe5bc956c382be7fa9dddbebea5db&v=4" height="12" />
        <b>sebsto</b>
    </a></td><td>Amazon Web Services</td><td>Paris</td><td>498</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/almet">
        <img src="https://avatars.githubusercontent.com/u/67073?s=72&u=603ecb41654c86c052f2e7826ae5dd3d28dfdd29&v=4" height="12" />
        <b>almet</b>
    </a></td><td>-</td><td>France</td><td>450</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/Eschults">
        <img src="https://avatars.githubusercontent.com/u/8090140?s=72&u=8a860a3b8066c1c6fe7ddba93065bd8272c38f45&v=4" height="12" />
        <b>Eschults</b>
    </a></td><td>@lewagon</td><td>Paris</td><td>426</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/ndeloof">
        <img src="https://avatars.githubusercontent.com/u/132757?s=72&v=4" height="12" />
        <b>ndeloof</b>
    </a></td><td>Docker</td><td>Rennes, France</td><td>421</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/raphaelvallat">
        <img src="https://avatars.githubusercontent.com/u/25703792?s=72&u=106689cdafc3ba03b63d8311b08a54344a56d831&v=4" height="12" />
        <b>raphaelvallat</b>
    </a></td><td>ŌURA</td><td>Lyon, France</td><td>416</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/albertvillanova">
        <img src="https://avatars.githubusercontent.com/u/8515462?s=72&u=72a51bbb90c88db85efbc9260c63b0d6adfdfceb&v=4" height="12" />
        <b>albertvillanova</b>
    </a></td><td>@huggingface @aiinnova</td><td>Paris (France)</td><td>406</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>394</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>360</td><td>7</td></tr><tr><td>107</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>354</td><td>7</td></tr><tr><td>108</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>336</td><td>7</td></tr><tr><td>109</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>davidbrochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>334</td><td>7</td></tr><tr><td>110</td><td><a href="https://github.com/benkuper">
        <img src="https://avatars.githubusercontent.com/u/1291595?s=72&u=642b551224f7695f923cf41025d9b1b7b605962e&v=4" height="12" />
        <b>benkuper</b>
    </a></td><td>-</td><td>France</td><td>327</td><td>7</td></tr><tr><td>111</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>309</td><td>7</td></tr><tr><td>112</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>300</td><td>7</td></tr><tr><td>113</td><td><a href="https://github.com/aiekick">
        <img src="https://avatars.githubusercontent.com/u/1434736?s=72&u=41204d71f1aa785ef74f57c0987bc3ae7c32f1f7&v=4" height="12" />
        <b>aiekick</b>
    </a></td><td>-</td><td>France</td><td>274</td><td>7</td></tr><tr><td>114</td><td><a href="https://github.com/xviniette">
        <img src="https://avatars.githubusercontent.com/u/4215051?s=72&u=e874cefa62c45b8f135ac77ae1b0457e4076d2b3&v=4" height="12" />
        <b>xviniette</b>
    </a></td><td>-</td><td>France, Montpellier</td><td>265</td><td>7</td></tr><tr><td>115</td><td><a href="https://github.com/marvinroger">
        <img src="https://avatars.githubusercontent.com/u/990773?s=72&u=1eadb64e486234988a873bc4bc1f7860618573db&v=4" height="12" />
        <b>marvinroger</b>
    </a></td><td>@orus-tech </td><td>Paris, France</td><td>240</td><td>7</td></tr><tr><td>116</td><td><a href="https://github.com/aymeric-roucher">
        <img src="https://avatars.githubusercontent.com/u/69208727?s=72&u=132c8ca18143866b79253a6fcbc10f58984f61ab&v=4" height="12" />
        <b>aymeric-roucher</b>
    </a></td><td>Hugging Face</td><td>Paris</td><td>230</td><td>7</td></tr><tr><td>117</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=b92f9fbc757f5d361de7059b8e69a0eaac1164b5&v=4" height="12" />
        <b>GromNaN</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>227</td><td>7</td></tr><tr><td>118</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=41b673444a231d4b51158f19405660bead34e360&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>221</td><td>7</td></tr><tr><td>119</td><td><a href="https://github.com/charlypoly">
        <img src="https://avatars.githubusercontent.com/u/1252066?s=72&u=a72010bb5154bf3b718fb184c947247614642bb3&v=4" height="12" />
        <b>charlypoly</b>
    </a></td><td>-</td><td>Paris, France</td><td>219</td><td>7</td></tr><tr><td>120</td><td><a href="https://github.com/nfroidure">
        <img src="https://avatars.githubusercontent.com/u/229633?s=72&v=4" height="12" />
        <b>nfroidure</b>
    </a></td><td>@DiagRAMS-Technologies</td><td>Lille - Nord Pas-de-Calais</td><td>211</td><td>7</td></tr><tr><td>121</td><td><a href="https://github.com/asbiin">
        <img src="https://avatars.githubusercontent.com/u/25419741?s=72&u=736357ef23ba1f333a7c72f53971fd94267fd131&v=4" height="12" />
        <b>asbiin</b>
    </a></td><td>@monicahq </td><td>Montreuil, France</td><td>210</td><td>7</td></tr><tr><td>122</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>209</td><td>7</td></tr><tr><td>123</td><td><a href="https://github.com/rm3l">
        <img src="https://avatars.githubusercontent.com/u/593208?s=72&v=4" height="12" />
        <b>rm3l</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>201</td><td>7</td></tr><tr><td>124</td><td><a href="https://github.com/djhi">
        <img src="https://avatars.githubusercontent.com/u/1122076?s=72&u=f0c921a9936a7af17c272ca8857044c079ccd225&v=4" height="12" />
        <b>djhi</b>
    </a></td><td>Marmelab</td><td>Dijon (France)</td><td>200</td><td>7</td></tr><tr><td>125</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>851</td><td>6</td></tr><tr><td>126</td><td><a href="https://github.com/dadoonet">
        <img src="https://avatars.githubusercontent.com/u/274222?s=72&u=5bea3907d13c82eb1b812e92650e400798632c0e&v=4" height="12" />
        <b>dadoonet</b>
    </a></td><td>@elastic</td><td>France, Cergy</td><td>654</td><td>6</td></tr><tr><td>127</td><td><a href="https://github.com/qgallouedec">
        <img src="https://avatars.githubusercontent.com/u/45557362?s=72&u=37cea872e44a4d597f3b9c899add7509044d9ef0&v=4" height="12" />
        <b>qgallouedec</b>
    </a></td><td>@huggingface</td><td>Lyon, France</td><td>526</td><td>6</td></tr><tr><td>128</td><td><a href="https://github.com/thom4parisot">
        <img src="https://avatars.githubusercontent.com/u/138627?s=72&u=02cc8f8fdcfa8f7195ab8db25b0080797da40307&v=4" height="12" />
        <b>thom4parisot</b>
    </a></td><td>détour.studio</td><td>Crest, Drôme, France</td><td>522</td><td>6</td></tr><tr><td>129</td><td><a href="https://github.com/adrien2p">
        <img src="https://avatars.githubusercontent.com/u/25098370?s=72&u=366d976be7b156815c6712f7f8ecf35b3d0ff06e&v=4" height="12" />
        <b>adrien2p</b>
    </a></td><td>Medusajs</td><td>Lyon (France)</td><td>368</td><td>6</td></tr><tr><td>130</td><td><a href="https://github.com/w8r">
        <img src="https://avatars.githubusercontent.com/u/26884?s=72&u=af5d4ece22ded9074d19c05059952f9d428fcf87&v=4" height="12" />
        <b>w8r</b>
    </a></td><td>@Linkurious </td><td>Paris</td><td>351</td><td>6</td></tr><tr><td>131</td><td><a href="https://github.com/cjbrigato">
        <img src="https://avatars.githubusercontent.com/u/680049?s=72&u=6e6b734ff1dfac605b6a378098676d9abf18b33e&v=4" height="12" />
        <b>cjbrigato</b>
    </a></td><td>COLIN BRIGATO E.I.R.L.</td><td>Paris - France</td><td>304</td><td>6</td></tr><tr><td>132</td><td><a href="https://github.com/cedricpinson">
        <img src="https://avatars.githubusercontent.com/u/351686?s=72&u=7f86dfd1afa923b7c0e341ea6f65e652170e2302&v=4" height="12" />
        <b>cedricpinson</b>
    </a></td><td>Sketchfab</td><td>paris</td><td>249</td><td>6</td></tr><tr><td>133</td><td><a href="https://github.com/arguiot">
        <img src="https://avatars.githubusercontent.com/u/18022260?s=72&u=b9efd5c3fc6c179e08b9823f0ed03c4f285a9544&v=4" height="12" />
        <b>arguiot</b>
    </a></td><td>@pr1mer-tech </td><td>San Francisco - Paris</td><td>246</td><td>6</td></tr><tr><td>134</td><td><a href="https://github.com/bugsounet">
        <img src="https://avatars.githubusercontent.com/u/30669209?s=72&u=09764eac7a1ed73a3e63048003cb379fe0ee391d&v=4" height="12" />
        <b>bugsounet</b>
    </a></td><td>-</td><td>France</td><td>208</td><td>6</td></tr><tr><td>135</td><td><a href="https://github.com/damienalexandre">
        <img src="https://avatars.githubusercontent.com/u/225704?s=72&u=0db288d2431f6fd5962b41ea540dbd1299d0e955&v=4" height="12" />
        <b>damienalexandre</b>
    </a></td><td>JoliCode</td><td>Paris, France</td><td>200</td><td>6</td></tr><tr><td>136</td><td><a href="https://github.com/sundowndev">
        <img src="https://avatars.githubusercontent.com/u/16480203?s=72&u=27b8958fdc114d7e7703404441bb611a59d0321f&v=4" height="12" />
        <b>sundowndev</b>
    </a></td><td>-</td><td>France</td><td>3.38K</td><td>5</td></tr><tr><td>137</td><td><a href="https://github.com/potatoqualitee">
        <img src="https://avatars.githubusercontent.com/u/8278033?s=72&u=5a511a15023e5852701b547a867cb56c1dcb21a7&v=4" height="12" />
        <b>potatoqualitee</b>
    </a></td><td>@dataplat</td><td>North of France</td><td>947</td><td>5</td></tr><tr><td>138</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>ArthurSonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>764</td><td>5</td></tr><tr><td>139</td><td><a href="https://github.com/forax">
        <img src="https://avatars.githubusercontent.com/u/828220?s=72&v=4" height="12" />
        <b>forax</b>
    </a></td><td>University Gustave Eiffel (Paris)</td><td>Paris, France</td><td>567</td><td>5</td></tr><tr><td>140</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>519</td><td>5</td></tr><tr><td>141</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>mrkkrp</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>467</td><td>5</td></tr><tr><td>142</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>371</td><td>5</td></tr><tr><td>143</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>329</td><td>5</td></tr><tr><td>144</td><td><a href="https://github.com/vindarel">
        <img src="https://avatars.githubusercontent.com/u/3721004?s=72&u=1dd339c8791cde01920fd5235e5ce82cda9049e4&v=4" height="12" />
        <b>vindarel</b>
    </a></td><td>-</td><td>France</td><td>302</td><td>5</td></tr><tr><td>145</td><td><a href="https://github.com/pirhoo">
        <img src="https://avatars.githubusercontent.com/u/471176?s=72&u=d4e79e7bd6567268635ba5d90a1cbdfd542b9698&v=4" height="12" />
        <b>pirhoo</b>
    </a></td><td>@ICIJ</td><td>Paris</td><td>282</td><td>5</td></tr><tr><td>146</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>252</td><td>5</td></tr><tr><td>147</td><td><a href="https://github.com/princefr">
        <img src="https://avatars.githubusercontent.com/u/11577520?s=72&u=da17af90ca78d019e3e90474abda0073a86b5ed6&v=4" height="12" />
        <b>princefr</b>
    </a></td><td>Swootte</td><td>Paris - France</td><td>228</td><td>5</td></tr><tr><td>148</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.28K</td><td>4</td></tr><tr><td>149</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>3.99K</td><td>4</td></tr><tr><td>150</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.63K</td><td>4</td></tr><tr><td>151</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>2.09K</td><td>4</td></tr><tr><td>152</td><td><a href="https://github.com/mxrch">
        <img src="https://avatars.githubusercontent.com/u/17338428?s=72&u=78e744ba686776918a36fcc0047e2f031e3a3d50&v=4" height="12" />
        <b>mxrch</b>
    </a></td><td>HideAndSec</td><td>France</td><td>1.64K</td><td>4</td></tr><tr><td>153</td><td><a href="https://github.com/glample">
        <img src="https://avatars.githubusercontent.com/u/8885556?s=72&v=4" height="12" />
        <b>glample</b>
    </a></td><td>Facebook AI Research</td><td>Paris</td><td>1.05K</td><td>4</td></tr><tr><td>154</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>971</td><td>4</td></tr><tr><td>155</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>827</td><td>4</td></tr><tr><td>156</td><td><a href="https://github.com/JingMatrix">
        <img src="https://avatars.githubusercontent.com/u/24476093?s=72&u=5e6093f47742325e64925a89a1511a2c848974eb&v=4" height="12" />
        <b>JingMatrix</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>731</td><td>4</td></tr><tr><td>157</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=bced413b47ba8604871f6b4ac28f623f72bcf56d&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>545</td><td>4</td></tr><tr><td>158</td><td><a href="https://github.com/arnaud-lb">
        <img src="https://avatars.githubusercontent.com/u/365207?s=72&u=b7116aa4d644d6b20bed3122a1d03cf8b2a514ee&v=4" height="12" />
        <b>arnaud-lb</b>
    </a></td><td>-</td><td>Paris, France</td><td>488</td><td>4</td></tr><tr><td>159</td><td><a href="https://github.com/samoht">
        <img src="https://avatars.githubusercontent.com/u/103693?s=72&v=4" height="12" />
        <b>samoht</b>
    </a></td><td>@tarides </td><td>Paris, FR</td><td>448</td><td>4</td></tr><tr><td>160</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>444</td><td>4</td></tr><tr><td>161</td><td><a href="https://github.com/David-Guillot">
        <img src="https://avatars.githubusercontent.com/u/1136694?s=72&u=edec3b76e59723a7df71642f62ebc40f11b89f60&v=4" height="12" />
        <b>David-Guillot</b>
    </a></td><td>-</td><td>France</td><td>436</td><td>4</td></tr><tr><td>162</td><td><a href="https://github.com/pommedeterresautee">
        <img src="https://avatars.githubusercontent.com/u/1029874?s=72&v=4" height="12" />
        <b>pommedeterresautee</b>
    </a></td><td>@ELS-RD Lefebvre Sarrut</td><td>Paris, France</td><td>432</td><td>4</td></tr><tr><td>163</td><td><a href="https://github.com/MathisHammel">
        <img src="https://avatars.githubusercontent.com/u/6159437?s=72&u=a53de197adab2db63fd75671f1277043ae6f00b6&v=4" height="12" />
        <b>MathisHammel</b>
    </a></td><td>-</td><td>Paris</td><td>359</td><td>4</td></tr><tr><td>164</td><td><a href="https://github.com/rap2hpoutre">
        <img src="https://avatars.githubusercontent.com/u/1575946?s=72&u=23e0b1c5feb3d6ad4862afd1393ae651b93ff960&v=4" height="12" />
        <b>rap2hpoutre</b>
    </a></td><td>@betagouv</td><td>Nantes</td><td>324</td><td>4</td></tr><tr><td>165</td><td><a href="https://github.com/NiLuJe">
        <img src="https://avatars.githubusercontent.com/u/111974?s=72&v=4" height="12" />
        <b>NiLuJe</b>
    </a></td><td>-</td><td>Paris, France</td><td>316</td><td>4</td></tr><tr><td>166</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>316</td><td>4</td></tr><tr><td>167</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>306</td><td>4</td></tr><tr><td>168</td><td><a href="https://github.com/jpountz">
        <img src="https://avatars.githubusercontent.com/u/299848?s=72&v=4" height="12" />
        <b>jpountz</b>
    </a></td><td>Elasticsearch</td><td>Caen, France</td><td>278</td><td>4</td></tr><tr><td>169</td><td><a href="https://github.com/EiffL">
        <img src="https://avatars.githubusercontent.com/u/861591?s=72&u=49d14cd4b0db6b074c7c010dfc0a32d4d7eac615&v=4" height="12" />
        <b>EiffL</b>
    </a></td><td>-</td><td>Paris / New York City</td><td>278</td><td>4</td></tr><tr><td>170</td><td><a href="https://github.com/avivace">
        <img src="https://avatars.githubusercontent.com/u/14352721?s=72&u=a7dc8be3aa7851dd1521ab77b98bb49749178634&v=4" height="12" />
        <b>avivace</b>
    </a></td><td>@EUROCONTROL</td><td>Paris</td><td>247</td><td>4</td></tr><tr><td>171</td><td><a href="https://github.com/elisee">
        <img src="https://avatars.githubusercontent.com/u/446986?s=72&u=df08e96da70c3f0c00a351bf3c344fb56c02d24d&v=4" height="12" />
        <b>elisee</b>
    </a></td><td>@elisee</td><td>Strasbourg, France</td><td>222</td><td>4</td></tr><tr><td>172</td><td><a href="https://github.com/BenMorel">
        <img src="https://avatars.githubusercontent.com/u/1952838?s=72&v=4" height="12" />
        <b>BenMorel</b>
    </a></td><td>-</td><td>France</td><td>213</td><td>4</td></tr><tr><td>173</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>210</td><td>4</td></tr><tr><td>174</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.29K</td><td>3</td></tr><tr><td>175</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.24K</td><td>3</td></tr><tr><td>176</td><td><a href="https://github.com/furrtek">
        <img src="https://avatars.githubusercontent.com/u/9576434?s=72&u=4fd06068e6cbc2d96f51df02d81bb2bc65ea26ba&v=4" height="12" />
        <b>furrtek</b>
    </a></td><td>-</td><td>France</td><td>757</td><td>3</td></tr><tr><td>177</td><td><a href="https://github.com/cgrand">
        <img src="https://avatars.githubusercontent.com/u/47025?s=72&v=4" height="12" />
        <b>cgrand</b>
    </a></td><td>https://t10s.com/</td><td>Saint-Étienne, France</td><td>687</td><td>3</td></tr><tr><td>178</td><td><a href="https://github.com/artivis">
        <img src="https://avatars.githubusercontent.com/u/6572747?s=72&u=a5ee9abdebcc00d765cfbf4b19353ddfe7a527c6&v=4" height="12" />
        <b>artivis</b>
    </a></td><td>@canonical</td><td>France</td><td>532</td><td>3</td></tr><tr><td>179</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>393</td><td>3</td></tr><tr><td>180</td><td><a href="https://github.com/jbilcke-hf">
        <img src="https://avatars.githubusercontent.com/u/137051437?s=72&u=ace6f9719ec5fbb3c775b4d73f97c2925b4ed5b6&v=4" height="12" />
        <b>jbilcke-hf</b>
    </a></td><td>@huggingface </td><td>Paris, France</td><td>383</td><td>3</td></tr><tr><td>181</td><td><a href="https://github.com/vincelwt">
        <img src="https://avatars.githubusercontent.com/u/5092466?s=72&u=713f9947e4315b6f0ef62ec5cccd978133006783&v=4" height="12" />
        <b>vincelwt</b>
    </a></td><td>Lunary</td><td>France</td><td>374</td><td>3</td></tr><tr><td>182</td><td><a href="https://github.com/hteumeuleu">
        <img src="https://avatars.githubusercontent.com/u/3451753?s=72&u=67220d50a19f8d4caa0a80ed52d41ce928073595&v=4" height="12" />
        <b>hteumeuleu</b>
    </a></td><td>-</td><td>Lille, France</td><td>355</td><td>3</td></tr><tr><td>183</td><td><a href="https://github.com/Yanlry">
        <img src="https://avatars.githubusercontent.com/u/122649131?s=72&u=ed01f26921d8c98ec9c54de3db9568fe88dae0b9&v=4" height="12" />
        <b>Yanlry</b>
    </a></td><td>Fsociety</td><td>Lille, France</td><td>336</td><td>3</td></tr><tr><td>184</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=cd05ef11e7f6a4e0d2800639896c37fa6dd49dc9&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>311</td><td>3</td></tr><tr><td>185</td><td><a href="https://github.com/MeymounB">
        <img src="https://avatars.githubusercontent.com/u/77726988?s=72&u=d12068913a829662f30751a4591327cdbf424ead&v=4" height="12" />
        <b>MeymounB</b>
    </a></td><td>@Next-Generation-Dev</td><td>France</td><td>299</td><td>3</td></tr><tr><td>186</td><td><a href="https://github.com/privefl">
        <img src="https://avatars.githubusercontent.com/u/11161036?s=72&u=bd883039d7f52cd9f97ade17949dab9487a2ccf4&v=4" height="12" />
        <b>privefl</b>
    </a></td><td>National Center for Register-based Research (NCRR, Aarhus University)</td><td>Aarhus, Denmark // Lyon, France</td><td>295</td><td>3</td></tr><tr><td>187</td><td><a href="https://github.com/julien-duponchelle">
        <img src="https://avatars.githubusercontent.com/u/345437?s=72&u=96f73635d5ead651490639acf7dc6b62923d59f5&v=4" height="12" />
        <b>julien-duponchelle</b>
    </a></td><td>-</td><td>Paris</td><td>284</td><td>3</td></tr><tr><td>188</td><td><a href="https://github.com/darold">
        <img src="https://avatars.githubusercontent.com/u/538862?s=72&u=c7f0d89a00a8290d56d6168a3d1a7ab4be36f10d&v=4" height="12" />
        <b>darold</b>
    </a></td><td>-</td><td>France</td><td>255</td><td>3</td></tr><tr><td>189</td><td><a href="https://github.com/Delapouite">
        <img src="https://avatars.githubusercontent.com/u/39315?s=72&v=4" height="12" />
        <b>Delapouite</b>
    </a></td><td>Powipu</td><td>Nantes / Lyon - France</td><td>224</td><td>3</td></tr><tr><td>190</td><td><a href="https://github.com/amineHorseman">
        <img src="https://avatars.githubusercontent.com/u/15238963?s=72&u=991e3dcd209c7f34536868cc6013690fc279c0a5&v=4" height="12" />
        <b>amineHorseman</b>
    </a></td><td>-</td><td>Paris</td><td>206</td><td>3</td></tr><tr><td>191</td><td><a href="https://github.com/valryon">
        <img src="https://avatars.githubusercontent.com/u/155884?s=72&u=115b607498d0b336a0f1648bef3f83ce4b14f5ec&v=4" height="12" />
        <b>valryon</b>
    </a></td><td>Pixelnest Studio</td><td>France</td><td>202</td><td>3</td></tr><tr><td>192</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=6c520432e20d5ed603246764658accea4b4043c3&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>5.02K</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=6517ac662c8a8db80b1fe2c4ef050f0af8ca26cd&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>-</td><td>France</td><td>2.32K</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>nicolas-grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>2K</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/4ian">
        <img src="https://avatars.githubusercontent.com/u/1280130?s=72&u=18f856cccd8f77b611b17865cd8562165c49eeab&v=4" height="12" />
        <b>4ian</b>
    </a></td><td>@GDevelopApp</td><td>Paris, France</td><td>1.93K</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/angristan">
        <img src="https://avatars.githubusercontent.com/u/11699655?s=72&u=03a18584b40e4d9fd656b2120c3e75232960b9ac&v=4" height="12" />
        <b>angristan</b>
    </a></td><td>Backend Engineer @qonto</td><td>Paris</td><td>1.85K</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/Unitech">
        <img src="https://avatars.githubusercontent.com/u/757747?s=72&u=5644df4dbb15f43f738cdadd83069256bbe46950&v=4" height="12" />
        <b>Unitech</b>
    </a></td><td>@keymetrics </td><td>Paris</td><td>1.36K</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.34K</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/Carreau">
        <img src="https://avatars.githubusercontent.com/u/335567?s=72&v=4" height="12" />
        <b>Carreau</b>
    </a></td><td>@Quansight-Labs</td><td>France</td><td>1.33K</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.13K</td><td>2</td></tr>
    </tbody>
</table>
