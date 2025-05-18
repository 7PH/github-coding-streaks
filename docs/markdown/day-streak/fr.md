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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>417</td><td>1.65K</td></tr><tr><td>🥈</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>232</td><td>1.28K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>599</td><td>1.05K</td></tr><tr><td>4</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>682</td><td>850</td></tr><tr><td>5</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>727</td><td>621</td></tr><tr><td>6</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.57K</td><td>606</td></tr><tr><td>7</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>344</td><td>280</td></tr><tr><td>8</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>267</td><td>243</td></tr><tr><td>9</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>509</td><td>232</td></tr><tr><td>10</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>333</td><td>229</td></tr><tr><td>11</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>235</td><td>211</td></tr><tr><td>12</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>315</td><td>141</td></tr><tr><td>13</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>828</td><td>102</td></tr><tr><td>14</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=e53563d16cd220e4901251cc32c332df4496c87c&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>432</td><td>101</td></tr><tr><td>15</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>263</td><td>99</td></tr><tr><td>16</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>350</td><td>93</td></tr><tr><td>17</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>460</td><td>91</td></tr><tr><td>18</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>71</td></tr><tr><td>19</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.39K</td><td>62</td></tr><tr><td>20</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble, France</td><td>570</td><td>50</td></tr><tr><td>21</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>349</td><td>48</td></tr><tr><td>22</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>233</td><td>48</td></tr><tr><td>23</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=b02e3426a7d0cca0c38a58a3085e7bbca87a52e7&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>15.43K</td><td>39</td></tr><tr><td>24</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>264</td><td>36</td></tr><tr><td>25</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>774</td><td>33</td></tr><tr><td>26</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>623</td><td>31</td></tr><tr><td>27</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>895</td><td>28</td></tr><tr><td>28</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.39K</td><td>27</td></tr><tr><td>29</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>416</td><td>23</td></tr><tr><td>30</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>751</td><td>22</td></tr><tr><td>31</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>252</td><td>22</td></tr><tr><td>32</td><td><a href="https://github.com/poolpOrg">
        <img src="https://avatars.githubusercontent.com/u/895503?s=72&u=53309f6d07abe6fed906502aa7cb340d0bb6c465&v=4" height="12" />
        <b>poolpOrg</b>
    </a></td><td>poolp.org</td><td>Nantes, France</td><td>234</td><td>22</td></tr><tr><td>33</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>1.02K</td><td>21</td></tr><tr><td>34</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>742</td><td>21</td></tr><tr><td>35</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>544</td><td>21</td></tr><tr><td>36</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=bc47cbab7ce4b508a5ff9b32ac97396e77503687&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.26K</td><td>19</td></tr><tr><td>37</td><td><a href="https://github.com/SofianeHamlaoui">
        <img src="https://avatars.githubusercontent.com/u/16967174?s=72&u=1357194625eff600acb803134b1413824208ccb5&v=4" height="12" />
        <b>SofianeHamlaoui</b>
    </a></td><td>-</td><td>Lyon, France</td><td>418</td><td>17</td></tr><tr><td>38</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>301</td><td>17</td></tr><tr><td>39</td><td><a href="https://github.com/pradel">
        <img src="https://avatars.githubusercontent.com/u/5749437?s=72&u=ce79dc96b5155bbb542a97840dca53ac266fedf8&v=4" height="12" />
        <b>pradel</b>
    </a></td><td>@sigle </td><td>Toulouse, France</td><td>226</td><td>16</td></tr><tr><td>40</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.48K</td><td>15</td></tr><tr><td>41</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>benjamincanac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux, France</td><td>668</td><td>15</td></tr><tr><td>42</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>630</td><td>15</td></tr><tr><td>43</td><td><a href="https://github.com/redox">
        <img src="https://avatars.githubusercontent.com/u/29529?s=72&v=4" height="12" />
        <b>redox</b>
    </a></td><td>Altertable</td><td>Paris</td><td>363</td><td>15</td></tr><tr><td>44</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>402</td><td>14</td></tr><tr><td>45</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>247</td><td>14</td></tr><tr><td>46</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>261</td><td>13</td></tr><tr><td>47</td><td><a href="https://github.com/lihbr">
        <img src="https://avatars.githubusercontent.com/u/25330882?s=72&u=40027b74b9c4fef25782af3d68db978d261ce9cf&v=4" height="12" />
        <b>lihbr</b>
    </a></td><td>@prismicio</td><td>France</td><td>364</td><td>12</td></tr><tr><td>48</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.71K</td><td>11</td></tr><tr><td>49</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>319</td><td>11</td></tr><tr><td>50</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>nicolas-grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>2.02K</td><td>10</td></tr><tr><td>51</td><td><a href="https://github.com/alexandreruban">
        <img src="https://avatars.githubusercontent.com/u/33979976?s=72&u=55cb7b791cdb7adf94ee02066347b63c0f835fe3&v=4" height="12" />
        <b>alexandreruban</b>
    </a></td><td>-</td><td>Lyon, France</td><td>501</td><td>10</td></tr><tr><td>52</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>217</td><td>10</td></tr><tr><td>53</td><td><a href="https://github.com/patrickheng">
        <img src="https://avatars.githubusercontent.com/u/9051314?s=72&u=5c38c6cf3e902645bcb37c7ca3744b89de422156&v=4" height="12" />
        <b>patrickheng</b>
    </a></td><td>Freelance</td><td>Paris</td><td>795</td><td>9</td></tr><tr><td>54</td><td><a href="https://github.com/gildas-lormeau">
        <img src="https://avatars.githubusercontent.com/u/396787?s=72&u=9c2aeab0c23cb368b4ae3df9e17bc1ba9d8a51ce&v=4" height="12" />
        <b>gildas-lormeau</b>
    </a></td><td>Capsule Code</td><td>Rennes, France</td><td>743</td><td>9</td></tr><tr><td>55</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Outscale France</td><td>Lille</td><td>527</td><td>9</td></tr><tr><td>56</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>377</td><td>9</td></tr><tr><td>57</td><td><a href="https://github.com/arthaud">
        <img src="https://avatars.githubusercontent.com/u/2151557?s=72&u=20726f284e2b9874d52eddf9c2c447a0ac0c5ece&v=4" height="12" />
        <b>arthaud</b>
    </a></td><td>@facebook</td><td>Paris, France</td><td>288</td><td>9</td></tr><tr><td>58</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>244</td><td>9</td></tr><tr><td>59</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=06259cb98f3d65c5901edf488b6bf4ab5f4bccec&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.19K</td><td>8</td></tr><tr><td>60</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>4.24K</td><td>8</td></tr><tr><td>61</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>Antibes, France</td><td>3.94K</td><td>8</td></tr><tr><td>62</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.92K</td><td>8</td></tr><tr><td>63</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.25K</td><td>8</td></tr><tr><td>64</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>451</td><td>8</td></tr><tr><td>65</td><td><a href="https://github.com/nical">
        <img src="https://avatars.githubusercontent.com/u/264854?s=72&u=43290726ca0f48051b8695b452644cc9fc025a85&v=4" height="12" />
        <b>nical</b>
    </a></td><td>Mozilla</td><td>Lyon, France</td><td>447</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/albertvillanova">
        <img src="https://avatars.githubusercontent.com/u/8515462?s=72&u=72a51bbb90c88db85efbc9260c63b0d6adfdfceb&v=4" height="12" />
        <b>albertvillanova</b>
    </a></td><td>@huggingface @aiinnova</td><td>Paris (France)</td><td>437</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>365</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>305</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/dimaMachina">
        <img src="https://avatars.githubusercontent.com/u/7361780?s=72&u=31ad3c2188d690ce38ec9ae437faf8788d34b916&v=4" height="12" />
        <b>dimaMachina</b>
    </a></td><td>hire me</td><td>Paris, France</td><td>242</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.07K</td><td>7</td></tr><tr><td>71</td><td><a href="https://github.com/StanGirard">
        <img src="https://avatars.githubusercontent.com/u/19614572?s=72&u=173c2e47345431892f3101b4febe851ea99c08ad&v=4" height="12" />
        <b>StanGirard</b>
    </a></td><td>@QuivrHQ </td><td>Paris</td><td>2.32K</td><td>7</td></tr><tr><td>72</td><td><a href="https://github.com/slorber">
        <img src="https://avatars.githubusercontent.com/u/749374?s=72&u=d966ea75548708c18bda3d4d2acca2817169639e&v=4" height="12" />
        <b>slorber</b>
    </a></td><td>This Week In React</td><td>Paris</td><td>1.94K</td><td>7</td></tr><tr><td>73</td><td><a href="https://github.com/mxrch">
        <img src="https://avatars.githubusercontent.com/u/17338428?s=72&u=0d4467f33757a8ea5f3404b1e2c1897ceec3df1d&v=4" height="12" />
        <b>mxrch</b>
    </a></td><td>HideAndSec</td><td>France</td><td>1.66K</td><td>7</td></tr><tr><td>74</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.42K</td><td>7</td></tr><tr><td>75</td><td><a href="https://github.com/cderv">
        <img src="https://avatars.githubusercontent.com/u/6791940?s=72&u=a663577929b49c1add41e6d7ffe3210e819c7a4e&v=4" height="12" />
        <b>cderv</b>
    </a></td><td>https://posit.co</td><td>Paris</td><td>591</td><td>7</td></tr><tr><td>76</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=bced413b47ba8604871f6b4ac28f623f72bcf56d&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>560</td><td>7</td></tr><tr><td>77</td><td><a href="https://github.com/Litarvan">
        <img src="https://avatars.githubusercontent.com/u/8712146?s=72&u=18f92332d51cc7b4b0fc26fcfdcc4dd2727c6157&v=4" height="12" />
        <b>Litarvan</b>
    </a></td><td>Stockly</td><td>Paris, France</td><td>539</td><td>7</td></tr><tr><td>78</td><td><a href="https://github.com/millsp">
        <img src="https://avatars.githubusercontent.com/u/18401805?s=72&u=23f17b9bdeccde31d1659d51c5642ca6ecf38117&v=4" height="12" />
        <b>millsp</b>
    </a></td><td>@prisma</td><td>France</td><td>532</td><td>7</td></tr><tr><td>79</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>529</td><td>7</td></tr><tr><td>80</td><td><a href="https://github.com/Kehrlann">
        <img src="https://avatars.githubusercontent.com/u/5676779?s=72&u=98595e18b5106e4526c48d984983ea525890f588&v=4" height="12" />
        <b>Kehrlann</b>
    </a></td><td>@broadcom </td><td>Paris, France</td><td>515</td><td>7</td></tr><tr><td>81</td><td><a href="https://github.com/ndeloof">
        <img src="https://avatars.githubusercontent.com/u/132757?s=72&v=4" height="12" />
        <b>ndeloof</b>
    </a></td><td>Docker</td><td>Rennes, France</td><td>434</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/charlesBochet">
        <img src="https://avatars.githubusercontent.com/u/12035771?s=72&u=d630d76a6340dbc94ecacfe80be2095b4548c376&v=4" height="12" />
        <b>charlesBochet</b>
    </a></td><td>Twenty</td><td>Paris</td><td>396</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/veloce">
        <img src="https://avatars.githubusercontent.com/u/423393?s=72&v=4" height="12" />
        <b>veloce</b>
    </a></td><td>lichess.org</td><td>France</td><td>366</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=84bad792fc870bdc31b2a05a06d2c886dd7e42f9&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>354</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/sinedied">
        <img src="https://avatars.githubusercontent.com/u/593151?s=72&u=08557bbdd96221813b8aec932dd7de895ac040ea&v=4" height="12" />
        <b>sinedied</b>
    </a></td><td>@Microsoft</td><td>France</td><td>319</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>313</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/krokrob">
        <img src="https://avatars.githubusercontent.com/u/9978111?s=72&u=c37facf1cbac09f637751b492b6026e927b67b6c&v=4" height="12" />
        <b>krokrob</b>
    </a></td><td>@lewagon </td><td>Paris</td><td>294</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/thbar">
        <img src="https://avatars.githubusercontent.com/u/10141?s=72&u=41c21f0cc2eb57c17dd9533bebad9c4d34bae89d&v=4" height="12" />
        <b>thbar</b>
    </a></td><td>LoGeek (ETL, data processing, SaaS products, RubyOnRails, Elixir)</td><td>Saintes, France</td><td>287</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/DamienCassou">
        <img src="https://avatars.githubusercontent.com/u/217543?s=72&v=4" height="12" />
        <b>DamienCassou</b>
    </a></td><td>finsit @ Wolters Kluwer</td><td>Brest, France</td><td>276</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/sharovatov">
        <img src="https://avatars.githubusercontent.com/u/1388600?s=72&u=b2e2a053c9af68e137a041a0e817b78dee93be86&v=4" height="12" />
        <b>sharovatov</b>
    </a></td><td>-</td><td>Marseille, France</td><td>256</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>248</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>233</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>-</td><td>Paris, France</td><td>217</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>215</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/wtarreau">
        <img src="https://avatars.githubusercontent.com/u/8141789?s=72&u=e9359a488ad99600a4b9393a83c0f736c29ba401&v=4" height="12" />
        <b>wtarreau</b>
    </a></td><td>HAProxy Technologies</td><td>France</td><td>213</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/nfroidure">
        <img src="https://avatars.githubusercontent.com/u/229633?s=72&v=4" height="12" />
        <b>nfroidure</b>
    </a></td><td>@DiagRAMS-Technologies</td><td>Lille - Nord Pas-de-Calais</td><td>212</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/kevin-mizu">
        <img src="https://avatars.githubusercontent.com/u/48991194?s=72&u=72ef2a7ae809443b13afc2f7d661962d2051f812&v=4" height="12" />
        <b>kevin-mizu</b>
    </a></td><td>-</td><td>France</td><td>205</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/kizu">
        <img src="https://avatars.githubusercontent.com/u/177485?s=72&u=4d84ea69f3e98cc16d9daf0c5e7e2ca09c9efad7&v=4" height="12" />
        <b>kizu</b>
    </a></td><td>@DataDog</td><td>France</td><td>824</td><td>6</td></tr><tr><td>99</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>787</td><td>6</td></tr><tr><td>100</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>eko</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>435</td><td>6</td></tr><tr><td>101</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>340</td><td>6</td></tr><tr><td>102</td><td><a href="https://github.com/noirbizarre">
        <img src="https://avatars.githubusercontent.com/u/15725?s=72&u=24aa7a44ae7c957043e6a39675c3546d2f925a46&v=4" height="12" />
        <b>noirbizarre</b>
    </a></td><td>@apihackers @LedgerHQ </td><td>Paris, France</td><td>255</td><td>6</td></tr><tr><td>103</td><td><a href="https://github.com/arnaud-lb">
        <img src="https://avatars.githubusercontent.com/u/365207?s=72&u=b7116aa4d644d6b20bed3122a1d03cf8b2a514ee&v=4" height="12" />
        <b>arnaud-lb</b>
    </a></td><td>-</td><td>Paris, France</td><td>498</td><td>5</td></tr><tr><td>104</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>282</td><td>5</td></tr><tr><td>105</td><td><a href="https://github.com/jderusse">
        <img src="https://avatars.githubusercontent.com/u/578547?s=72&u=df76d0514c86209a3fff8c9fb9d15ae8592c43c9&v=4" height="12" />
        <b>jderusse</b>
    </a></td><td>Blackfire</td><td>Paris, France</td><td>273</td><td>5</td></tr><tr><td>106</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>4.2K</td><td>4</td></tr><tr><td>107</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.6K</td><td>4</td></tr><tr><td>108</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.05K</td><td>4</td></tr><tr><td>109</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>858</td><td>4</td></tr><tr><td>110</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>469</td><td>4</td></tr><tr><td>111</td><td><a href="https://github.com/cyyynthia">
        <img src="https://avatars.githubusercontent.com/u/9999055?s=72&u=c2ca323c4b12e47ae04f433c0dd118f252c9c636&v=4" height="12" />
        <b>cyyynthia</b>
    </a></td><td>@Borkenware</td><td>Toulouse, France</td><td>401</td><td>4</td></tr><tr><td>112</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>374</td><td>4</td></tr><tr><td>113</td><td><a href="https://github.com/MichaelMure">
        <img src="https://avatars.githubusercontent.com/u/294669?s=72&u=68632a70dd599298a95e9476d439f5320d07e216&v=4" height="12" />
        <b>MichaelMure</b>
    </a></td><td>@INFURA </td><td>France</td><td>316</td><td>4</td></tr><tr><td>114</td><td><a href="https://github.com/cjbrigato">
        <img src="https://avatars.githubusercontent.com/u/680049?s=72&u=6e6b734ff1dfac605b6a378098676d9abf18b33e&v=4" height="12" />
        <b>cjbrigato</b>
    </a></td><td>COLIN BRIGATO E.I.R.L.</td><td>Paris - France</td><td>308</td><td>4</td></tr><tr><td>115</td><td><a href="https://github.com/ramnes">
        <img src="https://avatars.githubusercontent.com/u/835072?s=72&u=3fca03c3ba0051e2eb652b1def2188a94d1e1dc2&v=4" height="12" />
        <b>ramnes</b>
    </a></td><td>@formalco</td><td>Paris, France</td><td>273</td><td>4</td></tr><tr><td>116</td><td><a href="https://github.com/erebe">
        <img src="https://avatars.githubusercontent.com/u/854278?s=72&u=e5043ea27db3f1357f92193b770aa32559e69869&v=4" height="12" />
        <b>erebe</b>
    </a></td><td>-</td><td>Paris</td><td>266</td><td>4</td></tr><tr><td>117</td><td><a href="https://github.com/erossignon">
        <img src="https://avatars.githubusercontent.com/u/680220?s=72&v=4" height="12" />
        <b>erossignon</b>
    </a></td><td>Sterfive</td><td>France</td><td>253</td><td>4</td></tr><tr><td>118</td><td><a href="https://github.com/Alexays">
        <img src="https://avatars.githubusercontent.com/u/13947260?s=72&u=8da5ea8627d2c2418d6cb08221e9febb3a95f997&v=4" height="12" />
        <b>Alexays</b>
    </a></td><td>@Screebapp</td><td>Nantes, France</td><td>245</td><td>4</td></tr><tr><td>119</td><td><a href="https://github.com/leoetlino">
        <img src="https://avatars.githubusercontent.com/u/4209061?s=72&v=4" height="12" />
        <b>leoetlino</b>
    </a></td><td>-</td><td>Paris</td><td>229</td><td>4</td></tr><tr><td>120</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>219</td><td>4</td></tr><tr><td>121</td><td><a href="https://github.com/Romakita">
        <img src="https://avatars.githubusercontent.com/u/1763311?s=72&u=29dc6efc281f9b8c8de20eab797b894fed5e57d9&v=4" height="12" />
        <b>Romakita</b>
    </a></td><td>Zenika</td><td>Ile-de-france, France</td><td>205</td><td>4</td></tr><tr><td>122</td><td><a href="https://github.com/vdaubry">
        <img src="https://avatars.githubusercontent.com/u/498298?s=72&u=59fed465b4561ad78769951c38e14229f13930f7&v=4" height="12" />
        <b>vdaubry</b>
    </a></td><td>Corpogames</td><td>Paris</td><td>204</td><td>4</td></tr><tr><td>123</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.29K</td><td>3</td></tr><tr><td>124</td><td><a href="https://github.com/gni">
        <img src="https://avatars.githubusercontent.com/u/42606?s=72&u=8ddf7bc0054a90aeca93cc6a35377a3e72ef9f74&v=4" height="12" />
        <b>gni</b>
    </a></td><td>-</td><td>France</td><td>2.24K</td><td>3</td></tr><tr><td>125</td><td><a href="https://github.com/anisayari">
        <img src="https://avatars.githubusercontent.com/u/10380894?s=72&u=de70d00813bc80c2b3ecf184583743c058534eee&v=4" height="12" />
        <b>anisayari</b>
    </a></td><td>-</td><td>Paris Area</td><td>1.57K</td><td>3</td></tr><tr><td>126</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.15K</td><td>3</td></tr><tr><td>127</td><td><a href="https://github.com/dimitri">
        <img src="https://avatars.githubusercontent.com/u/102900?s=72&v=4" height="12" />
        <b>dimitri</b>
    </a></td><td>@citusdata</td><td>Paris, France</td><td>1.14K</td><td>3</td></tr><tr><td>128</td><td><a href="https://github.com/Bleuje">
        <img src="https://avatars.githubusercontent.com/u/17087687?s=72&u=43aeff24919f3b82dec581293d2f9df51bcfb187&v=4" height="12" />
        <b>Bleuje</b>
    </a></td><td>-</td><td>Paris</td><td>1.14K</td><td>3</td></tr><tr><td>129</td><td><a href="https://github.com/lo-th">
        <img src="https://avatars.githubusercontent.com/u/1553208?s=72&u=b7331513e3ccb7d86e20d61cbf685fb0363e2957&v=4" height="12" />
        <b>lo-th</b>
    </a></td><td>3th</td><td>france</td><td>986</td><td>3</td></tr><tr><td>130</td><td><a href="https://github.com/Shipow">
        <img src="https://avatars.githubusercontent.com/u/976175?s=72&u=159c3493dda0865aab7f00e8ab6f5fc53ea40b4d&v=4" height="12" />
        <b>Shipow</b>
    </a></td><td>UX Devsigner @Algolia</td><td>Paris – SF</td><td>868</td><td>3</td></tr><tr><td>131</td><td><a href="https://github.com/eliemichel">
        <img src="https://avatars.githubusercontent.com/u/5802849?s=72&v=4" height="12" />
        <b>eliemichel</b>
    </a></td><td>@adobe</td><td>Paris</td><td>854</td><td>3</td></tr><tr><td>132</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>ArthurSonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>786</td><td>3</td></tr><tr><td>133</td><td><a href="https://github.com/anotherhadi">
        <img src="https://avatars.githubusercontent.com/u/112569860?s=72&u=03d5a0bb87355b24b8082e50d564f5c12cf58b5a&v=4" height="12" />
        <b>anotherhadi</b>
    </a></td><td>-</td><td>France</td><td>630</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/Wenzel">
        <img src="https://avatars.githubusercontent.com/u/964610?s=72&u=7e6b8dd82339fe0349e7359908accf5543d95b8d&v=4" height="12" />
        <b>Wenzel</b>
    </a></td><td>-</td><td>Paris, France</td><td>542</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>542</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/regismeyssonnier">
        <img src="https://avatars.githubusercontent.com/u/67794100?s=72&u=1ca7e47b4be58f6c409722e62e51987325889cba&v=4" height="12" />
        <b>regismeyssonnier</b>
    </a></td><td>RM</td><td>France</td><td>497</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/fredrik-johansson">
        <img src="https://avatars.githubusercontent.com/u/368838?s=72&u=33a576c5ece3772cf74c9bc302a6148b7d9a767a&v=4" height="12" />
        <b>fredrik-johansson</b>
    </a></td><td>INRIA & Institut de Mathématiques de Bordeaux</td><td>Bordeaux, France</td><td>349</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/tpetazzoni">
        <img src="https://avatars.githubusercontent.com/u/1089203?s=72&v=4" height="12" />
        <b>tpetazzoni</b>
    </a></td><td>Bootlin @bootlin </td><td>Toulouse, France</td><td>347</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>333</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>331</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/mickaelandrieu">
        <img src="https://avatars.githubusercontent.com/u/1247388?s=72&u=0506c42c2e317634cd1b3bc2144e5981bc3ec7e4&v=4" height="12" />
        <b>mickaelandrieu</b>
    </a></td><td>SolvoLabs</td><td>Bordeaux, France</td><td>296</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/skarnet">
        <img src="https://avatars.githubusercontent.com/u/11243542?s=72&u=7e701b7a85d1ab24444160e78302d9d9eb9d056a&v=4" height="12" />
        <b>skarnet</b>
    </a></td><td>skarnet.com</td><td>Paris, France</td><td>294</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/MrArnaudMichel">
        <img src="https://avatars.githubusercontent.com/u/87248697?s=72&u=3ced1cd1b0fde42c6e1a1a04eadcf7e8eb1345b3&v=4" height="12" />
        <b>MrArnaudMichel</b>
    </a></td><td>UTBM</td><td>France</td><td>279</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/clarus">
        <img src="https://avatars.githubusercontent.com/u/316665?s=72&u=18aacb0561d43abcf7ecca90bebbf753b655ee75&v=4" height="12" />
        <b>clarus</b>
    </a></td><td>Formal Land</td><td>Paris</td><td>276</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>270</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/vrabaud">
        <img src="https://avatars.githubusercontent.com/u/700766?s=72&v=4" height="12" />
        <b>vrabaud</b>
    </a></td><td>OpenCV Foundation</td><td>Paris, France</td><td>248</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/TheFrenchGhosty">
        <img src="https://avatars.githubusercontent.com/u/47571719?s=72&u=ae1807913bede5073ccb6adf33979a50e2c80db4&v=4" height="12" />
        <b>TheFrenchGhosty</b>
    </a></td><td>Currently Unemployed</td><td>Normandy, France</td><td>244</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/Fantomas42">
        <img src="https://avatars.githubusercontent.com/u/100376?s=72&v=4" height="12" />
        <b>Fantomas42</b>
    </a></td><td>-</td><td>Paris, France</td><td>232</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/valryon">
        <img src="https://avatars.githubusercontent.com/u/155884?s=72&u=115b607498d0b336a0f1648bef3f83ce4b14f5ec&v=4" height="12" />
        <b>valryon</b>
    </a></td><td>Pixelnest Studio</td><td>France</td><td>204</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/gentilkiwi">
        <img src="https://avatars.githubusercontent.com/u/2307945?s=72&v=4" height="12" />
        <b>gentilkiwi</b>
    </a></td><td>@BdF-LabSec</td><td>France</td><td>4.35K</td><td>2</td></tr><tr><td>151</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.28K</td><td>2</td></tr><tr><td>152</td><td><a href="https://github.com/p0dalirius">
        <img src="https://avatars.githubusercontent.com/u/79218792?s=72&u=f6b0f27134df6083787490cfcd2ccfdbd5eb70d6&v=4" height="12" />
        <b>p0dalirius</b>
    </a></td><td>Podalirius Labs</td><td>France</td><td>1.98K</td><td>2</td></tr><tr><td>153</td><td><a href="https://github.com/AlexNesvit">
        <img src="https://avatars.githubusercontent.com/u/150135366?s=72&u=2f973e23d445516368819dd7aa38ef2fc88c970a&v=4" height="12" />
        <b>AlexNesvit</b>
    </a></td><td>Web Planet Studio</td><td>La Ciotat, France</td><td>1.77K</td><td>2</td></tr><tr><td>154</td><td><a href="https://github.com/DarkCoderSc">
        <img src="https://avatars.githubusercontent.com/u/2520298?s=72&u=e07f879d368bf5906418c621de8a6923b31de81c&v=4" height="12" />
        <b>DarkCoderSc</b>
    </a></td><td>Phrozen</td><td>France</td><td>1.66K</td><td>2</td></tr><tr><td>155</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>-</td><td>Grenoble - France</td><td>1.49K</td><td>2</td></tr><tr><td>156</td><td><a href="https://github.com/gpeyre">
        <img src="https://avatars.githubusercontent.com/u/5560142?s=72&u=9f79459e385cc0235e09dea7253f0062fd04dc08&v=4" height="12" />
        <b>gpeyre</b>
    </a></td><td>CNRS</td><td>Paris</td><td>1.38K</td><td>2</td></tr><tr><td>157</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.27K</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/MaxHalford">
        <img src="https://avatars.githubusercontent.com/u/8095957?s=72&u=a2b8377ac29978e4268b713834185198f08b9eef&v=4" height="12" />
        <b>MaxHalford</b>
    </a></td><td>@carbonfact</td><td>France</td><td>1.03K</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.02K</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/mlabouardy">
        <img src="https://avatars.githubusercontent.com/u/10320205?s=72&u=022b2dc0e4696d43258b8364ca7e869aeb18181b&v=4" height="12" />
        <b>mlabouardy</b>
    </a></td><td>@tailwarden</td><td>Paris, France</td><td>765</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>731</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/Chocapikk">
        <img src="https://avatars.githubusercontent.com/u/88535377?s=72&u=badd74b326c25b71d3a0d333c40f720bc3bc98d1&v=4" height="12" />
        <b>Chocapikk</b>
    </a></td><td>Balgo Security</td><td>France</td><td>730</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/nabla-c0d3">
        <img src="https://avatars.githubusercontent.com/u/1915165?s=72&u=e583ff7b079ed660d12b304503d0b0cfaf82856b&v=4" height="12" />
        <b>nabla-c0d3</b>
    </a></td><td>-</td><td>Paris & San Francisco</td><td>691</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/davidebbo">
        <img src="https://avatars.githubusercontent.com/u/556238?s=72&v=4" height="12" />
        <b>davidebbo</b>
    </a></td><td>-</td><td>Paris, France</td><td>661</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/forax">
        <img src="https://avatars.githubusercontent.com/u/828220?s=72&v=4" height="12" />
        <b>forax</b>
    </a></td><td>University Gustave Eiffel (Paris)</td><td>Paris, France</td><td>581</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/davidgohel">
        <img src="https://avatars.githubusercontent.com/u/4331618?s=72&v=4" height="12" />
        <b>davidgohel</b>
    </a></td><td>ArData</td><td>Paris</td><td>567</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/artivis">
        <img src="https://avatars.githubusercontent.com/u/6572747?s=72&u=a5ee9abdebcc00d765cfbf4b19353ddfe7a527c6&v=4" height="12" />
        <b>artivis</b>
    </a></td><td>@canonical</td><td>France</td><td>532</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>504</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/ProcessusT">
        <img src="https://avatars.githubusercontent.com/u/13833925?s=72&u=3a6d029cb8d1e86f2cea2d6f715458d4dcea5656&v=4" height="12" />
        <b>ProcessusT</b>
    </a></td><td>Les tutos de Processus</td><td>Reims, France</td><td>503</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>456</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>453</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/piitaya">
        <img src="https://avatars.githubusercontent.com/u/5878303?s=72&u=ab28a992669ff3369d3f23bebe1313e7b3fbee0b&v=4" height="12" />
        <b>piitaya</b>
    </a></td><td>@home-assistant @OpenHomeFoundation</td><td>Lille</td><td>420</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/RobinDavid">
        <img src="https://avatars.githubusercontent.com/u/1887063?s=72&u=0a61b1b95de647e0392b3596d6d451dc1e05401e&v=4" height="12" />
        <b>RobinDavid</b>
    </a></td><td>Quarkslab</td><td>Paris, France</td><td>383</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/kylekatarnls">
        <img src="https://avatars.githubusercontent.com/u/5966783?s=72&v=4" height="12" />
        <b>kylekatarnls</b>
    </a></td><td>-</td><td>France</td><td>372</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/NouamaneTazi">
        <img src="https://avatars.githubusercontent.com/u/29777165?s=72&u=8d54f7bff7ab08bc4d181547d4453eac8eda2d2a&v=4" height="12" />
        <b>NouamaneTazi</b>
    </a></td><td>@huggingface</td><td>Paris, France</td><td>366</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/hteumeuleu">
        <img src="https://avatars.githubusercontent.com/u/3451753?s=72&u=67220d50a19f8d4caa0a80ed52d41ce928073595&v=4" height="12" />
        <b>hteumeuleu</b>
    </a></td><td>-</td><td>Lille, France</td><td>359</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>358</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/gabrieldemarmiesse">
        <img src="https://avatars.githubusercontent.com/u/12891691?s=72&u=7f49c0407749c186e5df5e1cecb8b2daa47846e3&v=4" height="12" />
        <b>gabrieldemarmiesse</b>
    </a></td><td>-</td><td>Paris, France</td><td>307</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/llenotre">
        <img src="https://avatars.githubusercontent.com/u/66486624?s=72&u=7da2690ef9c531b23456974d6b33dd5c56f16119&v=4" height="12" />
        <b>llenotre</b>
    </a></td><td>CleverCloud</td><td>France</td><td>301</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>300</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/abique">
        <img src="https://avatars.githubusercontent.com/u/31200?s=72&u=19e037bfe18806c410947eba3bab6d8e70c4654d&v=4" height="12" />
        <b>abique</b>
    </a></td><td>@bitwig </td><td>Sisteron, France</td><td>280</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/elbywan">
        <img src="https://avatars.githubusercontent.com/u/3428394?s=72&u=88d0088a68dd5e71c49063a5f97fe04d34d1e6ae&v=4" height="12" />
        <b>elbywan</b>
    </a></td><td>Datadog</td><td>Paris, France</td><td>276</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/harryjmg">
        <img src="https://avatars.githubusercontent.com/u/7394780?s=72&u=023539d62ce43f4941c72322bad57ad6d293647a&v=4" height="12" />
        <b>harryjmg</b>
    </a></td><td>JMG Harry</td><td>France</td><td>270</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/AdilZouitine">
        <img src="https://avatars.githubusercontent.com/u/24889239?s=72&u=f73d19686baca7decb0958da8f1f3836d04c641f&v=4" height="12" />
        <b>AdilZouitine</b>
    </a></td><td>@HuggingFace</td><td>Paris, France</td><td>266</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/Bubhux">
        <img src="https://avatars.githubusercontent.com/u/110377006?s=72&u=0309cab6fd716667c5e7e7d50f14c51803135a83&v=4" height="12" />
        <b>Bubhux</b>
    </a></td><td>-</td><td>France</td><td>265</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/mkcor">
        <img src="https://avatars.githubusercontent.com/u/2227806?s=72&u=5320031216d435cd2bb0259a116a5623108c9b26&v=4" height="12" />
        <b>mkcor</b>
    </a></td><td>-</td><td>Strasbourg, France</td><td>262</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/Pierstoval">
        <img src="https://avatars.githubusercontent.com/u/3369266?s=72&u=cd40e98364c064016bdef62d5442d93c8b2a19a0&v=4" height="12" />
        <b>Pierstoval</b>
    </a></td><td>@Orbitaleio / @Orbitale - @StudioAgate</td><td>France</td><td>261</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/geowarin">
        <img src="https://avatars.githubusercontent.com/u/1045636?s=72&v=4" height="12" />
        <b>geowarin</b>
    </a></td><td>Freelancer</td><td>Paris, France</td><td>253</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>France</td><td>249</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/PricelessToolkit">
        <img src="https://avatars.githubusercontent.com/u/81021972?s=72&u=e119f07ebe1617efa01a94745c8c4d1f13b2c0cf&v=4" height="12" />
        <b>PricelessToolkit</b>
    </a></td><td>PricelessToolkit</td><td>France</td><td>247</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/buybackoff">
        <img src="https://avatars.githubusercontent.com/u/489852?s=72&u=1e80a12d74166139c18595010635a9547cc8e467&v=4" height="12" />
        <b>buybackoff</b>
    </a></td><td>-</td><td>Paris</td><td>240</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>233</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/ISSOtm">
        <img src="https://avatars.githubusercontent.com/u/15271137?s=72&u=e1646d5c0c78ac164e86bd5f171ca38bb10deb7c&v=4" height="12" />
        <b>ISSOtm</b>
    </a></td><td>@osdyne</td><td>France</td><td>229</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/jnizet">
        <img src="https://avatars.githubusercontent.com/u/1608223?s=72&v=4" height="12" />
        <b>jnizet</b>
    </a></td><td>-</td><td>Lyon</td><td>206</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/guillaumebriday">
        <img src="https://avatars.githubusercontent.com/u/8252238?s=72&u=c34e53afee0a1d7e6b1a8112f8bb875c51fcd657&v=4" height="12" />
        <b>guillaumebriday</b>
    </a></td><td>@spendhq</td><td>Lyon, France</td><td>587</td><td>1</td></tr><tr><td>196</td><td><a href="https://github.com/patcito">
        <img src="https://avatars.githubusercontent.com/u/26435?s=72&v=4" height="12" />
        <b>patcito</b>
    </a></td><td>-</td><td>Paris, France</td><td>343</td><td>1</td></tr><tr><td>197</td><td><a href="https://github.com/joel-costigliola">
        <img src="https://avatars.githubusercontent.com/u/382613?s=72&u=949d272a648f69a6c2d8c7f8ed818fc82aa10749&v=4" height="12" />
        <b>joel-costigliola</b>
    </a></td><td>Agicap</td><td>France</td><td>233</td><td>1</td></tr>
    </tbody>
</table>
