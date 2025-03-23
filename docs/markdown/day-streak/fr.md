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
        <tr><td>🥇</td><td><a href="https://github.com/solygambas">
        <img src="https://avatars.githubusercontent.com/u/51904909?s=72&u=8b618cebbc76985e16a93b1ac34e80b5f4a80a60&v=4" height="12" />
        <b>solygambas</b>
    </a></td><td>Freelancer</td><td>France</td><td>576</td><td>1.87K</td></tr><tr><td>🥈</td><td><a href="https://github.com/bloodyowl">
        <img src="https://avatars.githubusercontent.com/u/1688645?s=72&u=1cf687904979439e58e6629628a0dd41b32a591b&v=4" height="12" />
        <b>bloodyowl</b>
    </a></td><td>@swan-io</td><td>Paris, France</td><td>413</td><td>1.59K</td></tr><tr><td>🥉</td><td><a href="https://github.com/gsmet">
        <img src="https://avatars.githubusercontent.com/u/1279749?s=72&u=e462a6165ea17647aed446ca31fae604338ae18c&v=4" height="12" />
        <b>gsmet</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>340</td><td>1.25K</td></tr><tr><td>4</td><td><a href="https://github.com/Caceresenzo">
        <img src="https://avatars.githubusercontent.com/u/7386242?s=72&u=17d4617bb086732fd4da9287942494386d06ebb3&v=4" height="12" />
        <b>Caceresenzo</b>
    </a></td><td>-</td><td>France</td><td>221</td><td>1.23K</td></tr><tr><td>5</td><td><a href="https://github.com/Haroenv">
        <img src="https://avatars.githubusercontent.com/u/6270048?s=72&u=767b8fde5c473100da40c50fd2f7c2df139c8d48&v=4" height="12" />
        <b>Haroenv</b>
    </a></td><td>@algolia</td><td>Paris, France</td><td>601</td><td>996</td></tr><tr><td>6</td><td><a href="https://github.com/ask0ldd">
        <img src="https://avatars.githubusercontent.com/u/117862447?s=72&u=26ccc7b22832feeb7a2dc7b8909f6cc90d239a82&v=4" height="12" />
        <b>ask0ldd</b>
    </a></td><td>-</td><td>Paris, France</td><td>619</td><td>794</td></tr><tr><td>7</td><td><a href="https://github.com/BrunoLevy">
        <img src="https://avatars.githubusercontent.com/u/19478253?s=72&u=5d291f158e7d7f0ebb99475e5f8974a7a8ec374d&v=4" height="12" />
        <b>BrunoLevy</b>
    </a></td><td>@inria</td><td>Saclay, France</td><td>707</td><td>565</td></tr><tr><td>8</td><td><a href="https://github.com/crazy-max">
        <img src="https://avatars.githubusercontent.com/u/1951866?s=72&v=4" height="12" />
        <b>crazy-max</b>
    </a></td><td>@docker</td><td>France</td><td>2.53K</td><td>550</td></tr><tr><td>9</td><td><a href="https://github.com/fxcoudert">
        <img src="https://avatars.githubusercontent.com/u/1980544?s=72&u=9a73e04b4876d134ff69035fd7ea77eebecda2a3&v=4" height="12" />
        <b>fxcoudert</b>
    </a></td><td>-</td><td>Paris, France</td><td>344</td><td>224</td></tr><tr><td>10</td><td><a href="https://github.com/NelleV">
        <img src="https://avatars.githubusercontent.com/u/184798?s=72&v=4" height="12" />
        <b>NelleV</b>
    </a></td><td>TIMC</td><td>Grenoble</td><td>266</td><td>187</td></tr><tr><td>11</td><td><a href="https://github.com/rlouf">
        <img src="https://avatars.githubusercontent.com/u/3885044?s=72&u=d25f1b19c341ad092b89b860547177a7b5107261&v=4" height="12" />
        <b>rlouf</b>
    </a></td><td>.txt</td><td>Bourron-Marlotte, France</td><td>495</td><td>176</td></tr><tr><td>12</td><td><a href="https://github.com/rozierguillaume">
        <img src="https://avatars.githubusercontent.com/u/22763678?s=72&u=f10c1d50d6f9ce7ed6c7d64a767c02911df19cf4&v=4" height="12" />
        <b>rozierguillaume</b>
    </a></td><td>-</td><td>Paris</td><td>335</td><td>173</td></tr><tr><td>13</td><td><a href="https://github.com/Progi1984">
        <img src="https://avatars.githubusercontent.com/u/1533248?s=72&u=096bead2eab90e4795096b7d518583223dd34be6&v=4" height="12" />
        <b>Progi1984</b>
    </a></td><td>@PrestaShopCorp </td><td>Rennes, France</td><td>233</td><td>155</td></tr><tr><td>14</td><td><a href="https://github.com/vinayak-mehta">
        <img src="https://avatars.githubusercontent.com/u/4329421?s=72&u=bced413b47ba8604871f6b4ac28f623f72bcf56d&v=4" height="12" />
        <b>vinayak-mehta</b>
    </a></td><td>-</td><td>Paris</td><td>552</td><td>112</td></tr><tr><td>15</td><td><a href="https://github.com/Barbapapazes">
        <img src="https://avatars.githubusercontent.com/u/45267552?s=72&u=b4b5ab12a72fb2d26c2c3b8197033324be374956&v=4" height="12" />
        <b>Barbapapazes</b>
    </a></td><td>-</td><td>Paris</td><td>250</td><td>107</td></tr><tr><td>16</td><td><a href="https://github.com/huang-julien">
        <img src="https://avatars.githubusercontent.com/u/63512348?s=72&u=b60a88c0337dc98b9cdbf1d0a4b3c635786a01b0&v=4" height="12" />
        <b>huang-julien</b>
    </a></td><td>Leetchi</td><td>France</td><td>221</td><td>101</td></tr><tr><td>17</td><td><a href="https://github.com/mcanouil">
        <img src="https://avatars.githubusercontent.com/u/8896044?s=72&u=86a5cbe0323a90349d87b7fa1fd4b22ae9d45ea2&v=4" height="12" />
        <b>mcanouil</b>
    </a></td><td>-</td><td>Lille, France</td><td>301</td><td>85</td></tr><tr><td>18</td><td><a href="https://github.com/zoriya">
        <img src="https://avatars.githubusercontent.com/u/32224410?s=72&u=966b19ce0af0d82661baaea34396db0526f52f9d&v=4" height="12" />
        <b>zoriya</b>
    </a></td><td>-</td><td>France</td><td>244</td><td>82</td></tr><tr><td>19</td><td><a href="https://github.com/Calinou">
        <img src="https://avatars.githubusercontent.com/u/180032?s=72&v=4" height="12" />
        <b>Calinou</b>
    </a></td><td>@godotengine</td><td>Troyes, France</td><td>1.41K</td><td>81</td></tr><tr><td>20</td><td><a href="https://github.com/xvw">
        <img src="https://avatars.githubusercontent.com/u/5732466?s=72&u=e2da3651aae7faf29d3c54c4d7cf66d92f35f16e&v=4" height="12" />
        <b>xvw</b>
    </a></td><td>@funkywork, @tarides</td><td>Nantes</td><td>324</td><td>81</td></tr><tr><td>21</td><td><a href="https://github.com/posva">
        <img src="https://avatars.githubusercontent.com/u/664177?s=72&u=ded1e1cffd1d5620c9d9fb1a1c966c17204d6bef&v=4" height="12" />
        <b>posva</b>
    </a></td><td>Freelance</td><td>Paris </td><td>6.13K</td><td>78</td></tr><tr><td>22</td><td><a href="https://github.com/ngxson">
        <img src="https://avatars.githubusercontent.com/u/7702203?s=72&u=c998d920dbca6506c9dda1df1b28adae9842720e&v=4" height="12" />
        <b>ngxson</b>
    </a></td><td>@huggingface </td><td>France</td><td>281</td><td>78</td></tr><tr><td>23</td><td><a href="https://github.com/ornicar">
        <img src="https://avatars.githubusercontent.com/u/140370?s=72&v=4" height="12" />
        <b>ornicar</b>
    </a></td><td>lichess.org</td><td>France</td><td>6.01K</td><td>74</td></tr><tr><td>24</td><td><a href="https://github.com/l-lin">
        <img src="https://avatars.githubusercontent.com/u/5452304?s=72&u=2e2f03b021b647037453379a788385f317c8208f&v=4" height="12" />
        <b>l-lin</b>
    </a></td><td>@doctolib</td><td>Paris</td><td>263</td><td>58</td></tr><tr><td>25</td><td><a href="https://github.com/mockersf">
        <img src="https://avatars.githubusercontent.com/u/8672791?s=72&u=6350847888b0006d335bc98ca32a5359389d26b5&v=4" height="12" />
        <b>mockersf</b>
    </a></td><td>-</td><td>France</td><td>272</td><td>52</td></tr><tr><td>26</td><td><a href="https://github.com/lovasoa">
        <img src="https://avatars.githubusercontent.com/u/552629?s=72&u=3b5257f8d20ea6c313ed91ba80c024c3f00cf5dc&v=4" height="12" />
        <b>lovasoa</b>
    </a></td><td>@auto-grid @enexflow </td><td>Paris, France</td><td>585</td><td>50</td></tr><tr><td>27</td><td><a href="https://github.com/glemaitre">
        <img src="https://avatars.githubusercontent.com/u/7454015?s=72&u=d9704641f89c00ce86f8207e59aedb554109d7fa&v=4" height="12" />
        <b>glemaitre</b>
    </a></td><td>Chief ML Officer / OSS Engineeer @probabl-ai </td><td>Paris-Saclay / France</td><td>808</td><td>46</td></tr><tr><td>28</td><td><a href="https://github.com/ganatan">
        <img src="https://avatars.githubusercontent.com/u/32958393?s=72&u=fc4800d819397a6bc72c65257ae230c3348b8627&v=4" height="12" />
        <b>ganatan</b>
    </a></td><td>ganatan</td><td>France</td><td>428</td><td>45</td></tr><tr><td>29</td><td><a href="https://github.com/nhoizey">
        <img src="https://avatars.githubusercontent.com/u/78213?s=72&u=7a2b7a2aca0dcc113d7a61a6dcf9e7a338e22053&v=4" height="12" />
        <b>nhoizey</b>
    </a></td><td>@cleverage</td><td>Paris, France</td><td>263</td><td>43</td></tr><tr><td>30</td><td><a href="https://github.com/pkestene">
        <img src="https://avatars.githubusercontent.com/u/8276295?s=72&v=4" height="12" />
        <b>pkestene</b>
    </a></td><td>CEA</td><td>France</td><td>217</td><td>42</td></tr><tr><td>31</td><td><a href="https://github.com/Kehrlann">
        <img src="https://avatars.githubusercontent.com/u/5676779?s=72&u=98595e18b5106e4526c48d984983ea525890f588&v=4" height="12" />
        <b>Kehrlann</b>
    </a></td><td>@broadcom </td><td>Paris, France</td><td>463</td><td>37</td></tr><tr><td>32</td><td><a href="https://github.com/antoinevastel">
        <img src="https://avatars.githubusercontent.com/u/5827148?s=72&u=58bfd63c66ed664f66c1338464c502e88cfef45b&v=4" height="12" />
        <b>antoinevastel</b>
    </a></td><td>-</td><td>Nantes, France</td><td>344</td><td>37</td></tr><tr><td>33</td><td><a href="https://github.com/garronej">
        <img src="https://avatars.githubusercontent.com/u/6702424?s=72&u=13f489f6f1b3fde3b4d6be6ddc503d2b95a0f5c7&v=4" height="12" />
        <b>garronej</b>
    </a></td><td>@InseeFrLab</td><td>Paris, France</td><td>415</td><td>36</td></tr><tr><td>34</td><td><a href="https://github.com/pawamoy">
        <img src="https://avatars.githubusercontent.com/u/3999221?s=72&u=b030e4c89df2f3a36bc4710b925bdeb6745c9856&v=4" height="12" />
        <b>pawamoy</b>
    </a></td><td>@pawamoy-insiders </td><td>France</td><td>515</td><td>35</td></tr><tr><td>35</td><td><a href="https://github.com/soyuka">
        <img src="https://avatars.githubusercontent.com/u/1321971?s=72&u=c89bcb8e5eeff581d304dcfc5f26628ddc1760a5&v=4" height="12" />
        <b>soyuka</b>
    </a></td><td>@coopTilleuls</td><td>Nantes, France</td><td>448</td><td>35</td></tr><tr><td>36</td><td><a href="https://github.com/corsonr">
        <img src="https://avatars.githubusercontent.com/u/1649788?s=72&u=36a376b200fd98e6100788c1ec39b3b7e912797a&v=4" height="12" />
        <b>corsonr</b>
    </a></td><td>Be API</td><td>France</td><td>248</td><td>35</td></tr><tr><td>37</td><td><a href="https://github.com/ggrossetie">
        <img src="https://avatars.githubusercontent.com/u/333276?s=72&u=9087930b05d462a706f06a9ce6bf0c8289d8069d&v=4" height="12" />
        <b>ggrossetie</b>
    </a></td><td>Yuzu tech</td><td>Lyon</td><td>233</td><td>34</td></tr><tr><td>38</td><td><a href="https://github.com/innocenzi">
        <img src="https://avatars.githubusercontent.com/u/16060559?s=72&u=cf061757407ef529958cf24bac8d2f699ad6e6ed&v=4" height="12" />
        <b>innocenzi</b>
    </a></td><td>Developer @JetflyAviation</td><td>France</td><td>389</td><td>32</td></tr><tr><td>39</td><td><a href="https://github.com/ibelick">
        <img src="https://avatars.githubusercontent.com/u/14288396?s=72&u=73ee6fdd46dbab7bed83493f5f448654ff2d7f06&v=4" height="12" />
        <b>ibelick</b>
    </a></td><td>-</td><td>Paris</td><td>925</td><td>28</td></tr><tr><td>40</td><td><a href="https://github.com/azerpas">
        <img src="https://avatars.githubusercontent.com/u/19282069?s=72&u=23fefaa28d073e8c7fc44a5a8737145773e38c74&v=4" height="12" />
        <b>azerpas</b>
    </a></td><td>@DataDome</td><td>Paris</td><td>217</td><td>28</td></tr><tr><td>41</td><td><a href="https://github.com/MattKetmo">
        <img src="https://avatars.githubusercontent.com/u/334996?s=72&u=2b06b452771518c77550e819cb6991bbe8866078&v=4" height="12" />
        <b>MattKetmo</b>
    </a></td><td>Kiln</td><td>Paris</td><td>212</td><td>26</td></tr><tr><td>42</td><td><a href="https://github.com/gdalle">
        <img src="https://avatars.githubusercontent.com/u/22795598?s=72&u=f2e448edb1e79720c999ccd5282d1124c9613ef3&v=4" height="12" />
        <b>gdalle</b>
    </a></td><td>École des Ponts</td><td>Paris</td><td>520</td><td>25</td></tr><tr><td>43</td><td><a href="https://github.com/sylvestre">
        <img src="https://avatars.githubusercontent.com/u/733326?s=72&u=77d7752593d6fa035b33e63386cc15479744ab24&v=4" height="12" />
        <b>sylvestre</b>
    </a></td><td>Mozilla</td><td>France</td><td>487</td><td>25</td></tr><tr><td>44</td><td><a href="https://github.com/LaurentMazare">
        <img src="https://avatars.githubusercontent.com/u/1041292?s=72&u=4d4c5fe94c63a8eb244d812c6d97511c3640d122&v=4" height="12" />
        <b>LaurentMazare</b>
    </a></td><td>-</td><td>Paris</td><td>2.38K</td><td>24</td></tr><tr><td>45</td><td><a href="https://github.com/agramfort">
        <img src="https://avatars.githubusercontent.com/u/161052?s=72&u=28620e0e14597ad721a7505cf486aaf5687aea66&v=4" height="12" />
        <b>agramfort</b>
    </a></td><td>Meta</td><td>Paris, France</td><td>1.34K</td><td>22</td></tr><tr><td>46</td><td><a href="https://github.com/emersion">
        <img src="https://avatars.githubusercontent.com/u/506932?s=72&u=04995169ac1851b91ca12b47f4862ded1b108765&v=4" height="12" />
        <b>emersion</b>
    </a></td><td>-</td><td>France</td><td>1.9K</td><td>21</td></tr><tr><td>47</td><td><a href="https://github.com/FaridSafi">
        <img src="https://avatars.githubusercontent.com/u/388375?s=72&u=a10567f0c2ae0b6a68a4d590c8fbdd40851a7d59&v=4" height="12" />
        <b>FaridSafi</b>
    </a></td><td>@LeReacteur</td><td>Paris, France</td><td>1.8K</td><td>21</td></tr><tr><td>48</td><td><a href="https://github.com/GuillaumeGomez">
        <img src="https://avatars.githubusercontent.com/u/3050060?s=72&u=6ca85464b07c5464a052250a4fc3e3f9c03c97ed&v=4" height="12" />
        <b>GuillaumeGomez</b>
    </a></td><td>@huawei</td><td>Paris</td><td>1.47K</td><td>21</td></tr><tr><td>49</td><td><a href="https://github.com/lra">
        <img src="https://avatars.githubusercontent.com/u/122286?s=72&u=5b877e8eca464d7f4351a20c1531828f99db6090&v=4" height="12" />
        <b>lra</b>
    </a></td><td>-</td><td>Toulouse, NY, SF</td><td>267</td><td>21</td></tr><tr><td>50</td><td><a href="https://github.com/gregberge">
        <img src="https://avatars.githubusercontent.com/u/266302?s=72&u=7b1d8d84bfbaf6cf8b340896f3cea02da2669c46&v=4" height="12" />
        <b>gregberge</b>
    </a></td><td>Argos</td><td>Paris, France</td><td>2.01K</td><td>15</td></tr><tr><td>51</td><td><a href="https://github.com/bzg">
        <img src="https://avatars.githubusercontent.com/u/63500?s=72&u=5388581f4d8481e5c9ea311d4fb12eedee21647f&v=4" height="12" />
        <b>bzg</b>
    </a></td><td>@codegouvfr</td><td>Paris</td><td>802</td><td>15</td></tr><tr><td>52</td><td><a href="https://github.com/rouault">
        <img src="https://avatars.githubusercontent.com/u/1192433?s=72&u=aebaf912a08a734156caf25b26ab78d1959f0ed5&v=4" height="12" />
        <b>rouault</b>
    </a></td><td>Spatialys</td><td>France</td><td>747</td><td>15</td></tr><tr><td>53</td><td><a href="https://github.com/VonC">
        <img src="https://avatars.githubusercontent.com/u/79478?s=72&v=4" height="12" />
        <b>VonC</b>
    </a></td><td>-</td><td>France</td><td>457</td><td>15</td></tr><tr><td>54</td><td><a href="https://github.com/mquandalle">
        <img src="https://avatars.githubusercontent.com/u/1730702?s=72&u=ebe99b2bcc14e2e2376df8637ddc47f1b26a5e7b&v=4" height="12" />
        <b>mquandalle</b>
    </a></td><td>-</td><td>Paris, France</td><td>321</td><td>15</td></tr><tr><td>55</td><td><a href="https://github.com/melix">
        <img src="https://avatars.githubusercontent.com/u/316357?s=72&u=2d99b7a2de1d0530b77e897df3667db916dc1cdd&v=4" height="12" />
        <b>melix</b>
    </a></td><td>Oracle Labs </td><td>Nantes, France</td><td>620</td><td>14</td></tr><tr><td>56</td><td><a href="https://github.com/Eschults">
        <img src="https://avatars.githubusercontent.com/u/8090140?s=72&u=8a860a3b8066c1c6fe7ddba93065bd8272c38f45&v=4" height="12" />
        <b>Eschults</b>
    </a></td><td>@lewagon</td><td>Paris</td><td>427</td><td>14</td></tr><tr><td>57</td><td><a href="https://github.com/albertvillanova">
        <img src="https://avatars.githubusercontent.com/u/8515462?s=72&u=72a51bbb90c88db85efbc9260c63b0d6adfdfceb&v=4" height="12" />
        <b>albertvillanova</b>
    </a></td><td>@huggingface @aiinnova</td><td>Paris (France)</td><td>410</td><td>14</td></tr><tr><td>58</td><td><a href="https://github.com/kartben">
        <img src="https://avatars.githubusercontent.com/u/128251?s=72&v=4" height="12" />
        <b>kartben</b>
    </a></td><td>-</td><td>Toulouse, France</td><td>393</td><td>14</td></tr><tr><td>59</td><td><a href="https://github.com/frankie567">
        <img src="https://avatars.githubusercontent.com/u/1144727?s=72&u=c159fe047727aedecbbeeaa96a1b03ceb9d39add&v=4" height="12" />
        <b>frankie567</b>
    </a></td><td>@polarsource</td><td>Lyon, France</td><td>360</td><td>14</td></tr><tr><td>60</td><td><a href="https://github.com/cor3ntin">
        <img src="https://avatars.githubusercontent.com/u/1409019?s=72&v=4" height="12" />
        <b>cor3ntin</b>
    </a></td><td>-</td><td>Bordeaux, France</td><td>354</td><td>14</td></tr><tr><td>61</td><td><a href="https://github.com/Phyronnaz">
        <img src="https://avatars.githubusercontent.com/u/16806877?s=72&u=9f22d47f8682df3061081987287e90d40f553cc8&v=4" height="12" />
        <b>Phyronnaz</b>
    </a></td><td>-</td><td>France</td><td>300</td><td>14</td></tr><tr><td>62</td><td><a href="https://github.com/williamdes">
        <img src="https://avatars.githubusercontent.com/u/7784660?s=72&u=41b673444a231d4b51158f19405660bead34e360&v=4" height="12" />
        <b>williamdes</b>
    </a></td><td>@wdes, @phpmyadmin, @sudo-bot, @code-lts </td><td>Brittany, France</td><td>221</td><td>14</td></tr><tr><td>63</td><td><a href="https://github.com/rm3l">
        <img src="https://avatars.githubusercontent.com/u/593208?s=72&v=4" height="12" />
        <b>rm3l</b>
    </a></td><td>Red Hat</td><td>Lyon, France</td><td>201</td><td>14</td></tr><tr><td>64</td><td><a href="https://github.com/djhi">
        <img src="https://avatars.githubusercontent.com/u/1122076?s=72&u=f0c921a9936a7af17c272ca8857044c079ccd225&v=4" height="12" />
        <b>djhi</b>
    </a></td><td>Marmelab</td><td>Dijon (France)</td><td>200</td><td>14</td></tr><tr><td>65</td><td><a href="https://github.com/NathanLovato">
        <img src="https://avatars.githubusercontent.com/u/12694995?s=72&u=e4abd5fa8b74c82c57955f490da199a1ac7b9d8c&v=4" height="12" />
        <b>NathanLovato</b>
    </a></td><td>GDQuest</td><td>France</td><td>854</td><td>13</td></tr><tr><td>66</td><td><a href="https://github.com/KtorZ">
        <img src="https://avatars.githubusercontent.com/u/5680256?s=72&u=020eb2bc68211d32c1691695b6ab22ad55478501&v=4" height="12" />
        <b>KtorZ</b>
    </a></td><td>@cardano-foundation</td><td>Toulouse</td><td>458</td><td>13</td></tr><tr><td>67</td><td><a href="https://github.com/cjbrigato">
        <img src="https://avatars.githubusercontent.com/u/680049?s=72&u=6e6b734ff1dfac605b6a378098676d9abf18b33e&v=4" height="12" />
        <b>cjbrigato</b>
    </a></td><td>COLIN BRIGATO E.I.R.L.</td><td>Paris - France</td><td>304</td><td>13</td></tr><tr><td>68</td><td><a href="https://github.com/mrkkrp">
        <img src="https://avatars.githubusercontent.com/u/8165792?s=72&u=d1f6d1a5e2a1f73d8f3255172d3fd2a1b5091e02&v=4" height="12" />
        <b>mrkkrp</b>
    </a></td><td>@tweag</td><td>Château-Thierry, France</td><td>468</td><td>12</td></tr><tr><td>69</td><td><a href="https://github.com/cfrBernard">
        <img src="https://avatars.githubusercontent.com/u/153459846?s=72&u=65388d43a6fe3542df013dbba9875071d8762e71&v=4" height="12" />
        <b>cfrBernard</b>
    </a></td><td>-</td><td>France </td><td>4.04K</td><td>11</td></tr><tr><td>70</td><td><a href="https://github.com/CorentinTh">
        <img src="https://avatars.githubusercontent.com/u/25065347?s=72&u=ddfc8b7812ebc8cbd9245f499e4703bf3165ec31&v=4" height="12" />
        <b>CorentinTh</b>
    </a></td><td>@GeorgesTech </td><td>France - Lyon</td><td>832</td><td>11</td></tr><tr><td>71</td><td><a href="https://github.com/jfalcou">
        <img src="https://avatars.githubusercontent.com/u/285977?s=72&u=aa9be7c63023593e6e3fb7765390e789f31b7509&v=4" height="12" />
        <b>jfalcou</b>
    </a></td><td>University Paris Sud XI, CNRS</td><td>Orsay, France</td><td>306</td><td>11</td></tr><tr><td>72</td><td><a href="https://github.com/elisee">
        <img src="https://avatars.githubusercontent.com/u/446986?s=72&u=df08e96da70c3f0c00a351bf3c344fb56c02d24d&v=4" height="12" />
        <b>elisee</b>
    </a></td><td>@elisee</td><td>Strasbourg, France</td><td>221</td><td>11</td></tr><tr><td>73</td><td><a href="https://github.com/laurentkempe">
        <img src="https://avatars.githubusercontent.com/u/272612?s=72&u=d5a602c4b87d93c5497e13c2badc0f5d6f895ac4&v=4" height="12" />
        <b>laurentkempe</b>
    </a></td><td>@TechHeadBrothers @Innoveo </td><td>Illzach, France</td><td>211</td><td>11</td></tr><tr><td>74</td><td><a href="https://github.com/0xN0x">
        <img src="https://avatars.githubusercontent.com/u/1781547?s=72&u=84f608fab306dd7b1c3df0a578bd476fefb15f7a&v=4" height="12" />
        <b>0xN0x</b>
    </a></td><td>-</td><td>France</td><td>2.29K</td><td>10</td></tr><tr><td>75</td><td><a href="https://github.com/LambdAurora">
        <img src="https://avatars.githubusercontent.com/u/12587332?s=72&u=5bc537e2ad331c812f09328154b69cee58adbe85&v=4" height="12" />
        <b>LambdAurora</b>
    </a></td><td>-</td><td>France</td><td>393</td><td>10</td></tr><tr><td>76</td><td><a href="https://github.com/vincelwt">
        <img src="https://avatars.githubusercontent.com/u/5092466?s=72&u=713f9947e4315b6f0ef62ec5cccd978133006783&v=4" height="12" />
        <b>vincelwt</b>
    </a></td><td>Lunary</td><td>France</td><td>376</td><td>10</td></tr><tr><td>77</td><td><a href="https://github.com/julien-duponchelle">
        <img src="https://avatars.githubusercontent.com/u/345437?s=72&u=96f73635d5ead651490639acf7dc6b62923d59f5&v=4" height="12" />
        <b>julien-duponchelle</b>
    </a></td><td>-</td><td>Paris</td><td>284</td><td>10</td></tr><tr><td>78</td><td><a href="https://github.com/vincentbernat">
        <img src="https://avatars.githubusercontent.com/u/631446?s=72&u=4fa1b32955881f764b4ca8556b8ba62db83f55d2&v=4" height="12" />
        <b>vincentbernat</b>
    </a></td><td>Free</td><td>Paris, France</td><td>1.14K</td><td>9</td></tr><tr><td>79</td><td><a href="https://github.com/FGRibreau">
        <img src="https://avatars.githubusercontent.com/u/138050?s=72&u=09ca579f8ce5f86026aa0d8858432fe77719eee7&v=4" height="12" />
        <b>FGRibreau</b>
    </a></td><td>@nobullshitbooks @netwo-io @hook0 @image-charts  @killbugtoday @mailpopin  / Sold @Redsmin @bringr</td><td>France</td><td>770</td><td>9</td></tr><tr><td>80</td><td><a href="https://github.com/sdpython">
        <img src="https://avatars.githubusercontent.com/u/4695832?s=72&u=9a0581b7da03088ea4ad3a37c5b680a64d864f33&v=4" height="12" />
        <b>sdpython</b>
    </a></td><td>@ENSAE</td><td>paris</td><td>297</td><td>9</td></tr><tr><td>81</td><td><a href="https://github.com/ysbaddaden">
        <img src="https://avatars.githubusercontent.com/u/47380?s=72&v=4" height="12" />
        <b>ysbaddaden</b>
    </a></td><td>Ruby, JavaScript, Crystal</td><td>Nogent sur Oise, France</td><td>258</td><td>9</td></tr><tr><td>82</td><td><a href="https://github.com/Nenkai">
        <img src="https://avatars.githubusercontent.com/u/13786175?s=72&u=c8c5184ee104323fcd17229ff4f44fc0568847e4&v=4" height="12" />
        <b>Nenkai</b>
    </a></td><td>-</td><td>France</td><td>248</td><td>9</td></tr><tr><td>83</td><td><a href="https://github.com/Kerollmops">
        <img src="https://avatars.githubusercontent.com/u/3610253?s=72&u=5997d202d7af48cde9b2c53a29000548886fa81e&v=4" height="12" />
        <b>Kerollmops</b>
    </a></td><td>@meilisearch</td><td>France, Paris</td><td>565</td><td>8</td></tr><tr><td>84</td><td><a href="https://github.com/maziyarpanahi">
        <img src="https://avatars.githubusercontent.com/u/5762953?s=72&u=17070601b919833c70fc8cb61381822fdb987639&v=4" height="12" />
        <b>maziyarpanahi</b>
    </a></td><td>@ISCPIF @JohnSnowLabs</td><td>Paris, France</td><td>430</td><td>8</td></tr><tr><td>85</td><td><a href="https://github.com/laluka">
        <img src="https://avatars.githubusercontent.com/u/7013722?s=72&u=99ab7a21f20471afc4643db1f6fa326d9218cc57&v=4" height="12" />
        <b>laluka</b>
    </a></td><td>ThinkLoveShare</td><td>FRANCE</td><td>391</td><td>8</td></tr><tr><td>86</td><td><a href="https://github.com/JeanMeche">
        <img src="https://avatars.githubusercontent.com/u/1300985?s=72&u=ba0f3dbc4cae44232ebf50bdd845bc98750fa42e&v=4" height="12" />
        <b>JeanMeche</b>
    </a></td><td>👀</td><td>Grenoble - France</td><td>338</td><td>8</td></tr><tr><td>87</td><td><a href="https://github.com/cedricp">
        <img src="https://avatars.githubusercontent.com/u/5940937?s=72&v=4" height="12" />
        <b>cedricp</b>
    </a></td><td>-</td><td>France</td><td>271</td><td>8</td></tr><tr><td>88</td><td><a href="https://github.com/travier">
        <img src="https://avatars.githubusercontent.com/u/64795720?s=72&u=7f7c094b847bc8dc140f2e5aaa44dcd6b70a9486&v=4" height="12" />
        <b>travier</b>
    </a></td><td>Red Hat</td><td>Paris, France</td><td>259</td><td>8</td></tr><tr><td>89</td><td><a href="https://github.com/Pierstoval">
        <img src="https://avatars.githubusercontent.com/u/3369266?s=72&u=cd40e98364c064016bdef62d5442d93c8b2a19a0&v=4" height="12" />
        <b>Pierstoval</b>
    </a></td><td>@Orbitaleio / @Orbitale - @StudioAgate</td><td>France</td><td>256</td><td>8</td></tr><tr><td>90</td><td><a href="https://github.com/noirbizarre">
        <img src="https://avatars.githubusercontent.com/u/15725?s=72&u=24aa7a44ae7c957043e6a39675c3546d2f925a46&v=4" height="12" />
        <b>noirbizarre</b>
    </a></td><td>@apihackers @LedgerHQ </td><td>Paris, France</td><td>254</td><td>8</td></tr><tr><td>91</td><td><a href="https://github.com/greg0ire">
        <img src="https://avatars.githubusercontent.com/u/657779?s=72&u=96a0c076123934fb61c88da5b4d5b72b03dd69cb&v=4" height="12" />
        <b>greg0ire</b>
    </a></td><td>@ManoManoTech </td><td>Paris</td><td>242</td><td>8</td></tr><tr><td>92</td><td><a href="https://github.com/poolpOrg">
        <img src="https://avatars.githubusercontent.com/u/895503?s=72&u=e63aa059ea0657a703518f1374c8a30fdf2d02ac&v=4" height="12" />
        <b>poolpOrg</b>
    </a></td><td>poolp.org</td><td>Nantes, France</td><td>227</td><td>8</td></tr><tr><td>93</td><td><a href="https://github.com/HiDeoo">
        <img src="https://avatars.githubusercontent.com/u/494699?s=72&u=e7468006f55deb36e1f3757f6691e0180b9257ca&v=4" height="12" />
        <b>HiDeoo</b>
    </a></td><td>-</td><td>France</td><td>222</td><td>8</td></tr><tr><td>94</td><td><a href="https://github.com/frgfm">
        <img src="https://avatars.githubusercontent.com/u/26927750?s=72&u=dfbafc3534a42845875b527483a134ec48bfe6f9&v=4" height="12" />
        <b>frgfm</b>
    </a></td><td>@quack-ai @pyronear</td><td>Paris, FR</td><td>218</td><td>8</td></tr><tr><td>95</td><td><a href="https://github.com/despoisj">
        <img src="https://avatars.githubusercontent.com/u/7230845?s=72&u=2d17c8fb1f9c4690b73a8b7348700c8e6d2b46a7&v=4" height="12" />
        <b>despoisj</b>
    </a></td><td>-</td><td>Paris, France</td><td>211</td><td>8</td></tr><tr><td>96</td><td><a href="https://github.com/mykiwi">
        <img src="https://avatars.githubusercontent.com/u/334432?s=72&u=8e0e09ca184a8891c4731401f39edba0895834c2&v=4" height="12" />
        <b>mykiwi</b>
    </a></td><td>open to work</td><td>Nantes, France</td><td>204</td><td>8</td></tr><tr><td>97</td><td><a href="https://github.com/sylvinus">
        <img src="https://avatars.githubusercontent.com/u/410452?s=72&u=a7e4e6229c7ccc176231d5202b5be23da3237c15&v=4" height="12" />
        <b>sylvinus</b>
    </a></td><td>DINUM / ANCT</td><td>Paris / Lyon, France</td><td>200</td><td>8</td></tr><tr><td>98</td><td><a href="https://github.com/StanGirard">
        <img src="https://avatars.githubusercontent.com/u/19614572?s=72&u=173c2e47345431892f3101b4febe851ea99c08ad&v=4" height="12" />
        <b>StanGirard</b>
    </a></td><td>@QuivrHQ </td><td>Paris</td><td>2.32K</td><td>7</td></tr><tr><td>99</td><td><a href="https://github.com/sdispater">
        <img src="https://avatars.githubusercontent.com/u/555648?s=72&v=4" height="12" />
        <b>sdispater</b>
    </a></td><td>-</td><td>France</td><td>2.23K</td><td>7</td></tr><tr><td>100</td><td><a href="https://github.com/4ian">
        <img src="https://avatars.githubusercontent.com/u/1280130?s=72&u=18f856cccd8f77b611b17865cd8562165c49eeab&v=4" height="12" />
        <b>4ian</b>
    </a></td><td>@GDevelopApp</td><td>Paris, France</td><td>1.93K</td><td>7</td></tr><tr><td>101</td><td><a href="https://github.com/p0dalirius">
        <img src="https://avatars.githubusercontent.com/u/79218792?s=72&u=f6b0f27134df6083787490cfcd2ccfdbd5eb70d6&v=4" height="12" />
        <b>p0dalirius</b>
    </a></td><td>Podalirius Labs</td><td>France</td><td>1.93K</td><td>7</td></tr><tr><td>102</td><td><a href="https://github.com/moul">
        <img src="https://avatars.githubusercontent.com/u/94029?s=72&u=2acc3ed56cc696b595a069aef15cc975d8662e79&v=4" height="12" />
        <b>moul</b>
    </a></td><td>@gnolang, @berty, ...</td><td>France</td><td>1.59K</td><td>7</td></tr><tr><td>103</td><td><a href="https://github.com/deepnight">
        <img src="https://avatars.githubusercontent.com/u/1671695?s=72&u=36316a70a49497f680e2efef9e8b48623178cdfb&v=4" height="12" />
        <b>deepnight</b>
    </a></td><td>Deepnight Games</td><td>Bordeaux, France</td><td>1.48K</td><td>7</td></tr><tr><td>104</td><td><a href="https://github.com/vstinner">
        <img src="https://avatars.githubusercontent.com/u/194129?s=72&u=cf52678f5f02f96d9c5bc1b5079d4e6c2e441af4&v=4" height="12" />
        <b>vstinner</b>
    </a></td><td>@RedHatOfficial</td><td>France</td><td>1.37K</td><td>7</td></tr><tr><td>105</td><td><a href="https://github.com/Robpayot">
        <img src="https://avatars.githubusercontent.com/u/5593293?s=72&u=41388469102be7005344b95f9d66b2061740bd3d&v=4" height="12" />
        <b>Robpayot</b>
    </a></td><td>-</td><td>Paris</td><td>916</td><td>7</td></tr><tr><td>106</td><td><a href="https://github.com/arv">
        <img src="https://avatars.githubusercontent.com/u/45845?s=72&v=4" height="12" />
        <b>arv</b>
    </a></td><td>@rocicorp</td><td>Paris</td><td>812</td><td>7</td></tr><tr><td>107</td><td><a href="https://github.com/scraly">
        <img src="https://avatars.githubusercontent.com/u/2543381?s=72&u=d500ca96ff8a2a3f9b7bb300c71ed7e57449b072&v=4" height="12" />
        <b>scraly</b>
    </a></td><td>ovh</td><td>Toulouse</td><td>778</td><td>7</td></tr><tr><td>108</td><td><a href="https://github.com/dgageot">
        <img src="https://avatars.githubusercontent.com/u/153495?s=72&u=7a06a6cbf585d2f329484b4f0b900bf48eee9b29&v=4" height="12" />
        <b>dgageot</b>
    </a></td><td>Docker</td><td>Paris, France</td><td>740</td><td>7</td></tr><tr><td>109</td><td><a href="https://github.com/gildas-lormeau">
        <img src="https://avatars.githubusercontent.com/u/396787?s=72&u=9c2aeab0c23cb368b4ae3df9e17bc1ba9d8a51ce&v=4" height="12" />
        <b>gildas-lormeau</b>
    </a></td><td>Capsule Code</td><td>Rennes, France</td><td>721</td><td>7</td></tr><tr><td>110</td><td><a href="https://github.com/vicb">
        <img src="https://avatars.githubusercontent.com/u/248818?s=72&u=4447f9d1f51e304fceccbedff7c6a78224afc890&v=4" height="12" />
        <b>vicb</b>
    </a></td><td>@cloudflare </td><td>Grenoble, France</td><td>721</td><td>7</td></tr><tr><td>111</td><td><a href="https://github.com/bblanchon">
        <img src="https://avatars.githubusercontent.com/u/5462433?s=72&u=bec379310fcd0063e7555115cc65357c396e0f9b&v=4" height="12" />
        <b>bblanchon</b>
    </a></td><td>-</td><td>France</td><td>577</td><td>7</td></tr><tr><td>112</td><td><a href="https://github.com/qgallouedec">
        <img src="https://avatars.githubusercontent.com/u/45557362?s=72&u=37cea872e44a4d597f3b9c899add7509044d9ef0&v=4" height="12" />
        <b>qgallouedec</b>
    </a></td><td>@huggingface</td><td>Lyon, France</td><td>530</td><td>7</td></tr><tr><td>113</td><td><a href="https://github.com/kefranabg">
        <img src="https://avatars.githubusercontent.com/u/9840435?s=72&u=558f29861b9745b9900982eb73598dcd9c498199&v=4" height="12" />
        <b>kefranabg</b>
    </a></td><td>@HuggingFace 🤗</td><td>Nantes, France</td><td>456</td><td>7</td></tr><tr><td>114</td><td><a href="https://github.com/eko">
        <img src="https://avatars.githubusercontent.com/u/103900?s=72&u=d185654f4e625741e01fc42c4a625be4756344c0&v=4" height="12" />
        <b>eko</b>
    </a></td><td>Freelance</td><td>Annecy, France</td><td>432</td><td>7</td></tr><tr><td>115</td><td><a href="https://github.com/dmnsgn">
        <img src="https://avatars.githubusercontent.com/u/1636460?s=72&u=203ff00cf5097208e666acf35ef4a87304ba0d35&v=4" height="12" />
        <b>dmnsgn</b>
    </a></td><td>@variablestudio  </td><td>London / Paris</td><td>399</td><td>7</td></tr><tr><td>116</td><td><a href="https://github.com/AdrienTorris">
        <img src="https://avatars.githubusercontent.com/u/1014357?s=72&u=14c98f93eda7208d6ae186a550d63dd63378cbc3&v=4" height="12" />
        <b>AdrienTorris</b>
    </a></td><td>-</td><td>France</td><td>398</td><td>7</td></tr><tr><td>117</td><td><a href="https://github.com/sailro">
        <img src="https://avatars.githubusercontent.com/u/638167?s=72&u=100f354f54a8f49ea4d89cf2d8f5e206ea09ad77&v=4" height="12" />
        <b>sailro</b>
    </a></td><td>Microsoft</td><td>Lyon, France</td><td>365</td><td>7</td></tr><tr><td>118</td><td><a href="https://github.com/clementroche">
        <img src="https://avatars.githubusercontent.com/u/28361254?s=72&u=617b111ad79a35e545994bdc651eb7967ae72f10&v=4" height="12" />
        <b>clementroche</b>
    </a></td><td>@darkroomengineering</td><td>France</td><td>357</td><td>7</td></tr><tr><td>119</td><td><a href="https://github.com/johnvuko">
        <img src="https://avatars.githubusercontent.com/u/188946?s=72&u=7298b69cfb0aa8c1055ac262e7367d18a41b9cb8&v=4" height="12" />
        <b>johnvuko</b>
    </a></td><td>@yokitup</td><td>Paris, France</td><td>349</td><td>7</td></tr><tr><td>120</td><td><a href="https://github.com/Stormix">
        <img src="https://avatars.githubusercontent.com/u/18377687?s=72&u=84bad792fc870bdc31b2a05a06d2c886dd7e42f9&v=4" height="12" />
        <b>Stormix</b>
    </a></td><td>@Stormix-co </td><td>Marseille, France</td><td>345</td><td>7</td></tr><tr><td>121</td><td><a href="https://github.com/julien-deramond">
        <img src="https://avatars.githubusercontent.com/u/17381666?s=72&u=a9b71c0b77efa17719595a35f1d1c637c4ad63ac&v=4" height="12" />
        <b>julien-deramond</b>
    </a></td><td>Thales</td><td>Paris, France</td><td>333</td><td>7</td></tr><tr><td>122</td><td><a href="https://github.com/tbruyelle">
        <img src="https://avatars.githubusercontent.com/u/92280?s=72&u=3035228f64ba51ad6fc2f9452e22e928604152f8&v=4" height="12" />
        <b>tbruyelle</b>
    </a></td><td>@allinbits</td><td>Montpellier, France</td><td>330</td><td>7</td></tr><tr><td>123</td><td><a href="https://github.com/Marsup">
        <img src="https://avatars.githubusercontent.com/u/796194?s=72&v=4" height="12" />
        <b>Marsup</b>
    </a></td><td>-</td><td>Lyon, France</td><td>295</td><td>7</td></tr><tr><td>124</td><td><a href="https://github.com/arthaud">
        <img src="https://avatars.githubusercontent.com/u/2151557?s=72&u=20726f284e2b9874d52eddf9c2c447a0ac0c5ece&v=4" height="12" />
        <b>arthaud</b>
    </a></td><td>@facebook</td><td>Paris, France</td><td>283</td><td>7</td></tr><tr><td>125</td><td><a href="https://github.com/dubzzz">
        <img src="https://avatars.githubusercontent.com/u/5300235?s=72&u=283a572a5010b5350eee7168cf6ce1b566747903&v=4" height="12" />
        <b>dubzzz</b>
    </a></td><td>Pigment</td><td>Remote, France</td><td>283</td><td>7</td></tr><tr><td>126</td><td><a href="https://github.com/DamienCassou">
        <img src="https://avatars.githubusercontent.com/u/217543?s=72&v=4" height="12" />
        <b>DamienCassou</b>
    </a></td><td>finsit @ Wolters Kluwer</td><td>Brest, France</td><td>270</td><td>7</td></tr><tr><td>127</td><td><a href="https://github.com/atinux">
        <img src="https://avatars.githubusercontent.com/u/904724?s=72&u=6c520432e20d5ed603246764658accea4b4043c3&v=4" height="12" />
        <b>atinux</b>
    </a></td><td>@nuxtlabs</td><td>France</td><td>5.04K</td><td>6</td></tr><tr><td>128</td><td><a href="https://github.com/fasterthanlime">
        <img src="https://avatars.githubusercontent.com/u/7998310?s=72&u=fd6cb24423c35c26ee1ce7e00f0a3925bc964d1d&v=4" height="12" />
        <b>fasterthanlime</b>
    </a></td><td>@bearcove</td><td>Lyon, France</td><td>4.28K</td><td>6</td></tr><tr><td>129</td><td><a href="https://github.com/chalasr">
        <img src="https://avatars.githubusercontent.com/u/7502063?s=72&u=56b8ba0944e917bd324d87ec7c2074665a0e699d&v=4" height="12" />
        <b>chalasr</b>
    </a></td><td>@bakslashHQ</td><td>Lyon, France</td><td>569</td><td>6</td></tr><tr><td>130</td><td><a href="https://github.com/artivis">
        <img src="https://avatars.githubusercontent.com/u/6572747?s=72&u=a5ee9abdebcc00d765cfbf4b19353ddfe7a527c6&v=4" height="12" />
        <b>artivis</b>
    </a></td><td>@canonical</td><td>France</td><td>532</td><td>6</td></tr><tr><td>131</td><td><a href="https://github.com/SimonMarquis">
        <img src="https://avatars.githubusercontent.com/u/1921278?s=72&u=ace12a9fb3a0532f35285bce04898f7a7c97b2f9&v=4" height="12" />
        <b>SimonMarquis</b>
    </a></td><td>@leboncoin</td><td>Paris, France</td><td>518</td><td>6</td></tr><tr><td>132</td><td><a href="https://github.com/Guilouz">
        <img src="https://avatars.githubusercontent.com/u/12702322?s=72&u=f6da23f5fd8d72ed72413e5bc8b9b2c170670783&v=4" height="12" />
        <b>Guilouz</b>
    </a></td><td>-</td><td>France</td><td>516</td><td>6</td></tr><tr><td>133</td><td><a href="https://github.com/charlesBochet">
        <img src="https://avatars.githubusercontent.com/u/12035771?s=72&u=d630d76a6340dbc94ecacfe80be2095b4548c376&v=4" height="12" />
        <b>charlesBochet</b>
    </a></td><td>Twenty</td><td>Paris</td><td>387</td><td>6</td></tr><tr><td>134</td><td><a href="https://github.com/NouamaneTazi">
        <img src="https://avatars.githubusercontent.com/u/29777165?s=72&u=8d54f7bff7ab08bc4d181547d4453eac8eda2d2a&v=4" height="12" />
        <b>NouamaneTazi</b>
    </a></td><td>@huggingface</td><td>Paris, France</td><td>352</td><td>6</td></tr><tr><td>135</td><td><a href="https://github.com/benkuper">
        <img src="https://avatars.githubusercontent.com/u/1291595?s=72&u=642b551224f7695f923cf41025d9b1b7b605962e&v=4" height="12" />
        <b>benkuper</b>
    </a></td><td>-</td><td>France</td><td>327</td><td>6</td></tr><tr><td>136</td><td><a href="https://github.com/matbesancon">
        <img src="https://avatars.githubusercontent.com/u/7623090?s=72&u=5a4fa8371bbdd4b7647ebb0ec12d6c3b203f45e3&v=4" height="12" />
        <b>matbesancon</b>
    </a></td><td>Inria</td><td>Grenoble, France</td><td>313</td><td>6</td></tr><tr><td>137</td><td><a href="https://github.com/dimaMachina">
        <img src="https://avatars.githubusercontent.com/u/7361780?s=72&u=31ad3c2188d690ce38ec9ae437faf8788d34b916&v=4" height="12" />
        <b>dimaMachina</b>
    </a></td><td>hire me</td><td>Paris, France</td><td>219</td><td>6</td></tr><tr><td>138</td><td><a href="https://github.com/nicolas-grekas">
        <img src="https://avatars.githubusercontent.com/u/243674?s=72&u=85243de9963ea46d545961980e34e6538ad59fd1&v=4" height="12" />
        <b>nicolas-grekas</b>
    </a></td><td>@SymfonyCorp</td><td>Paris, France</td><td>2K</td><td>5</td></tr><tr><td>139</td><td><a href="https://github.com/ShutdownRepo">
        <img src="https://avatars.githubusercontent.com/u/40902872?s=72&u=a83152b1ababd07d2295e28b9cf0adb69049f42f&v=4" height="12" />
        <b>ShutdownRepo</b>
    </a></td><td>-</td><td>France</td><td>976</td><td>5</td></tr><tr><td>140</td><td><a href="https://github.com/Xyl2k">
        <img src="https://avatars.githubusercontent.com/u/8536299?s=72&u=88d2fa98d1bdcef6b2578e57e988c5cb64c735e8&v=4" height="12" />
        <b>Xyl2k</b>
    </a></td><td>-</td><td>France</td><td>824</td><td>5</td></tr><tr><td>141</td><td><a href="https://github.com/ArthurSonzogni">
        <img src="https://avatars.githubusercontent.com/u/4759106?s=72&v=4" height="12" />
        <b>ArthurSonzogni</b>
    </a></td><td>-</td><td>Paris</td><td>765</td><td>5</td></tr><tr><td>142</td><td><a href="https://github.com/Canop">
        <img src="https://avatars.githubusercontent.com/u/617006?s=72&u=d37ffb41ad4ef32e831e315ef5316b51e57c2597&v=4" height="12" />
        <b>Canop</b>
    </a></td><td>-</td><td>Lyon, France</td><td>603</td><td>5</td></tr><tr><td>143</td><td><a href="https://github.com/kevinchalet">
        <img src="https://avatars.githubusercontent.com/u/6998306?s=72&u=71c40a231984c198d230974e6536b1aea5caf756&v=4" height="12" />
        <b>kevinchalet</b>
    </a></td><td>-</td><td>France</td><td>519</td><td>5</td></tr><tr><td>144</td><td><a href="https://github.com/LudovicRousseau">
        <img src="https://avatars.githubusercontent.com/u/398496?s=72&v=4" height="12" />
        <b>LudovicRousseau</b>
    </a></td><td>-</td><td>France</td><td>418</td><td>5</td></tr><tr><td>145</td><td><a href="https://github.com/apierr">
        <img src="https://avatars.githubusercontent.com/u/1194257?s=72&u=d97d044969d4ab3ad7bd97fed446777456d5221a&v=4" height="12" />
        <b>apierr</b>
    </a></td><td>Inria - Nord Europe</td><td>Paris</td><td>328</td><td>5</td></tr><tr><td>146</td><td><a href="https://github.com/thisoverride">
        <img src="https://avatars.githubusercontent.com/u/67823632?s=72&u=c0cba83f04007f07c788591afe7072663d5c4a12&v=4" height="12" />
        <b>thisoverride</b>
    </a></td><td>-</td><td>Paris</td><td>321</td><td>5</td></tr><tr><td>147</td><td><a href="https://github.com/Betree">
        <img src="https://avatars.githubusercontent.com/u/1556356?s=72&u=3c91c5aba00cafe42284c7bce69e8b813e38b64d&v=4" height="12" />
        <b>Betree</b>
    </a></td><td>@opencollective, @CaptainFact</td><td>La Ciotat, France</td><td>320</td><td>5</td></tr><tr><td>148</td><td><a href="https://github.com/nvuillam">
        <img src="https://avatars.githubusercontent.com/u/17500430?s=72&u=24ff06a935acf56fe06678874e2b297debb66fac&v=4" height="12" />
        <b>nvuillam</b>
    </a></td><td>Cloudity & OX Security</td><td>Paris, France</td><td>317</td><td>5</td></tr><tr><td>149</td><td><a href="https://github.com/louisabraham">
        <img src="https://avatars.githubusercontent.com/u/13174805?s=72&v=4" height="12" />
        <b>louisabraham</b>
    </a></td><td>-</td><td>Paris</td><td>269</td><td>5</td></tr><tr><td>150</td><td><a href="https://github.com/gnodet">
        <img src="https://avatars.githubusercontent.com/u/84022?s=72&u=411d6cc1a1007325d0051d524e5ec04b5a859e1f&v=4" height="12" />
        <b>gnodet</b>
    </a></td><td>Red Hat</td><td>Caen, France</td><td>220</td><td>5</td></tr><tr><td>151</td><td><a href="https://github.com/axeldelafosse">
        <img src="https://avatars.githubusercontent.com/u/10477267?s=72&u=0322ffa7017942defa4c6de7cdcd4d42b7d364e5&v=4" height="12" />
        <b>axeldelafosse</b>
    </a></td><td>-</td><td>Paris</td><td>209</td><td>5</td></tr><tr><td>152</td><td><a href="https://github.com/ssaunier">
        <img src="https://avatars.githubusercontent.com/u/414418?s=72&u=6517ac662c8a8db80b1fe2c4ef050f0af8ca26cd&v=4" height="12" />
        <b>ssaunier</b>
    </a></td><td>-</td><td>France</td><td>2.32K</td><td>4</td></tr><tr><td>153</td><td><a href="https://github.com/xoofx">
        <img src="https://avatars.githubusercontent.com/u/715038?s=72&u=944abb5708b2c03b6c13e3284dd76bb327791456&v=4" height="12" />
        <b>xoofx</b>
    </a></td><td>-</td><td>Grenoble - France</td><td>1.46K</td><td>4</td></tr><tr><td>154</td><td><a href="https://github.com/Androz2091">
        <img src="https://avatars.githubusercontent.com/u/42497995?s=72&u=6f40d52a49652087722a05d55013645bca6745b6&v=4" height="12" />
        <b>Androz2091</b>
    </a></td><td>EPFL</td><td>France, Toulouse</td><td>1.24K</td><td>4</td></tr><tr><td>155</td><td><a href="https://github.com/maelle">
        <img src="https://avatars.githubusercontent.com/u/8360597?s=72&u=824f03caa87c92420352e3dd9a05470320a67412&v=4" height="12" />
        <b>maelle</b>
    </a></td><td>@ropensci</td><td>Nancy, France</td><td>1.04K</td><td>4</td></tr><tr><td>156</td><td><a href="https://github.com/ptitSeb">
        <img src="https://avatars.githubusercontent.com/u/3250792?s=72&u=f206420ae21c0bbf92fea09871f11adea98adb39&v=4" height="12" />
        <b>ptitSeb</b>
    </a></td><td>-</td><td>France</td><td>919</td><td>4</td></tr><tr><td>157</td><td><a href="https://github.com/0intro">
        <img src="https://avatars.githubusercontent.com/u/6043744?s=72&u=3da32467d868e3ae8e27d13d93d371b154ab1eaf&v=4" height="12" />
        <b>0intro</b>
    </a></td><td>@DataDog, ex-@videolabs</td><td>Paris, France</td><td>605</td><td>4</td></tr><tr><td>158</td><td><a href="https://github.com/AstraaDev">
        <img src="https://avatars.githubusercontent.com/u/43183806?s=72&u=d3bc96c5d783478b819498fcb8c07a790204442f&v=4" height="12" />
        <b>AstraaDev</b>
    </a></td><td>-</td><td>France</td><td>568</td><td>4</td></tr><tr><td>159</td><td><a href="https://github.com/CedricGuillemet">
        <img src="https://avatars.githubusercontent.com/u/1312968?s=72&u=09586c4d429addaa7fc099437bebda780a9e39ed&v=4" height="12" />
        <b>CedricGuillemet</b>
    </a></td><td>Microsoft</td><td>Redon, Brittany, France</td><td>472</td><td>4</td></tr><tr><td>160</td><td><a href="https://github.com/edbeeching">
        <img src="https://avatars.githubusercontent.com/u/7275864?s=72&u=283bdb8ad78e1fffbc4cb1f31874d26299e8bc2a&v=4" height="12" />
        <b>edbeeching</b>
    </a></td><td>Hugging Face</td><td>Lyon</td><td>301</td><td>4</td></tr><tr><td>161</td><td><a href="https://github.com/abougouffa">
        <img src="https://avatars.githubusercontent.com/u/3716399?s=72&u=ad7a1e120fef1c19d7b7864ac183798de2711c59&v=4" height="12" />
        <b>abougouffa</b>
    </a></td><td>Astek Research & Innovation | Sagemcom</td><td>Paris, France</td><td>219</td><td>4</td></tr><tr><td>162</td><td><a href="https://github.com/Drup">
        <img src="https://avatars.githubusercontent.com/u/801124?s=72&v=4" height="12" />
        <b>Drup</b>
    </a></td><td>Inria</td><td>Lyon</td><td>211</td><td>4</td></tr><tr><td>163</td><td><a href="https://github.com/damienalexandre">
        <img src="https://avatars.githubusercontent.com/u/225704?s=72&u=0db288d2431f6fd5962b41ea540dbd1299d0e955&v=4" height="12" />
        <b>damienalexandre</b>
    </a></td><td>JoliCode</td><td>Montreuil, France</td><td>200</td><td>4</td></tr><tr><td>164</td><td><a href="https://github.com/dunglas">
        <img src="https://avatars.githubusercontent.com/u/57224?s=72&u=a7ed2cf3f0ae84c9e06925b94091b85a7d6324b0&v=4" height="12" />
        <b>dunglas</b>
    </a></td><td>@coopTilleuls </td><td>Lille, France</td><td>4.2K</td><td>3</td></tr><tr><td>165</td><td><a href="https://github.com/MaJerle">
        <img src="https://avatars.githubusercontent.com/u/405717?s=72&u=38e08e0842ed71ef9d972f001cfa73e8aa896362&v=4" height="12" />
        <b>MaJerle</b>
    </a></td><td>-</td><td>France</td><td>2.64K</td><td>3</td></tr><tr><td>166</td><td><a href="https://github.com/romainfrancois">
        <img src="https://avatars.githubusercontent.com/u/2625526?s=72&u=f7ae1b9b158171275cbb0cf068b51483dcea3a8a&v=4" height="12" />
        <b>romainfrancois</b>
    </a></td><td>@tadascience </td><td>Montpellier, France</td><td>2.51K</td><td>3</td></tr><tr><td>167</td><td><a href="https://github.com/jdubois">
        <img src="https://avatars.githubusercontent.com/u/316835?s=72&u=97e32d190bed00237282298cc795ab0ebec0101c&v=4" height="12" />
        <b>jdubois</b>
    </a></td><td>@microsoft</td><td>Suresnes, France</td><td>1.27K</td><td>3</td></tr><tr><td>168</td><td><a href="https://github.com/nadimkobeissi">
        <img src="https://avatars.githubusercontent.com/u/9953?s=72&u=bc47cbab7ce4b508a5ff9b32ac97396e77503687&v=4" height="12" />
        <b>nadimkobeissi</b>
    </a></td><td>@symbolicsoft, @cure53berlin</td><td>Paris, France</td><td>1.26K</td><td>3</td></tr><tr><td>169</td><td><a href="https://github.com/alelievr">
        <img src="https://avatars.githubusercontent.com/u/6877923?s=72&v=4" height="12" />
        <b>alelievr</b>
    </a></td><td>-</td><td>Paris</td><td>615</td><td>3</td></tr><tr><td>170</td><td><a href="https://github.com/guillaumebriday">
        <img src="https://avatars.githubusercontent.com/u/8252238?s=72&u=c34e53afee0a1d7e6b1a8112f8bb875c51fcd657&v=4" height="12" />
        <b>guillaumebriday</b>
    </a></td><td>@spendhq</td><td>Lyon, France</td><td>579</td><td>3</td></tr><tr><td>171</td><td><a href="https://github.com/davidgohel">
        <img src="https://avatars.githubusercontent.com/u/4331618?s=72&v=4" height="12" />
        <b>davidgohel</b>
    </a></td><td>ArData</td><td>Paris</td><td>560</td><td>3</td></tr><tr><td>172</td><td><a href="https://github.com/lindenb">
        <img src="https://avatars.githubusercontent.com/u/33838?s=72&u=69f92e5fef0d06f78b08e36877633efa0c7f5441&v=4" height="12" />
        <b>lindenb</b>
    </a></td><td>INSERM</td><td>Nantes, France</td><td>544</td><td>3</td></tr><tr><td>173</td><td><a href="https://github.com/glaforge">
        <img src="https://avatars.githubusercontent.com/u/47907?s=72&v=4" height="12" />
        <b>glaforge</b>
    </a></td><td>Google</td><td>Paris, France</td><td>526</td><td>3</td></tr><tr><td>174</td><td><a href="https://github.com/marcomiduri">
        <img src="https://avatars.githubusercontent.com/u/51230146?s=72&u=df59a119b037e9f0c8a4d186c6b650c3a601ff23&v=4" height="12" />
        <b>marcomiduri</b>
    </a></td><td>Webpoint Solutions, LLC</td><td>Paris, FR</td><td>512</td><td>3</td></tr><tr><td>175</td><td><a href="https://github.com/LilaRest">
        <img src="https://avatars.githubusercontent.com/u/48853371?s=72&u=69566a79698e6f36c9afc03c3045d8d21ec48ba4&v=4" height="12" />
        <b>LilaRest</b>
    </a></td><td>@MeetVisitors</td><td>France</td><td>494</td><td>3</td></tr><tr><td>176</td><td><a href="https://github.com/raphaelvallat">
        <img src="https://avatars.githubusercontent.com/u/25703792?s=72&u=106689cdafc3ba03b63d8311b08a54344a56d831&v=4" height="12" />
        <b>raphaelvallat</b>
    </a></td><td>ŌURA</td><td>Lyon, France</td><td>417</td><td>3</td></tr><tr><td>177</td><td><a href="https://github.com/XenocodeRCE">
        <img src="https://avatars.githubusercontent.com/u/4918142?s=72&u=04e5e74f4dfc5c163795e6d338c76b68ef76a875&v=4" height="12" />
        <b>XenocodeRCE</b>
    </a></td><td>-</td><td>France</td><td>415</td><td>3</td></tr><tr><td>178</td><td><a href="https://github.com/tgrall">
        <img src="https://avatars.githubusercontent.com/u/541250?s=72&u=ed72bb083428632c5788c3e65202d33c19953712&v=4" height="12" />
        <b>tgrall</b>
    </a></td><td>@github</td><td>Nantes, France</td><td>350</td><td>3</td></tr><tr><td>179</td><td><a href="https://github.com/sebanc">
        <img src="https://avatars.githubusercontent.com/u/22224731?s=72&v=4" height="12" />
        <b>sebanc</b>
    </a></td><td>-</td><td>Paris, France</td><td>348</td><td>3</td></tr><tr><td>180</td><td><a href="https://github.com/Tripouille">
        <img src="https://avatars.githubusercontent.com/u/49202412?s=72&u=76785d33c55894d68245685e62b1aa7ae5ed831a&v=4" height="12" />
        <b>Tripouille</b>
    </a></td><td>fabriq</td><td>France</td><td>345</td><td>3</td></tr><tr><td>181</td><td><a href="https://github.com/SirLynix">
        <img src="https://avatars.githubusercontent.com/u/3002461?s=72&u=cd05ef11e7f6a4e0d2800639896c37fa6dd49dc9&v=4" height="12" />
        <b>SirLynix</b>
    </a></td><td>Gameloft Paris</td><td>France</td><td>311</td><td>3</td></tr><tr><td>182</td><td><a href="https://github.com/Cpasjuste">
        <img src="https://avatars.githubusercontent.com/u/51077?s=72&v=4" height="12" />
        <b>Cpasjuste</b>
    </a></td><td>-</td><td>France</td><td>290</td><td>3</td></tr><tr><td>183</td><td><a href="https://github.com/MrEliptik">
        <img src="https://avatars.githubusercontent.com/u/24484962?s=72&u=3bec91a9402f1653deecaffdc3dd13af17c02c1c&v=4" height="12" />
        <b>MrEliptik</b>
    </a></td><td>-</td><td>France</td><td>289</td><td>3</td></tr><tr><td>184</td><td><a href="https://github.com/tbroyer">
        <img src="https://avatars.githubusercontent.com/u/173813?s=72&v=4" height="12" />
        <b>tbroyer</b>
    </a></td><td>@atolcd </td><td>Dijon, France</td><td>287</td><td>3</td></tr><tr><td>185</td><td><a href="https://github.com/pirhoo">
        <img src="https://avatars.githubusercontent.com/u/471176?s=72&u=d4e79e7bd6567268635ba5d90a1cbdfd542b9698&v=4" height="12" />
        <b>pirhoo</b>
    </a></td><td>@ICIJ</td><td>Paris</td><td>284</td><td>3</td></tr><tr><td>186</td><td><a href="https://github.com/erebe">
        <img src="https://avatars.githubusercontent.com/u/854278?s=72&u=e5043ea27db3f1357f92193b770aa32559e69869&v=4" height="12" />
        <b>erebe</b>
    </a></td><td>-</td><td>Paris</td><td>262</td><td>3</td></tr><tr><td>187</td><td><a href="https://github.com/ParisNeo">
        <img src="https://avatars.githubusercontent.com/u/827993?s=72&u=17ad3b01b402b36d9424d6b4437561304616eb18&v=4" height="12" />
        <b>ParisNeo</b>
    </a></td><td>CEA</td><td>France</td><td>252</td><td>3</td></tr><tr><td>188</td><td><a href="https://github.com/Kocal">
        <img src="https://avatars.githubusercontent.com/u/2103975?s=72&u=a736d3293c082d2fd28065a359bd578ebc06a7af&v=4" height="12" />
        <b>Kocal</b>
    </a></td><td>-</td><td>Lyon, France</td><td>233</td><td>3</td></tr><tr><td>189</td><td><a href="https://github.com/bvernoux">
        <img src="https://avatars.githubusercontent.com/u/432709?s=72&v=4" height="12" />
        <b>bvernoux</b>
    </a></td><td>-</td><td>France</td><td>222</td><td>3</td></tr><tr><td>190</td><td><a href="https://github.com/hoechenberger">
        <img src="https://avatars.githubusercontent.com/u/2046265?s=72&u=739a20430346a14bc157ff1f28dcee6fc882461a&v=4" height="12" />
        <b>hoechenberger</b>
    </a></td><td>-</td><td>Geneva, Paris, Berlin</td><td>210</td><td>3</td></tr><tr><td>191</td><td><a href="https://github.com/matyo91">
        <img src="https://avatars.githubusercontent.com/u/1254025?s=72&u=9b7ebe3f2a1154386cef252f1819e13128300355&v=4" height="12" />
        <b>matyo91</b>
    </a></td><td>@darkwood-com</td><td>Paris</td><td>208</td><td>3</td></tr><tr><td>192</td><td><a href="https://github.com/Romakita">
        <img src="https://avatars.githubusercontent.com/u/1763311?s=72&u=29dc6efc281f9b8c8de20eab797b894fed5e57d9&v=4" height="12" />
        <b>Romakita</b>
    </a></td><td>Zenika</td><td>Ile-de-france, France</td><td>203</td><td>3</td></tr><tr><td>193</td><td><a href="https://github.com/mistic100">
        <img src="https://avatars.githubusercontent.com/u/41597?s=72&u=7cedfe7cc2d003e123342cb1dd3ca9e12420926f&v=4" height="12" />
        <b>mistic100</b>
    </a></td><td>@sogelink @ARIG-Robotique</td><td>Lyon, France</td><td>199</td><td>3</td></tr><tr><td>194</td><td><a href="https://github.com/Akryum">
        <img src="https://avatars.githubusercontent.com/u/2798204?s=72&u=d45556d7e920c0f57552d1dc1250a7cdb807eddb&v=4" height="12" />
        <b>Akryum</b>
    </a></td><td>-</td><td>France</td><td>5.15K</td><td>2</td></tr><tr><td>195</td><td><a href="https://github.com/donho">
        <img src="https://avatars.githubusercontent.com/u/90293?s=72&u=ecf6e2f9319cd333d4ffd0056c84848e91ae9870&v=4" height="12" />
        <b>donho</b>
    </a></td><td>Notepad++ Project</td><td>Paris France</td><td>2.1K</td><td>2</td></tr><tr><td>196</td><td><a href="https://github.com/arcanis">
        <img src="https://avatars.githubusercontent.com/u/1037931?s=72&u=b7caf9bbaa35c1114918e82b0a6d436f761dbec3&v=4" height="12" />
        <b>arcanis</b>
    </a></td><td>@datadog</td><td>Nantes, France</td><td>1.87K</td><td>2</td></tr><tr><td>197</td><td><a href="https://github.com/willdurand">
        <img src="https://avatars.githubusercontent.com/u/217628?s=72&u=2941ab8cfc1bd07c7434232a74b9564fb15ac763&v=4" height="12" />
        <b>willdurand</b>
    </a></td><td>@mozilla </td><td>France</td><td>1.83K</td><td>2</td></tr><tr><td>198</td><td><a href="https://github.com/JosePaumard">
        <img src="https://avatars.githubusercontent.com/u/1757066?s=72&v=4" height="12" />
        <b>JosePaumard</b>
    </a></td><td>Oracle</td><td>Paris</td><td>1.35K</td><td>2</td></tr><tr><td>199</td><td><a href="https://github.com/groue">
        <img src="https://avatars.githubusercontent.com/u/54219?s=72&u=73ae5871c4a96c72fae2650b267d578440e38983&v=4" height="12" />
        <b>groue</b>
    </a></td><td>Pierlis</td><td>Paris, France</td><td>1.14K</td><td>2</td></tr><tr><td>200</td><td><a href="https://github.com/Johann-S">
        <img src="https://avatars.githubusercontent.com/u/1689750?s=72&v=4" height="12" />
        <b>Johann-S</b>
    </a></td><td>IOfate</td><td>France</td><td>857</td><td>2</td></tr>
    </tbody>
</table>
