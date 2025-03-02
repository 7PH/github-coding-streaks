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
    </a></td><td>@swan-io</td><td>Paris, France</td><td>411</td><td>1.57K</td></tr><tr><td>🥈</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>338</td><td>1.23K</td></tr><tr><td>🥉</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>219</td><td>1.21K</td></tr><tr><td>4</td><td><a href="https://github.com/MoOx">
        <img src="https://avatars.githubusercontent.com/u/157534?s=72&u=399d4103e3bcf74bb9ef02eb5fe5da40dc90d2db&v=4" height="12" />
        <b>MoOx</b>
    </a></td><td>Freelance at MoOx.io</td><td>Toulouse, France</td><td>1.25K</td><td>999</td></tr><tr><td>5</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>596</td><td>975</td></tr><tr><td>6</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>589</td><td>773</td></tr><tr><td>7</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>697</td><td>544</td></tr><tr><td>8</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.51K</td><td>529</td></tr><tr><td>9</td><td><a href="https://github.com/Bubhux">
        <img src="https://avatars.githubusercontent.com/u/110377006?s=72&u=0309cab6fd716667c5e7e7d50f14c51803135a83&v=4" height="12" />
        <b>Bubhux</b>
    </a></td><td>-</td><td>France</td><td>243</td><td>362</td></tr><tr><td>10</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>344</td><td>203</td></tr><tr><td>11</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>266</td><td>166</td></tr><tr><td>12</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>493</td><td>155</td></tr><tr><td>13</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>336</td><td>152</td></tr><tr><td>14</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>230</td><td>134</td></tr><tr><td>15</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=bced413b47ba8604871f6b4ac28f623f72bcf56d&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>535</td><td>91</td></tr><tr><td>16</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>245</td><td>86</td></tr><tr><td>17</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>207</td><td>80</td></tr><tr><td>18</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>299</td><td>64</td></tr><tr><td>19</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.39K</td><td>60</td></tr><tr><td>20</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>321</td><td>60</td></tr><tr><td>21</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.08K</td><td>57</td></tr><tr><td>22</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>5.99K</td><td>53</td></tr><tr><td>23</td><td><a href="https://github.com/angristan">
        <img src="https://avatars.githubusercontent.com/u/11699655?s=72&u=03a18584b40e4d9fd656b2120c3e75232960b9ac&v=4" height="12" />
        <b>angristan</b>
    </a></td><td>Backend Engineer @qonto</td><td>Paris</td><td>1.84K</td><td>45</td></tr><tr><td>24</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>262</td><td>37</td></tr><tr><td>25</td><td><a href="https://github.com/ldez">
        <img src="https://avatars.githubusercontent.com/u/5674651?s=72&u=45f0e097891f1e7e0c45c5224dcce11c867038af&v=4" height="12" />
        <b>ldez</b>
    </a></td><td>-</td><td>France</td><td>593</td><td>35</td></tr><tr><td>26</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>272</td><td>31</td></tr><tr><td>27</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>583</td><td>29</td></tr><tr><td>28</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.45K</td><td>28</td></tr><tr><td>29</td><td><a href="https://github.com/joeybronner">
        <img src="https://avatars.githubusercontent.com/u/5888510?s=72&u=15e39a4e9954e51c531d3d636749bd80c6275b8c&v=4" height="12" />
        <b>joeybronner</b>
    </a></td><td>-</td><td>Paris</td><td>258</td><td>28</td></tr><tr><td>30</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Open-source engineer @probabl-ai </td><td>Paris-Saclay / France</td><td>801</td><td>25</td></tr><tr><td>31</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=fc4800d819397a6bc72c65257ae230c3348b8627&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>426</td><td>24</td></tr><tr><td>32</td><td><a href="https://github.com/davidbrochart">
        <img src="https://avatars.githubusercontent.com/u/4711805?s=72&u=d39696d995a9e02ec3613ffb2f62b20b14f92f26&v=4" height="12" />
        <b>davidbrochart</b>
    </a></td><td>@QuantStack</td><td>France</td><td>333</td><td>22</td></tr><tr><td>33</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>263</td><td>22</td></tr><tr><td>34</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>213</td><td>21</td></tr><tr><td>35</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>766</td><td>19</td></tr><tr><td>36</td><td><a href="https://github.com/thierryvolpiatto">
        <img src="https://avatars.githubusercontent.com/u/1533939?s=72&v=4" height="12" />
        <b>thierryvolpiatto</b>
    </a></td><td>@emacs-helm </td><td>France</td><td>222</td><td>19</td></tr><tr><td>37</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.87K</td><td>17</td></tr><tr><td>38</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>813</td><td>16</td></tr><tr><td>39</td><td><a href="https://github.com/Kehrlann">
        <img src="https://avatars.githubusercontent.com/u/5676779?s=72&u=98595e18b5106e4526c48d984983ea525890f588&v=4" height="12" />
        <b>Kehrlann</b>
    </a></td><td>@broadcom </td><td>Paris, France</td><td>452</td><td>16</td></tr><tr><td>40</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>341</td><td>16</td></tr><tr><td>41</td><td><a href="https://github.com/Fantomas42">
        <img src="https://avatars.githubusercontent.com/u/100376?s=72&v=4" height="12" />
        <b>Fantomas42</b>
    </a></td><td>-</td><td>Paris, France</td><td>229</td><td>16</td></tr><tr><td>42</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>409</td><td>15</td></tr><tr><td>43</td><td><a href="https://github.com/astahmer">
        <img src="https://avatars.githubusercontent.com/u/47224540?s=72&u=3bc3ac9c3c1f64b68704b973c30aae89ad99cc66&v=4" height="12" />
        <b>astahmer</b>
    </a></td><td>-</td><td>Montpellier</td><td>305</td><td>15</td></tr><tr><td>44</td><td><a href="https://github.com/adrienpoly">
        <img src="https://avatars.githubusercontent.com/u/7847244?s=72&u=f4330ca5e036d365b3c41199ac76e3b979ab10bb&v=4" height="12" />
        <b>adrienpoly</b>
    </a></td><td>-</td><td>Bordeaux</td><td>305</td><td>15</td></tr><tr><td>45</td><td><a href="https://github.com/Gregwar">
        <img src="https://avatars.githubusercontent.com/u/367022?s=72&v=4" height="12" />
        <b>Gregwar</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>232</td><td>15</td></tr><tr><td>46</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>204</td><td>15</td></tr><tr><td>47</td><td><a href="https://github.com/kevinmarrec">
        <img src="https://avatars.githubusercontent.com/u/25272043?s=72&u=406b360245c00ec63bcfdfbb1171d714030ad3a4&v=4" height="12" />
        <b>kevinmarrec</b>
    </a></td><td>@steeple-org</td><td>Rennes, France</td><td>196</td><td>15</td></tr><tr><td>48</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>3.89K</td><td>14</td></tr><tr><td>49</td><td><a href="https://github.com/byroot">
        <img src="https://avatars.githubusercontent.com/u/44640?s=72&v=4" height="12" />
        <b>byroot</b>
    </a></td><td>@Shopify (as @casperisfine)</td><td>Toulouse, France</td><td>852</td><td>14</td></tr><tr><td>50</td><td><a href="https://github.com/pawamoy">
        <img src="https://avatars.githubusercontent.com/u/3999221?s=72&u=b030e4c89df2f3a36bc4710b925bdeb6745c9856&v=4" height="12" />
        <b>pawamoy</b>
    </a></td><td>@pawamoy-insiders </td><td>France</td><td>511</td><td>14</td></tr><tr><td>51</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>445</td><td>14</td></tr><tr><td>52</td><td><a href="https://github.com/vincelwt">
        <img src="https://avatars.githubusercontent.com/u/5092466?s=72&u=713f9947e4315b6f0ef62ec5cccd978133006783&v=4" height="12" />
        <b>vincelwt</b>
    </a></td><td>Lunary</td><td>France</td><td>374</td><td>14</td></tr><tr><td>53</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>300</td><td>14</td></tr><tr><td>54</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>282</td><td>14</td></tr><tr><td>55</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>247</td><td>14</td></tr><tr><td>56</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>964</td><td>13</td></tr><tr><td>57</td><td><a href="https://github.com/MeymounB">
        <img src="https://avatars.githubusercontent.com/u/77726988?s=72&u=d12068913a829662f30751a4591327cdbf424ead&v=4" height="12" />
        <b>MeymounB</b>
    </a></td><td>@Next-Generation-Dev</td><td>France</td><td>299</td><td>13</td></tr><tr><td>58</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>232</td><td>13</td></tr><tr><td>59</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.36K</td><td>11</td></tr><tr><td>60</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>850</td><td>11</td></tr><tr><td>61</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>383</td><td>11</td></tr><tr><td>62</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.26K</td><td>10</td></tr><tr><td>63</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>-</td><td>Grenoble - France</td><td>1.45K</td><td>9</td></tr><tr><td>64</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>315</td><td>9</td></tr><tr><td>65</td><td><a href="https://github.com/johnBuffer">
        <img src="https://avatars.githubusercontent.com/u/9960400?s=72&u=bc8911ac87edb913bca811d23f14c109d11e9dfa&v=4" height="12" />
        <b>johnBuffer</b>
    </a></td><td>-</td><td>France</td><td>2.93K</td><td>8</td></tr><tr><td>66</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.28K</td><td>8</td></tr><tr><td>67</td><td><a href="https://github.com/arcanis">
        <img src="https://avatars.githubusercontent.com/u/1037931?s=72&u=b7caf9bbaa35c1114918e82b0a6d436f761dbec3&v=4" height="12" />
        <b>arcanis</b>
    </a></td><td>@datadog</td><td>Nantes, France</td><td>1.86K</td><td>8</td></tr><tr><td>68</td><td><a href="https://github.com/agoncal">
        <img src="https://avatars.githubusercontent.com/u/729277?s=72&u=d0da87cbc7086aaf1db7744e71017689abf4bd64&v=4" height="12" />
        <b>agoncal</b>
    </a></td><td>@microsoft</td><td>Paris</td><td>1.35K</td><td>8</td></tr><tr><td>69</td><td><a href="https://github.com/aloisdeniel">
        <img src="https://avatars.githubusercontent.com/u/7687231?s=72&u=33f733fea40d7af3b4528613c8c40a015492349c&v=4" height="12" />
        <b>aloisdeniel</b>
    </a></td><td>Freelance</td><td>Rennes, France</td><td>1.25K</td><td>8</td></tr><tr><td>70</td><td><a href="https://github.com/Cadene">
        <img src="https://avatars.githubusercontent.com/u/4681518?s=72&u=7b60f24dd0deb4dcbb097c9aeca2dd252f9907d9&v=4" height="12" />
        <b>Cadene</b>
    </a></td><td>@huggingface </td><td>Paris</td><td>1.13K</td><td>8</td></tr><tr><td>71</td><td><a href="https://github.com/Xyl2k">
        <img src="https://avatars.githubusercontent.com/u/8536299?s=72&u=88d2fa98d1bdcef6b2578e57e988c5cb64c735e8&v=4" height="12" />
        <b>Xyl2k</b>
    </a></td><td>-</td><td>France</td><td>822</td><td>8</td></tr><tr><td>72</td><td><a href="https://github.com/AstraaDev">
        <img src="https://avatars.githubusercontent.com/u/43183806?s=72&u=d3bc96c5d783478b819498fcb8c07a790204442f&v=4" height="12" />
        <b>AstraaDev</b>
    </a></td><td>-</td><td>France</td><td>558</td><td>8</td></tr><tr><td>73</td><td><a href="https://github.com/qgallouedec">
        <img src="https://avatars.githubusercontent.com/u/45557362?s=72&u=37cea872e44a4d597f3b9c899add7509044d9ef0&v=4" height="12" />
        <b>qgallouedec</b>
    </a></td><td>@huggingface</td><td>Lyon, France</td><td>508</td><td>8</td></tr><tr><td>74</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>466</td><td>8</td></tr><tr><td>75</td><td><a href="https://github.com/piitaya">
        <img src="https://avatars.githubusercontent.com/u/5878303?s=72&u=ab28a992669ff3369d3f23bebe1313e7b3fbee0b&v=4" height="12" />
        <b>piitaya</b>
    </a></td><td>@home-assistant @NabuCasa</td><td>Lille</td><td>398</td><td>8</td></tr><tr><td>76</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>354</td><td>8</td></tr><tr><td>77</td><td><a href="https://github.com/alexkirsz">
        <img src="https://avatars.githubusercontent.com/u/1621758?s=72&u=1920fad1c4b2656b527fea8cdfdfbb7d5f51753f&v=4" height="12" />
        <b>alexkirsz</b>
    </a></td><td>-</td><td>Paris</td><td>265</td><td>8</td></tr><tr><td>78</td><td><a href="https://github.com/tchiotludo">
        <img src="https://avatars.githubusercontent.com/u/2064609?s=72&u=e0b81e6999b4fb51c0d7383ee10090d2d6332939&v=4" height="12" />
        <b>tchiotludo</b>
    </a></td><td>@kestra-io</td><td>Lille, France</td><td>244</td><td>8</td></tr><tr><td>79</td><td><a href="https://github.com/marvinroger">
        <img src="https://avatars.githubusercontent.com/u/990773?s=72&u=1eadb64e486234988a873bc4bc1f7860618573db&v=4" height="12" />
        <b>marvinroger</b>
    </a></td><td>@orus-tech </td><td>Paris, France</td><td>240</td><td>8</td></tr><tr><td>80</td><td><a href="https://github.com/poolpOrg">
        <img src="https://avatars.githubusercontent.com/u/895503?s=72&u=e63aa059ea0657a703518f1374c8a30fdf2d02ac&v=4" height="12" />
        <b>poolpOrg</b>
    </a></td><td>poolp.org</td><td>Nantes, France</td><td>228</td><td>8</td></tr><tr><td>81</td><td><a href="https://github.com/fabpot">
        <img src="https://avatars.githubusercontent.com/u/47313?s=72&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4" height="12" />
        <b>fabpot</b>
    </a></td><td>Symfony/Platform.sh/Blackfire</td><td>Paris, France</td><td>13.27K</td><td>7</td></tr><tr><td>82</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=6c520432e20d5ed603246764658accea4b4043c3&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>5K</td><td>7</td></tr><tr><td>83</td><td><a href="https://github.com/jedisct1">
        <img src="https://avatars.githubusercontent.com/u/124872?s=72&v=4" height="12" />
        <b>jedisct1</b>
    </a></td><td>-</td><td>Antibes, France</td><td>3.89K</td><td>7</td></tr><tr><td>84</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.59K</td><td>7</td></tr><tr><td>85</td><td><a href="https://github.com/MaxHalford">
        <img src="https://avatars.githubusercontent.com/u/8095957?s=72&u=a2b8377ac29978e4268b713834185198f08b9eef&v=4" height="12" />
        <b>MaxHalford</b>
    </a></td><td>@carbonfact</td><td>France</td><td>1.03K</td><td>7</td></tr><tr><td>86</td><td><a href="https://github.com/Robpayot">
        <img src="https://avatars.githubusercontent.com/u/5593293?s=72&u=41388469102be7005344b95f9d66b2061740bd3d&v=4" height="12" />
        <b>Robpayot</b>
    </a></td><td>-</td><td>Paris</td><td>917</td><td>7</td></tr><tr><td>87</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>888</td><td>7</td></tr><tr><td>88</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>bzg</b>
    </a></td><td>@codegouvfr</td><td>Paris</td><td>794</td><td>7</td></tr><tr><td>89</td><td><a href="https://github.com/zoontek">
        <img src="https://avatars.githubusercontent.com/u/1902323?s=72&u=b208315a0d0fd583a7cbda7b1badac19b473dc30&v=4" height="12" />
        <b>zoontek</b>
    </a></td><td>Swan</td><td>Paris</td><td>742</td><td>7</td></tr><tr><td>90</td><td><a href="https://github.com/vicb">
        <img src="https://avatars.githubusercontent.com/u/248818?s=72&u=4447f9d1f51e304fceccbedff7c6a78224afc890&v=4" height="12" />
        <b>vicb</b>
    </a></td><td>@cloudflare </td><td>Grenoble, France</td><td>709</td><td>7</td></tr><tr><td>91</td><td><a href="https://github.com/Amxx">
        <img src="https://avatars.githubusercontent.com/u/2432299?s=72&v=4" height="12" />
        <b>Amxx</b>
    </a></td><td>-</td><td>Lyon</td><td>691</td><td>7</td></tr><tr><td>92</td><td><a href="https://github.com/benjamincanac">
        <img src="https://avatars.githubusercontent.com/u/739984?s=72&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4" height="12" />
        <b>benjamincanac</b>
    </a></td><td>@nuxtlabs</td><td>Bordeaux</td><td>633</td><td>7</td></tr><tr><td>93</td><td><a href="https://github.com/bblanchon">
        <img src="https://avatars.githubusercontent.com/u/5462433?s=72&u=bec379310fcd0063e7555115cc65357c396e0f9b&v=4" height="12" />
        <b>bblanchon</b>
    </a></td><td>-</td><td>France</td><td>575</td><td>7</td></tr><tr><td>94</td><td><a href="https://github.com/huextrat">
        <img src="https://avatars.githubusercontent.com/u/22995315?s=72&v=4" height="12" />
        <b>huextrat</b>
    </a></td><td>@appchoose</td><td>Lyon, France</td><td>546</td><td>7</td></tr><tr><td>95</td><td><a href="https://github.com/NicolasPetton">
        <img src="https://avatars.githubusercontent.com/u/123539?s=72&u=5ddba75ca916a17ce1d818279b70ab97573c0a7a&v=4" height="12" />
        <b>NicolasPetton</b>
    </a></td><td>-</td><td>Brest, France</td><td>412</td><td>7</td></tr><tr><td>96</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>392</td><td>7</td></tr><tr><td>97</td><td><a href="https://github.com/johnvuko">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>johnvuko</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>349</td><td>7</td></tr><tr><td>98</td><td><a href="https://github.com/paraboul">
        <img src="https://avatars.githubusercontent.com/u/80341?s=72&u=eea124424525852e2c9add8afa3b25fb889671f3&v=4" height="12" />
        <b>paraboul</b>
    </a></td><td>-</td><td>France</td><td>346</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/mckenziearts">
        <img src="https://avatars.githubusercontent.com/u/14105989?s=72&u=9c230c3e470fd4ddbbec22005757893bfa61d3ef&v=4" height="12" />
        <b>mckenziearts</b>
    </a></td><td>@shopperlabs </td><td>Paris, France</td><td>336</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/Snaipe">
        <img src="https://avatars.githubusercontent.com/u/977973?s=72&u=8f1888e38eb127752ad603077fa2d0eb7a4940dc&v=4" height="12" />
        <b>Snaipe</b>
    </a></td><td>Freelance, @AristaNetworks</td><td>Paris, France</td><td>335</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/Ysurac">
        <img src="https://avatars.githubusercontent.com/u/6342954?s=72&u=f609c4350ded22b839bbc356875be03d2772f98f&v=4" height="12" />
        <b>Ysurac</b>
    </a></td><td>-</td><td>France</td><td>330</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/vadimkantorov">
        <img src="https://avatars.githubusercontent.com/u/1041752?s=72&u=51c5c08f0f9be5206c4d5d6b3d09492bb6f9aa69&v=4" height="12" />
        <b>vadimkantorov</b>
    </a></td><td>INRIA</td><td>Paris, France</td><td>327</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/DeveloppeurPascal">
        <img src="https://avatars.githubusercontent.com/u/29439699?s=72&u=3b413495092a9927526da35a406812d44b64048b&v=4" height="12" />
        <b>DeveloppeurPascal</b>
    </a></td><td>-</td><td>Orléans, France</td><td>322</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/dmathieu">
        <img src="https://avatars.githubusercontent.com/u/9347?s=72&u=ade95e23ea06fc13514de6a7bb9bf7b5b90d37a5&v=4" height="12" />
        <b>dmathieu</b>
    </a></td><td>@elastic</td><td>France</td><td>313</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/ArnaudBarre">
        <img src="https://avatars.githubusercontent.com/u/14235743?s=72&u=1e3fb343c89f3f3ab51080295026475541c390f8&v=4" height="12" />
        <b>ArnaudBarre</b>
    </a></td><td>Carbometrix</td><td>Paris</td><td>290</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/geromegrignon">
        <img src="https://avatars.githubusercontent.com/u/32737308?s=72&u=65991e3f02f05e572ae435e24659ba65ed5d6005&v=4" height="12" />
        <b>geromegrignon</b>
    </a></td><td>Lucca</td><td>France</td><td>274</td><td>7</td></tr><tr><td>107</td><td><a href="https://github.com/adrienjoly">
        <img src="https://avatars.githubusercontent.com/u/531781?s=72&u=889860aae8b88fb1e813a3b2c0134bf2eecc6ff1&v=4" height="12" />
        <b>adrienjoly</b>
    </a></td><td>-</td><td>Montreuil, Paris area, France</td><td>273</td><td>7</td></tr><tr><td>108</td><td><a href="https://github.com/lra">
        <img src="https://avatars.githubusercontent.com/u/122286?s=72&u=5b877e8eca464d7f4351a20c1531828f99db6090&v=4" height="12" />
        <b>lra</b>
    </a></td><td>-</td><td>Toulouse, NY, SF</td><td>266</td><td>7</td></tr><tr><td>109</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>262</td><td>7</td></tr><tr><td>110</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>251</td><td>7</td></tr><tr><td>111</td><td><a href="https://github.com/dotdc">
        <img src="https://avatars.githubusercontent.com/u/12827900?s=72&u=df40a5743483684bb6c6ba3259116c7e87cc3ab6&v=4" height="12" />
        <b>dotdc</b>
    </a></td><td>@hivebrite</td><td>France</td><td>247</td><td>7</td></tr><tr><td>112</td><td><a href="https://github.com/florian-lefebvre">
        <img src="https://avatars.githubusercontent.com/u/69633530?s=72&u=e2ef3f44db480e30e0e7fe90aa559d3c39fac7e6&v=4" height="12" />
        <b>florian-lefebvre</b>
    </a></td><td>-</td><td>France</td><td>235</td><td>7</td></tr><tr><td>113</td><td><a href="https://github.com/GromNaN">
        <img src="https://avatars.githubusercontent.com/u/400034?s=72&u=b92f9fbc757f5d361de7059b8e69a0eaac1164b5&v=4" height="12" />
        <b>GromNaN</b>
    </a></td><td>MongoDB</td><td>Rouen, France</td><td>224</td><td>7</td></tr><tr><td>114</td><td><a href="https://github.com/aureleoules">
        <img src="https://avatars.githubusercontent.com/u/22493292?s=72&u=19b0f7ab53a1842345673fed0988ba870a5c3e31&v=4" height="12" />
        <b>aureleoules</b>
    </a></td><td>Datadog</td><td>France</td><td>220</td><td>7</td></tr><tr><td>115</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=41b673444a231d4b51158f19405660bead34e360&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>219</td><td>7</td></tr><tr><td>116</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>219</td><td>7</td></tr><tr><td>117</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>216</td><td>7</td></tr><tr><td>118</td><td><a href="https://github.com/Romakita">
        <img src="https://avatars.githubusercontent.com/u/1763311?s=72&u=29dc6efc281f9b8c8de20eab797b894fed5e57d9&v=4" height="12" />
        <b>Romakita</b>
    </a></td><td>Zenika</td><td>Ile-de-france, France</td><td>204</td><td>7</td></tr><tr><td>119</td><td><a href="https://github.com/Dimillian">
        <img src="https://avatars.githubusercontent.com/u/535509?s=72&u=764d85a6d85e56cb2029e0e64af1bf37296e02a4&v=4" height="12" />
        <b>Dimillian</b>
    </a></td><td>@Medium @Glose </td><td>France</td><td>2.92K</td><td>6</td></tr><tr><td>120</td><td><a href="https://github.com/mnapoli">
        <img src="https://avatars.githubusercontent.com/u/720328?s=72&u=dc9333a6798810e941a0240566fe2a38a5f55bd7&v=4" height="12" />
        <b>mnapoli</b>
    </a></td><td>@brefphp </td><td>Lyon, France</td><td>1.44K</td><td>6</td></tr><tr><td>121</td><td><a href="https://github.com/gus33000">
        <img src="https://avatars.githubusercontent.com/u/3755345?s=72&u=8be4944a8331aaff14de13cf7f0354c4a8c192b8&v=4" height="12" />
        <b>gus33000</b>
    </a></td><td>labri</td><td>France</td><td>529</td><td>6</td></tr><tr><td>122</td><td><a href="https://github.com/k33g">
        <img src="https://avatars.githubusercontent.com/u/491848?s=72&u=332138d1fe94fc2ab4953428187a92663e14eeac&v=4" height="12" />
        <b>k33g</b>
    </a></td><td>-</td><td>Lyon (France)</td><td>372</td><td>6</td></tr><tr><td>123</td><td><a href="https://github.com/Tripouille">
        <img src="https://avatars.githubusercontent.com/u/49202412?s=72&u=76785d33c55894d68245685e62b1aa7ae5ed831a&v=4" height="12" />
        <b>Tripouille</b>
    </a></td><td>fabriq</td><td>France</td><td>343</td><td>6</td></tr><tr><td>124</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>319</td><td>6</td></tr><tr><td>125</td><td><a href="https://github.com/tbroyer">
        <img src="https://avatars.githubusercontent.com/u/173813?s=72&v=4" height="12" />
        <b>tbroyer</b>
    </a></td><td>@atolcd </td><td>Dijon, France</td><td>287</td><td>6</td></tr><tr><td>126</td><td><a href="https://github.com/MrArnaudMichel">
        <img src="https://avatars.githubusercontent.com/u/87248697?s=72&u=3ced1cd1b0fde42c6e1a1a04eadcf7e8eb1345b3&v=4" height="12" />
        <b>MrArnaudMichel</b>
    </a></td><td>UTBM</td><td>France</td><td>279</td><td>6</td></tr><tr><td>127</td><td><a href="https://github.com/cyriltovena">
        <img src="https://avatars.githubusercontent.com/u/1053421?s=72&u=deb8f1e0659453dcab4fd06a8617ffee61d6c3bf&v=4" height="12" />
        <b>cyriltovena</b>
    </a></td><td>@grafana </td><td>Avignon, France</td><td>254</td><td>6</td></tr><tr><td>128</td><td><a href="https://github.com/zoriya">
        <img src="https://avatars.githubusercontent.com/u/32224410?s=72&u=966b19ce0af0d82661baaea34396db0526f52f9d&v=4" height="12" />
        <b>zoriya</b>
    </a></td><td>-</td><td>France</td><td>239</td><td>6</td></tr><tr><td>129</td><td><a href="https://github.com/Julow">
        <img src="https://avatars.githubusercontent.com/u/2310568?s=72&v=4" height="12" />
        <b>Julow</b>
    </a></td><td>@tarides</td><td>France</td><td>228</td><td>6</td></tr><tr><td>130</td><td><a href="https://github.com/vict0rsch">
        <img src="https://avatars.githubusercontent.com/u/9283470?s=72&u=c20549169977e6c30b03e4f6445366e7901029ed&v=4" height="12" />
        <b>vict0rsch</b>
    </a></td><td>@Entalpic</td><td>Paris, France</td><td>203</td><td>6</td></tr><tr><td>131</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>4.19K</td><td>5</td></tr><tr><td>132</td><td><a href="https://github.com/patrickheng">
        <img src="https://avatars.githubusercontent.com/u/9051314?s=72&u=5c38c6cf3e902645bcb37c7ca3744b89de422156&v=4" height="12" />
        <b>patrickheng</b>
    </a></td><td>Freelance</td><td>Paris</td><td>788</td><td>5</td></tr><tr><td>133</td><td><a href="https://github.com/angeluriot">
        <img src="https://avatars.githubusercontent.com/u/46031994?s=72&u=8636531cc02d42681ad0935a16c18c6100ef0feb&v=4" height="12" />
        <b>angeluriot</b>
    </a></td><td>@blablacar</td><td>France</td><td>722</td><td>5</td></tr><tr><td>134</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>511</td><td>5</td></tr><tr><td>135</td><td><a href="https://github.com/jvoisin">
        <img src="https://avatars.githubusercontent.com/u/325724?s=72&u=4446b76c0f4ebcbecb2678759f8d13817a67f85d&v=4" height="12" />
        <b>jvoisin</b>
    </a></td><td>-</td><td>France</td><td>462</td><td>5</td></tr><tr><td>136</td><td><a href="https://github.com/LostInBrittany">
        <img src="https://avatars.githubusercontent.com/u/726476?s=72&u=5f9c71501700a15d727e15fd0ddd699b884d2a11&v=4" height="12" />
        <b>LostInBrittany</b>
    </a></td><td>@CleverCloud</td><td>Brest, Brittany, France</td><td>301</td><td>5</td></tr><tr><td>137</td><td><a href="https://github.com/Keruspe">
        <img src="https://avatars.githubusercontent.com/u/222942?s=72&v=4" height="12" />
        <b>Keruspe</b>
    </a></td><td>Criteo</td><td>Nantes</td><td>253</td><td>5</td></tr><tr><td>138</td><td><a href="https://github.com/pulgamecanica">
        <img src="https://avatars.githubusercontent.com/u/28810331?s=72&u=5f46d85747b93e8d9d37f8c5682e4af4026fcc22&v=4" height="12" />
        <b>pulgamecanica</b>
    </a></td><td>Pulgamecanica</td><td>Paris / Lisbon</td><td>248</td><td>5</td></tr><tr><td>139</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=a736d3293c082d2fd28065a359bd578ebc06a7af&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>230</td><td>5</td></tr><tr><td>140</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>212</td><td>5</td></tr><tr><td>141</td><td><a href="https://github.com/damienalexandre">
        <img src="https://avatars.githubusercontent.com/u/225704?s=72&u=0db288d2431f6fd5962b41ea540dbd1299d0e955&v=4" height="12" />
        <b>damienalexandre</b>
    </a></td><td>JoliCode</td><td>Paris, France</td><td>200</td><td>5</td></tr><tr><td>142</td><td><a href="https://github.com/holtzy">
        <img src="https://avatars.githubusercontent.com/u/10254401?s=72&u=d554070e82949f6c7c6c57d4597f4cfddb053956&v=4" height="12" />
        <b>holtzy</b>
    </a></td><td>Software Engineer - Dataviz</td><td>Montpellier, France</td><td>4.13K</td><td>4</td></tr><tr><td>143</td><td><a href="https://github.com/Zylann">
        <img src="https://avatars.githubusercontent.com/u/1311555?s=72&u=98e85e0c6d8599c7de140000f240417c9f512cea&v=4" height="12" />
        <b>Zylann</b>
    </a></td><td>-</td><td>France</td><td>710</td><td>4</td></tr><tr><td>144</td><td><a href="https://github.com/alelievr">
        <img src="https://avatars.githubusercontent.com/u/6877923?s=72&v=4" height="12" />
        <b>alelievr</b>
    </a></td><td>-</td><td>Paris</td><td>612</td><td>4</td></tr><tr><td>145</td><td><a href="https://github.com/aurelienshz">
        <img src="https://avatars.githubusercontent.com/u/14823737?s=72&u=0d34a6139012a8ba001574942a1464901c064606&v=4" height="12" />
        <b>aurelienshz</b>
    </a></td><td>-</td><td>France</td><td>599</td><td>4</td></tr><tr><td>146</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>511</td><td>4</td></tr><tr><td>147</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>472</td><td>4</td></tr><tr><td>148</td><td><a href="https://github.com/stephrobert">
        <img src="https://avatars.githubusercontent.com/u/681788?s=72&u=cda76428fe4d06957a063238e1dcc1d4c4ae2cf6&v=4" height="12" />
        <b>stephrobert</b>
    </a></td><td>Outscale France</td><td>Lille</td><td>419</td><td>4</td></tr><tr><td>149</td><td><a href="https://github.com/pchaigno">
        <img src="https://avatars.githubusercontent.com/u/1764210?s=72&v=4" height="12" />
        <b>pchaigno</b>
    </a></td><td>Isovalent</td><td>Rennes, France</td><td>415</td><td>4</td></tr><tr><td>150</td><td><a href="https://github.com/emmanuelbernard">
        <img src="https://avatars.githubusercontent.com/u/300760?s=72&v=4" height="12" />
        <b>emmanuelbernard</b>
    </a></td><td>Red Hat</td><td>Paris</td><td>374</td><td>4</td></tr><tr><td>151</td><td><a href="https://github.com/Alex-D">
        <img src="https://avatars.githubusercontent.com/u/426843?s=72&u=1d9cd86448135a8b992038c8a43c5833a8157780&v=4" height="12" />
        <b>Alex-D</b>
    </a></td><td>@Spilium, @Colllect, @Monitoror</td><td>Lille, France</td><td>354</td><td>4</td></tr><tr><td>152</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>326</td><td>4</td></tr><tr><td>153</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=cd05ef11e7f6a4e0d2800639896c37fa6dd49dc9&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>309</td><td>4</td></tr><tr><td>154</td><td><a href="https://github.com/Marsup">
        <img src="https://avatars.githubusercontent.com/u/796194?s=72&v=4" height="12" />
        <b>Marsup</b>
    </a></td><td>-</td><td>Lyon, France</td><td>296</td><td>4</td></tr><tr><td>155</td><td><a href="https://github.com/woctezuma">
        <img src="https://avatars.githubusercontent.com/u/570669?s=72&u=af46fc886659da64e893e12e83eeaccf9445ed1c&v=4" height="12" />
        <b>woctezuma</b>
    </a></td><td>-</td><td>Paris, France</td><td>231</td><td>4</td></tr><tr><td>156</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>216</td><td>4</td></tr><tr><td>157</td><td><a href="https://github.com/tdimnet">
        <img src="https://avatars.githubusercontent.com/u/9935925?s=72&u=90d6020b1e99960d5cc4ad0517bf6e6e96907d6f&v=4" height="12" />
        <b>tdimnet</b>
    </a></td><td>@nx-academy, @EdenSchoolFrance</td><td>Paris, France</td><td>211</td><td>4</td></tr><tr><td>158</td><td><a href="https://github.com/dimaMachina">
        <img src="https://avatars.githubusercontent.com/u/7361780?s=72&u=31ad3c2188d690ce38ec9ae437faf8788d34b916&v=4" height="12" />
        <b>dimaMachina</b>
    </a></td><td>hire me</td><td>Paris, France</td><td>205</td><td>4</td></tr><tr><td>159</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris</td><td>2.34K</td><td>3</td></tr><tr><td>160</td><td><a href="https://github.com/willdurand">
        <img src="https://avatars.githubusercontent.com/u/217628?s=72&u=2941ab8cfc1bd07c7434232a74b9564fb15ac763&v=4" height="12" />
        <b>willdurand</b>
    </a></td><td>@mozilla </td><td>France</td><td>1.82K</td><td>3</td></tr><tr><td>161</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.13K</td><td>3</td></tr><tr><td>162</td><td><a href="https://github.com/Bleuje">
        <img src="https://avatars.githubusercontent.com/u/17087687?s=72&u=43aeff24919f3b82dec581293d2f9df51bcfb187&v=4" height="12" />
        <b>Bleuje</b>
    </a></td><td>-</td><td>Paris</td><td>1.12K</td><td>3</td></tr><tr><td>163</td><td><a href="https://github.com/thomasync">
        <img src="https://avatars.githubusercontent.com/u/12927290?s=72&u=46e5c515789397dc2f91f4fe0a5cfa3f9ea40177&v=4" height="12" />
        <b>thomasync</b>
    </a></td><td>-</td><td>Montpellier, France</td><td>1.02K</td><td>3</td></tr><tr><td>164</td><td><a href="https://github.com/potatoqualitee">
        <img src="https://avatars.githubusercontent.com/u/8278033?s=72&u=5a511a15023e5852701b547a867cb56c1dcb21a7&v=4" height="12" />
        <b>potatoqualitee</b>
    </a></td><td>@dataplat</td><td>North of France</td><td>943</td><td>3</td></tr><tr><td>165</td><td><a href="https://github.com/andfanilo">
        <img src="https://avatars.githubusercontent.com/u/5351877?s=72&u=adbddbe5c788a158b403ff1e1981195523b9e7d7&v=4" height="12" />
        <b>andfanilo</b>
    </a></td><td>Worldline</td><td>France</td><td>619</td><td>3</td></tr><tr><td>166</td><td><a href="https://github.com/Amagash">
        <img src="https://avatars.githubusercontent.com/u/20380447?s=72&u=1c5deea446e3f81f4e86708d96bad45cbd633fe3&v=4" height="12" />
        <b>Amagash</b>
    </a></td><td>AWS</td><td>France</td><td>573</td><td>3</td></tr><tr><td>167</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>456</td><td>3</td></tr><tr><td>168</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>453</td><td>3</td></tr><tr><td>169</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>LudovicRousseau</b>
    </a></td><td>-</td><td>France</td><td>414</td><td>3</td></tr><tr><td>170</td><td><a href="https://github.com/tgalopin">
        <img src="https://avatars.githubusercontent.com/u/1651494?s=72&u=ff057fae3d32e16223fbd1238811d5203111edb5&v=4" height="12" />
        <b>tgalopin</b>
    </a></td><td>@symfony  </td><td>France</td><td>377</td><td>3</td></tr><tr><td>171</td><td><a href="https://github.com/Tk-Glitch">
        <img src="https://avatars.githubusercontent.com/u/741977?s=72&u=71e298c312c17a9a07c1c439e25199ab89e77045&v=4" height="12" />
        <b>Tk-Glitch</b>
    </a></td><td>-</td><td>France</td><td>363</td><td>3</td></tr><tr><td>172</td><td><a href="https://github.com/Ovid">
        <img src="https://avatars.githubusercontent.com/u/24634?s=72&u=b0b1a4df441503bc7e892d053de4c0a7944bcdec&v=4" height="12" />
        <b>Ovid</b>
    </a></td><td>Jack of all trades, master of some.</td><td>France</td><td>341</td><td>3</td></tr><tr><td>173</td><td><a href="https://github.com/aymanfarhat">
        <img src="https://avatars.githubusercontent.com/u/823713?s=72&u=5b4b31ed1641df460cebae7853788310d92e9f96&v=4" height="12" />
        <b>aymanfarhat</b>
    </a></td><td>@Google</td><td>Paris</td><td>282</td><td>3</td></tr><tr><td>174</td><td><a href="https://github.com/elierotenberg">
        <img src="https://avatars.githubusercontent.com/u/4177867?s=72&u=9672e1bcb5e585e0154096fd9127bb4de9afda6e&v=4" height="12" />
        <b>elierotenberg</b>
    </a></td><td>ifea.education</td><td>France</td><td>265</td><td>3</td></tr><tr><td>175</td><td><a href="https://github.com/xviniette">
        <img src="https://avatars.githubusercontent.com/u/4215051?s=72&u=e874cefa62c45b8f135ac77ae1b0457e4076d2b3&v=4" height="12" />
        <b>xviniette</b>
    </a></td><td>-</td><td>France, Montpellier</td><td>265</td><td>3</td></tr><tr><td>176</td><td><a href="https://github.com/erebe">
        <img src="https://avatars.githubusercontent.com/u/854278?s=72&u=e5043ea27db3f1357f92193b770aa32559e69869&v=4" height="12" />
        <b>erebe</b>
    </a></td><td>-</td><td>Paris</td><td>261</td><td>3</td></tr><tr><td>177</td><td><a href="https://github.com/RodZill4">
        <img src="https://avatars.githubusercontent.com/u/6957908?s=72&u=c19aecbe4d441eb008a4485fdcddb661ce659951&v=4" height="12" />
        <b>RodZill4</b>
    </a></td><td>-</td><td>France</td><td>251</td><td>3</td></tr><tr><td>178</td><td><a href="https://github.com/amineHorseman">
        <img src="https://avatars.githubusercontent.com/u/15238963?s=72&u=991e3dcd209c7f34536868cc6013690fc279c0a5&v=4" height="12" />
        <b>amineHorseman</b>
    </a></td><td>-</td><td>Paris</td><td>206</td><td>3</td></tr><tr><td>179</td><td><a href="https://github.com/dgirardeau">
        <img src="https://avatars.githubusercontent.com/u/2735509?s=72&u=0456c0faa0f0cef7fe90cc74d5ae9bb8a19b6bf8&v=4" height="12" />
        <b>dgirardeau</b>
    </a></td><td>CloudCompare</td><td>France (Grenoble)</td><td>203</td><td>3</td></tr><tr><td>180</td><td><a href="https://github.com/oliviertassinari">
        <img src="https://avatars.githubusercontent.com/u/3165635?s=72&u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4" height="12" />
        <b>oliviertassinari</b>
    </a></td><td>MUI</td><td>Paris, France</td><td>3.17K</td><td>2</td></tr><tr><td>181</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.61K</td><td>2</td></tr><tr><td>182</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>deepnight</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.46K</td><td>2</td></tr><tr><td>183</td><td><a href="https://github.com/mratsim">
        <img src="https://avatars.githubusercontent.com/u/22738317?s=72&u=2a86b7777fb12d4153cc9a805595445e81f7b537&v=4" height="12" />
        <b>mratsim</b>
    </a></td><td>-</td><td>Paris</td><td>916</td><td>2</td></tr><tr><td>184</td><td><a href="https://github.com/nicolargo">
        <img src="https://avatars.githubusercontent.com/u/776747?s=72&u=aa191d095cac0b9bb8ff2aca1d87370b47c0edee&v=4" height="12" />
        <b>nicolargo</b>
    </a></td><td>Le blog de Nicolargo</td><td>Valbonne, France</td><td>830</td><td>2</td></tr><tr><td>185</td><td><a href="https://github.com/Te-k">
        <img src="https://avatars.githubusercontent.com/u/15989628?s=72&u=7e42e05b8b30d6706597aa6c9fd90f4b3c35d904&v=4" height="12" />
        <b>Te-k</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>826</td><td>2</td></tr><tr><td>186</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>774</td><td>2</td></tr><tr><td>187</td><td><a href="https://github.com/sebcrozet">
        <img src="https://avatars.githubusercontent.com/u/1734958?s=72&v=4" height="12" />
        <b>sebcrozet</b>
    </a></td><td>Dimforge</td><td>France</td><td>705</td><td>2</td></tr><tr><td>188</td><td><a href="https://github.com/pgrimaud">
        <img src="https://avatars.githubusercontent.com/u/1866496?s=72&u=4b2f258754b4728d019d03d7a014be1812ae69fa&v=4" height="12" />
        <b>pgrimaud</b>
    </a></td><td>@sezane</td><td>Paris, France</td><td>625</td><td>2</td></tr><tr><td>189</td><td><a href="https://github.com/ayamflow">
        <img src="https://avatars.githubusercontent.com/u/1998991?s=72&u=1b9615af6920665b4830647322d632de72f403ae&v=4" height="12" />
        <b>ayamflow</b>
    </a></td><td>-</td><td>Nantes, France</td><td>614</td><td>2</td></tr><tr><td>190</td><td><a href="https://github.com/spolu">
        <img src="https://avatars.githubusercontent.com/u/15067?s=72&u=6297f8db333ba5fbf2be0ee9d796a09b1419115f&v=4" height="12" />
        <b>spolu</b>
    </a></td><td>Dust</td><td>Paris</td><td>509</td><td>2</td></tr><tr><td>191</td><td><a href="https://github.com/sebsto">
        <img src="https://avatars.githubusercontent.com/u/401798?s=72&u=dc5e8355d22fe5bc956c382be7fa9dddbebea5db&v=4" height="12" />
        <b>sebsto</b>
    </a></td><td>Amazon Web Services</td><td>Paris</td><td>498</td><td>2</td></tr><tr><td>192</td><td><a href="https://github.com/Tahul">
        <img src="https://avatars.githubusercontent.com/u/1385263?s=72&u=5fa8ea08de4cd72e468943edabfa9d72f3c02e70&v=4" height="12" />
        <b>Tahul</b>
    </a></td><td>@thecompaniesapi</td><td>Nantes, France</td><td>468</td><td>2</td></tr><tr><td>193</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>mrkkrp</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>466</td><td>2</td></tr><tr><td>194</td><td><a href="https://github.com/JCluzet">
        <img src="https://avatars.githubusercontent.com/u/55356071?s=72&u=1e399003c32fba533c32f1b912b9ca56756e3887&v=4" height="12" />
        <b>JCluzet</b>
    </a></td><td>42Paris</td><td>Paris</td><td>438</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/David-Guillot">
        <img src="https://avatars.githubusercontent.com/u/1136694?s=72&u=edec3b76e59723a7df71642f62ebc40f11b89f60&v=4" height="12" />
        <b>David-Guillot</b>
    </a></td><td>-</td><td>France</td><td>434</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/guenchi">
        <img src="https://avatars.githubusercontent.com/u/25831936?s=72&u=bfcf8564dd7f8e5fbc69c67223bb87fc9276360a&v=4" height="12" />
        <b>guenchi</b>
    </a></td><td>-</td><td>Paris, France</td><td>427</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/Eschults">
        <img src="https://avatars.githubusercontent.com/u/8090140?s=72&u=8a860a3b8066c1c6fe7ddba93065bd8272c38f45&v=4" height="12" />
        <b>Eschults</b>
    </a></td><td>@lewagon</td><td>Paris</td><td>426</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/unixfox">
        <img src="https://avatars.githubusercontent.com/u/4016501?s=72&u=d113bfcd7a1bb996a29af9ace2c158a3c6289b40&v=4" height="12" />
        <b>unixfox</b>
    </a></td><td>-</td><td>Auvergne-Rhône-Alpes, France - Wallonia, Belgium</td><td>370</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/mpromonet">
        <img src="https://avatars.githubusercontent.com/u/1367630?s=72&u=656527786957614d8cf8dec22644fe40dadbbe6f&v=4" height="12" />
        <b>mpromonet</b>
    </a></td><td>-</td><td>France</td><td>352</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=ab8a51159e4618425b66829f88d7f0bb2f563a75&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>341</td><td>2</td></tr>
    </tbody>
</table>
