$
(
	function()
	{
		// var $myc = $('#myc');
		// var $mycAnimationArea = $myc.find('#myc-animation-area');
		// var $mycIsPc = $('#myc-is-pc');
		// var $topLoading = $myc.find('#myc-top-loading');
		// var $topLoadingBar = $topLoading.find('.bar');
		
		
		/*
			モーションデータリスト
		*/
		var vmdLists =
		{
			1:
			{
				'fileName': 'biography01_foot_shusei_Bake.vmd',
				'pc':
				{
					'rotationY': 95,
					'positionX': -24,
					'cameraZ': 38,
					'cameraY': 10
				},
				'sp':
				{
					'rotationY': 95,
					'positionX': -18,
					'cameraZ': 45,
					'cameraY': 6
				},
				'isHidden': true,
			},
			2:
			{
				'fileName': 'biography02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 115,
					'positionX': -20,
					'cameraZ': 30,
					'cameraY': 9
				},
				'sp':
				{
					'rotationY': 95,
					'positionX': -14,
					'cameraZ': 45,
					'cameraY': 5
				},
				'isHidden': false
			},
			3:
			{
				'fileName': 'contact01_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 30,
					'positionX': -5,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 30,
					'positionX': -5,
					'cameraZ': 15,
					'cameraY': 20
				},
				'isHidden': false
			},
			4:
			{
				'fileName': 'contact02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 75,
					'positionX': -11,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 75,
					'positionX': -11,
					'cameraZ': 13,
					'cameraY': 21
				},
				'isHidden': false
			},
			5:
			{
				'fileName': 'contact03_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 90,
					'positionX': -13,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 90,
					'positionX': -12,
					'cameraZ': 15,
					'cameraY': 20
				},
				'isHidden': false
			},
			6:
			{
				'fileName': 'news01_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 22,
					'positionX': -4,
					'cameraZ': 10,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': -10,
					'positionX': 2,
					'cameraZ': 9,
					'cameraY': 16
				},
				'isHidden': false
			},
			7:
			{
				'fileName': 'news02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 26,
					'positionX': -4,
					'cameraZ': 10,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': -5,
					'positionX': 2,
					'cameraZ': 9,
					'cameraY': 16
				},
				'isHidden': false
			},
			8:
			{
				'fileName': 'motion.vmd',
				'pc':
				{
					'rotationY': 175,
					'positionX': 0,
					'cameraZ': 35,
					'cameraY': 13
				},
				'sp':
				{
					'rotationY': 0,
					'positionX': -1,
					'cameraZ': 35,
					'cameraY': 13
				},
				'isHidden': false
			},
			9:
			{
				'fileName': 'top_left01_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 270,
					'positionX': 24,
					'cameraZ': 25,
					'cameraY': 14
				},
				'sp':
				{
					'rotationY': -90,
					'positionX': 24,
					'cameraZ': 20,
					'cameraY': 15
				},
				'isHidden': false
			},
			10:
			{
				'fileName': 'top_right01_FIX_Base.vmd',
				'pc':
				{
					'rotationY': 280,
					'positionX': 0,
					'cameraZ': 29,
					'cameraY': 13
				},
				'sp':
				{
					'rotationY': -80,
					'positionX': 0,
					'cameraZ': 26,
					'cameraY': 13
				},
				'isHidden': false
			},
			11:
			{
				'fileName': 'top_right02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 270,
					'positionX': 23,
					'cameraZ': 25,
					'cameraY': 13
				},
				'sp':
				{
					'rotationY': -90,
					'positionX': 23,
					'cameraZ': 25,
					'cameraY': 13
				},
				'isHidden': false
			},
			12:
			{
				'fileName': 'YoutubeAIC_01_02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 22,
					'positionX': -4,
					'cameraZ': 11,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': 5,
					'positionX': 0,
					'cameraZ': 11,
					'cameraY': 16
				},
				'isHidden': false
			},
			13:
			{
				'fileName': 'Youtube_AIC02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': -95,
					'positionX': 11,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': -95,
					'positionX': 11,
					'cameraZ': 15,
					'cameraY': 21
				},
				'isHidden': false
			},
			14:
			{
				'fileName': 'Youtube_AIG01_FIX.vmd',
				'pc':
				{
					'rotationY': 0,
					'positionX': 0,
					'cameraZ': 35,
					'cameraY': 11
				},
				'sp':
				{
					'rotationY': 0,
					'positionX': 0,
					'cameraZ': 35,
					'cameraY': 11
				},
				'isHidden': false
			},
			15:
			{
				'fileName': 'Youtube_AIG02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 25,
					'positionX': -5,
					'cameraZ': 14,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 25,
					'positionX': -5,
					'cameraZ': 14,
					'cameraY': 21
				},
				'isHidden': false
			},
			16:
			{
				'fileName': 'Youtube_AIG03_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 100,
					'positionX': -11,
					'cameraZ': 14,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 100,
					'positionX': -11,
					'cameraZ': 14,
					'cameraY': 21
				},
				'isHidden': false
			},
			17:
			{
				'fileName': 'Youtube_AIG02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 22,
					'positionX': -4,
					'cameraZ': 11,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': -5,
					'positionX': 2,
					'cameraZ': 11,
					'cameraY': 16
				},
				'isHidden': false
			},
		};
		
		
		/*
			デフォルトカメラ位置
		*/
		var defaultCamera =
		{
			position:
			{
				x: 0,
				y: 11,
				z: 35
			},
			lookAt: new THREE.Vector3(0, 11, 0)
		};
		
		
		/*
			モーションセンサー
		*/
		var targetCameraPosition =
		{
			x: 0,
			y: defaultCamera.position.y
		};

		// if ($myc.hasClass('type-top'))
		// {
		// 	var motionSensor = new MotionSensor();
		// 	motionSensor.move = function(e)
		// 	{
		// 		targetCameraPosition.x = e.x * 4;
		// 		targetCameraPosition.y = -e.y * 3 + defaultCamera.position.y;
		// 	};
		// }
		
		
		/*
			GETパラメータ取得
		*/
		var getUrlParameters = function ()
		{
			var parameters = [];
			var hash = '';
			var url = window.location.search;
			
			hash = url.slice(1).split('&');
			
			for (var i = 0; i < hash.length; i++)
			{
				var array = hash[i].split('=');
				parameters.push(array[0]);
				parameters[array[0]] = array[1];
			}
			
			return parameters;
		}
		
		var urlParameters = getUrlParameters();
		
		
		/*
			物理演算
		*/
		var isPhysics = true;

		if (urlParameters.physics == 'on')
		{
			isPhysics = true;
		}
		
		
		/*
			ページ判別して再生リストを生成
		*/
		var vmdPlayList = [1];
		var vmdPlayIndex = 0;
		var vmdTestNumber = 0;	// 開発時はここに指定すること
		
		if (vmdTestNumber)
		{
			vmdPlayList = [vmdTestNumber];
		}
		else if (urlParameters['vmd'])
		{
			vmdPlayList = [urlParameters['vmd']];
		}
		else
		{
			vmdPlayList = [8];			// if ($myc.hasClass('type-biography'))
			// {
			// 	vmdPlayList = [1];
			// }
			// else if ($myc.hasClass('type-contact'))
			// {
			// 	vmdPlayList = [4];
			// }
			// else if ($myc.hasClass('type-news'))
			// {
			// 	vmdPlayList = [12];
				
			// 	if ($myc.find('#myc-contents .news-list.detail').length)
			// 	{
			// 		// detail
			// 		vmdPlayList = [17];
			// 	}
			// }
			// else if ($myc.hasClass('type-top'))
			// {
			// 	vmdPlayList = [8];
			// }
			// else if ($myc.hasClass('type-youtube'))
			// {
			// 	if ($myc.hasClass('second'))
			// 	{
			// 		// Games
			// 		vmdPlayList = [16];
			// 	}
			// 	else
			// 	{
			// 		// Channel, China
			// 		vmdPlayList = [13];
			// 	}
			// }
		}
		
		for (var i = vmdPlayList.length - 1; i > 0; i--)
		{
			var r = Math.floor(Math.random() * (i + 1));
			var tmp = vmdPlayList[i];
			vmdPlayList[i] = vmdPlayList[r];
			vmdPlayList[r] = tmp;
		}
		
		//console.log('vmdPlayList', vmdPlayList);
		
		
		/*
			ウィンドウ読み込みイベント
		*/
		window.onload = function()
		{
			/*
				物理演算初期化
			*/
			Ammo().then
			(
				function(AmmoLib)
				{
					Ammo = AmmoLib;
					
					init();
				}
			);
		};
		
		var myRecorder = null;
		var recordBtn = null;
		
		/*
			メイン処理
		*/
		var init = function()
		{
			var clock = new THREE.Clock();
			
			
			// create a scene, that will hold all our elements such as objects, cameras and lights.
			var scene = new THREE.Scene();
			
			// create a camera, which defines where we're looking at.
			var camera = new THREE.PerspectiveCamera
			(
				45,
				WIDTH/HEIGHT, // $mycAnimationArea.width() / $mycAnimationArea.height(),
				0.1,
				1000
			);
			
			/*
				レンダラーの種類: WebGL
			*/
			var renderer = new THREE.WebGLRenderer({antialias: true});
			renderer.setClearColor(new THREE.Color(0xFFFFFF));
			//renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize
			(
				WIDTH,// $mycAnimationArea.width(),
				HEIGHT// $mycAnimationArea.height()
			);
			
			
			/*
				キャッシュ有効
			*/
			THREE.Cache.enabled = true;
			
			
			/*
				デバッグ用の軸
			*/
			//var axes = new THREE.AxesHelper(20);
			//scene.add(axes);
			
			/*
				カメラ位置
			*/
			camera.position.x = defaultCamera.position.x;
			camera.position.y = defaultCamera.position.y;
			camera.position.z = defaultCamera.position.z;
			
			/*
				方向
			*/
			camera.lookAt(defaultCamera.lookAt);
			
			
			/*
				環境光
			*/
			var ambientLight = new THREE.AmbientLight(0xffffff);
			ambientLight.intensity = 0.85;
			scene.add(ambientLight);

			/*
				グリッド
			*/
			var gridHelper = new THREE.GridHelper
			(
				400,
				400,
				0x000000,
				0x000000
			);
			gridHelper.visible = false;
			scene.add(gridHelper);
			
			
			/*
				MMDアニメーションヘルパー
			*/
			var helper = new THREE.MMDAnimationHelper();
			
			
			/*
				IK無効
			*/
			helper.enable('ik', false);
			helper.enable('physics', isPhysics);
			helper.enable('cameraAnimation', false);
			
			
			
			/*
				モデルデータを読み込む
				MMD（.pmx）
			*/
			var loader = new THREE.MMDLoader();
			var isFirstPlay = true;
			var isHelperReady = false;
			//var objectSource = null;
			var objectMain = null;
			var animationAction = null;
			var lastAnimationClip = null;
			
			
			var motionCount = 0;
			
			/*
				モーション処理
			*/
			var motionAction = function()
			{
				/*
					pmxロード
				*/
				loader.load
				(
					'./tda.pmx',
					function(object)
					{
						objectMain = object;

						/*
							モーション番号取得
						*/
						var vmdNumber = vmdPlayList[vmdPlayIndex];
						var vmdData = vmdLists[vmdNumber];

						vmdPlayIndex++;

						if (vmdPlayIndex == vmdPlayList.length)
						{
							vmdPlayIndex = 0;
						}

						/*
							環境判定
						*/
						var vmdDataValues = vmdData.sp;
						
						// if ($mycIsPc.is(':visible') && $(window).width() >= 720) // middle size is sp
						// {
						// 	vmdDataValues = vmdData.pc;
						// }

						/*
							キャラ角度
						*/
						objectMain.rotation.y = vmdDataValues.rotationY * (Math.PI / 180);

						if (urlParameters.rotationy)
						{
							objectMain.rotation.y = parseInt(urlParameters.rotationy) * (Math.PI / 180);
						}

						/*
							キャラ横位置
						*/
						objectMain.position.x = vmdDataValues.positionX;

						if (urlParameters.positionx)
						{
							objectMain.position.x = parseInt(urlParameters.positionx);
						}

						/*
							初回のみカメラ調整
						*/
						if (isFirstPlay)
						{
							/*
								カメラ奥行き
							*/
							defaultCamera.position.z = vmdDataValues.cameraZ;

							if (urlParameters.cameraz)
							{
								defaultCamera.position.z = parseInt(urlParameters.cameraz);
							}

							camera.position.z = defaultCamera.position.z;

							/*
								カメラ高さ
							*/
							defaultCamera.position.y = vmdDataValues.cameraY;
							defaultCamera.lookAt.y = vmdDataValues.cameraY;

							if (urlParameters.cameray)
							{
								defaultCamera.position.y = parseInt(urlParameters.cameray);
								defaultCamera.lookAt.y = parseInt(urlParameters.cameray);
							}

							camera.position.y = defaultCamera.position.y;
							targetCameraPosition.y = defaultCamera.position.y;
						}
						
						/*
							ファイル名
						*/
						var fileName = vmdData.fileName;
						
						if (urlParameters.file)
						{
							fileName = urlParameters.file;
						}

						/*
							アニメーションヘルパーにアニメーションを指定
						*/
						loader.loadAnimation
						(
							fileName,// mycAssetsPath + 'models/191226/' + fileName,
							objectMain,
							function(animationClip)
							{
								lastAnimationClip = animationClip;
								
								/*
									ローディング非表示
								*/
								// $topLoadingBar.css
								// (
								// 	'width',
								// 	'100%'
								// );
								// $topLoading.addClass('hide');
								
								
								/*
									シーン追加
								*/
								objectMain.visible = false;
								scene.add(objectMain);
								

								/*
									アニメーションヘルパー追加
								*/
								helper.add
								(
									objectMain,
									{
										animation: animationClip
									}
								);

								/*
									アニメーションミキサー取得
								*/
								var animationMixer = helper.objects.get(objectMain).mixer;

								/*
									停止
								*/
								animationMixer.stopAllAction();

								/*
									アクション取得
								*/
								animationAction = animationMixer.clipAction(animationClip);

								/*
									ループなし
								*/
								//animationAction.setLoop(THREE.LoopOnce);
								//animationAction.clampWhenFinished = true;
								         
									    isHelperReady = true;
									    isFirstPlay = false;
								// myRecorder = new Recorder({
								// 	    el: "#targetCanvas",
								// 	    fps: 30,
								// 	    callback: function(w, url){
								// 	        var a = document.createElement("a")
								// 	        a.href= url
								// 	        a.download = "myRecord.webm"
								// 	        a.click()
								// 	    }                                   
								// 	})                              
								// 	myRecorder.setupTrack(function(){
								// 	                                       
								// 	    isHelperReady = true;
								// 	    isFirstPlay = false;
								// 	});
									

								
							},
							function(e)
							{
								/*
									ローディング進捗2
								*/
								// $topLoadingBar.css
								// (
								// 	'width',
								// 	((e.loaded / e.total) * 60 + 40) + '%'
								// );
							}
						);
					},
					function(e)
					{
						/*
							ローディング進捗1
						*/
						// $topLoadingBar.css
						// (
						// 	'width',
						// 	((e.loaded / e.total) * 40) + '%'
						// );
					}
				);
				
			};/* /motionAction */
			
			motionAction();
			
			
			
			
			
			
			
			
			
			
			/*
				霧
			*/
			scene.fog = new THREE.Fog
			(
				0xFFFFFF,
				150 * 0.5,
				150
			);
			
			
			// add the output of the renderer to the html element
			renderer.domElement.setAttribute("id","targetCanvas");
			document.getElementById("mycanvas").appendChild(renderer.domElement);// document.getElementById("myc-animation-area").appendChild(renderer.domElement);
			
			
			/*
				アニメーションフレーム描画
			*/
			var clockHelperReadyTime = -1;
			
			var renderScene = function()
			{
				var delta = clock.getDelta();
				
				/*
					カメラ
				*/
				var cameraDiffX = targetCameraPosition.x - camera.position.x;
				var cameraDiffY = targetCameraPosition.y - camera.position.y;
				
				if (Math.abs(cameraDiffX) > 0.02)
				{
					camera.position.x += cameraDiffX * delta * 4;
				}
				
				if (Math.abs(cameraDiffY) > 0.02)
				{
					camera.position.y += cameraDiffY * delta * 4;
				}
				
				camera.lookAt(defaultCamera.lookAt);
				
				/*
					MMDアニメーションヘルパーの更新
				*/
				if (isHelperReady)
				{
					if (clockHelperReadyTime == -1)
					{
						clockHelperReadyTime = clock.elapsedTime;
					}
					else
					{
						if (clock.elapsedTime - clockHelperReadyTime > 0.5)
						{
							/*
								オブジェクト表示
							*/
							gridHelper.visible = true;
							objectMain.visible = true;
						
							// if(myRecorder !== null && recordBtn === null){
							//     recordBtn = myRecorder.renderButton({
							//         bottom: 1, //距離畫面底部的百分比
							//         right: 1.8, //距離畫面右側的百分比
							//         size: 60 //按鈕的大小，單位為 pixel
							//     });
							//     document.getElementById("mycanvas").appendChild(recordBtn);
							// }
								


							/*
								アクション開始
							*/
							animationAction.play();
						}
					}
					
					helper.update(delta);
				}
				
				/*
					フレーム更新
				*/
				renderer.render(scene, camera);
				requestAnimationFrame(renderScene);
			};
			
			renderScene();
			
			
			/*
				ブラウザリサイズ変更
			*/
			// var onResize = function()
			// {
			// 	if ($myc.hasClass('history-bg-fix'))
			// 	{
			// 		return;
			// 	}
				
			// 	camera.aspect = $mycAnimationArea.width() / $mycAnimationArea.height();
			// 	camera.updateProjectionMatrix();
			// 	renderer.setPixelRatio(window.devicePixelRatio);
			// 	renderer.setSize
			// 	(
			// 		$mycAnimationArea.width(),
			// 		$mycAnimationArea.height()
			// 	);
			// };
			
			// window.addEventListener('resize', onResize, false);
			
		};	/* /init */
	}
);