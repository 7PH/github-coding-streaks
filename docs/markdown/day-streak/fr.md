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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>414</td><td>1.61K</td></tr><tr><td>🥈</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>226</td><td>1.25K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>598</td><td>1.02K</td></tr><tr><td>4</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>634</td><td>815</td></tr><tr><td>5</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>715</td><td>586</td></tr><tr><td>6</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.55K</td><td>571</td></tr><tr><td>7</td><td><a href="https://github.com/hugomd">
        <img src="https://avatars.githubusercontent.com/u/1646536?s=72&u=fd30e2bd322769f78c4e5f8091407b1cfb4794b6&v=4" height="12" />
        <b>hugomd</b>
    </a></td><td>@CashApp @Block</td><td>Lyon, France</td><td>493</td><td>519</td></tr><tr><td>8</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>346</td><td>245</td></tr><tr><td>9</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>267</td><td>208</td></tr><tr><td>10</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>498</td><td>197</td></tr><tr><td>11</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>334</td><td>194</td></tr><tr><td>12</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>234</td><td>176</td></tr><tr><td>13</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>230</td><td>122</td></tr><tr><td>14</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>306</td><td>106</td></tr><tr><td>15</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.41K</td><td>102</td></tr><tr><td>16</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.15K</td><td>99</td></tr><tr><td>17</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>302</td><td>99</td></tr><tr><td>18</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.03K</td><td>95</td></tr><tr><td>19</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>79</td></tr><tr><td>20</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>277</td><td>73</td></tr><tr><td>21</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>813</td><td>67</td></tr><tr><td>22</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=fc4800d819397a6bc72c65257ae230c3348b8627&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>431</td><td>66</td></tr><tr><td>23</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>262</td><td>64</td></tr><tr><td>24</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>347</td><td>58</td></tr><tr><td>25</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>454</td><td>56</td></tr><tr><td>26</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>969</td><td>49</td></tr><tr><td>27</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>212</td><td>47</td></tr><tr><td>28</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>524</td><td>46</td></tr><tr><td>29</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris, France</td><td>2.41K</td><td>45</td></tr><tr><td>30</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>FaridSafi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.8K</td><td>42</td></tr><tr><td>31</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.47K</td><td>42</td></tr><tr><td>32</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>751</td><td>36</td></tr><tr><td>33</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>320</td><td>36</td></tr><tr><td>34</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>397</td><td>35</td></tr><tr><td>35</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>859</td><td>34</td></tr><tr><td>36</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>617</td><td>22</td></tr><tr><td>37</td><td><a href="https://github.com/rm3l">
        <img src="https://avatars.githubusercontent.com/u/593208?s=72&v=4" height="12" />
        <b>rm3l</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>205</td><td>21</td></tr><tr><td>38</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.33K</td><td>20</td></tr><tr><td>39</td><td><a href="https://github.com/ccamel">
        <img src="https://avatars.githubusercontent.com/u/9574336?s=72&u=5d1de8c7eaf3289162c88956747465a8ed570d66&v=4" height="12" />
        <b>ccamel</b>
    </a></td><td>@axone-protocol</td><td>Toulouse</td><td>444</td><td>17</td></tr><tr><td>40</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>316</td><td>16</td></tr><tr><td>41</td><td><a href="https://github.com/Fantomas42">
        <img src="https://avatars.githubusercontent.com/u/100376?s=72&v=4" height="12" />
        <b>Fantomas42</b>
    </a></td><td>-</td><td>Paris, France</td><td>229</td><td>16</td></tr><tr><td>42</td><td><a href="https://github.com/simongravelle">
        <img src="https://avatars.githubusercontent.com/u/43388542?s=72&u=16bc101821423023268d74e239583cbcc21b3881&v=4" height="12" />
        <b>simongravelle</b>
    </a></td><td>LIPhy</td><td>Grenoble, France</td><td>562</td><td>15</td></tr><tr><td>43</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>475</td><td>15</td></tr><tr><td>44</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>215</td><td>15</td></tr><tr><td>45</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.91K</td><td>14</td></tr><tr><td>46</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.04K</td><td>14</td></tr><tr><td>47</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>739</td><td>14</td></tr><tr><td>48</td><td><a href="https://github.com/Anahkiasen">
        <img src="https://avatars.githubusercontent.com/u/1321596?s=72&v=4" height="12" />
        <b>Anahkiasen</b>
    </a></td><td>madewithlove</td><td>France</td><td>547</td><td>14</td></tr><tr><td>49</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=84bad792fc870bdc31b2a05a06d2c886dd7e42f9&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>351</td><td>14</td></tr><tr><td>50</td><td><a href="https://github.com/Neamar">
        <img src="https://avatars.githubusercontent.com/u/536844?s=72&v=4" height="12" />
        <b>Neamar</b>
    </a></td><td>-</td><td>France</td><td>276</td><td>14</td></tr><tr><td>51</td><td><a href="https://github.com/lra">
        <img src="https://avatars.githubusercontent.com/u/122286?s=72&u=5b877e8eca464d7f4351a20c1531828f99db6090&v=4" height="12" />
        <b>lra</b>
    </a></td><td>-</td><td>Toulouse, NY, SF</td><td>269</td><td>14</td></tr><tr><td>52</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>travier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>264</td><td>14</td></tr><tr><td>53</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>4.09K</td><td>13</td></tr><tr><td>54</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>857</td><td>13</td></tr><tr><td>55</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>melix</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>621</td><td>13</td></tr><tr><td>56</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>344</td><td>13</td></tr><tr><td>57</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>233</td><td>13</td></tr><tr><td>58</td><td><a href="https://github.com/zoriya">
        <img src="https://avatars.githubusercontent.com/u/32224410?s=72&u=966b19ce0af0d82661baaea34396db0526f52f9d&v=4" height="12" />
        <b>zoriya</b>
    </a></td><td>-</td><td>France</td><td>248</td><td>12</td></tr><tr><td>59</td><td><a href="https://github.com/marvinroger">
        <img src="https://avatars.githubusercontent.com/u/990773?s=72&u=1eadb64e486234988a873bc4bc1f7860618573db&v=4" height="12" />
        <b>marvinroger</b>
    </a></td><td>@orus-tech </td><td>Paris, France</td><td>240</td><td>12</td></tr><tr><td>60</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>496</td><td>11</td></tr><tr><td>61</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>438</td><td>11</td></tr><tr><td>62</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Thales</td><td>Paris, France</td><td>332</td><td>11</td></tr><tr><td>63</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>300</td><td>10</td></tr><tr><td>64</td><td><a href="https://github.com/hussein-aitlahcen">
        <img src="https://avatars.githubusercontent.com/u/9103813?s=72&u=8ae26cf794cdbfc36ce096a69330bc31b582eec1&v=4" height="12" />
        <b>hussein-aitlahcen</b>
    </a></td><td>Block 6.282e+10</td><td>France</td><td>386</td><td>9</td></tr><tr><td>65</td><td><a href="https://github.com/sinedied">
        <img src="https://avatars.githubusercontent.com/u/593151?s=72&u=08557bbdd96221813b8aec932dd7de895ac040ea&v=4" height="12" />
        <b>sinedied</b>
    </a></td><td>@Microsoft</td><td>France</td><td>317</td><td>9</td></tr><tr><td>66</td><td><a href="https://github.com/wtarreau">
        <img src="https://avatars.githubusercontent.com/u/8141789?s=72&u=e9359a488ad99600a4b9393a83c0f736c29ba401&v=4" height="12" />
        <b>wtarreau</b>
    </a></td><td>HAProxy Technologies</td><td>France</td><td>200</td><td>9</td></tr><tr><td>67</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=6c520432e20d5ed603246764658accea4b4043c3&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>5.08K</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.35K</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=33f733fea40d7af3b4528613c8c40a015492349c&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.26K</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>984</td><td>8</td></tr><tr><td>71</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>936</td><td>8</td></tr><tr><td>72</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>bzg</b>
    </a></td><td>@codegouvfr</td><td>Paris</td><td>806</td><td>8</td></tr><tr><td>73</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>780</td><td>8</td></tr><tr><td>74</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>389</td><td>8</td></tr><tr><td>75</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>376</td><td>8</td></tr><tr><td>76</td><td><a href="https://github.com/alexarchambault">
        <img src="https://avatars.githubusercontent.com/u/7063723?s=72&u=d5befca0ebfec0042dad7ef93973490eef750ff4&v=4" height="12" />
        <b>alexarchambault</b>
    </a></td><td>-</td><td>Paris</td><td>340</td><td>8</td></tr><tr><td>77</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>davidbrochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>335</td><td>8</td></tr><tr><td>78</td><td><a href="https://github.com/Stilic">
        <img src="https://avatars.githubusercontent.com/u/63605602?s=72&u=6662329db31f63d8bbf4c7755a1c5de99cf54f3b&v=4" height="12" />
        <b>Stilic</b>
    </a></td><td>-</td><td>France</td><td>301</td><td>8</td></tr><tr><td>79</td><td><a href="https://github.com/adrienjoly">
        <img src="https://avatars.githubusercontent.com/u/531781?s=72&u=889860aae8b88fb1e813a3b2c0134bf2eecc6ff1&v=4" height="12" />
        <b>adrienjoly</b>
    </a></td><td>-</td><td>Montreuil, Paris area, France</td><td>275</td><td>8</td></tr><tr><td>80</td><td><a href="https://github.com/arguiot">
        <img src="https://avatars.githubusercontent.com/u/18022260?s=72&u=b9efd5c3fc6c179e08b9823f0ed03c4f285a9544&v=4" height="12" />
        <b>arguiot</b>
    </a></td><td>@pr1mer-tech </td><td>San Francisco - Paris</td><td>245</td><td>8</td></tr><tr><td>81</td><td><a href="https://github.com/vvolhejn">
        <img src="https://avatars.githubusercontent.com/u/8401624?s=72&u=7cca4517e77e1a445ae2e5732db1fc022f4c3ebd&v=4" height="12" />
        <b>vvolhejn</b>
    </a></td><td>@kyutai-labs</td><td>Paris</td><td>209</td><td>8</td></tr><tr><td>82</td><td><a href="https://github.com/seia-soto">
        <img src="https://avatars.githubusercontent.com/u/30369714?s=72&u=312167734503a5f80971ee6c25a817945dc09530&v=4" height="12" />
        <b>seia-soto</b>
    </a></td><td>@ghostery</td><td>Paris, France</td><td>205</td><td>8</td></tr><tr><td>83</td><td><a href="https://github.com/sdispater">
        <img src="https://avatars.githubusercontent.com/u/555648?s=72&v=4" height="12" />
        <b>sdispater</b>
    </a></td><td>-</td><td>France</td><td>2.22K</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/gregberge">
        <img src="https://avatars.githubusercontent.com/u/266302?s=72&u=7b1d8d84bfbaf6cf8b340896f3cea02da2669c46&v=4" height="12" />
        <b>gregberge</b>
    </a></td><td>Argos</td><td>Paris, France</td><td>2.01K</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/p0dalirius">
        <img src="https://avatars.githubusercontent.com/u/79218792?s=72&u=f6b0f27134df6083787490cfcd2ccfdbd5eb70d6&v=4" height="12" />
        <b>p0dalirius</b>
    </a></td><td>Podalirius Labs</td><td>France</td><td>1.94K</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/willdurand">
        <img src="https://avatars.githubusercontent.com/u/217628?s=72&u=2941ab8cfc1bd07c7434232a74b9564fb15ac763&v=4" height="12" />
        <b>willdurand</b>
    </a></td><td>@mozilla </td><td>France</td><td>1.83K</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.6K</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/manekinekko">
        <img src="https://avatars.githubusercontent.com/u/1699357?s=72&u=0df93e66e6a7f9c76d599d796edb00f68bbddf5b&v=4" height="12" />
        <b>manekinekko</b>
    </a></td><td>@microsoft</td><td>France</td><td>1.52K</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/lyrixx">
        <img src="https://avatars.githubusercontent.com/u/408368?s=72&u=d4c07886d44eb26a4a7eb2a41d33cf019f0c0160&v=4" height="12" />
        <b>lyrixx</b>
    </a></td><td>@jolicode</td><td>Paris, France</td><td>777</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/vicb">
        <img src="https://avatars.githubusercontent.com/u/248818?s=72&u=4447f9d1f51e304fceccbedff7c6a78224afc890&v=4" height="12" />
        <b>vicb</b>
    </a></td><td>@cloudflare </td><td>Grenoble, France</td><td>727</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>benjamincanac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux, France</td><td>653</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/tpaviot">
        <img src="https://avatars.githubusercontent.com/u/660130?s=72&u=8b187f9e0eebbe326c738320cbe5a9df34c753d4&v=4" height="12" />
        <b>tpaviot</b>
    </a></td><td>meeDIA.ai</td><td>France</td><td>608</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>511</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/Eschults">
        <img src="https://avatars.githubusercontent.com/u/8090140?s=72&u=8a860a3b8066c1c6fe7ddba93065bd8272c38f45&v=4" height="12" />
        <b>Eschults</b>
    </a></td><td>@lewagon</td><td>Paris</td><td>428</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/sunny">
        <img src="https://avatars.githubusercontent.com/u/132?s=72&v=4" height="12" />
        <b>sunny</b>
    </a></td><td>Cults.</td><td>Paris, France</td><td>360</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>328</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/adrienpoly">
        <img src="https://avatars.githubusercontent.com/u/7847244?s=72&u=f4330ca5e036d365b3c41199ac76e3b979ab10bb&v=4" height="12" />
        <b>adrienpoly</b>
    </a></td><td>-</td><td>Bordeaux</td><td>316</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/tcapelle">
        <img src="https://avatars.githubusercontent.com/u/18441985?s=72&u=e10addd1db7a6280bc8f73d099df8b061ac121ef&v=4" height="12" />
        <b>tcapelle</b>
    </a></td><td>W&B</td><td>Chambery, France</td><td>283</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/noirbizarre">
        <img src="https://avatars.githubusercontent.com/u/15725?s=72&u=24aa7a44ae7c957043e6a39675c3546d2f925a46&v=4" height="12" />
        <b>noirbizarre</b>
    </a></td><td>@apihackers @LedgerHQ </td><td>Paris, France</td><td>255</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/pulgamecanica">
        <img src="https://avatars.githubusercontent.com/u/28810331?s=72&u=5f46d85747b93e8d9d37f8c5682e4af4026fcc22&v=4" height="12" />
        <b>pulgamecanica</b>
    </a></td><td>Pulgamecanica</td><td>Paris / Lisbon</td><td>251</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>245</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/danielhenrymantilla">
        <img src="https://avatars.githubusercontent.com/u/9920355?s=72&u=4c06b60917f2274874f3d96e68342eab655c0d6a&v=4" height="12" />
        <b>danielhenrymantilla</b>
    </a></td><td>https://www.ditto.live/</td><td>France - Spain</td><td>233</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=b92f9fbc757f5d361de7059b8e69a0eaac1164b5&v=4" height="12" />
        <b>GromNaN</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>230</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>222</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>218</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/karesti">
        <img src="https://avatars.githubusercontent.com/u/233499?s=72&u=cc2b31f6441f1ef89f21e279e1ec3008301301e6&v=4" height="12" />
        <b>karesti</b>
    </a></td><td>Red Hat</td><td>Paris</td><td>208</td><td>7</td></tr><tr><td>107</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>mykiwi</b>
    </a></td><td>open to work</td><td>Nantes, France</td><td>204</td><td>7</td></tr><tr><td>108</td><td><a href="https://github.com/artivis">
        <img src="https://avatars.githubusercontent.com/u/6572747?s=72&u=a5ee9abdebcc00d765cfbf4b19353ddfe7a527c6&v=4" height="12" />
        <b>artivis</b>
    </a></td><td>@canonical</td><td>France</td><td>533</td><td>6</td></tr><tr><td>109</td><td><a href="https://github.com/rap2hpoutre">
        <img src="https://avatars.githubusercontent.com/u/1575946?s=72&u=23e0b1c5feb3d6ad4862afd1393ae651b93ff960&v=4" height="12" />
        <b>rap2hpoutre</b>
    </a></td><td>@betagouv</td><td>Nantes</td><td>328</td><td>6</td></tr><tr><td>110</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>323</td><td>6</td></tr><tr><td>111</td><td><a href="https://github.com/rubenfiszel">
        <img src="https://avatars.githubusercontent.com/u/275584?s=72&u=eb0fe584ca9e8636a35ab822b93cc4a1ad10bf42&v=4" height="12" />
        <b>rubenfiszel</b>
    </a></td><td>Windmill</td><td>Paris, France</td><td>301</td><td>6</td></tr><tr><td>112</td><td><a href="https://github.com/slandelle">
        <img src="https://avatars.githubusercontent.com/u/849197?s=72&v=4" height="12" />
        <b>slandelle</b>
    </a></td><td>@gatling</td><td>Paris, France</td><td>285</td><td>6</td></tr><tr><td>113</td><td><a href="https://github.com/jderusse">
        <img src="https://avatars.githubusercontent.com/u/578547?s=72&u=df76d0514c86209a3fff8c9fb9d15ae8592c43c9&v=4" height="12" />
        <b>jderusse</b>
    </a></td><td>Blackfire</td><td>Paris, France</td><td>270</td><td>6</td></tr><tr><td>114</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>Astek Research & Innovation | Sagemcom</td><td>Paris, France</td><td>218</td><td>6</td></tr><tr><td>115</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>-</td><td>Grenoble - France</td><td>1.47K</td><td>5</td></tr><tr><td>116</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>724</td><td>5</td></tr><tr><td>117</td><td><a href="https://github.com/LostInBrittany">
        <img src="https://avatars.githubusercontent.com/u/726476?s=72&u=5f9c71501700a15d727e15fd0ddd699b884d2a11&v=4" height="12" />
        <b>LostInBrittany</b>
    </a></td><td>@CleverCloud</td><td>Brest, Brittany, France</td><td>308</td><td>5</td></tr><tr><td>118</td><td><a href="https://github.com/joel-costigliola">
        <img src="https://avatars.githubusercontent.com/u/382613?s=72&u=949d272a648f69a6c2d8c7f8ed818fc82aa10749&v=4" height="12" />
        <b>joel-costigliola</b>
    </a></td><td>Agicap</td><td>France</td><td>232</td><td>5</td></tr><tr><td>119</td><td><a href="https://github.com/Charles-Chrismann">
        <img src="https://avatars.githubusercontent.com/u/78157563?s=72&u=fc17705222fa92912b9b8ad556101a0608308911&v=4" height="12" />
        <b>Charles-Chrismann</b>
    </a></td><td>Institut de l'Internet et du Multimédia (IIM)</td><td>Paris, La Défense</td><td>15.1K</td><td>4</td></tr><tr><td>120</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>845</td><td>4</td></tr><tr><td>121</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>772</td><td>4</td></tr><tr><td>122</td><td><a href="https://github.com/sebsto">
        <img src="https://avatars.githubusercontent.com/u/401798?s=72&u=dc5e8355d22fe5bc956c382be7fa9dddbebea5db&v=4" height="12" />
        <b>sebsto</b>
    </a></td><td>Amazon Web Services</td><td>Paris</td><td>503</td><td>4</td></tr><tr><td>123</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>448</td><td>4</td></tr><tr><td>124</td><td><a href="https://github.com/mortendahl">
        <img src="https://avatars.githubusercontent.com/u/5921097?s=72&u=7baa35b6a50390f8c67fa3ef82e5ad3354408021&v=4" height="12" />
        <b>mortendahl</b>
    </a></td><td>@zama-ai @tf-encrypted</td><td>Paris, France</td><td>414</td><td>4</td></tr><tr><td>125</td><td><a href="https://github.com/guillaumeduhan">
        <img src="https://avatars.githubusercontent.com/u/31253241?s=72&u=0a5bd1088bebf2d285e7f8a31895a6ff5e9a5530&v=4" height="12" />
        <b>guillaumeduhan</b>
    </a></td><td>-</td><td>Paris, France</td><td>387</td><td>4</td></tr><tr><td>126</td><td><a href="https://github.com/MathisHammel">
        <img src="https://avatars.githubusercontent.com/u/6159437?s=72&u=a53de197adab2db63fd75671f1277043ae6f00b6&v=4" height="12" />
        <b>MathisHammel</b>
    </a></td><td>-</td><td>Paris</td><td>360</td><td>4</td></tr><tr><td>127</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>359</td><td>4</td></tr><tr><td>128</td><td><a href="https://github.com/Yanlry">
        <img src="https://avatars.githubusercontent.com/u/122649131?s=72&u=ed01f26921d8c98ec9c54de3db9568fe88dae0b9&v=4" height="12" />
        <b>Yanlry</b>
    </a></td><td>Fsociety</td><td>Lille, France</td><td>352</td><td>4</td></tr><tr><td>129</td><td><a href="https://github.com/apierr">
        <img src="https://avatars.githubusercontent.com/u/1194257?s=72&u=d97d044969d4ab3ad7bd97fed446777456d5221a&v=4" height="12" />
        <b>apierr</b>
    </a></td><td>Inria - Nord Europe</td><td>Paris</td><td>328</td><td>4</td></tr><tr><td>130</td><td><a href="https://github.com/avidale">
        <img src="https://avatars.githubusercontent.com/u/8642136?s=72&u=861e910a7fb04c5e7dde11f8bd8a119fb602afdd&v=4" height="12" />
        <b>avidale</b>
    </a></td><td>-</td><td>Paris</td><td>265</td><td>4</td></tr><tr><td>131</td><td><a href="https://github.com/Julow">
        <img src="https://avatars.githubusercontent.com/u/2310568?s=72&v=4" height="12" />
        <b>Julow</b>
    </a></td><td>@tarides</td><td>France</td><td>236</td><td>4</td></tr><tr><td>132</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>216</td><td>4</td></tr><tr><td>133</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.29K</td><td>3</td></tr><tr><td>134</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.29K</td><td>3</td></tr><tr><td>135</td><td><a href="https://github.com/4ian">
        <img src="https://avatars.githubusercontent.com/u/1280130?s=72&u=18f856cccd8f77b611b17865cd8562165c49eeab&v=4" height="12" />
        <b>4ian</b>
    </a></td><td>@GDevelopApp</td><td>Paris, France</td><td>1.95K</td><td>3</td></tr><tr><td>136</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.25K</td><td>3</td></tr><tr><td>137</td><td><a href="https://github.com/Amagash">
        <img src="https://avatars.githubusercontent.com/u/20380447?s=72&u=1c5deea446e3f81f4e86708d96bad45cbd633fe3&v=4" height="12" />
        <b>Amagash</b>
    </a></td><td>AWS</td><td>France</td><td>578</td><td>3</td></tr><tr><td>138</td><td><a href="https://github.com/davidgohel">
        <img src="https://avatars.githubusercontent.com/u/4331618?s=72&v=4" height="12" />
        <b>davidgohel</b>
    </a></td><td>ArData</td><td>Paris</td><td>563</td><td>3</td></tr><tr><td>139</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>527</td><td>3</td></tr><tr><td>140</td><td><a href="https://github.com/thom4parisot">
        <img src="https://avatars.githubusercontent.com/u/138627?s=72&u=02cc8f8fdcfa8f7195ab8db25b0080797da40307&v=4" height="12" />
        <b>thom4parisot</b>
    </a></td><td>détour.studio</td><td>Crest, Drôme, France</td><td>525</td><td>3</td></tr><tr><td>141</td><td><a href="https://github.com/Kehrlann">
        <img src="https://avatars.githubusercontent.com/u/5676779?s=72&u=98595e18b5106e4526c48d984983ea525890f588&v=4" height="12" />
        <b>Kehrlann</b>
    </a></td><td>@broadcom </td><td>Paris, France</td><td>483</td><td>3</td></tr><tr><td>142</td><td><a href="https://github.com/jvoisin">
        <img src="https://avatars.githubusercontent.com/u/325724?s=72&u=4446b76c0f4ebcbecb2678759f8d13817a67f85d&v=4" height="12" />
        <b>jvoisin</b>
    </a></td><td>-</td><td>France</td><td>466</td><td>3</td></tr><tr><td>143</td><td><a href="https://github.com/samoht">
        <img src="https://avatars.githubusercontent.com/u/103693?s=72&v=4" height="12" />
        <b>samoht</b>
    </a></td><td>@tarides </td><td>Paris, FR</td><td>453</td><td>3</td></tr><tr><td>144</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>eko</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>433</td><td>3</td></tr><tr><td>145</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>418</td><td>3</td></tr><tr><td>146</td><td><a href="https://github.com/toufik-airane">
        <img src="https://avatars.githubusercontent.com/u/5610269?s=72&u=1b72057199197e4edb29ee4928078e1633ea0efa&v=4" height="12" />
        <b>toufik-airane</b>
    </a></td><td>SecurityforTech</td><td>Paris, France</td><td>330</td><td>3</td></tr><tr><td>147</td><td><a href="https://github.com/Liryna">
        <img src="https://avatars.githubusercontent.com/u/4311419?s=72&v=4" height="12" />
        <b>Liryna</b>
    </a></td><td>Google</td><td>France</td><td>297</td><td>3</td></tr><tr><td>148</td><td><a href="https://github.com/xviniette">
        <img src="https://avatars.githubusercontent.com/u/4215051?s=72&u=e874cefa62c45b8f135ac77ae1b0457e4076d2b3&v=4" height="12" />
        <b>xviniette</b>
    </a></td><td>-</td><td>France, Montpellier</td><td>267</td><td>3</td></tr><tr><td>149</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>258</td><td>3</td></tr><tr><td>150</td><td><a href="https://github.com/avivace">
        <img src="https://avatars.githubusercontent.com/u/14352721?s=72&u=a7dc8be3aa7851dd1521ab77b98bb49749178634&v=4" height="12" />
        <b>avivace</b>
    </a></td><td>@EUROCONTROL</td><td>Paris</td><td>250</td><td>3</td></tr><tr><td>151</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>244</td><td>3</td></tr><tr><td>152</td><td><a href="https://github.com/valentinbreiz">
        <img src="https://avatars.githubusercontent.com/u/18724279?s=72&v=4" height="12" />
        <b>valentinbreiz</b>
    </a></td><td>@Epitech</td><td>France</td><td>231</td><td>3</td></tr><tr><td>153</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>222</td><td>3</td></tr><tr><td>154</td><td><a href="https://github.com/teolemon">
        <img src="https://avatars.githubusercontent.com/u/1689815?s=72&u=6301f2326ab5595912a1fa33b8989823bba40071&v=4" height="12" />
        <b>teolemon</b>
    </a></td><td>@openfoodfacts </td><td>Paris</td><td>214</td><td>3</td></tr><tr><td>155</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>214</td><td>3</td></tr><tr><td>156</td><td><a href="https://github.com/bugsounet">
        <img src="https://avatars.githubusercontent.com/u/30669209?s=72&u=09764eac7a1ed73a3e63048003cb379fe0ee391d&v=4" height="12" />
        <b>bugsounet</b>
    </a></td><td>-</td><td>France</td><td>208</td><td>3</td></tr><tr><td>157</td><td><a href="https://github.com/gentilkiwi">
        <img src="https://avatars.githubusercontent.com/u/2307945?s=72&v=4" height="12" />
        <b>gentilkiwi</b>
    </a></td><td>@BdF-LabSec</td><td>France</td><td>4.3K</td><td>2</td></tr><tr><td>158</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>Antibes, France</td><td>3.92K</td><td>2</td></tr><tr><td>159</td><td><a href="https://github.com/HoussemDellai">
        <img src="https://avatars.githubusercontent.com/u/6548359?s=72&u=eaeaa7311ace2a0f32b92ed1f2137bb2459a809b&v=4" height="12" />
        <b>HoussemDellai</b>
    </a></td><td>Microsoft</td><td>Paris</td><td>3.2K</td><td>2</td></tr><tr><td>160</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>nicolas-grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>2.01K</td><td>2</td></tr><tr><td>161</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.38K</td><td>2</td></tr><tr><td>162</td><td><a href="https://github.com/aaugustin">
        <img src="https://avatars.githubusercontent.com/u/788910?s=72&u=3a29db80be82d08a9068cfb35898e8a8179920ee&v=4" height="12" />
        <b>aaugustin</b>
    </a></td><td>@qonto</td><td>Paris, France</td><td>1.3K</td><td>2</td></tr><tr><td>163</td><td><a href="https://github.com/mpgn">
        <img src="https://avatars.githubusercontent.com/u/5891788?s=72&u=b9940284a900247ecbd99c9517c1142c33586621&v=4" height="12" />
        <b>mpgn</b>
    </a></td><td>-</td><td>France</td><td>1.27K</td><td>2</td></tr><tr><td>164</td><td><a href="https://github.com/jd">
        <img src="https://avatars.githubusercontent.com/u/2644?s=72&u=f53dcbcc3a08993cbad5f187123738be26ed4053&v=4" height="12" />
        <b>jd</b>
    </a></td><td>@Mergifyio</td><td>Toulouse, France</td><td>1.21K</td><td>2</td></tr><tr><td>165</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.14K</td><td>2</td></tr><tr><td>166</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.14K</td><td>2</td></tr><tr><td>167</td><td><a href="https://github.com/teivah">
        <img src="https://avatars.githubusercontent.com/u/934784?s=72&u=227613cb18fdee717ff7fc61360dddc542a55cab&v=4" height="12" />
        <b>teivah</b>
    </a></td><td>@google</td><td>France</td><td>1.14K</td><td>2</td></tr><tr><td>168</td><td><a href="https://github.com/eliemichel">
        <img src="https://avatars.githubusercontent.com/u/5802849?s=72&v=4" height="12" />
        <b>eliemichel</b>
    </a></td><td>@adobe</td><td>Paris</td><td>836</td><td>2</td></tr><tr><td>169</td><td><a href="https://github.com/xavierleroy">
        <img src="https://avatars.githubusercontent.com/u/3845810?s=72&u=eefecc2a41ff72940fdfd9eaa02501494b1e2a8d&v=4" height="12" />
        <b>xavierleroy</b>
    </a></td><td>Collège de France and Inria</td><td>Paris, France</td><td>780</td><td>2</td></tr><tr><td>170</td><td><a href="https://github.com/mlabouardy">
        <img src="https://avatars.githubusercontent.com/u/10320205?s=72&u=022b2dc0e4696d43258b8364ca7e869aeb18181b&v=4" height="12" />
        <b>mlabouardy</b>
    </a></td><td>@tailwarden</td><td>Paris, France</td><td>763</td><td>2</td></tr><tr><td>171</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>zoontek</b>
    </a></td><td>Swan</td><td>Paris</td><td>752</td><td>2</td></tr><tr><td>172</td><td><a href="https://github.com/Amxx">
        <img src="https://avatars.githubusercontent.com/u/2432299?s=72&v=4" height="12" />
        <b>Amxx</b>
    </a></td><td>-</td><td>Lyon</td><td>696</td><td>2</td></tr><tr><td>173</td><td><a href="https://github.com/nabla-c0d3">
        <img src="https://avatars.githubusercontent.com/u/1915165?s=72&u=e583ff7b079ed660d12b304503d0b0cfaf82856b&v=4" height="12" />
        <b>nabla-c0d3</b>
    </a></td><td>-</td><td>Paris & San Francisco</td><td>690</td><td>2</td></tr><tr><td>174</td><td><a href="https://github.com/DoubangoTelecom">
        <img src="https://avatars.githubusercontent.com/u/12985130?s=72&v=4" height="12" />
        <b>DoubangoTelecom</b>
    </a></td><td>Doubango Telecom</td><td>Paris (France)</td><td>628</td><td>2</td></tr><tr><td>175</td><td><a href="https://github.com/alelievr">
        <img src="https://avatars.githubusercontent.com/u/6877923?s=72&v=4" height="12" />
        <b>alelievr</b>
    </a></td><td>-</td><td>Paris</td><td>615</td><td>2</td></tr><tr><td>176</td><td><a href="https://github.com/supermerill">
        <img src="https://avatars.githubusercontent.com/u/6536403?s=72&u=d088e4a3570ca6d548b519f4c5b4e5712fc4a980&v=4" height="12" />
        <b>supermerill</b>
    </a></td><td>-</td><td>France</td><td>595</td><td>2</td></tr><tr><td>177</td><td><a href="https://github.com/AstraaDev">
        <img src="https://avatars.githubusercontent.com/u/43183806?s=72&u=d3bc96c5d783478b819498fcb8c07a790204442f&v=4" height="12" />
        <b>AstraaDev</b>
    </a></td><td>-</td><td>France</td><td>580</td><td>2</td></tr><tr><td>178</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>532</td><td>2</td></tr><tr><td>179</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>522</td><td>2</td></tr><tr><td>180</td><td><a href="https://github.com/augustin7698">
        <img src="https://avatars.githubusercontent.com/u/86960242?s=72&u=3761173d4311ceb8f28a3ff5802c899aa99aecab&v=4" height="12" />
        <b>augustin7698</b>
    </a></td><td>-</td><td>Paris</td><td>512</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/oliviergimenez">
        <img src="https://avatars.githubusercontent.com/u/12683635?s=72&u=c5a60d598ab4e98660dc7589de4609414a6af089&v=4" height="12" />
        <b>oliviergimenez</b>
    </a></td><td>CNRS</td><td>Montpellier</td><td>494</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@thecompaniesapi</td><td>Nantes, France</td><td>470</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/alexandrebodin">
        <img src="https://avatars.githubusercontent.com/u/6065744?s=72&u=7e5d74b964843e24a6f32d55e51b8f36c50e1d0e&v=4" height="12" />
        <b>alexandrebodin</b>
    </a></td><td>Strapi</td><td>France</td><td>427</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/loubnabnl">
        <img src="https://avatars.githubusercontent.com/u/44069155?s=72&u=add5d6ea8b393a9cba139832abe845ddfdecf0be&v=4" height="12" />
        <b>loubnabnl</b>
    </a></td><td>@huggingface</td><td>Paris, France</td><td>424</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/pchaigno">
        <img src="https://avatars.githubusercontent.com/u/1764210?s=72&v=4" height="12" />
        <b>pchaigno</b>
    </a></td><td>Isovalent</td><td>Rennes, France</td><td>422</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>LudovicRousseau</b>
    </a></td><td>-</td><td>France</td><td>422</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/luislavena">
        <img src="https://avatars.githubusercontent.com/u/4182?s=72&u=baab980311df526d41631de7362837955f474076&v=4" height="12" />
        <b>luislavena</b>
    </a></td><td>@area17 </td><td>Paris, France</td><td>413</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/synopse">
        <img src="https://avatars.githubusercontent.com/u/4548119?s=72&u=52bafba1523a49e000f40edfd88ccb4a36821684&v=4" height="12" />
        <b>synopse</b>
    </a></td><td>Synopse</td><td>Cauterets, France</td><td>406</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/Julien-R44">
        <img src="https://avatars.githubusercontent.com/u/8337858?s=72&u=51dca49c82393b452f05ee4aa4129a659ef47e34&v=4" height="12" />
        <b>Julien-R44</b>
    </a></td><td>Freelancing </td><td>France</td><td>404</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/kylekatarnls">
        <img src="https://avatars.githubusercontent.com/u/5966783?s=72&v=4" height="12" />
        <b>kylekatarnls</b>
    </a></td><td>-</td><td>France</td><td>371</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/Tk-Glitch">
        <img src="https://avatars.githubusercontent.com/u/741977?s=72&u=71e298c312c17a9a07c1c439e25199ab89e77045&v=4" height="12" />
        <b>Tk-Glitch</b>
    </a></td><td>-</td><td>France</td><td>362</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/fredrik-johansson">
        <img src="https://avatars.githubusercontent.com/u/368838?s=72&u=33a576c5ece3772cf74c9bc302a6148b7d9a767a&v=4" height="12" />
        <b>fredrik-johansson</b>
    </a></td><td>INRIA & Institut de Mathématiques de Bordeaux</td><td>Bordeaux, France</td><td>349</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>298</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/aymanfarhat">
        <img src="https://avatars.githubusercontent.com/u/823713?s=72&u=5b4b31ed1641df460cebae7853788310d92e9f96&v=4" height="12" />
        <b>aymanfarhat</b>
    </a></td><td>@Google</td><td>Paris</td><td>288</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/tbroyer">
        <img src="https://avatars.githubusercontent.com/u/173813?s=72&v=4" height="12" />
        <b>tbroyer</b>
    </a></td><td>@atolcd </td><td>Dijon, France</td><td>283</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/jpountz">
        <img src="https://avatars.githubusercontent.com/u/299848?s=72&v=4" height="12" />
        <b>jpountz</b>
    </a></td><td>Elasticsearch</td><td>Caen, France</td><td>281</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/darold">
        <img src="https://avatars.githubusercontent.com/u/538862?s=72&u=c7f0d89a00a8290d56d6168a3d1a7ab4be36f10d&v=4" height="12" />
        <b>darold</b>
    </a></td><td>-</td><td>France</td><td>259</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>France</td><td>250</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/scolladon">
        <img src="https://avatars.githubusercontent.com/u/522422?s=72&u=b4e5e596c88abd2919644ba3c050f035811d298c&v=4" height="12" />
        <b>scolladon</b>
    </a></td><td>-</td><td>Paris France</td><td>232</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/dimaMachina">
        <img src="https://avatars.githubusercontent.com/u/7361780?s=72&u=31ad3c2188d690ce38ec9ae437faf8788d34b916&v=4" height="12" />
        <b>dimaMachina</b>
    </a></td><td>hire me</td><td>Paris, France</td><td>227</td><td>2</td></tr>
    </tbody>
</table>
