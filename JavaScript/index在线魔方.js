(() => {
	var t, e = {
			424: (t, e, i) => {
				"use strict";
				i.d(e, {
					Z: () => r
				});
				var s = i(645),
					n = i.n(s)()((function(t) {
						return t[1]
					}));
				n.push([t.id,
					".container.grid-list-md .layout:not(:only-child) {\n  margin: 0%;\n  padding: 0%;\n}\n.container.grid-list-md .layout .flex {\n  margin: 0%;\n  padding: 0%;\n}\n.v-input input {\n  max-height: 512px;\n  font-size: inherit;\n}\n.v-input__append-inner {\n  margin-top: 0% !important;\n}\n.v-input .v-label {\n  height: 100%;\n  line-height: 100%;\n}\n.v-input {\n  font-size: inherit;\n}\n.v-label {\n  font-size: inherit;\n}\n.v-slider__thumb-label {\n  font-size: inherit;\n}\n.v-slider__track-background {\n  transition: none !important;\n}\n.v-slider__track-fill {\n  transition: none !important;\n}\n.v-slider__thumb-container {\n  transition: none !important;\n}\n.v-text-field--outlined.v-input--dense .v-label {\n  top: 0px !important;\n}\n.v-textarea textarea {\n  line-height: inherit;\n  margin-top: 0 !important;\n}\n.v-card__text {\n  padding-bottom: 0 !important;\n  line-height: inherit;\n}\n.v-card__title {\n  line-height: inherit;\n}\n.v-color-picker {\n  max-width: 100% !important;\n}\ndiv::-webkit-scrollbar {\n  width: 0;\n}\n",
					""
				]);
				const r = n
			},
			630: t => {
				t.exports =
					'<v-app>\n  <div v-show="!listd" v-resize="resize" style="user-select: none; touch-action: none;">\n    <setting v-show="!listd" ref="setting"> </setting>\n    <viewport ref="viewport"></viewport>\n    <v-btn\n      fixed\n      left\n      top\n      text\n      color="primary"\n      style="user-select: none; margin: 0%; padding: 0%;"\n      :style="{height:size+\'px\', \'margin-left\': width / 2 - Math.min(size*4, width/2 - size/4) + \'px\'}"\n      @click="tap(\'list\')"\n    >\n      <div :style="{\'font-size\':(size * 0.5)+\'px\'}" style="text-transform: none;">{{name}}</div>\n    </v-btn>\n    <v-container\n      fluid\n      grid-list-md\n      text-xs-center\n      :style="{width:Math.min(size * 8, width) + \'px\', height:size * 3.5 + \'px\'}"\n      style="padding: 0%; touch-action: none;"\n    >\n      <v-layout row wrap>\n        <v-flex xs12>\n          <v-text-field\n            style="text-transform: none;"\n            :height="size * 0.8"\n            :style="{\'padding-left\': size / 4 + \'px\',\'padding-right\': size / 4 + \'px\', \'margin-top\':size/8 + \'px\', \'font-size\':size*0.4+\'px\'}"\n            dense\n            hide-details\n            outlined\n            single-line\n            v-model="action"\n          >\n            <v-btn\n              slot="label"\n              text\n              style="margin: 0%; padding: 0%; min-width: 0%; min-height: 0%;"\n              :style="{width:size * 0.4+\'px\',height:size * 0.8+\'px\'}"\n            >\n              <v-icon :size="size * 0.4" style="vertical-align: middle;">theaters</v-icon>\n            </v-btn>\n            <v-btn\n              slot="append"\n              text\n              v-show="origin&&origin.length>0&&action!=origin"\n              style="margin: 0%; padding: 0%; min-width: 0%; min-height: 0%;"\n              :style="{width:size * 0.4+\'px\',height:size * 0.8+\'px\'}"\n              @click="action=origin"\n            >\n              <v-icon :size="size * 0.4">settings_backup_restore</v-icon>\n            </v-btn>\n          </v-text-field>\n        </v-flex>\n      </v-layout>\n      <playbar ref="playbar"></playbar>\n    </v-container>\n  </div>\n  <div\n    v-show="listd"\n    style="margin: 0; display: flex; flex-flow: column; height: 100%; user-select: none; touch-action: none;"\n    :style="{height: height + \'px\'}"\n  >\n    <div style="margin: auto; width: 100%;">\n      <v-tabs v-model="tab" grow color="cyan" :height="size * 0.8">\n        <v-tab v-for="(group,i) in data.algs" :key="i" :href="`#tab-${i}`">\n          <p :style="{\'font-size\':size * 0.3+\'px\'}" style="text-align: center; margin: 0%; padding: 0%;">\n            {{ group.name}}\n          </p>\n        </v-tab>\n      </v-tabs>\n    </div>\n    <div\n      style="flex: 1; overflow: auto; margin: auto; user-select: none;"\n      :style="{height: (height - size * 0.8) + \'px\'}"\n    >\n      <v-tabs-items v-model="tab">\n        <v-tab-item v-for="(group,i) in data.algs" :key="i" :value="\'tab-\' + i" style="height: 100%;">\n          <v-layout row wrap style="margin: 0%; padding: 0%; min-width: 0%; min-height: 0%; align-items: stretch;">\n            <v-card\n              outlined\n              style="margin: 0%; padding: 0%;"\n              :style="{\'width\':grid + \'px\'}"\n              v-for="(alg, j) in group.items"\n              :key="j"\n            >\n              <v-btn\n                v-if="group.mutable"\n                block\n                depressed\n                color="error"\n                :style="{\'font-size\':size/3+\'px\', \'height\': size * 0.5 + \'px\'}"\n                style="text-transform: none; text-align: center; margin: 0%; padding: 0%;"\n                @click="removei = j;removed = true;"\n                >删除\n              </v-btn>\n              <v-btn\n                block\n                depressed\n                text\n                color="primary"\n                :style="{\'font-size\':size/3+\'px\', \'height\': size * 0.5 + \'px\'}"\n                style="text-transform: none; text-align: center; margin: 0%; padding: 0%;"\n                @click="select(i, j)"\n              >\n                {{alg.name}}\n              </v-btn>\n              <img\n                v-if="pics[i] && pics[i][j]"\n                :src="pics[i][j]"\n                style="margin: 0%; padding: 0%;"\n                :style="{\'width\':grid + \'px\'}"\n                @click="select(i, j)"\n              />\n              <v-progress-circular\n                v-if="!(pics[i] && pics[i][j])"\n                :size="grid"\n                :width="~~(grid * 0.15)"\n                indeterminate\n              ></v-progress-circular>\n              <p\n                :style="{\'font-size\':size/4+\'px\'}"\n                style="text-align: center; word-wrap: break-word; margin: 0%; padding: 1%;"\n              >\n                {{alg.exp.substring(0, 60)}}\n              </p>\n            </v-card>\n            <v-card outlined style="margin: 0%; padding: 0%;" :style="{\'width\':grid + \'px\'}" v-if="group.mutable">\n              <v-btn\n                block\n                depressed\n                color="primary"\n                :style="{\'font-size\':size/3+\'px\'}"\n                style="text-transform: none; text-align: center; margin: 0%; padding: 0%;"\n                @click="addd=true"\n                :height="grid"\n              >\n                <v-icon :size="grid * 0.5" style="vertical-align: middle;">add</v-icon>\n              </v-btn>\n            </v-card>\n          </v-layout>\n        </v-tab-item>\n      </v-tabs-items>\n    </div>\n  </div>\n</v-app>\n'
			},
			329: t => {
				t.exports =
					'<v-app>\n  <div v-resize="resize" style="user-select: none; touch-action: none;">\n    <setting v-on:order="order"></setting>\n    <viewport ref="viewport"></viewport>\n    <v-container v-show="!colord" fluid grid-list-md text-xs-center\n      :style="{width:Math.min(size * 8, width) + \'px\', height:size * 4.6 + \'px\'}"\n      style="padding: 0%; touch-action: none;">\n      <v-layout row wrap>\n        <v-flex xs12 style="display: flex;"\n          :style="{\'padding-left\': size / 4 + \'px\',\'padding-right\': size / 4 + \'px\',\'padding-bottom\': size / 8 + \'px\'}">\n          <v-btn @click="tap(\'color\')" :style="style" text :ripple="false" :disabled="recording">\n            <v-icon :size="size * 0.8">colorize</v-icon>\n          </v-btn>\n          <v-btn @click="tap(\'output\')" :style="style" text :ripple="false" :disabled="recording">\n            <v-icon :size="size * 0.8">iso</v-icon>\n          </v-btn>\n          <v-btn @click="tap(\'snap\')" :style="style" text :ripple="false" :disabled="recording">\n            <v-icon :size="size * 0.8">camera_alt</v-icon>\n          </v-btn>\n          <v-btn @click="tap(\'film\')" :style="style" text :ripple="false">\n            <v-icon :size="size * 0.8">{{recording?\'stop\':\'movie\'}}</v-icon>\n          </v-btn>\n          <v-btn @click="tap(\'share\')" :style="style" text :ripple="false" :disabled="recording">\n            <v-icon :size="size * 0.8">share</v-icon>\n          </v-btn>\n        </v-flex>\n        <v-flex xs12>\n          <v-text-field style="text-transform: none;" :height="size * 0.8"\n            :style="{\'padding-left\': size / 4 + \'px\',\'padding-right\': size / 4 + \'px\', \'margin-top\':size/8 + \'px\', \'font-size\':size*0.4+\'px\'}"\n            dense hide-details outlined single-line :disabled="recording" v-model="action">\n            <v-btn tabindex="-1" slot="label" text style="margin: 0%; padding: 0%; min-width: 0%; min-height: 0%;"\n              :style="{width:size * 0.4+\'px\',height:size * 0.8+\'px\'}">\n              <v-icon :size="size * 0.4" style="vertical-align: middle;">theaters</v-icon>\n            </v-btn>\n            <v-btn tabindex="-1" slot="append" text style="margin: 0%; padding: 0%; min-width: 0%; min-height: 0%;"\n              :style="{width:size * 0.4 + \'px\',height:size * 0.8+\'px\'}" @click="scriptd=true" :disabled="recording">\n              <v-icon :size="size * 0.4">edit</v-icon>\n            </v-btn>\n          </v-text-field>\n        </v-flex>\n      </v-layout>\n      <playbar ref="playbar" :disable="recording"></playbar>\n    </v-container>\n    <v-bottom-sheet v-model="outputd">\n      <v-card flat style="margin: auto; touch-action: none; user-select: none;">\n        <v-container fluid grid-list-md text-xs-center :style="{width:Math.min(size * 8, width) + \'px\'}">\n          <v-layout row wrap justify-center align-center :style="{\'padding-top\':size * 0.2 + \'px\'}">\n            <v-flex xs2>\n              <div :style="{\'font-size\':size * 0.3+\'px\'}">像素:</div>\n            </v-flex>\n            <v-flex xs10 style="display: flex;">\n              <v-btn v-for="i in [128, 256, 512, 1024, 2048]" :key="i" @click="data.pixel=i;data.save();"\n                :color="data.pixel == i?\'primary\':\'\'" depressed style="text-transform: none; min-width: 0%; flex: 1;"\n                :height="size * 0.8" :style="{\'font-size\':size * 0.3+\'px\'}">\n                <div>{{i}}</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n          <v-layout row wrap justify-center align-center :style="{\'padding-top\':size * 0.2 + \'px\'}">\n            <v-flex xs2>\n              <div :style="{\'font-size\':size * 0.3+\'px\'}">格式:</div>\n            </v-flex>\n            <v-flex xs10 style="display: flex;">\n              <v-btn v-for="i in [\'gif\', \'pngs\']" :key="i" @click="data.filmt=i;data.save();"\n                :color="data.filmt == i?\'primary\':\'\'" depressed style="text-transform: none; min-width: 0%; flex: 1;"\n                :height="size * 0.8" :style="{\'font-size\':size * 0.3+\'px\'}">\n                <div>{{i.toUpperCase()}}</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n          <v-layout row wrap justify-center align-center\n            :style="{\'padding-top\':size * 0.2 + \'px\', \'padding-bottom\':size * 0.2 + \'px\'}">\n            <v-flex xs2>\n              <div :style="{\'font-size\':size * 0.3+\'px\'}">间隔:</div>\n            </v-flex>\n            <v-flex xs10 style="display: flex;">\n              <v-btn v-for="i in [2, 3, 4, 5, 6, 10]" :key="i" @click="data.delay=i;data.save();"\n                :color="data.delay == i?\'primary\':\'\'" depressed style="text-transform: none; min-width: 0%; flex: 1;"\n                :height="size * 0.8" :style="{\'font-size\':size * 0.3+\'px\'}">\n                <div>{{i}}</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-container>\n      </v-card>\n    </v-bottom-sheet>\n    <v-bottom-sheet v-model="colord" hide-overlay persistent no-click-animation :retain-focus="false">\n      <v-card flat style="margin: auto; touch-action: none; user-select: none;">\n        <v-container fluid grid-list-md text-xs-center\n          :style="{width:Math.min(size * 8, width) + \'px\', height:size * 4.6 + \'px\', \'padding-top\': size * 0.3 + \'px\'}">\n          <v-layout row wrap>\n            <v-flex v-for="item in colort" :key="item" xs3 :style="{padding:size * 0.06 + \'px\'}">\n              <v-btn @click="color = item;" :color="colors[item]" block depressed :ripple="false"\n                style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size">\n                <v-icon :size="size * 0.8" v-show="color==item">colorize</v-icon>\n              </v-btn>\n            </v-flex>\n            <v-flex xs3 :style="{padding:size * 0.06 + \'px\'}">\n              <v-btn @click="color = \'Core\';" block depressed :ripple="false"\n                style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size">\n                <v-icon :size="size * 0.8" v-show="color==\'Core\'">crop_din</v-icon>\n                <div :style="{\'font-size\':size * 0.4+\'px\'}" v-show="color!=\'Core\'">\n                  底色\n                </div>\n              </v-btn>\n            </v-flex>\n            <v-flex xs3 :style="{padding:size * 0.06 + \'px\'}">\n              <v-btn @click="color = \'remove\';" block depressed :ripple="false"\n                style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size">\n                <v-icon :size="size * 0.8" v-show="color==\'remove\'">block</v-icon>\n                <div :style="{\'font-size\':size * 0.4+\'px\'}" v-show="color!=\'remove\'">\n                  移除\n                </div>\n              </v-btn>\n            </v-flex>\n            <v-flex xs3 :style="{padding:size * 0.06 + \'px\'}">\n              <v-btn @click="reset" block depressed :ripple="false"\n                style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size" color="success">\n                <div :style="{\'font-size\':size * 0.4+\'px\'}">\n                  重置\n                </div>\n              </v-btn>\n            </v-flex>\n            <v-flex xs3 :style="{padding:size * 0.06 + \'px\'}">\n              <v-btn @click="clear" block depressed :ripple="false"\n                style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size" color="error">\n                <div :style="{\'font-size\':size * 0.4+\'px\'}">\n                  清空\n                </div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-container>\n      </v-card>\n    </v-bottom-sheet>\n    <v-dialog v-model="scriptd" :width="Math.min(size * 8, width)">\n      <v-card>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\'}">\n            场景:\n          </div>\n        </v-card-title>\n        <v-card-text style="text-transform: none; padding-bottom: 0%;">\n          <v-textarea :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" rows="2" no-resize solo flat\n            outlined hide-details v-model="scene">\n          </v-textarea>\n        </v-card-text>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\'}">\n            动作:\n          </div>\n        </v-card-title>\n        <v-card-text style="text-transform: none;">\n          <v-flex xs12 style="display: flex;">\n            <v-btn depressed @click="tap(\'expand\')" :height="size * 0.8" color="success" style="flex: 1;">\n              <div :style="{\'font-size\':size/3+\'px\'}">展开</div>\n            </v-btn>\n            <v-btn depressed @click="tap(\'clear\')" :height="size * 0.8" color="error" style="flex: 1;">\n              <div :style="{\'font-size\':size/3+\'px\'}">清空</div>\n            </v-btn>\n          </v-flex>\n          <v-textarea :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" rows="6" no-resize solo flat\n            outlined hide-details v-model="action">\n          </v-textarea>\n        </v-card-text>\n        <v-card-actions>\n          <v-layout row wrap style="margin: 0%;">\n            <v-flex xs12 d-flex>\n              <v-btn block text @click="scriptd = false;" :height="size * 0.8">\n                <div :style="{\'font-size\':size/3+\'px\'}">确定</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-dialog v-model="shared" :width="Math.min(size * 8, width)" eager>\n      <v-card>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\',\'padding-top\':size/8+\'px\'}">\n            分享链接:\n          </div>\n        </v-card-title>\n        <v-card-actions>\n          <v-layout row wrap style="margin: 0%;">\n            <v-flex xs12 d-flex>\n              <v-textarea id="link" :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" solo flat\n                outlined hide-details v-model="link">\n              </v-textarea>\n            </v-flex>\n            <v-flex xs6 d-flex>\n              <v-btn block text @click="tap(\'open\')" :height="size * 0.8">\n                <div :style="{\'font-size\':size/3+\'px\'}">打开</div>\n              </v-btn>\n            </v-flex>\n            <v-flex xs6 d-flex>\n              <v-btn block text @click="shared = false;" :height="size * 0.8" data-clipboard-target="#link" ref="copy">\n                <div :style="{\'font-size\':size/3+\'px\'}">复制</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n  </div>\n</v-app>'
			},
			375: t => {
				t.exports =
					'<v-app>\n  <div v-resize="resize" style="user-select: none; touch-action: none;">\n    <setting ref="setting"> </setting>\n    <viewport ref="viewport"></viewport>\n    <v-card flat style="margin: auto; touch-action: none; user-select: none;">\n      <v-container fluid grid-list-md text-xs-center\n        :style="{width:Math.min(size * 8, width) + \'px\', height:size * 4 + \'px\'}">\n        <v-layout row wrap>\n          <v-flex v-for="item in colort" :key="item" xs4 :style="{padding:size * 0.06 + \'px\'}">\n            <v-btn @click="color = item;" :color="colors[item]" block depressed :ripple="false"\n              style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size">\n              <span v-show="color!=item" :style="{\'font-size\':size * 0.5 + \'px\'}">{{faces[item]}}</span>\n              <v-icon :size="size * 0.8" v-show="color==item">colorize</v-icon>\n            </v-btn>\n          </v-flex>\n          <v-flex xs4 :style="{padding:size * 0.06 + \'px\'}">\n            <v-btn @click="solve" block text :ripple="false" color="success"\n              style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size">\n              <div :style="{\'font-size\':size * 0.4+\'px\'}">\n                求解\n              </div>\n            </v-btn>\n          </v-flex>\n          <v-flex xs4 :style="{padding:size * 0.06 + \'px\'}">\n            <v-btn @click="reset" block text :ripple="false" color="primary"\n              style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size">\n              <div :style="{\'font-size\':size * 0.4+\'px\'}">\n                重置\n              </div>\n            </v-btn>\n          </v-flex>\n          <v-flex xs4 :style="{padding:size * 0.06 + \'px\'}">\n            <v-btn @click="clear" block text :ripple="false" color="error"\n              style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size">\n              <div :style="{\'font-size\':size * 0.4+\'px\'}">\n                清空\n              </div>\n            </v-btn>\n          </v-flex>\n        </v-layout>\n      </v-container>\n    </v-card>\n  </div>\n  <v-dialog v-model="solutiond" :width="Math.min(size * 8, width)" eager>\n    <v-card>\n      <v-card-title style="text-transform: none;">\n        <div :style="{\'font-size\':size * 0.4+\'px\',\'padding-top\':size/8+\'px\'}">\n          解法:\n        </div>\n      </v-card-title>\n      <v-card-actions>\n        <v-layout row wrap style="margin: 0%;">\n          <v-flex xs12 d-flex>\n            <v-textarea id="copy" :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" solo flat\n              outlined hide-details v-model="solution">\n            </v-textarea>\n          </v-flex>\n          <v-flex xs6 d-flex>\n            <v-btn block text @click="play" :height="size * 0.8" :disabled="solution.startsWith(\'error\')">\n              <div :style="{\'font-size\':size/3+\'px\'}">播放</div>\n            </v-btn>\n          </v-flex>\n          <v-flex xs6 d-flex>\n            <v-btn block text @click="solutiond = false;" :height="size * 0.8" data-clipboard-target="#copy" ref="copy"\n              :disabled="solution.startsWith(\'error\')">\n              <div :style="{\'font-size\':size/3+\'px\'}">复制</div>\n            </v-btn>\n          </v-flex>\n        </v-layout>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n</v-app>'
			},
			503: t => {
				t.exports =
					"<v-bottom-sheet v-model=\"show\" v-resize=\"resize\">\n  <v-card text style=\"margin: auto; touch-action: none; user-select: none;\">\n    <v-container fluid grid-list-md text-xs-center :style=\"{width:Math.min(width, height * 0.6) + 'px'}\">\n      <v-card-title style=\"text-justify: auto;\">\n        <p :style=\"{'font-size':size / 2 + 'px'}\">魔方栈</p>\n      </v-card-title>\n      <v-card-text>\n        <p :style=\"{'font-size':size / 3 + 'px'}\">作者: 华哲辰</p>\n        <p :style=\"{'font-size':size / 3 + 'px'}\">邮箱: <a href=\"mailto:37705123@qq.com\">37705123@qq.com</a></p>\n        <p :style=\"{'font-size':size / 3 + 'px'}\">微信: huazhechen</p>\n      </v-card-text>\n      <v-layout row wrap :style=\"{'padding-top':size * 0.2 + 'px', 'padding-bottom':size * 0.2 + 'px'}\">\n        <v-flex xs6 style=\"display: flex;\">\n          <v-btn @click=\"tap('help')\" color=\"success\" text style=\"text-transform: none; min-width: 0%; flex: 1;\"\n            :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            使用帮助\n          </v-btn>\n        </v-flex>\n        <v-flex xs6 style=\"display: flex;\">\n          <v-btn @click=\"tap('reset')\" color=\"error\" text style=\"text-transform: none; min-width: 0%; flex: 1;\"\n            :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            重置数据\n          </v-btn>\n        </v-flex>\n      </v-layout>\n      </v-layout>\n    </v-container>\n  </v-card>\n  <v-dialog v-model=\"resetd\" :width=\"Math.min(size * 8, width)\">\n    <v-card>\n      <v-card-title style=\"text-transform: none;\">\n        <div :style=\"{'font-size':size * 0.4+'px','padding-top':size/8+'px'}\">\n          重置数据?\n        </div>\n      </v-card-title>\n      <v-card-actions>\n        <v-layout row wrap style=\"margin: 0%;\">\n          <v-flex xs4 d-flex>\n            <v-btn block color=\"error\" text @click=\"resetd = false;reset();\" :height=\"size\">\n              <div :style=\"{'font-size':size/3+'px'}\">全部</div>\n            </v-btn>\n          </v-flex>\n          <v-flex xs4 d-flex>\n            <v-btn block color=\"info\" text @click=\"resetd = false;clear();\" :height=\"size\">\n              <div :style=\"{'font-size':size/3+'px'}\">配置</div>\n            </v-btn>\n          </v-flex>\n          <v-flex xs4 d-flex>\n            <v-btn block text @click=\"resetd = false\" :height=\"size\">\n              <div :style=\"{'font-size':size/3+'px'}\">取消</div>\n            </v-btn>\n          </v-flex>\n        </v-layout>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n</v-bottom-sheet>"
			},
			270: t => {
				t.exports =
					"<v-bottom-sheet v-model=\"show\" overlay-opacity=\"0\" v-resize=\"resize\">\n  <v-card text style=\"margin: auto; touch-action: none; user-select: none;\">\n    <v-container fluid grid-list-md text-xs-center :style=\"{width:Math.min(width, height * 0.6) + 'px'}\">\n      <v-layout row wrap :style=\"{'padding-top':size * 0.2 + 'px', 'padding-bottom':size * 0.2 + 'px'}\">\n        <v-flex xs4 style=\"display: flex;\">\n          <v-btn @click=\"preferance.dark=!preferance.dark\" :color=\"preferance.dark?'primary':''\" depressed\n            style=\"text-transform: none; min-width: 0%; flex: 1;\" :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            暗黑\n          </v-btn>\n        </v-flex>\n        <v-flex xs4 style=\"display: flex;\">\n          <v-btn @click=\"preferance.shadow=!preferance.shadow\" :color=\"preferance.shadow?'primary':''\" depressed\n            style=\"text-transform: none; min-width: 0%; flex: 1;\" :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            阴影\n          </v-btn>\n        </v-flex>\n        <v-flex xs4 style=\"display: flex;\">\n          <v-btn @click=\"preferance.hollow=!preferance.hollow\" :color=\"preferance.hollow?'primary':''\" depressed\n            style=\"text-transform: none; min-width: 0%; flex: 1;\" :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            透明\n          </v-btn>\n        </v-flex>\n        <v-flex xs4 style=\"display: flex;\">\n          <v-btn @click=\"preferance.mirror=!preferance.mirror\" :color=\"preferance.mirror?'primary':''\" depressed\n            style=\"text-transform: none; min-width: 0%; flex: 1;\" :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            镜像\n          </v-btn>\n        </v-flex>\n        <v-flex xs4 style=\"display: flex;\">\n          <v-btn @click=\"preferance.arrow=!preferance.arrow\" :color=\"preferance.arrow?'primary':''\" depressed\n            style=\"text-transform: none; min-width: 0%; flex: 1;\" :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            箭头\n          </v-btn>\n        </v-flex>\n        <v-flex xs4 style=\"display: flex;\">\n          <v-btn @click=\"preferance.thickness=!preferance.thickness\" :color=\"preferance.thickness?'primary':''\"\n            depressed style=\"text-transform: none; min-width: 0%; flex: 1;\" :height=\"size * 0.8\"\n            :style=\"{'font-size':size / 3 + 'px', 'margin-left':size * 0.06 + 'px', 'margin-right':size * 0.06 + 'px', 'margin-bottom':size * 0.2 + 'px'}\">\n            厚度\n          </v-btn>\n        </v-flex>\n      </v-layout>\n      </v-layout>\n    </v-container>\n  </v-card>\n</v-bottom-sheet>"
			},
			663: t => {
				t.exports =
					'<v-bottom-sheet v-model="show" overlay-opacity="0" v-resize="resize">\n  <v-card text style="margin: auto; touch-action: none; user-select: none;">\n    <v-container fluid grid-list-md text-xs-center :style="{width:Math.min(width, height * 0.6) + \'px\'}">\n      <v-layout row wrap justify-center align-center\n        :style="{\'font-size\':(size * 0.3)+\'px\',\'min-height\':size+\'px\'}">\n        <v-slider dense v-model="preferance.scale" always-dirty thumb-label="always" max="100" min="0" label="缩放"\n          :thumb-size="size * 0.6">\n        </v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center\n        :style="{\'font-size\':(size * 0.3)+\'px\',\'min-height\':size+\'px\'}">\n        <v-slider dense v-model="preferance.perspective" always-dirty thumb-label="always" max="100" min="0" label="透视"\n          :thumb-size="size * 0.6">\n        </v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center\n        :style="{\'font-size\':(size * 0.3)+\'px\',\'min-height\':size+\'px\'}">\n        <v-slider dense v-model="preferance.angle" always-dirty thumb-label="always" max="100" min="0" label="左右"\n          :thumb-size="size * 0.6">\n        </v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center\n        :style="{\'font-size\':(size * 0.3)+\'px\',\'min-height\':size+\'px\'}">\n        <v-slider dense v-model="preferance.gradient" always-dirty thumb-label="always" max="100" min="0" label="上下"\n          :thumb-size="size * 0.6">\n        </v-slider>\n      </v-layout>\n    </v-container>\n  </v-card>\n</v-bottom-sheet>\n'
			},
			662: t => {
				t.exports =
					'<v-bottom-sheet v-model="show" v-resize="resize">\n  <v-card text style="margin: auto; touch-action: none; user-select: none;">\n    <v-container fluid grid-list-md text-xs-center :style="{width:Math.min(width, height * 0.6) + \'px\'}">\n      <v-layout row wrap justify-center align-center :style="{\'font-size\':(size * 0.3)+\'px\',\'min-height\':size+\'px\'}">\n        <v-slider dense v-model="preferance.frames" always-dirty thumb-label="always" max="60" min="1" label="帧数"\n          :thumb-size="size * 0.6"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center :style="{\'font-size\':(size * 0.3)+\'px\',\'min-height\':size+\'px\'}">\n        <v-slider dense v-model="preferance.sensitivity" always-dirty thumb-label="always" max="100" min="1" label="灵敏"\n          :thumb-size="size * 0.6">\n        </v-slider>\n      </v-layout>\n    </v-container>\n  </v-card>\n</v-bottom-sheet>\n'
			},
			82: t => {
				t.exports =
					'<v-bottom-sheet v-model="show" v-resize="resize">\n  <v-card text style="margin: auto; touch-action: none; user-select: none;">\n    <v-container fluid grid-list-md text-xs-center :style="{width:Math.min(width, height * 0.6) + \'px\'}">\n      <v-layout row wrap justify-center align-center\n        :style="{\'padding-top\':size * 0.2 + \'px\', \'padding-bottom\':size * 0.3 + \'px\'}">\n        <v-flex xs12 style="display: flex;">\n          <v-btn v-for="i in [1,2,3,4,5,6]" :key="i" @click="order(i)" :color="world.order == i?\'primary\':\'\'" depressed\n            style="text-transform: none; min-width: 0%; flex: 1;" :height="size"\n            :style="{\'font-size\':size * 0.5 + \'px\', margin:size/20 + \'px\'}">\n            <div>{{i}}</div>\n          </v-btn>\n        </v-flex>\n        <v-flex xs12 style="display: flex;">\n          <v-btn v-for="i in [7,8,9,10,11,12]" :key="i" @click="order(i)" :color="world.order == i?\'primary\':\'\'"\n            depressed style="text-transform: none; min-width: 0%; flex: 1;" :height="size"\n            :style="{\'font-size\':size * 0.5 + \'px\', margin:size/20 + \'px\'}">\n            <div>{{i}}</div>\n          </v-btn>\n        </v-flex>\n      </v-layout>\n    </v-container>\n  </v-card>\n</v-bottom-sheet>\n'
			},
			517: t => {
				t.exports =
					'<v-bottom-sheet v-model="show" overlay-opacity="0" v-resize="resize">\n  <v-card text style="margin: auto; touch-action: none; user-select: none;">\n    <v-container fluid grid-list-md text-xs-center :style="{width:Math.min(width, height * 0.6) + \'px\'}">\n      <v-layout row wrap :style="{\'padding-bottom\':size * 0.2 + \'px\'}">\n        <v-flex v-for="(item, index) in colors" :key="index" xs3 :style="{padding:size * 0.06 + \'px\'}"\n          v-show="index!==\'Gray\'">\n          <v-btn @click="tap(index)" :color="item" block depressed :height="size"\n            :style="{\'font-size\':size * 0.4 + \'px\'}">{{index[0]}}\n          </v-btn>\n        </v-flex>\n      </v-layout>\n    </v-container>\n  </v-card>\n  <v-bottom-sheet v-model="colord">\n    <v-card flat style="margin: auto; touch-action: none; user-select: none;">\n      <v-container fluid grid-list-md text-xs-center :style="{width:Math.min(size * 8, width) + \'px\'}">\n        <v-layout row wrap>\n          <v-flex v-for="item in palette" :key="item" xs2 :style="{padding:size * 0.06 + \'px\'}">\n            <v-btn @click="color(item);" :color="item" block depressed\n              style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size"\n              :style="{\'font-size\':size * 0.4 + \'px\'}">{{match(item)}}\n            </v-btn>\n          </v-flex>\n          <v-flex xs10>\n            <v-color-picker v-model="colorv" hide-canvas hide-inputs flat style="width: 100%;"></v-color-picker>\n          </v-flex>\n          <v-flex xs2 :style="{padding:size * 0.06 + \'px\'}">\n            <v-btn @click="color(colorv);" :color="colorv" block depressed\n              style="min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;" :height="size"\n              :style="{\'font-size\':size * 0.4 + \'px\'}">{{match(colorv)}}\n            </v-btn>\n          </v-flex>\n        </v-layout>\n      </v-container>\n    </v-card>\n  </v-bottom-sheet>\n</v-bottom-sheet>\n'
			},
			661: t => {
				t.exports =
					'<v-layout row wrap>\n  <v-flex xs12\n    :style="{\'padding-left\': size / 2 + \'px\',\'padding-right\': size / 2 + \'px\',\'padding-top\': size * 0.2 + \'px\',\'font-size\':(size * 0.3)+\'px\',\'min-height\':size+\'px\'}">\n    <v-slider style="margin: 0%;padding: 0%;" hide-details :thumb-label="progress!=0?\'always\':false" ticks="always"\n      v-model="progress" :max="actions.length" :thumb-size="size * 0.6">\n      <template v-slot:thumb-label>{{progress==0?\'#\':actions[progress - 1].value}}</template>\n    </v-slider>\n  </v-flex>\n  <v-flex xs12 style="display: flex;" :style="{\'padding-left\': size / 4 + \'px\',\'padding-right\': size / 4 + \'px\'}">\n    <v-btn :style="style" text large :disabled="disable || (progress==0 && !chaos)" @click="init">\n      <v-icon :size="size * 0.8">skip_previous</v-icon>\n    </v-btn>\n    <v-btn :style="style" text large :disabled="disable || progress==0 || chaos" @click="backward">\n      <v-icon :size="size * 0.8">fast_rewind</v-icon>\n    </v-btn>\n    <v-btn :style="style" text large :disabled="disable || progress == actions.length || chaos" @click="toggle">\n      <v-icon :size="size * 0.8">{{playing?\'pause\':\'play_arrow\'}}</v-icon>\n    </v-btn>\n    <v-btn :style="style" text large :disabled="disable || progress == actions.length || chaos" @click="forward">\n      <v-icon :size="size * 0.8">fast_forward</v-icon>\n    </v-btn>\n    <v-btn :style="style" text large :disabled="disable || (progress==actions.length) || chaos" @click="finish">\n      <v-icon :size="size * 0.8">skip_next</v-icon>\n    </v-btn>\n  </v-flex>\n</v-layout>\n'
			},
			484: t => {
				t.exports =
					'<v-app>\r\n  <div v-resize="resize" style="user-select: none; touch-action: none;">\r\n    <setting ref="setting"></setting>\r\n    <v-btn\r\n      fixed\r\n      left\r\n      top\r\n      text\r\n      color="primary"\r\n      style="user-select: none; margin: 0%; padding: 0%;"\r\n      :style="{width:size+\'px\', height:size+\'px\', \'margin-left\': width / 2 - Math.min(size*4, width/2 - size/4) + \'px\'}"\r\n      @click="script"\r\n    >\r\n      <v-icon :size="size * 0.7">assignment</v-icon>\r\n    </v-btn>\r\n    <viewport ref="viewport"></viewport>\r\n    <v-container\r\n      fluid\r\n      grid-list-md\r\n      text-xs-center\r\n      :style="{width:Math.min(size * 8, width) + \'px\', height:size * 2.6 + \'px\'}"\r\n      style="padding: 0%; touch-action: none;"\r\n    >\r\n      <playbar ref="playbar"></playbar>\r\n    </v-container>\r\n  </div>\r\n  <v-dialog v-model="scriptd" :width="Math.min(size * 8, width)">\r\n    <v-card>\r\n      <v-card-title style="text-transform: none;">\r\n        <div :style="{\'font-size\':size * 0.4+\'px\'}">\r\n          场景:\r\n        </div>\r\n      </v-card-title>\r\n      <v-card-text style="text-transform: none; padding-bottom: 0%;">\r\n        <v-textarea\r\n          :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}"\r\n          rows="2"\r\n          no-resize\r\n          solo\r\n          flat\r\n          outlined\r\n          hide-details\r\n          readonly\r\n          v-model="scene"\r\n        >\r\n        </v-textarea>\r\n      </v-card-text>\r\n      <v-card-title style="text-transform: none;">\r\n        <div :style="{\'font-size\':size * 0.4+\'px\'}">\r\n          动作:\r\n        </div>\r\n      </v-card-title>\r\n      <v-card-text style="text-transform: none;">\r\n        <v-textarea\r\n          :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}"\r\n          rows="8"\r\n          no-resize\r\n          solo\r\n          flat\r\n          outlined\r\n          hide-details\r\n          readonly\r\n          v-model="action"\r\n        >\r\n        </v-textarea>\r\n      </v-card-text>\r\n      <v-card-actions>\r\n        <v-layout row wrap style="margin: 0%;">\r\n          <v-flex xs12 d-flex>\r\n            <v-btn block text @click="scriptd = false;" :height="size * 0.8">\r\n              <div :style="{\'font-size\':size/3+\'px\'}">确定</div>\r\n            </v-btn>\r\n          </v-flex>\r\n        </v-layout>\r\n      </v-card-actions>\r\n    </v-card>\r\n  </v-dialog>\r\n</v-app>\r\n'
			},
			757: t => {
				t.exports =
					'<v-app>\n  <div v-resize="resize" style="user-select: none; touch-action: none;">\n    <setting v-on:order="order"></setting>\n    <viewport ref="viewport"></viewport>\n    <v-btn fixed left top text color="primary" style="user-select: none; margin: 0%; padding: 0%;"\n      :style="{height:size+\'px\', \'margin-left\': width / 2 - Math.min(size*4, width/2 - size/4) + \'px\'}" :ripple="false">\n      <div :style="{\'font-size\':(size * 0.5)+\'px\'}">{{score}}</div>\n    </v-btn>\n    <v-btn fixed block bottom text disabled style="user-select: none; margin: 0%; padding: 0%;"\n      :style="{height:size+\'px\', \'margin-bottom\': size * 1.5 + \'px\'}" :ripple="false" v-show="key.length > 0">\n      <div :style="{\'font-size\':(size * 0.5)+\'px\'}">{{key}}</div>\n    </v-btn>\n    <v-container fluid grid-list-md text-xs-center\n      :style="{width:Math.min(size * 8, width) + \'px\', height:size * 1.5 + \'px\'}"\n      style="padding: 0%; touch-action: none;">\n      <v-layout row wrap>\n        <v-flex xs12 style="display: flex;" :style="{\'padding-left\': size / 4 + \'px\',\'padding-right\': size / 4 + \'px\'}">\n          <v-btn @click="tap(\'scramble\')" :style="style" text :ripple="false">\n            <v-icon :size="size * 0.8">casino</v-icon>\n          </v-btn>\n          <v-btn @click="tap(\'history\')" :style="style" text :ripple="false">\n            <v-icon :size="size * 0.8">assignment</v-icon>\n          </v-btn>\n          <v-btn @click="tap(\'undo\')" :style="style" text :ripple="false" :disabled="world.cube.history.length == 0">\n            <v-icon :size="size * 0.8">backspace</v-icon>\n          </v-btn>\n        </v-flex>\n      </v-layout>\n    </v-container>\n    <v-dialog v-model="scrambled" :width="Math.min(size * 8, width)">\n      <v-card>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\',\'padding-top\':size/8+\'px\'}">\n            重新打乱?\n          </div>\n        </v-card-title>\n        <v-card-text style="text-transform: none; padding-bottom: 0%;">\n          <v-textarea :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" :height="size * 0.8" auto-grow rows="1" solo flat\n            outlined hide-details v-model="data.scrambler">\n          </v-textarea>\n        </v-card-text>\n        <v-card-actions>\n          <v-layout row wrap style="margin: 0%;">\n            <v-flex xs6 d-flex>\n              <v-btn block color="error" text @click="scrambled = false;scramble();" :height="size * 0.8">\n                <div :style="{\'font-size\':size/3+\'px\'}">确定</div>\n              </v-btn>\n            </v-flex>\n            <v-flex xs6 d-flex>\n              <v-btn block text @click="scrambled = false" :height="size * 0.8">\n                <div :style="{\'font-size\':size/3+\'px\'}">取消</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-dialog v-model="completed" :width="Math.min(size * 8, width)">\n      <v-card>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\',\'padding-top\':size/8+\'px\'}">\n            复原成功!\n          </div>\n        </v-card-title>\n        <v-card-actions>\n          <v-layout row wrap style="margin: 0%;">\n            <v-flex xs6 d-flex>\n              <v-btn block text @click="completed = false;" :height="size * 0.8">\n                <div :style="{\'font-size\':size/3+\'px\'}">确定</div>\n              </v-btn>\n            </v-flex>\n            <v-flex xs6 d-flex>\n              <v-btn block color="error" text @click="completed = false;tap(\'share\');tap(\'open\');" :height="size * 0.8">\n                <div :style="{\'font-size\':size/3+\'px\'}">复盘</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-dialog v-model="historyd" :width="Math.min(size * 8, width)">\n      <v-card>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\'}">\n            打乱:\n          </div>\n        </v-card-title>\n        <v-card-text style="text-transform: none; padding-bottom: 0%;">\n          <v-textarea :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" rows="4" no-resize solo flat\n            outlined hide-details readonly v-model="data.scene">\n          </v-textarea>\n        </v-card-text>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\'}">\n            复原:\n          </div>\n        </v-card-title>\n        <v-card-text style="text-transform: none;">\n          <v-flex xs12 style="display: flex;" v-show="world.order==3">\n            <v-btn depressed @click="adjust();" :height="size * 0.8" color="success" style="flex: 1;">\n              <div :style="{\'font-size\':size/3+\'px\'}">整理</div>\n            </v-btn>\n            <v-btn depressed @click="niss();" :height="size * 0.8" color="error" style="flex: 1;">\n              <div :style="{\'font-size\':size/3+\'px\'}">NISS</div>\n            </v-btn>\n          </v-flex>\n          <v-textarea :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" rows="6" no-resize solo flat\n            outlined hide-details readonly v-model="data.history">\n          </v-textarea>\n        </v-card-text>\n        <v-card-actions>\n          <v-layout row wrap style="margin: 0%;">\n            <v-flex xs12 style="display: flex;">\n              <v-btn text @click="historyd = false;" :height="size * 0.8" style="flex: 1;">\n                <div :style="{\'font-size\':size/3+\'px\'}">确定</div>\n              </v-btn>\n              <v-btn text @click="historyd = false;tap(\'share\');" :height="size * 0.8" style="flex: 1;">\n                <div :style="{\'font-size\':size/3+\'px\'}">分享</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-dialog v-model="shared" :width="Math.min(size * 8, width)" eager>\n      <v-card>\n        <v-card-title style="text-transform: none;">\n          <div :style="{\'font-size\':size * 0.4+\'px\',\'padding-top\':size/8+\'px\'}">\n            分享链接:\n          </div>\n        </v-card-title>\n        <v-card-actions>\n          <v-layout row wrap style="margin: 0%;">\n            <v-flex xs12 d-flex>\n              <v-textarea id="link" :style="{\'font-size\':size / 3 + \'px\', \'line-height\':size / 2 + \'px\'}" solo flat\n                outlined hide-details v-model="link">\n              </v-textarea>\n            </v-flex>\n            <v-flex xs6 d-flex>\n              <v-btn block text @click="tap(\'open\')" :height="size * 0.8">\n                <div :style="{\'font-size\':size/3+\'px\'}">打开</div>\n              </v-btn>\n            </v-flex>\n            <v-flex xs6 d-flex>\n              <v-btn block text @click="shared = false;" :height="size * 0.8" data-clipboard-target="#link" ref="copy">\n                <div :style="{\'font-size\':size/3+\'px\'}">复制</div>\n              </v-btn>\n            </v-flex>\n          </v-layout>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n  </div>\n</v-app>\n'
			},
			556: t => {
				t.exports =
					'<div v-resize="resize">\n  <v-btn fixed right top fab color="primary" style="user-select: none;"\n    :style="{width:size * 0.9+\'px\', height:size * 0.9+\'px\', \'margin-right\': width / 2 - Math.min(size*4, width/2) + \'px\'}"\n    @click="menu=!menu">\n    <v-icon :size="size * 0.6">menu</v-icon>\n  </v-btn>\n  <order v-model="items[\'order\'].value" v-on:order="$emit(\'order\');"></order>\n  <appear v-model="items[\'appear\'].value"></appear>\n  <camera v-model="items[\'camera\'].value"></camera>\n  <control v-model="items[\'control\'].value"></control>\n  <palette v-model="items[\'palette\'].value"></palette>\n  <about v-model="items[\'about\'].value"></about>\n  <v-bottom-sheet v-model="menu">\n    <v-card text style="margin: auto;">\n      <v-container fluid grid-list-md text-xs-center :style="{width:Math.min(size * 8, width) + \'px\'}">\n        <v-layout row wrap style="padding-top: 2%; padding-bottom: 5%;">\n          <v-flex xs12 style="display: flex;">\n            <v-btn :color="mode == \'playground\'?\'primary\':\'\'" depressed\n              style="text-transform: none; min-width: 0%; min-height: 0%; margin: 0%; padding: 0%; flex: 1;"\n              @click="tap(\'playground\')" :style="{height: size + \'px\'}">\n              <v-icon :size="size * 0.8">games</v-icon>\n            </v-btn>\n            <v-btn :color="mode == \'helper\'?\'primary\':\'\'" depressed\n              style="text-transform: none; min-width: 0%; min-height: 0%; margin: 0%; padding: 0%; flex: 1;"\n              @click="tap(\'helper\')" :style="{height: size + \'px\'}">\n              <v-icon :size="size * 0.8">assistant</v-icon>\n            </v-btn>\n            <v-btn :color="mode == \'algs\'?\'primary\':\'\'" depressed\n              style="text-transform: none; min-width: 0%; min-height: 0%; margin: 0%; padding: 0%; flex: 1;"\n              @click="tap(\'algs\')" :style="{height: size + \'px\'}">\n              <v-icon :size="size * 0.8">school</v-icon>\n            </v-btn>\n            <v-btn :color="mode == \'director\'?\'primary\':\'\'" depressed\n              style="text-transform: none; min-width: 0%; min-height: 0%; margin: 0%; padding: 0%; flex: 1;"\n              @click="tap(\'director\')" :style="{height: size + \'px\'}">\n              <v-icon :size="size * 0.8">movie</v-icon>\n            </v-btn>\n          </v-flex>\n        </v-layout>\n        <v-layout row wrap style="padding-bottom: 5%;">\n          <v-flex v-for="(item, i) of items" v-show="item.show" :key="item.label" xs6 class="text-center"\n            :style="{\'padding-left\': size/5 + \'px\', \'padding-right\': size/5 + \'px\', \'padding-bottom\': size/5 + \'px\'}">\n            <v-btn rounded depressed block :disabled="item.disable" @click="tap(item)"\n              style="text-transform: none; min-width: 0%; flex: 1;" :height="size * 0.8"\n              :style="{\'font-size\':size / 3 + \'px\'}">{{item.label}}\n            </v-btn>\n          </v-flex>\n        </v-layout>\n      </v-container>\n    </v-card>\n  </v-bottom-sheet>\n</div>'
			},
			238: t => {
				t.exports = '<div ref="canvas"></div>\n'
			},
			591: (t, e, i) => {
				"use strict";
				i.d(e, {
					Z: () => ge
				});
				var s = i(538),
					n = i(464),
					r = i.n(n),
					o = (i(718), i(568), i(379)),
					a = i.n(o),
					h = i(795),
					l = i.n(h),
					c = i(569),
					d = i.n(c),
					p = i(565),
					u = i.n(p),
					v = i(216),
					m = i.n(v),
					f = i(589),
					g = i.n(f),
					y = i(424),
					w = {};
				w.styleTagTransform = g(), w.setAttributes = u(), w.insert =
					d()
					.bind(null, "head"), w.domAPI = l(), w.insertStyleElement =
					m();
				a()(y.Z, w);
				y.Z && y.Z.locals && y.Z.locals;
				var x, b = i(599),
					R = i(212);
				! function(t) {
					t[t.L = 0] = "L", t[t.R = 1] = "R", t[t.D = 2] =
						"D", t[t.U = 3] = "U", t[t.B = 4] = "B", t[t.F =
							5] = "F"
				}(x || (x = {}));
				const z = {
					R: "#B71C1C",
					L: "#FF6D00",
					U: "#F0F0F0",
					D: "#FFD600",
					F: "#00A020",
					B: "#0D47A1",
					Core: "#202020",
					Gray: "#808080",
					High: "#FF0080"
				};
				class C extends R.u9r {
					constructor(t, e) {
						super();
						const i = t / 2,
							s = i - e,
							n = [-s, +s, +i, +s, +s, +i, +s, -s,
								+i, -s, -s, +i, -s, +i, -s, +s,
								+i, -s, +s, +i, +s, -s, +i, +s,
								-i, -s, -s, -i, +s, -s, -i, +s,
								+s, -i, -s, +s, +s, +s, -i, -s,
								+s, -i, -s, -s, -i, +s, -s, -i,
								-s, -i, +s, +s, -i, +s, +s, -i,
								-s, -s, -i, -s, +i, +s, +s, +i,
								+s, -s, +i, -s, -s, +i, -s, +s
							];
						this.setAttribute("position", new R.a$l(
								n, 3)), this.setIndex(C._INDICES),
							this.computeVertexNormals()
					}
				}
				C._INDICES = [0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6, 8, 10,
					9, 8, 11, 10, 12, 14, 13, 12, 15, 14, 16, 18,
					17, 16, 19, 18, 20, 22, 21, 20, 23, 22, 1, 6, 7,
					0, 1, 7, 3, 0, 10, 11, 3, 10, 17, 2, 3, 16, 17,
					3, 23, 20, 1, 2, 23, 1, 5, 12, 13, 4, 5, 13, 9,
					13, 14, 8, 9, 14, 22, 15, 12, 21, 22, 12, 19,
					14, 15, 18, 19, 15, 7, 4, 9, 10, 7, 9, 11, 8,
					19, 16, 11, 19, 23, 17, 18, 22, 23, 18, 20, 21,
					5, 6, 20, 5, 20, 6, 1, 10, 0, 7, 21, 12, 5, 13,
					9, 4, 23, 2, 17, 11, 16, 3, 22, 18, 15, 8, 14,
					19
				];
				class U extends R.O7d {
					constructor(t, e, i) {
						const s = -(t /= 2),
							n = t,
							r = -t,
							o = t,
							a = t / 4,
							h = new R.bnF;
						if (h.moveTo(s, r + a), h.lineTo(s, n -
								a), h.quadraticCurveTo(s, n, s +
								a, n), h.lineTo(o - a, n), h.quadraticCurveTo(
								o, n, o, n - a), h.lineTo(o, r +
								a), h.quadraticCurveTo(o, r, o -
								a, r), h.lineTo(s + a, r), h.quadraticCurveTo(
								s, r, s, r + a), h.closePath(),
							i) {
							const e = .6 * t,
								i = .8 * e,
								s = new R.y$t;
							s.moveTo(0, e), s.lineTo(-i, 0), s.lineTo(
									-i / 2, 0), s.lineTo(-i / 2,
									-e), s.lineTo(i / 2, -e), s
								.lineTo(i / 2, 0), s.lineTo(i,
									0), s.closePath(), h.holes.push(
									s)
						}
						super(h, {
							bevelEnabled: !1,
							depth: e
						})
					}
				}
				class S extends R.oa8 {
					constructor(t) {
						const e = -(t /= 2),
							i = t,
							s = -t,
							n = t,
							r = t / 4,
							o = new R.bnF;
						o.moveTo(e, s + r), o.lineTo(e, i - r),
							o.quadraticCurveTo(e, i, e + r, i),
							o.lineTo(n - r, i), o.quadraticCurveTo(
								n, i, n, i - r), o.lineTo(n, s +
								r), o.quadraticCurveTo(n, s, n -
								r, s), o.lineTo(e + r, s), o.quadraticCurveTo(
								e, s, e, s + r), o.closePath(),
							super(o)
					}
				}
				class M extends R.ZAu {
					constructor(t, e) {
						super(), this.exist = !1, this.order =
							t, this.initial = e, this._vector =
							new R.Pa4, this.index = e, this.stickers = [],
							this._quaternion = new R._fP, this.mirrors = [];
						const i = this.position.x * this.position
							.x,
							s = this.position.y * this.position
							.y,
							n = this.position.z * this.position
							.z;
						let r = i + s + n - Math.min(i, s, n);
						if (r = Math.sqrt(r) + Math.sqrt(2) * M
							.SIZE / 2 - t * M.SIZE / 2, r < 0)
							return;
						this.exist = !0;
						const o = (t - 1) / 2;
						this.lamberts = [this.vector.x == -o ?
							M.LAMBERS.L : void 0, this.vector
							.x == o ? M.LAMBERS.R : void 0,
							this.vector.y == -o ? M.LAMBERS
							.D : void 0, this.vector.y == o ?
							M.LAMBERS.U : void 0, this.vector
							.z == -o ? M.LAMBERS.B : void 0,
							this.vector.z == o ? M.LAMBERS.F :
							void 0
						], this.basics = [this.vector.x ==
							-o ? M.BASICS.L : void 0, this.vector
							.x == o ? M.BASICS.R : void 0,
							this.vector.y == -o ? M.BASICS.D :
							void 0, this.vector.y == o ? M.BASICS
							.U : void 0, this.vector.z == -
							o ? M.BASICS.B : void 0, this.vector
							.z == o ? M.BASICS.F : void 0
						], this.frame = new R.Kj0(M._FRAME,
							M.CORE), this.add(this.frame);
						for (let e = 0; e < 6; e++)
							if (null != this.lamberts[e]) {
								const i = new R.Kj0(M._STICKER,
									this.lamberts[e]);
								switch (i.name = x[e], e) {
									case x.L:
										i.rotation.y = -Math.PI /
											2, i.position.x = -
											M.SIZE / 2;
										break;
									case x.R:
										i.rotation.y = Math.PI /
											2, i.position.x = M
											.SIZE / 2;
										break;
									case x.D:
										i.rotation.x = Math.PI /
											2, i.position.y = -
											M.SIZE / 2;
										break;
									case x.U:
										i.rotation.x = -Math.PI /
											2, i.position.y = M
											.SIZE / 2;
										break;
									case x.B:
										i.rotation.x = Math.PI,
											i.position.z = -M.SIZE /
											2;
										break;
									case x.F:
										i.rotation.x = 2 * Math
											.PI, i.position.z =
											M.SIZE / 2
								}
								this.add(i), this.stickers[e] =
									i;
								const s = new R.Kj0(M._MIRROR,
									this.basics[e]);
								s.rotation.x = 0 == i.rotation.x ?
									0 : i.rotation.x + Math.PI,
									s.rotation.y = 0 == i.rotation
									.y ? 0 : i.rotation.y +
									Math.PI, s.rotation.z = 0 ==
									i.rotation.z ? 0 : i.rotation
									.z + Math.PI, s.rotation.x +
									s.rotation.y + s.rotation.z ==
									0 && (s.rotation.y = Math.PI),
									s.position.x = i.position.x *
									(t + 1), s.position.y = i.position
									.y * (t + 1), s.position.z =
									i.position.z * (t + 1),
									this.mirrors[e] = s
							} this.matrixAutoUpdate = !1, this.updateMatrix()
					}
					set vector(t) {
						const e = (this.order - 1) / 2;
						let i = Math.round(2 * t.x) / 2,
							s = Math.round(2 * t.y) / 2,
							n = Math.round(2 * t.z) / 2;
						this._vector.set(i, s, n), i = Math.round(
								i + e), s = Math.round(s + e),
							n = Math.round(n + e), this._index =
							n * this.order * this.order + s *
							this.order + i, this.position.x = M
							.SIZE * this._vector.x, this.position
							.y = M.SIZE * this._vector.y, this.position
							.z = M.SIZE * this._vector.z
					}
					get vector() {
						return this._vector
					}
					set index(t) {
						const e = (this.order - 1) / 2,
							i = t % this.order - e,
							s = Math.floor(t % (this.order *
								this.order) / this.order) - e,
							n = Math.floor(t / (this.order *
								this.order)) - e;
						this.vector = new R.Pa4(i, s, n)
					}
					get index() {
						return this._index
					}
					set mirror(t) {
						if (t)
							for (let t = 0; t < 6; t++) this.mirrors[
									t] instanceof R.Kj0 && this
								.children.indexOf(this.mirrors[
									t]) < 0 && this.add(this.mirrors[
									t]);
						else
							for (let t = 0; t < 6; t++) this.mirrors[
									t] instanceof R.Kj0 && this
								.children.indexOf(this.mirrors[
									t]) >= 0 && this.remove(
									this.mirrors[t])
					}
					set hollow(t) {
						this.frame && (this.frame.material = t ?
							M.TRANS : M.CORE)
					}
					getFace(t) {
						const e = new R.Pa4(0, 0, 0);
						switch (t) {
							case x.L:
								e.x = -1;
								break;
							case x.R:
								e.x = 1;
								break;
							case x.D:
								e.y = -1;
								break;
							case x.U:
								e.y = 1;
								break;
							case x.B:
								e.z = -1;
								break;
							case x.F:
								e.z = 1
						}
						this._quaternion.copy(this.quaternion),
							e.applyQuaternion(this._quaternion.invert());
						const i = Math.round(e.x),
							s = Math.round(e.y),
							n = Math.round(e.z);
						let r = 0;
						return i < 0 ? r = x.L : i > 0 ? r = x.R :
							s < 0 ? r = x.D : s > 0 ? r = x.U :
							n < 0 ? r = x.B : n > 0 && (r = x.F),
							r
					}
					getColor(t) {
						const e = this.stickers[this.getFace(t)];
						if (!e || !e.visible) return "?";
						switch (e.material) {
							case M.LAMBERS.L:
								return "L";
							case M.LAMBERS.R:
								return "R";
							case M.LAMBERS.F:
								return "F";
							case M.LAMBERS.B:
								return "B";
							case M.LAMBERS.U:
								return "U";
							case M.LAMBERS.D:
								return "D"
						}
						return "?"
					}
					set thickness(t) {
						const e = t ? M.SIZE / 2 : 1;
						for (const t of this.stickers) t && (t.scale
							.z = e)
					}
					set arrow(t) {
						for (const e of this.stickers) e && (e.geometry =
							t ? M._ARROW : M._STICKER)
					}
					stick(t, e) {
						let i, s;
						if (void 0 !== this.stickers[t]) {
							if ("remove" == e) return this.stickers[
								t].visible = !1, void(
								this.mirrors[t].visible = !
								1);
							this.stickers[t].visible = !0, this
								.mirrors[t].visible = !0, e &&
								e.length > 0 ? (i = M.LAMBERS[e],
									s = M.BASICS[e]) : (i =
									this.lamberts[t], s = this.basics[
										t]), void 0 !== i &&
								void 0 !== s && (this.stickers[
										t].material = i, this.mirrors[
										t] instanceof R.Kj0 &&
									(this.mirrors[t].material =
										s))
						}
					}
				}
				M.SIZE = 64, M._BORDER_WIDTH = 3, M._EDGE_WIDTH = 2, M._STICKER_DEPTH =
					.1, M._FRAME = new C(M.SIZE, M._BORDER_WIDTH), M._STICKER =
					new U(M.SIZE - 2 * M._BORDER_WIDTH - M._EDGE_WIDTH,
						M._STICKER_DEPTH, !1), M._ARROW = new U(M.SIZE -
						2 * M._BORDER_WIDTH - M._EDGE_WIDTH, M._STICKER_DEPTH,
						!0), M._MIRROR = new S(M.SIZE - 2 * M._BORDER_WIDTH -
						M._STICKER_DEPTH), M.LAMBERS = (() => {
						const t = {};
						for (const e in z) {
							const i = z[e];
							t[e] = new R.YBo({
								color: i
							})
						}
						return t
					})(), M.CORE = new R.xoR({
						color: z.Core,
						specular: z.Gray,
						shininess: 2
					}), M.TRANS = new R.vBJ({
						color: z.Gray,
						transparent: !0,
						opacity: .1,
						depthWrite: !1
					}), M.BASICS = (() => {
						const t = {};
						for (const e in z) {
							const i = z[e];
							t[e] = new R.vBJ({
								color: i
							})
						}
						return t
					})();
				class F {
					constructor(t, e, i, s) {
						this.begin = t, this.end = e, this.duration =
							i, this.callback = s, this.value = 0
					}
					finish() {
						this.callback(this.end)
					}
					update() {
						this.value++;
						let t = this.value / this.duration;
						t = t > 1 ? 1 : t, t = t < 0 ? 0 : t, t -=
							1, t = 1 - t * t;
						const e = 1 == t ? this.end : this.begin +
							(this.end - this.begin) * t;
						return this.callback(e)
					}
				}
				const E = new class {
					constructor() {
						this.tweens = [], this.loop()
					}
					get length() {
						return this.tweens.length
					}
					loop() {
						requestAnimationFrame(this.loop.bind(
							this)), this.update()
					}
					tween(t, e, i, s) {
						const n = new F(t, e, i, s);
						return this.tweens.push(n), n
					}
					update() {
						if (0 === this.tweens.length) return !1;
						let t = 0,
							e = this.tweens.length;
						for (; t < e;) this.tweens[t].update() ?
							(this.tweens.splice(t, 1), e--) : t++;
						return !0
					}
					finish(t) {
						if (t) {
							for (let e = 0; e < this.tweens.length; e++)
								if (this.tweens[e] == t) return t
									.finish(), void this.tweens
									.splice(e, 1)
						} else {
							const t = this.tweens.splice(0,
								this.tweens.length);
							for (const e of t) e.finish()
						}
					}
					cancel(t) {
						for (let e = 0; e < this.tweens.length; e++)
							if (this.tweens[e] == t) return void this
								.tweens.splice(e, 1)
					}
				};
				class D extends R.ZAu {
					constructor(t, e, i) {
						super(), this.holding = !1, this.tween =
							void 0, this.cube = t, this._angle =
							0, this.cubelets = [], this.indices = [],
							this.matrixAutoUpdate = !1, this.updateMatrix(),
							this.axis = e, this.layer = i;
						const s = (this.cube.order - 1) / 2;
						let n = 0;
						this.layer === s ? (i = 0, n = 2) :
							this.layer < s ? n = 1 : i = this.cube
							.order - i - 1;
						const r = [{
							x: "R",
							y: "U",
							z: "F"
						}, {
							x: "L'",
							y: "D'",
							z: "B'"
						}, {
							x: "M'",
							y: "E'",
							z: "S"
						}][n][this.axis];
						this.name = (0 === i ? "" : String(i +
							1)) + r
					}
					set angle(t) {
						this._angle = t, this.setRotationFromAxisAngle(
								D.AXIS_VECTOR[this.axis], this._angle
							), this.updateMatrix(), this.cube.dirty = !
							0
					}
					get angle() {
						return this._angle
					}
					cancel() {
						if (this.tween) {
							let t = this.tween.end;
							return E.cancel(this.tween), this.tween =
								void 0, t = Math.round(t / (
									Math.PI / 2)) * (Math.PI /
									2), t
						}
						return 0
					}
					finish() {
						if (this.tween) {
							const t = this.tween.end - this.angle;
							return E.finish(this.tween), this.tween =
								void 0, t
						}
						return 0
					}
					hold() {
						if (!this.cube.lock(this.axis, this.layer))
							return !1;
						this.holding = !0;
						for (const t of this.indices) {
							const e = this.cube.cubelets[t];
							this.cubelets.push(e), this.cube.remove(
								e), e.exist && this.add(e)
						}
						return this.cube.add(this), !0
					}
					drag() {
						for (; this.holding;) this.angle = -
							this.finish();
						return this.hold()
					}
					drop() {
						for (this.holding = !1, this.tween =
							void 0;;) {
							const t = this.cubelets.pop();
							if (void 0 === t) break;
							this.rotate(t), this.remove(t), t.exist &&
								this.cube.add(t), this.cube.cubelets[
									t.index] = t
						}
						this.cube.remove(this), this.cube.dirty = !
							0, this.angle = 0, this.cube.unlock(
								this.axis, this.layer), this.cube
							.callback()
					}
					twist(t, e) {
						if (this.holding) t += this.cancel();
						else {
							if (!this.hold()) return !1;
							this.angle = 0
						}
						t = Math.round(t / (Math.PI / 2)) * (
							Math.PI / 2), e && (this.angle =
							t);
						const i = t - this.angle;
						if (Math.abs(this.angle - t) < 1e-6)
							this.drop();
						else {
							const e = Math.abs(i) / (Math.PI /
									2),
								s = D.frames * (2 - 2 / (e + 1));
							this.tween = E.tween(this.angle, t,
								s, (e => (this.angle = e,
									Math.abs(this.angle -
										t) < 1e-6 && (
										this.drop(), !0
									))))
						}
						return !0
					}
					rotate(t) {
						t.rotateOnWorldAxis(D.AXIS_VECTOR[this.axis],
								this.angle), t.vector = t.vector
							.applyAxisAngle(D.AXIS_VECTOR[this.axis],
								this.angle), t.updateMatrix()
					}
				}
				D.frames = 30, D.AXIS_VECTOR = {
					a: new R.Pa4(1, 1, 1),
					x: new R.Pa4(-1, 0, 0),
					y: new R.Pa4(0, -1, 0),
					z: new R.Pa4(0, 0, -1)
				};
				class B {
					constructor(t, e) {
						this.group = t, this.twist = e
					}
				}
				class P {
					constructor(t) {
						this.order = t.order, this.groups = {};
						for (const e of ["x", "y", "z"]) {
							const i = [];
							for (let s = 0; s < this.order; s++) {
								const n = new D(t, e, s);
								i[s] = n
							}
							this.groups[e] = i
						}
						for (const e of t.initials) {
							if (!e.exist) continue;
							const t = e.initial;
							let i, s, n;
							i = "x", s = t % this.order, n = this.groups[
									i][s], n.indices.push(e.index),
								i = "y", s = Math.floor(t % (this.order *
									this.order) / this.order), n =
								this.groups[i][s], n.indices.push(e
									.index), i = "z", s = Math.floor(
									t / (this.order * this.order)),
								n = this.groups[i][s], n.indices.push(
									e.index)
						}
					}
					face(t) {
						let e = 0,
							i = P.AXIS_MAP[t];
						return 2 == i.length ? i = i[1] : e = this.order -
							1, this.groups[i][e]
					}
					convert(t) {
						const e = [];
						let i, s = t.sign;
						s.match(/.[Ww]/) && (s = s.toLowerCase()
								.replace("w", "")), /[XYZ]/.test(s) &&
							(s = s.toLowerCase());
						let n, r = t.times * (t.reverse ? -1 : 1);
						if (1 === s.length) switch (s) {
							case "x":
							case "y":
							case "z":
								for (let t = 0; t < this.order; t++)
									i = this.groups[s][t], e.push(
										new B(i, r));
								return e;
							case "R":
							case "U":
							case "F":
							case "L":
							case "D":
							case "B":
								return n = 0, s = P.AXIS_MAP[s.toUpperCase()],
									2 == s.length ? (r = -r, s =
										s[1]) : n = this.order -
									1, i = this.groups[s][n], e
									.push(new B(i, r)), e;
							case "r":
							case "u":
							case "f":
							case "l":
							case "d":
							case "b":
								return n = 0, s = P.AXIS_MAP[s.toUpperCase()],
									2 == s.length ? (r = -r, s =
										s[1]) : n = this.order -
									2, i = this.groups[s][n], e
									.push(new B(i, r)), i =
									this.groups[s][n + 1], e.push(
										new B(i, r)), e;
							case "E":
							case "M":
							case "S":
								return n = Math.floor((this.order -
										1) / 2), s = P.AXIS_MAP[
										s.toUpperCase()], 2 ==
									s.length && (r = -r, s = s[
										1]), i = this.groups[s]
									[n], e.push(new B(i, r)),
									this.order % 2 == 0 && (i =
										this.groups[s][n + 1],
										e.push(new B(i, r))), e;
							case "e":
							case "m":
							case "s":
								s = P.AXIS_MAP[s.toUpperCase()],
									2 == s.length && (r = -r, s =
										s[1]);
								for (let t = 1; t < this.order -
									1; t++) i = this.groups[s][
									t
								], e.push(new B(i, r));
								return e
						} else {
							const t = s.match(
								/([0123456789]*)(-?)([0123456789]*)([lrudfb])/i
							);
							if (null == t) return e;
							let n = Number(t[1]),
								o = Number(t[3]);
							NaN !== o && 0 !== o || (o =
									/[lrudfb]/.test(t[4]) ? 1 :
									n), n > this.order && (n =
									this.order), o > this.order &&
								(o = this.order), s = P.AXIS_MAP[
									t[4].toUpperCase()], 2 == s
								.length ? (r = -r, s = s[1]) :
								(n = this.order - n + 1, o =
									this.order - o + 1), n > o &&
								([n, o] = [o, n]);
							for (let t = n - 1; t < o; t++) i =
								this.groups[s][t], e.push(new B(
									i, r))
						}
						return e
					}
				}
				P.AXIS_MAP = {
					R: "x",
					L: "-x",
					U: "y",
					D: "-y",
					F: "z",
					B: "-z",
					M: "-x",
					E: "-y",
					S: "z"
				};
				class k {
					constructor(t, e = !1, i = 1) {
						const s = t.match(
							/([\*\#~;.#xyz]|[0123456789-]*[bsfdeulmr][w]*)('?)(\d*)('?)/i
						);
						s && (t = s[1], e = e !== (1 == (s[2] + s[4])
									.length), i *= 0 == s[3].length ?
								1 : parseInt(s[3])), /[XYZ]/.test(t) &&
							(t = t.toLowerCase()), /[Ww]/.test(t) &&
							(t = (t = t.toUpperCase())
								.replace("W", "w")), this.sign = t,
							this.reverse = e, this.times = i
					}
					get value() {
						return 0 == this.times ? "" : this.sign + (
							1 == this.times ? "" : String(this.times)
						) + (this.reverse ? "'" : "")
					}
				}
				class L {
					constructor(t, e = !1, i = 1) {
						if (this.children = [], (t = t.replace(
								/[‘＇’]/g, "'"))
							.match(
								/^([\*\#~;.#xyz]|[0123456789-]*[bsfdeulmr][w]*)$/gi
							)) return void(this.twist = new k(t, e,
							i));
						if (this.twist = new k("", e, i), 0 == t.length)
							return;
						const s = L.SPLIT_SEGMENT(t);
						for (const t of s) {
							let e;
							if (e = t.match(/^\[(.+[:|,].+)\]$/i),
								e) {
								switch (e = L.SPLIT_BRACKET(e[1]),
									e[1]) {
									case ",":
										this.children.push(new L(e[
												0], !1, 1)), this.children
											.push(new L(e[2], !1, 1)),
											this.children.push(new L(
												e[0], !0, 1)), this
											.children.push(new L(e[
												2], !0, 1));
										break;
									case ":":
										this.children.push(new L(e[
												0], !1, 1)), this.children
											.push(new L(e[2], !1, 1)),
											this.children.push(new L(
												e[0], !0, 1))
								}
								continue
							}
							if (e = t.match(
									/^(\[.+[:|,].+\])('?)(\d*)('?)$/i
								), null === e && (e = t.match(
									/^\((.+)\)('?)(\d*)('?)$/i)),
								null === e && (e = t.match(
									/([\*\#~;.#xyz]|[0123456789-]*[bsfdeulmr][w]*)('?)(\d*)('?)/i
								)), null === e) continue;
							const i = 1 == (e[2] + e[4])
								.length,
								s = 0 == e[3].length ? 1 : parseInt(
									e[3]);
							this.children.push(new L(e[1], i, s))
						}
					}
					static SPLIT_SEGMENT(t) {
						const e = [];
						let i = "",
							s = 0,
							n = !1,
							r = !1;
						for (let o = 0; o < t.length; o++) {
							const a = t.charAt(o);
							" " === a && 0 == i.length || ("/" !==
								a || "/" !== t.charAt(o + 1) ?
								"\n" !== a ? r || (L.AFFIX.indexOf(
										a) >= 0 ? i = i.concat(
										a) : i.length > 0 && 0 ==
									s && n ? (e.push(i), i = "",
										o--, n = !1) : "(" !==
									a && "[" !== a ? ")" !== a &&
									"]" !== a ? (n = !0, i = i.concat(
										a)) : (i = i.concat(a),
										s--) : (i = i.concat(a),
										s++)) : r = !1 : (o++,
									r = !0))
						}
						return i.length > 0 && e.push(i), e
					}
					static SPLIT_BRACKET(t) {
						const e = [];
						let i = "",
							s = 0;
						for (let n = 0; n < t.length; n++) {
							const r = t.charAt(n);
							0 != s || "," !== r && ":" !== r ? "(" !==
								r && "[" !== r ? ")" !== r && "]" !==
								r ? i = i.concat(r) : (i = i.concat(
									r), s--) : (i = i.concat(r), s++) :
								(e.push(i), e.push(r), i = "")
						}
						return i.length > 0 && e.push(i), e
					}
					parse(t = !1) {
						t = this.twist.reverse !== t;
						const e = [];
						if (0 !== this.children.length)
							for (let i = 0; i < this.twist.times; i++)
								for (let i = 0; i < this.children.length; i++) {
									let s;
									s = t ? this.children[this.children
											.length - i - 1] : this
										.children[i];
									const n = s.parse(t);
									for (const t of n) e.push(t)
								} else if ("" != this.twist.sign &&
									!this.twist.sign.startsWith(
										"//")) {
									const i = new k(this.twist.sign,
										t, this.twist.times);
									e.push(i)
								} return e
					}
				}
				L.AFFIX = "'Ww0123456789-";
				class A {
					constructor(t) {
						this.queue = [], this.update = () => {
							for (;;) {
								const t = this.queue.shift();
								if (null == t) return;
								if (!this.twist(t, !1, !1))
									return void this.queue.unshift(
										t)
							}
						}, this.cube = t, this.cube.callbacks.push(
							this.update)
					}
					scrambler() {
						let t = "";
						const e = [];
						let i = -1;
						const s = ["U", "D", "R", "L", "F", "B"];
						let n = -1;
						for (let t = 0; t < 9 * this.cube.order; t++) {
							const t = [];
							for (; n == i;) n = Math.floor(3 * Math
								.random());
							const r = s[2 * n + Math.floor(2 * Math
									.random())],
								o = Math.ceil(Math.random() * Math.floor(
									this.cube.order / 2));
							1 !== o && t.push(o), t.push(r);
							const a = Math.random();
							a < .4 ? t.push("2") : a < .7 && t.push(
								"'"), e.push(t.join("")), i = n
						}
						return t = e.join(" "), t
					}
					get length() {
						return this.queue.length
					}
					finish() {
						for (; this.queue.length > 0;) E.finish();
						E.finish()
					}
					setup(t, e = !1, i = 1) {
						this.finish(), this.cube.reset();
						const s = new L(t, e, i)
							.parse();
						for (const t of s) this.twist(t, !0, !0);
						this.cube.dirty = !0, this.cube.history.clear(),
							this.cube.history.init = t, this.cube.callback()
					}
					push(t, e = !1, i = 1) {
						const s = new L(t, e, i)
							.parse();
						if (0 != s.length) {
							for (const t of s) this.queue.push(t);
							this.update()
						}
					}
					twist(t, e, i) {
						let s = !1;
						if ("#" == t.sign) return this.setup(""), !
							0;
						if ("*" == t.sign) {
							const t = this.scrambler();
							return this.setup(t), !0
						}
						if ("." == t.sign || "~" == t.sign) return e ||
							i ? (this.cube.callback(), !0) : (s =
								this.cube.lock("a", 1), s && E.tween(
									0, 1, D.frames * t.times, (
										t => 1 == t && (this.cube
											.unlock("a", 1),
											this.cube.callback(),
											!0))), s);
						if (";" == t.sign) return e || i ? (this.cube
							.callback(), !0) : (s = this.cube
							.lock("a", 1), s && (this.cube.unlock(
								"a", 1), this.cube.callback()),
							s);
						const n = this.cube.table.convert(t);
						if (0 == n.length) return !0;
						for (const t of n)
							for (s = t.group.twist(Math.PI / 2 * t.twist,
								e); !s && i;) E.finish(), s = t.group
								.twist(Math.PI / 2 * t.twist, e);
						return s && this.cube.record(t), s
					}
					undo() {
						if (0 == this.cube.history.length) return;
						const t = this.cube.history.last,
							e = new k(t.sign, !t.reverse, 1);
						this.twist(e, !1, !0)
					}
				}
				class I {
					constructor(t, e, i) {
						this.type = t, this.x = e, this.y = i
					}
				}
				class O {
					constructor() {
						this.vector = new R.Pa4
					}
				}
				class T {
					constructor(t) {
						this.dragging = !1, this.rotating = !1,
							this.angle = 0, this.contingle = 0,
							this.ray = new R.zHn, this.down = new R
							.FM8(0, 0), this.move = new R.FM8(0, 0),
							this.matrix = new R.yGw, this.holder =
							new O, this.vector = new R.Pa4, this.planes = [
								new R.JOQ(new R.Pa4(1, 0, 0), 3 * -
									M.SIZE / 2), new R.JOQ(new R.Pa4(
									0, 1, 0), 3 * -M.SIZE / 2), new R
								.JOQ(new R.Pa4(0, 0, 1), 3 * -M.SIZE /
									2), new R.JOQ(new R.Pa4(-1, 0,
									0), 3 * -M.SIZE / 2), new R.JOQ(
									new R.Pa4(0, -1, 0), 3 * -M.SIZE /
									2)
							], this._lock = !1, this._disable = !1,
							this.sensitivity = .5, this.tick = (new Date)
							.getTime(), this.hover = -1, this.touch =
							t => {
								switch (t.type) {
									case "touchstart":
									case "mousedown":
										this.down.x = t.x, this.down
											.y = t.y, this.tick = (
												new Date)
											.getTime(), this.handleDown();
										break;
									case "mousemove":
									case "touchmove":
										this.move.x = t.x, this.move
											.y = t.y, this.handleMove();
										break;
									case "touchend":
									case "touchcancel":
									case "mouseup":
									case "mouseout":
										this.handleUp();
										break;
									default:
										return !1
								}
								return !0
							}, this.world = t, this.taps = [], this
							.loop()
					}
					get lock() {
						return this._lock
					}
					set lock(t) {
						this.handleUp(), this._lock = t
					}
					get disable() {
						return this._disable
					}
					set disable(t) {
						this.handleUp(), this._disable = t
					}
					loop() {
						requestAnimationFrame(this.loop.bind(this)),
							this.update()
					}
					update() {
						const t = this.contingle + this.angle;
						if (this.rotating)
							if (this.group) {
								if (this.group.angle != t) {
									const e = (t - this.group.angle) /
										2;
									this.group.angle += e, this.world
										.dirty = !0
								}
							} else {
								const e = this.world.cube.table.groups[
									this.axis[0]];
								for (const i of e)
									if (i.angle != t) {
										const e = (t - i.angle) / 2;
										i.angle += e, this.world.dirty = !
											0
									}
							}
					}
					match() {
						const t = this.holder.plane.normal,
							e = this.holder.vector,
							i = this.holder.index,
							s = this.world.cube.order;
						for (const n of ["x", "y", "z"]) {
							const r = D.AXIS_VECTOR[n];
							if (0 === r.dot(t) && 0 === r.dot(e)) {
								let t = 0;
								switch (n) {
									case "x":
										t = i % s;
										break;
									case "y":
										t = Math.floor(i % (s * s) /
											s);
										break;
									case "z":
										t = Math.floor(i / (s * s))
								}
								return this.world.cube.table.groups[
									n][t]
							}
						}
						return null
					}
					intersect(t, e) {
						const i = t.x / this.world.width * 2 - 1,
							s = -t.y / this.world.height * 2 + 1;
						this.ray.origin.setFromMatrixPosition(this.world
								.camera.matrixWorld), this.ray.direction
							.set(i, s, .5)
							.unproject(this.world.camera)
							.sub(this.ray.origin)
							.normalize(), this.matrix.copy(this.world
								.scene.matrix), this.matrix.invert(),
							this.ray.applyMatrix4(this.matrix);
						const n = new R.Pa4(1 / 0, 1 / 0, 1 / 0);
						return this.ray.intersectPlane(e, n), n
					}
					handleDown() {
						if (this.disable) return;
						(this.dragging || this.rotating) && this.handleUp(),
							this.dragging = !0, this.holder.index = -
							1;
						let t = 0;
						this.planes.forEach((e => {
							const i = this.intersect(
								this.down, e);
							if (null !== i) {
								let s = i.x / M.SIZE /
									3,
									n = i.y / M.SIZE /
									3,
									r = i.z / M.SIZE /
									3;
								if (Math.abs(s) <=
									.5001 && Math.abs(n) <=
									.5001 && Math.abs(r) <=
									.5001) {
									const o = Math.pow(
										i.x - this.ray
										.origin.x,
										2) + Math.pow(
										i.y - this.ray
										.origin.y,
										2) + Math.pow(
										i.z - this.ray
										.origin.z,
										2);
									if (0 == t || o < t) {
										this.holder.plane =
											e;
										const i = this.world
											.cube.order;
										s = Math.max(0,
												Math.min(
													i -
													1,
													Math
													.floor(
														(
															s +
															.5
														) *
														i
													))),
											n = Math.max(
												0, Math
												.min(i -
													1,
													Math
													.floor(
														(
															n +
															.5
														) *
														i
													))),
											r = Math.max(
												0, Math
												.min(i -
													1,
													Math
													.floor(
														(
															r +
															.5
														) *
														i
													))),
											this.holder
											.index = r *
											i * i + n *
											i + s, t =
											o
									}
								}
							}
						}), this)
					}
					handleMove() {
						if (!this.disable) {
							if (this.dragging) {
								const t = this.move.x - this.down.x,
									e = this.move.y - this.down.y,
									i = Math.sqrt(t * t + e * e);
								if (Math.min(this.world.width, this
									.world.height) / i > 128) return;
								if (this.dragging = !1, this.rotating = !
									0, -1 === this.holder.index) {
									if (t * t > e * e) this.axis =
										"y";
									else {
										const t = this.world.width /
											2,
											e = new R.Pa4(-3 * M.SIZE /
												2, 0, 3 * M.SIZE /
												2);
										e.applyMatrix4(this.world.scene
												.matrix)
											.project(this.world.camera);
										const i = Math.round(e.x *
												t + t),
											s = new R.Pa4(3 * M.SIZE /
												2, 0, 3 * M.SIZE /
												2);
										s.applyMatrix4(this.world.scene
												.matrix)
											.project(this.world.camera);
										const n = Math.round(s.x *
											t + t);
										e.z < s.z ? this.down.x < i ?
											this.axis = "z'" : this
											.axis = "x" : this.down
											.x < n ? this.axis =
											"x" : this.axis = "z"
									}
									this.group = null;
									const i = new Set;
									for (const t of this.world.cube
										.table.groups[this.axis[
											0]]) {
										let e = t.drag();
										for (; !e;) E.finish(), e =
											t.drag();
										i.add(t.angle)
									}
									if (1 == i.size)
										for (const t of i.values()) {
											this.contingle = t;
											break
										} else this.contingle = 0
								} else {
									const t = this.intersect(this.down,
											this.holder.plane),
										e = this.intersect(this.move,
											this.holder.plane);
									this.vector.subVectors(e, t);
									let i = this.vector.x,
										s = this.vector.y,
										n = this.vector.z;
									const r = Math.max(Math.abs(i),
										Math.abs(s), Math.abs(n)
									);
									if (i = Math.abs(i) === r ? i :
										0, s = Math.abs(s) === r ?
										s : 0, n = Math.abs(n) ===
										r ? n : 0, this.vector.set(
											i, s, n), this.holder.vector
										.copy(this.vector.multiply(
												this.vector)
											.normalize()), this.group =
										this.match(), !this.group)
										return void(this.rotating = !
											1);
									let o = this.group.drag();
									for (; !o;) E.finish(), o =
										this.group.drag();
									this.contingle = this.group.angle,
										this.vector.crossVectors(
											this.holder.vector,
											this.holder.plane.normal
										), this.holder.vector.multiplyScalar(
											this.vector.x + this.vector
											.y + this.vector.z)
								}
							}
							if (this.rotating)
								if (this.group) {
									const t = this.intersect(this.down,
											this.holder.plane),
										e = this.intersect(this.move,
											this.holder.plane);
									this.vector.subVectors(e, t)
										.multiply(this.holder.vector);
									const i = D.AXIS_VECTOR[this.group
										.axis];
									this.angle = -(this.vector.x +
											this.vector.y + this.vector
											.z) * (i.x + i.y + i.z) /
										M.SIZE * Math.PI * this.sensitivity
								} else {
									const t = this.move.x - this.down
										.x,
										e = this.move.y - this.down
										.y;
									switch (this.axis) {
										case "y":
											this.angle = -t / M.SIZE *
												Math.PI * this.sensitivity;
											break;
										case "x":
											this.angle = -e / M.SIZE *
												Math.PI * this.sensitivity;
											break;
										case "z":
											this.angle = e / M.SIZE *
												Math.PI * this.sensitivity;
											break;
										case "z'":
											this.angle = -e / M.SIZE *
												Math.PI * this.sensitivity;
											break;
										default:
											this.angle = 0
									}
								}
						}
					}
					handleUp() {
						if (this.dragging) {
							let t = null;
							switch (this.holder.plane) {
								case this.planes[0]:
									t = x.R;
									break;
								case this.planes[1]:
									t = x.U;
									break;
								case this.planes[2]:
									t = x.F
							}
							for (const e of this.taps) e(this.holder
								.index, t)
						}
						if (this.rotating) {
							let t = this.angle;
							if (this.lock) t = 0;
							else {
								if (Math.abs(t) < Math.PI / 4) {
									const e = (new Date)
										.getTime();
									Math.abs(t) / (e - this.tick) *
										1e3 > .2 && (t = 0 == t ? 0 :
											t / Math.abs(t) * Math.PI /
											2)
								}
								t += this.contingle
							}
							if (this.group) {
								if (this.group.twist(t, !1), 0 != t) {
									let e = Math.round(t / (Math.PI /
										2));
									const i = e < 0;
									e = Math.abs(e), this.world.cube
										.record(new k(this.group.name,
											i, e))
								}
							} else {
								const e = this.world.cube.table.groups[
									this.axis[0]];
								for (const i of e) i.twist(t, !1);
								if (0 != t) {
									let e = Math.round(t / (Math.PI /
										2));
									const i = e < 0;
									e = Math.abs(e), this.world.cube
										.record(new k(this.axis, i,
											e))
								}
							}
						}
						this.group = null, this.holder.index = -1,
							this.dragging = !1, this.rotating = !1,
							this.world.dirty = !0
					}
				}
				class _ {
					constructor() {
						this.mouse = t => {
							if ("mousedown" === t.type && (this
									.target = t.target), this.target !==
								this.dom) return !0;
							this.dom.tabIndex = 1, this.dom.focus();
							const e = new I(t.type, t.clientX,
								t.clientY);
							return this.callback(e), t.returnValue = !
								1, "mouseup" === t.type && (
									this.target = null), !1
						}, this.touch = t => {
							var e;
							const i = t.changedTouches[0];
							if ("touchstart" === t.type) {
								if (this.target = t.target,
									this.last) {
									const t = new I("touchend",
										this.last.clientX -
										this.dom.getBoundingClientRect()
										.left, this.last.clientY -
										this.dom.getBoundingClientRect()
										.top);
									this.callback(t)
								}
								this.last = i
							}
							if (this.target !== this.dom || (
								null === (e = this.last) ||
								void 0 === e ? void 0 : e.identifier
							) != i.identifier) return !1;
							this.dom.tabIndex = 1, this.dom.focus();
							const s = new I(t.type, i.clientX -
								this.dom.getBoundingClientRect()
								.left, i.clientY - this.dom
								.getBoundingClientRect()
								.top);
							return this.callback(s), t.preventDefault(),
								"touchend" !== t.type &&
								"touchcancel" !== t.type || (
									this.target = null), !0
						}
					}
					init(t, e) {
						this.dom = t, this.callback = e, document.addEventListener(
								"touchstart", this.touch), document
							.addEventListener("touchmove", this.touch),
							document.addEventListener("touchend",
								this.touch), document.addEventListener(
								"touchcancel", this.touch),
							document.addEventListener("mousedown",
								this.mouse), document.addEventListener(
								"mousemove", this.mouse), document.addEventListener(
								"mouseup", this.mouse)
					}
				}
				class j {
					constructor() {
						this.list = [], this.init = "", this.exp =
							""
					}
					record(t) {
						const e = new k(t.sign, t.reverse, t.times);
						if (0 == this.list.length) e.times = e.times %
							4, 0 != e.times && (this.list.push(e),
								this.exp = this.exp + " " + e.value
							);
						else {
							const t = this.list[this.list.length -
								1];
							t.sign == e.sign ? (t.times = t.times +
								e.times * (t.reverse == e.reverse ?
									1 : -1), t.times < 0 && (t.times = -
									t.times, t.reverse = !t.reverse
								), t.times = t.times % 4, this.exp =
								this.exp.substring(0, this.exp.lastIndexOf(
									" ")), 0 == t.times ? this.list
								.pop() : this.exp = this.exp +
								" " + t.value) : (this.list.push(
									e), this.exp = this.exp +
								" " + e.value)
						}
					}
					clear() {
						this.list = [], this.init = "", this.exp =
							""
					}
					get last() {
						return this.list[this.list.length - 1]
					}
					get length() {
						return this.list.length
					}
					get moves() {
						let t = this.length;
						for (const e of this.list) "x" != e.sign &&
							"y" != e.sign && "z" != e.sign || t--;
						return t
					}
				}
				class N extends R.ZAu {
					constructor(t) {
						super(), this.dirty = !0, this.cubelets = [],
							this.initials = [], this.callbacks = [],
							this.twister = new A(this), this._arrow = !
							1, this.order = t, this.scale.set(3 /
								t, 3 / t, 3 / t);
						for (let e = 0; e < t * t * t; e++) {
							const i = new M(t, e);
							this.cubelets.push(i), this.initials
								.push(i), i.exist && this.add(i)
						}
						this.locks = new Map, this.locks.set(
								"x", new Set), this.locks.set(
								"y", new Set), this.locks.set(
								"z", new Set), this.locks.set(
								"a", new Set), this.history =
							new j, this.table = new P(this),
							this.matrixAutoUpdate = !1, this.updateMatrix()
					}
					callback() {
						for (const t of this.locks.values())
							if (t.size > 0) return;
						for (const t of this.callbacks) t()
					}
					lock(t, e) {
						var i;
						if (null === (i = this.locks.get("a")) ||
							void 0 === i ? void 0 : i.has(1))
							return !1;
						const s = this.locks.get(t);
						if (null == s) return !1;
						for (const t of this.locks.values())
							if (t != s && t.size > 0) return !1;
						return s.add(e), !0
					}
					unlock(t, e) {
						const i = this.locks.get(t);
						null == i || i.delete(e)
					}
					record(t) {
						this.history.record(t)
					}
					get complete() {
						return [x.U, x.D, x.L, x.R, x.F, x.B].every(
							(t => {
								const e = this.table.face(
									x[t]);
								if (!e) throw Error();
								let i = this.cubelets[e
									.indices[0]];
								const s = i.getFace(t);
								if (this.arrow) {
									const n = this.cubelets[
										e.indices[0]
									].rotation;
									return e.indices.every(
										(e => {
											i =
												this
												.cubelets[
													e
												];
											const
												r =
												i
												.rotation;
											return s ==
												i
												.getFace(
													t
												) &&
												Math
												.pow(
													n
													.x -
													r
													.x,
													2
												) +
												Math
												.pow(
													n
													.y -
													r
													.y,
													2
												) +
												Math
												.pow(
													n
													.z -
													r
													.z,
													2
												) <
												.1
										}))
								}
								return e.indices.every(
									(e => (i = this
										.cubelets[
											e],
										s == i.getFace(
											t))))
							}))
					}
					index(t) {
						return this.initials[t].index
					}
					set arrow(t) {
						this._arrow = t;
						for (const e of this.cubelets) e.arrow =
							t
					}
					get arrow() {
						return this._arrow
					}
					reset() {
						E.finish();
						for (const t of this.cubelets) t.setRotationFromEuler(
								new R.USm(0, 0, 0)), t.index =
							t.initial, t.updateMatrix();
						this.cubelets.sort(((t, e) => t.index -
							e.index))
					}
					stick(t, e, i) {
						const s = this.initials[t];
						if (!s) throw Error(
							"invalid cubelet index: " +
							t);
						s.stick(e, i), this.dirty = !0
					}
					strip(t) {
						for (const e of [x.L, x.R, x.D, x.U, x.B,
							x.F
						]) {
							const i = x[e],
								s = this.table.face(i);
							if (!s) throw Error();
							for (const t of s.indices) this.initials[
								t].stick(e, "");
							const n = t[i];
							if (null != n)
								for (const t of n) {
									const i = this.initials[t];
									if (!i) throw Error(
										"invalid cubelet index: " +
										t);
									i.stick(e, "remove")
								}
						}
						this.dirty = !0
					}
					serialize() {
						const t = [];
						let e, i, s;
						for (i = this.order - 1, s = 0; s <
							this.order; s++)
							for (e = 0; e < this.order; e++) {
								const n = s * this.order * this
									.order + i * this.order + e,
									r = this.cubelets[n].getColor(
										x.U);
								t.push(r)
							}
						for (e = this.order - 1, i = this.order -
							1; i >= 0; i--)
							for (s = this.order - 1; s >= 0; s--) {
								const n = s * this.order * this
									.order + i * this.order + e,
									r = this.cubelets[n].getColor(
										x.R);
								t.push(r)
							}
						for (s = this.order - 1, i = this.order -
							1; i >= 0; i--)
							for (e = 0; e < this.order; e++) {
								const n = s * this.order * this
									.order + i * this.order + e,
									r = this.cubelets[n].getColor(
										x.F);
								t.push(r)
							}
						for (i = 0, s = this.order - 1; s >= 0; s--)
							for (e = 0; e < this.order; e++) {
								const n = s * this.order * this
									.order + i * this.order + e,
									r = this.cubelets[n].getColor(
										x.D);
								t.push(r)
							}
						for (e = 0, i = this.order - 1; i >= 0; i--)
							for (s = 0; s < this.order; s++) {
								const n = s * this.order * this
									.order + i * this.order + e,
									r = this.cubelets[n].getColor(
										x.L);
								t.push(r)
							}
						for (s = 0, i = this.order - 1; i >= 0; i--)
							for (e = this.order - 1; e >= 0; e--) {
								const n = s * this.order * this
									.order + i * this.order + e,
									r = this.cubelets[n].getColor(
										x.B);
								t.push(r)
							}
						return t.join("")
					}
				}
				class G {
					constructor() {
						this.width = 1, this.height = 1, this.cubes = [],
							this.callbacks = [], this.callback = () => {
								for (const t of this.callbacks) t()
							}, this.scale = 1, this.perspective = 5,
							this.scene = new R.xsS, this.scene.matrixAutoUpdate = !
							1, this.scene.rotation.x = Math.PI / 6,
							this.scene.rotation.y = -Math.PI / 4 +
							Math.PI / 16, this.ambient = new R.Mig(
								16777215, 1), this.scene.add(this.ambient),
							this.directional = new R.Ox3(16777215,
								0), this.directional.position.set(M
								.SIZE, 3 * M.SIZE, 2 * M.SIZE),
							this.scene.add(this.directional), this.scene
							.updateMatrix(), this.camera = new R.cPb(
								50, 1, 1, 32 * M.SIZE), this.camera
							.position.x = 0, this.camera.position.y =
							0, this.camera.position.z = 0, this.controller =
							new T(this), this.order = 3
					}
					set dirty(t) {
						this.cube.dirty = t
					}
					get dirty() {
						return this.cube.dirty
					}
					set order(t) {
						this.scene.remove(this.cube), null == this.cubes[
								t] && (this.cubes[t] = new N(t),
								this.cubes[t].callbacks.push(this.callback)
							), this.cube = this.cubes[t], this.scene
							.add(this.cube), this.dirty = !0
					}
					get order() {
						return this.cube.order
					}
					resize() {
						const t = this.height / Math.min(this.width,
								this.height) / this.scale / this.perspective,
							e = 2 * Math.atan(t) * 180 / Math.PI;
						this.camera.aspect = this.width / this.height,
							this.camera.fov = e;
						const i = 3 * M.SIZE * this.perspective;
						this.camera.position.z = i, this.camera.near =
							i - 3 * M.SIZE, this.camera.far = i + 8 *
							M.SIZE, this.camera.lookAt(this.scene.position),
							this.camera.updateProjectionMatrix(),
							this.dirty = !0
					}
				}
				class H {
					constructor(t) {
						this.values = JSON.parse(JSON.stringify(H.DEFAULT)),
							this.world = t, this.load()
					}
					load() {
						const t = window.localStorage.getItem(
							"preferance");
						if (t) {
							const e = JSON.parse(t);
							if (e.version != this.values.version)
								return void this.save();
							const i = this.values;
							for (const t in i) i[t] = e[t]
						}
					}
					save() {
						window.localStorage.setItem("preferance",
							JSON.stringify(this.values))
					}
					refresh() {
						const t = this,
							e = this.values;
						for (const i in e) t[i] = e[i]
					}
					get scale() {
						return this.values.scale
					}
					set scale(t) {
						this.values.scale != t && (this.values.scale =
								t), t = 1 / (t = (5 - t / 25) / 3),
							this.world.scale = t, this.world.resize()
					}
					get perspective() {
						return this.values.perspective
					}
					set perspective(t) {
						this.values.perspective != t && (this.values
								.perspective = t), this.world.perspective =
							101 / (t + .1) * 4 - 3, this.world.resize()
					}
					get angle() {
						return this.values.angle
					}
					set angle(t) {
						this.values.angle != t && (this.values.angle =
								t), this.world.scene.rotation.y = (
								t / 50 - 1) * Math.PI / 2, this.world
							.scene.updateMatrix(), this.world.dirty = !
							0
					}
					get gradient() {
						return this.values.gradient
					}
					set gradient(t) {
						this.values.gradient != t && (this.values.gradient =
								t), this.world.scene.rotation.x = (
								1 - t / 50) * Math.PI / 2, this.world
							.scene.updateMatrix(), this.world.dirty = !
							0
					}
					get shadow() {
						return this.values.shadow
					}
					set shadow(t) {
						this.values.shadow != t && (this.values.shadow =
							t), t ? (this.world.ambient.intensity =
							.85, this.world.directional.intensity =
							.2) : (this.world.ambient.intensity =
							1, this.world.directional.intensity =
							0), this.world.dirty = !0
					}
					get frames() {
						return this.values.frames
					}
					set frames(t) {
						this.values.frames != t && (this.values.frames =
							t), D.frames = t
					}
					get sensitivity() {
						return this.values.sensitivity
					}
					set sensitivity(t) {
						this.values.sensitivity != t && (this.values
							.sensitivity = t);
						let e = t / 100;
						e = Math.pow(e, 2), this.world.controller.sensitivity =
							e
					}
					get mirror() {
						return this.values.mirror
					}
					set mirror(t) {
						this.values.mirror != t && (this.values.mirror =
							t);
						for (const e of this.world.cube.cubelets) e
							.mirror = t;
						this.world.dirty = !0
					}
					get hollow() {
						return this.values.hollow
					}
					set hollow(t) {
						this.values.hollow != t && (this.values.hollow =
							t);
						for (const e of this.world.cube.cubelets) e
							.hollow = t;
						this.world.dirty = !0
					}
					get thickness() {
						return this.values.thickness
					}
					set thickness(t) {
						this.values.thickness != t && (this.values.thickness =
							t);
						for (const e of this.world.cube.cubelets) e
							.thickness = t;
						this.world.dirty = !0
					}
					get arrow() {
						return this.values.arrow
					}
					set arrow(t) {
						this.values.arrow != t && (this.values.arrow =
								t), this.world.cube.arrow = t, this
							.world.dirty = !0
					}
					get dark() {
						return this.values.dark
					}
					set dark(t) {
						this.values.dark != t && (this.values.dark =
							t), ge.$vuetify.theme.dark = t
					}
					reset() {
						this.values = JSON.parse(JSON.stringify(H.DEFAULT)),
							this.refresh(), this.save()
					}
				}
				H.DEFAULT = {
					version: "0.5",
					scale: 50,
					perspective: 50,
					angle: 30,
					gradient: 33,
					frames: 20,
					sensitivity: 50,
					thickness: !0,
					mirror: !1,
					hollow: !1,
					arrow: !1,
					cloud: !1,
					wireframe: !1,
					shadow: !0,
					dark: !1
				};
				class Z {
					constructor(t) {
						this.values = {
							version: "0.3",
							colors: {}
						}, this.world = t, this.default = JSON.stringify(
							z), this.load()
					}
					load() {
						const t = window.localStorage.getItem(
							"palette");
						if (t) {
							const e = JSON.parse(t);
							if (e.version != this.values.version)
								return void this.save();
							this.values = e
						}
					}
					save() {
						window.localStorage.setItem("palette", JSON
							.stringify(this.values))
					}
					refresh() {
						const t = this.values.colors;
						for (const e in t) {
							const i = t[e];
							i && (z[e] = i, M.LAMBERS[e].color.set(
									i), M.BASICS[e].color.set(i),
								"Core" == e && M.CORE.color.set(
									i))
						}
						this.world.dirty = !0
					}
					color(t, e) {
						this.values.colors[t] = e, z[t] = e, M.LAMBERS[
							t].color.set(e), M.BASICS[t].color.set(
							e), "Core" == t && M.CORE.color.set(
							e), this.world.dirty = !0
					}
					reset() {
						this.values.colors = JSON.parse(this.default),
							this.refresh(), this.values.colors = {},
							this.save()
					}
				}
				var V = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					W = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let q = class extends s.default {
					constructor() {
						super();
						const t = document.createElement(
							"canvas");
						t.style.outline = "none", this.renderer =
							new R.CP7({
								canvas: t,
								antialias: !0,
								alpha: !0
							}), this.renderer.autoClear = !1,
							this.renderer.setClearColor(z.WHITE,
								0), this.renderer.setPixelRatio(
								window.devicePixelRatio);
						(new _)
						.init(t, this.world.controller.touch),
							document.addEventListener("wheel",
								this.wheel, !1)
					}
					wheel(t) {
						if (t.target != this.renderer.domElement)
							return;
						let e = this.preferance.scale;
						t.deltaY > 0 ? e -= 10 : t.deltaY < 0 &&
							(e += 10), e = e < 0 ? 0 : e, e = e >
							100 ? 100 : e, this.preferance.scale =
							e, this.preferance.save()
					}
					resize(t, e) {
						this.world.width = t, this.world.height =
							e, this.world.resize(), this.renderer
							.setSize(t, e, !0), this.world.dirty = !
							0
					}
					mounted() {
						this.canvas.appendChild(this.renderer.domElement)
					}
					draw() {
						return !(!this.world.dirty && !this.world
							.cube.dirty) && (this.renderer.clear(),
							this.renderer.render(this.world
								.scene, this.world.camera),
							this.world.dirty = !1, this.world
							.cube.dirty = !1, !0)
					}
				};
				V([(0, b.tB)("world"), W("design:type", G)], q.prototype,
					"world", void 0), V([(0, b.tB)("preferance"), W(
						"design:type", H)], q.prototype,
					"preferance", void 0), V([(0, b.Rl)("canvas"),
					W("design:type", HTMLElement)
				], q.prototype, "canvas", void 0), q = V([(0, b.wA)
					({
						template: i(238),
						components: {}
					}), W("design:paramtypes", [])
				], q);
				const X = q;
				var J = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					$ = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let Y = class extends s.default {
					constructor() {
						super(), this.width = 0, this.height =
							0, this.size = 0
					}
					get show() {
						return this.value
					}
					set show(t) {
						this.$emit("input", t)
					}
					mounted() {
						this.resize()
					}
					resize() {
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12))
					}
					order(t) {
						this.world.order != t && (this.world.order =
							t, this.preferance.refresh(),
							this.$emit("order"), this.show = !
							1)
					}
				};
				J([(0, b.tB)("world"), $("design:type", G)], Y.prototype,
					"world", void 0), J([(0, b.tB)("preferance"), $(
						"design:type", H)], Y.prototype,
					"preferance", void 0), J([(0, b.fI)({
						required: !0
					}), $("design:type", Boolean)], Y.prototype,
					"value", void 0), Y = J([(0, b.wA)({
					template: i(82)
				}), $("design:paramtypes", [])], Y);
				const K = Y;
				var Q = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					tt = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let et = class extends s.default {
					constructor() {
						super(), this.width = 0, this.height =
							0, this.size = 0
					}
					get show() {
						return this.value
					}
					set show(t) {
						t || this.preferance.save(), this.$emit(
							"input", t)
					}
					mounted() {
						this.resize()
					}
					resize() {
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12))
					}
				};
				Q([(0, b.tB)("world"), tt("design:type", G)], et.prototype,
					"world", void 0), Q([(0, b.tB)("preferance"),
					tt("design:type", H)
				], et.prototype, "preferance", void 0), Q([(0, b.fI)
					({
						required: !0
					}), tt("design:type", Boolean)
				], et.prototype, "value", void 0), et = Q([(0, b.wA)
					({
						template: i(662)
					}), tt("design:paramtypes", [])
				], et);
				const it = et;
				var st = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					nt = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let rt = class extends s.default {
					constructor() {
						super(), this.width = 0, this.height =
							0, this.size = 0
					}
					get show() {
						return this.value
					}
					set show(t) {
						t || this.preferance.save(), this.$emit(
							"input", t)
					}
					mounted() {
						this.resize()
					}
					resize() {
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12))
					}
				};
				st([(0, b.tB)("world"), nt("design:type", G)], rt.prototype,
					"world", void 0), st([(0, b.tB)("preferance"),
					nt("design:type", H)
				], rt.prototype, "preferance", void 0), st([(0, b.fI)
					({
						required: !0
					}), nt("design:type", Boolean)
				], rt.prototype, "value", void 0), rt = st([(0, b.wA)
					({
						template: i(270)
					}), nt("design:paramtypes", [])
				], rt);
				const ot = rt;
				var at = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					ht = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let lt = class extends s.default {
					constructor() {
						super(), this.width = 0, this.height =
							0, this.size = 0
					}
					get show() {
						return this.value
					}
					set show(t) {
						t || this.preferance.save(), this.$emit(
							"input", t)
					}
					mounted() {
						this.resize()
					}
					resize() {
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12))
					}
				};
				at([(0, b.tB)("world"), ht("design:type", G)], lt.prototype,
					"world", void 0), at([(0, b.tB)("preferance"),
					ht("design:type", H)
				], lt.prototype, "preferance", void 0), at([(0, b.fI)
					({
						required: !0
					}), ht("design:type", Boolean)
				], lt.prototype, "value", void 0), lt = at([(0, b.wA)
					({
						template: i(663)
					}), ht("design:paramtypes", [])
				], lt);
				const ct = lt;
				var dt = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					pt = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let ut = class extends s.default {
					constructor() {
						super(), this.width = 0, this.height =
							0, this.size = 0, this.colord = !1,
							this.colorv = "#FF0000", this.palette = [
								"#B71C1C", "#FF6D00", "#0D47A1",
								"#00A020", "#FFD600", "#F0F0F0",
								"#FF0000", "#FFA100", "#0000FF",
								"#00FF00", "#FFFF00", "#808080",
								"#FF0080", "#FF00FF", "#607D8B",
								"#00FFFF", "#795548", "#202020"
							], this.colors = z
					}
					get show() {
						return this.value
					}
					set show(t) {
						t || this.data.save(), this.$emit(
							"input", t)
					}
					mounted() {
						this.resize()
					}
					resize() {
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12))
					}
					tap(t) {
						this.face = t, this.colord = !0
					}
					color(t) {
						this.colord = !1, this.data.color(this.face,
							t), this.data.save()
					}
					match(t) {
						for (const e in z)
							if (t == z[e]) return e[0];
						return ""
					}
				};
				dt([(0, b.tB)("world"), pt("design:type", G)], ut.prototype,
					"world", void 0), dt([(0, b.tB)("palette"), pt(
						"design:type", Z)], ut.prototype, "data",
					void 0), dt([(0, b.fI)({
						required: !0
					}), pt("design:type", Boolean)], ut.prototype,
					"value", void 0), ut = dt([(0, b.wA)({
					template: i(517)
				}), pt("design:paramtypes", [])], ut);
				const vt = ut;
				var mt = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					ft = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let gt = class extends s.default {
					constructor() {
						super(), this.width = 0, this.height =
							0, this.size = 0, this.resetd = !1
					}
					get show() {
						return this.value
					}
					set show(t) {
						this.$emit("input", t)
					}
					mounted() {
						this.resize()
					}
					resize() {
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12))
					}
					reset() {
						window.localStorage.clear(), window.location
							.reload()
					}
					clear() {
						this.palette.reset(), this.preferance.reset()
					}
					tap(t) {
						switch (t) {
							case "help":
								window.open(
									"https://gitee.com/huazhechen/cuber/blob/master/README.md"
								);
								break;
							case "reset":
								this.resetd = !0
						}
						this.show = !1
					}
				};
				mt([(0, b.tB)("world"), ft("design:type", G)], gt.prototype,
					"world", void 0), mt([(0, b.tB)("preferance"),
					ft("design:type", H)
				], gt.prototype, "preferance", void 0), mt([(0, b.tB)
					("palette"), ft("design:type", Z)
				], gt.prototype, "palette", void 0), mt([(0, b.fI)({
						required: !0
					}), ft("design:type", Boolean)], gt.prototype,
					"value", void 0), gt = mt([(0, b.wA)({
					template: i(503)
				}), ft("design:paramtypes", [])], gt);
				const yt = gt;
				var wt = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					xt = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				class bt {
					constructor(t, e) {
						this.label = t, this.show = !0, this.disable = !
							1, this.value = !1, this.emit = e
					}
				}
				let Rt = class extends s.default {
					constructor() {
						super(), this.menu = !1, this.items = {},
							this.width = 0, this.height = 0,
							this.size = 0, this.items.order =
							new bt("阶数"), this.items.control =
							new bt("控制"), this.items.appear =
							new bt("显示"), this.items.camera =
							new bt("镜头"), this.items.palette =
							new bt("配色"), this.items.about =
							new bt("关于")
					}
					mounted() {
						this.resize()
					}
					resize() {
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12))
					}
					tap(t) {
						switch (t) {
							case "playground":
							case "director":
							case "helper":
							case "algs":
								let e = location.search || "";
								const i = e.match(
									/(\?|\&)mode=([^&]*)(&|$)/
								);
								if ((i ? i[2] : "playground") !=
									t) {
									e = "playground" === t ? "" :
										"?mode=" + t;
									const i = window.location.origin +
										window.location.pathname +
										e;
									window.location.replace(i)
								}
								break;
							default:
								t instanceof bt && (t.emit ?
									this.$emit(t.emit) : t.value = !
									0)
						}
						this.menu = !1
					}
				};
				Rt = wt([(0, b.wA)({
					template: i(556),
					components: {
						order: K,
						appear: ot,
						camera: ct,
						control: it,
						palette: vt,
						about: yt
					}
				}), xt("design:paramtypes", [])], Rt);
				const zt = Rt;
				class Ct {
					static minify(t) {
						return t.replace(/3'/g, "")
							.replace(/3/g, "'")
							.replace(/2'/g, "2")
					}
					static adjust(t) {
						const e = ["U", "F", "R", "B", "L", "D"],
							i = {
								x: [1, 5, 2, 0, 4, 3],
								y: [0, 2, 3, 4, 1, 5],
								z: [4, 1, 0, 3, 5, 2]
							},
							s = {
								R: "x",
								L: "x",
								U: "y",
								D: "y",
								F: "z",
								B: "z"
							},
							n = e.slice();
						t = (t = (t = (t = (t = (t = (t = (t = (t =
															t.replace(
																/u/g,
																"(UE')"
															))
														.replace(
															/f/g,
															"(FS)")
													)
													.replace(/r/g,
														"(RM')"))
												.replace(/b/g,
													"(BS')"))
											.replace(/l/g, "(LM)"))
										.replace(/d/g, "(DE)"))
									.replace(/M/g, "(x' L' R)"))
								.replace(/E/g, "(y' D' U)"))
							.replace(/S/g, "(z F' B)");
						let r = new L(t)
							.parse();
						const o = [];
						for (const t of r) {
							if ("x" == t.sign || "y" == t.sign ||
								"z" == t.sign) {
								const e = i[t.sign];
								let s = t.times;
								t.reverse && (s = 4 - s);
								for (let t = 0; t < s; t++) {
									const t = n.slice();
									n.length = 0;
									for (const i of e) n.push(t[i])
								}
								continue
							}
							const s = e.indexOf(t.sign);
							t.sign = n[s], o.push(t)
						}
						r = o.slice(), o.length = 0;
						for (const t of r) {
							let e = null;
							for (let i = 0; i < o.length; i++) {
								const n = o[o.length - 1 - i];
								if (n.sign == t.sign) {
									e = n;
									break
								}
								if (s[n.sign] != s[t.sign]) break
							}
							e ? (e.times = e.times + t.times * (e.reverse ==
									t.reverse ? 1 : -1), e.times =
								e.times % 4, 0 == e.times && o.splice(
									o.indexOf(e), 1)) : o.push(
								t)
						}
						let a = "";
						for (const t of o) a = a + " " + t.value;
						return Ct.minify(a.substring(1))
					}
					static split(t) {
						const e = [];
						let i = "",
							s = 0;
						for (let n = 0; n < t.length; n++) {
							const r = t.charAt(n);
							" " === r && 0 == i.length || ("(" !==
								r ? ")" !== r ? i = i.concat(r) :
								(i = i.concat(r), s--, 0 == s &&
									(e.push(i), i = "")) : 0 ==
								s && i.length > 0 ? (e.push(i),
									i = "", n--) : (i = i.concat(
									r), s++))
						}
						return i.length > 0 && e.push(i), e
					}
					static niss(t, e) {
						e = Ct.adjust(e);
						let i, s = "";
						i = new L(e, !0)
							.parse();
						const n = 0 == i.length;
						if (!n) {
							s += "(";
							for (const t of i) s = s + t.value +
								" ";
							s = s.substr(0, s.length - 1), s +=
								") "
						}
						const r = Ct.split(t)
							.reverse();
						if (e = "", n && r.length > 0) {
							const t = r.pop();
							if (t.indexOf("(") >= 0) {
								i = new L(t, !0)
									.parse();
								for (const t of i) e = e + t.value +
									" "
							} else r.push(t)
						}
						for (const t of r)
							if (i = new L(t, !0)
								.parse(), 0 != i.length) {
								t.indexOf("(") >= 0 && (s += "(");
								for (const t of i) s = s + t.value +
									" ";
								t.indexOf("(") >= 0 && (s = s.substr(
										0, s.length - 1), s +=
									") ")
							} return t.includes("// niss") || (s +=
							"// niss"), {
							scene: Ct.minify(s),
							history: Ct.minify(e)
						}
					}
				}
				var Ut = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					St = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				class Mt {
					constructor(t) {
						this.width = 2, this.display = !1, this.keymap = {
							73: "R",
							75: "R'",
							87: "B",
							79: "B'",
							83: "D",
							76: "D'",
							68: "L",
							69: "L'",
							74: "U",
							70: "U'",
							72: "F",
							71: "F'",
							186: "y",
							59: "y",
							65: "y'",
							85: "r",
							82: "l'",
							77: "r'",
							86: "l",
							84: "x",
							89: "x",
							78: "x'",
							66: "x'",
							190: "M'",
							88: "M'",
							53: "M",
							54: "M",
							80: "z",
							81: "z'",
							90: "d",
							191: "d'",
							67: "u'",
							188: "u",
							37: "U",
							38: "R",
							39: "U'",
							40: "R'"
						}, this.keydown = t => {
							const e = t.keyCode | t.which;
							if (51 == e || 55 == e ? (this.width =
									Math.max(2, this.width - 1),
									this.display = !0) : 52 !=
								e && 56 != e || (this.width =
									this.width + 1, this.display = !
									0), 8 === e) return this.callback(
								"^"), !1;
							const i = this.keymap[e];
							if (i) {
								let t = "";
								t = 2 != this.width && ["l",
										"r", "f", "b", "d", "u"
									].indexOf(i[0]) >= 0 ? this
									.width + i : i, this.callback(
										t), this.display = !1
							}
							return !1
						}, this.callback = t, document.addEventListener(
							"keydown", this.keydown, !1)
					}
				}
				class Ft {
					constructor() {
						this.values = {
							version: "0.4",
							order: 3,
							scrambler: "*",
							history: "",
							scene: "*",
							start: 0,
							now: 0,
							complete: !1
						}, this.load()
					}
					load() {
						const t = window.localStorage.getItem(
							"playground");
						if (t) {
							const e = JSON.parse(t);
							if (e.version != this.values.version)
								return void this.save();
							this.values = e
						}
					}
					save() {
						window.localStorage.setItem("playground",
							JSON.stringify(this.values))
					}
					get order() {
						return this.values.order
					}
					set order(t) {
						this.values.order = t
					}
					get scrambler() {
						return this.values.scrambler
					}
					set scrambler(t) {
						this.values.scrambler = t
					}
					get history() {
						return this.values.history
					}
					set history(t) {
						this.values.history = t
					}
					get scene() {
						return this.values.scene
					}
					set scene(t) {
						this.values.scene = t
					}
					get start() {
						return this.values.start
					}
					set start(t) {
						this.values.start = t
					}
					get now() {
						return this.values.now
					}
					set now(t) {
						this.values.now = t
					}
					get complete() {
						return this.values.complete
					}
					set complete(t) {
						this.values.complete = t
					}
				}
				let Et = class extends s.default {
					constructor() {
						super(), this.world = new G, this.preferance =
							new H(this.world), this.palette =
							new Z(this.world), this.data = new Ft,
							this.width = 0, this.height = 0,
							this.size = 0, this.completed = !1,
							this.scrambled = !1, this.historyd = !
							1, this.shared = !1, this.link = "",
							this.keyboard = new Mt((t => {
								"^" === t ? this.world.cube
									.twister.undo() :
									this.world.cube.twister
									.twist(new k(t), !1,
										!0)
							}))
					}
					resize() {
						var t;
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12)), null === (t = this.viewport) ||
							void 0 === t || t.resize(this.width,
								this.height - 1.5 * this.size)
					}
					mounted() {
						this.load(), this.$nextTick(this.resize),
							this.$nextTick((() => {
								this.preferance.refresh(),
									this.palette.refresh()
							})), this.world.callbacks.push((() => {
								this.callback()
							})), this.loop()
					}
					get score() {
						let t = this.data.now - this.data.start;
						const e = Math.floor(t / 1e3 / 60 / 60);
						t %= 36e5;
						const i = Math.floor(t / 1e3 / 60);
						t %= 6e4;
						const s = Math.floor(t / 1e3);
						t %= 1e3;
						const n = Math.floor(t / 100);
						return (e > 0 ? e + ":" : "") + (i > 0 ?
								(Array(2)
									.join("0") + i)
								.slice(-2) + ":" : "") + (Array(
									2)
								.join("0") + s)
							.slice(-2) + "." + n + "/" + this.world
							.cube.history.moves
					}
					get key() {
						let t = "";
						return this.keyboard.display && (t =
								this.keyboard.width.toString()),
							t
					}
					callback() {
						this.data.scene = this.world.cube.history
							.init, this.data.history = this.world
							.cube.history.exp.substring(1),
							this.data.complete ? this.data.save() :
							(this.data.complete = this.world.cube
								.complete, this.data.save(),
								this.data.complete && (this.completed = !
									0))
					}
					breath() {
						if (this.world.order < 10) {
							let t = (new Date)
								.getTime();
							t = t / 2e3 * Math.PI, t = Math.sin(
									t), this.world.cube.position
								.y = t * M.SIZE / 64, this.world
								.cube.rotation.y = t / 768 *
								Math.PI, this.world.cube.dirty = !
								0, this.world.cube.updateMatrix()
						}
					}
					loop() {
						requestAnimationFrame(this.loop.bind(
								this)), this.breath(), this.viewport
							.draw(), this.data.complete || (0 ==
								this.world.cube.history.moves ?
								(this.data.start = 0, this.data
									.now = 0) : (0 == this.data
									.start && (this.data.start =
										(new Date)
										.getTime()), this.data.complete ||
									(this.data.now = (new Date)
										.getTime())))
					}
					load() {
						if ("*" === this.data.scene) return void this
							.scramble();
						const t = this.data.order,
							e = this.data.scene,
							i = this.data.history;
						this.world.order = t, this.world.cube.twister
							.setup(e);
						const s = new L(i)
							.parse();
						for (const t of s) this.world.cube.twister
							.twist(t, !0, !0);
						this.callback()
					}
					scramble() {
						this.data.complete = !0, "*" === this.data
							.scrambler ? this.world.cube.twister
							.twist(new k("*"), !0, !0) : this.world
							.cube.twister.setup(this.data.scrambler),
							this.data.complete = this.world.cube
							.complete, this.callback(), this.data
							.start = 0, this.data.now = 0, this
							.data.save()
					}
					order() {
						this.data.order = this.world.order,
							this.data.save(), this.scramble()
					}
					get style() {
						return {
							width: this.size + "px",
							height: this.size + "px",
							"min-width": "0%",
							"min-height": "0%",
							"text-transform": "none",
							flex: 1
						}
					}
					tap(t) {
						switch (t) {
							case "scramble":
								this.scrambled = !0;
								break;
							case "undo":
								this.world.cube.twister.undo();
								break;
							case "history":
								this.historyd = !0;
								break;
							case "share":
								this.share();
								break;
							case "open":
								window.open(this.link), this.shared = !
									1
						}
					}
					share() {
						const t = {},
							e = this.world.order;
						t.order = e;
						const i = {
							scene: this.data.scene,
							action: this.data.history
						};
						t.drama = i;
						let s = JSON.stringify(t);
						s = window.btoa(s);
						const n = "mode=player&data=" + s;
						this.link = window.location.origin +
							window.location.pathname + "?" + n,
							this.shared = !0
					}
					adjust() {
						this.world.order > 3 || (this.data.history =
							Ct.adjust(this.data.history),
							this.data.save(), this.load())
					}
					niss() {
						if (this.world.order > 3) return;
						const t = Ct.niss(this.data.scene, this
							.data.history);
						this.data.scene = t.scene, this.data.history =
							t.history, this.data.save(), this.load(),
							this.adjust()
					}
				};
				Ut([(0, b.DF)("world"), St("design:type", G)], Et.prototype,
					"world", void 0), Ut([(0, b.DF)("preferance"),
					St("design:type", H)
				], Et.prototype, "preferance", void 0), Ut([(0, b.DF)
					("palette"), St("design:type", Z)
				], Et.prototype, "palette", void 0), Ut([(0, b.Rl)(
						"viewport"), St("design:type", X)], Et.prototype,
					"viewport", void 0), Et = Ut([(0, b.wA)({
					template: i(757),
					components: {
						viewport: X,
						setting: zt
					}
				}), St("design:paramtypes", [])], Et);
				const Dt = Et;
				var Bt = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					Pt = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let kt = class extends s.default {
					constructor() {
						super(), this.size = 0, this.playing = !
							1, this.pprogress = 0, this.scene =
							"", this.action = "", this.actions = []
					}
					mounted() {
						this.world.callbacks.push((() => {
							this.callback()
						}))
					}
					resize(t) {
						this.size = t
					}
					get style() {
						return {
							width: this.size + "px",
							height: this.size + "px",
							"min-width": "0%",
							"min-height": "0%",
							"text-transform": "none",
							flex: 1
						}
					}
					onPlayingChange() {
						this.world.controller.disable = this.playing
					}
					get progress() {
						return this.pprogress
					}
					set progress(t) {
						this.init();
						for (let e = 0; e < t; e++) {
							const t = this.actions[e];
							this.world.cube.twister.twist(t, !0,
								!0)
						}
						this.pprogress = t
					}
					onProgressChange() {
						this.world.controller.lock = this.progress >
							0
					}
					onSceneChange() {
						this.init()
					}
					onActionChange() {
						this.actions = new L(this.action)
							.parse(), this.init()
					}
					init() {
						this.world.controller.lock = !1, this.playing = !
							1, this.pprogress = 0;
						const t = this.scene.replace("^", "(" +
							this.action + ")'");
						this.world.cube.twister.setup(t)
					}
					finish() {
						this.init();
						for (const t of this.actions) this.world
							.cube.twister.twist(t, !0, !0);
						this.pprogress = this.actions.length
					}
					callback() {
						if (this.playing) {
							if (this.pprogress == this.actions.length)
								return void(this.playing = !1);
							let t;
							do {
								const e = this.actions[this.pprogress++];
								if (t = this.world.cube.twister
									.twist(e, !1, !1), !t) {
									this.pprogress--;
									break
								}
								if (this.pprogress == this.actions
									.length) break
							} while (this.pprogress < this.actions
								.length)
						}
					}
					toggle() {
						this.playing ? this.playing = !1 : (0 ==
							this.pprogress && this.init(),
							this.playing = !0, this.callback()
						)
					}
					forward() {
						if (this.pprogress == this.actions.length)
							return;
						0 == this.pprogress && this.init(),
							this.playing = !1;
						const t = this.actions[this.pprogress];
						this.pprogress++, this.world.cube.twister
							.twist(t, !1, !0)
					}
					backward() {
						if (0 == this.pprogress) return;
						this.playing = !1, this.pprogress--;
						const t = this.actions[this.pprogress];
						this.world.cube.twister.twist(new k(t.sign,
								!t.reverse, t.times), !1, !
							0)
					}
					get chaos() {
						return 0 == this.progress && 0 != this.world
							.cube.history.length
					}
				};
				Bt([(0, b.tB)("world"), Pt("design:type", G)], kt.prototype,
					"world", void 0), Bt([(0, b.fI)({
						required: !1,
						default: !1
					}), Pt("design:type", Boolean)], kt.prototype,
					"disable", void 0), Bt([(0, b.RL)("playing"),
					Pt("design:type", Function), Pt(
						"design:paramtypes", []), Pt(
						"design:returntype", void 0)
				], kt.prototype, "onPlayingChange", null), Bt([(0,
						b.RL)("progress"), Pt("design:type",
						Function), Pt("design:paramtypes", []),
					Pt("design:returntype", void 0)
				], kt.prototype, "onProgressChange", null), Bt([(0,
						b.RL)("scene"), Pt("design:type",
						Function), Pt("design:paramtypes", []),
					Pt("design:returntype", void 0)
				], kt.prototype, "onSceneChange", null), Bt([(0, b.RL)
					("action"), Pt("design:type", Function), Pt(
						"design:paramtypes", []), Pt(
						"design:returntype", void 0)
				], kt.prototype, "onActionChange", null), kt = Bt([
					(0, b.wA)({
						template: i(661),
						components: {}
					}), Pt("design:paramtypes", [])
				], kt);
				const Lt = kt;
				class At {
					static RGB2HEX(t) {
						return "#" + ((1 << 24) + (t[0] << 16) + (t[
								1] << 8) + t[2])
							.toString(16)
							.slice(1)
					}
					static HEX2RGB(t) {
						t = t.toLowerCase();
						const e = [];
						for (let i = 1; i < 7; i += 2) e.push(
							parseInt("0x" + t.slice(i, i + 2)));
						return e
					}
					static RGB2HSV(t) {
						let e = 0,
							i = 0,
							s = 0;
						const n = t[0],
							r = t[1],
							o = t[2];
						t.sort((function(t, e) {
							return t - e
						}));
						const a = t[2],
							h = t[0];
						return s = a / 255, i = 0 === a ? 0 : 1 - h /
							a, a === h ? e = 0 : a === n && r >= o ?
							e = (r - o) / (a - h) * 60 + 0 : a ===
							n && r < o ? e = (r - o) / (a - h) * 60 +
							360 : a === r ? e = (o - n) / (a - h) *
							60 + 120 : a === o && (e = (n - r) / (a -
								h) * 60 + 240), e = Math.round(e),
							i = Math.round(100 * i), s = Math.round(
								100 * s), [e, i, s]
					}
					static HSV2RGB(t) {
						const e = t[0],
							i = t[1] / 100,
							s = t[2] / 100;
						let n = 0,
							r = 0,
							o = 0;
						const a = Math.floor(e / 60 % 6),
							h = e / 60 - a,
							l = s * (1 - i),
							c = s * (1 - h * i),
							d = s * (1 - (1 - h) * i);
						switch (a) {
							case 0:
								n = s, r = d, o = l;
								break;
							case 1:
								n = c, r = s, o = l;
								break;
							case 2:
								n = l, r = s, o = d;
								break;
							case 3:
								n = l, r = c, o = s;
								break;
							case 4:
								n = d, r = l, o = s;
								break;
							case 5:
								n = s, r = l, o = c
						}
						return n = Math.round(255 * n), r = Math.round(
								255 * r), o = Math.round(255 * o),
							[n, r, o]
					}
					static RGBD(t, e) {
						const i = (t[0] + e[0]) / 2,
							s = t[0] - e[0],
							n = t[1] - e[1],
							r = t[2] - e[2];
						return Math.sqrt((2 + i / 256) * Math.pow(s,
							2) + 4 * Math.pow(n, 2) + (2 +
							(255 - i) / 256) * Math.pow(r,
							2))
					}
					static PRINT(t) {
						console.log("%cRGB=" + t + " HSV=" + At.RGB2HSV(
							t), "color:" + At.RGB2HEX(t))
					}
				}
				class It {
					constructor() {
						this.pages = [], this.cursor = 0, this.newPage()
					}
					newPage() {
						this.pages.push(new Uint8Array(It.SIZE)),
							this.cursor = 0
					}
					get length() {
						return (this.pages.length - 1) * It.SIZE +
							this.cursor
					}
					getData() {
						const t = this.length,
							e = new Uint8Array(t);
						let i = 0;
						for (let t = 0; t < this.pages.length; t++)
							for (let s = 0; s < It.SIZE && (e[i++] =
								this.pages[t][s], i != e.length
							); s++);
						return e
					}
					writeByte(t) {
						this.cursor >= It.SIZE && this.newPage(),
							this.pages[this.pages.length - 1][this.cursor++] =
							t
					}
					writeShort(t) {
						this.writeByte(255 & t), this.writeByte(t >>
							8 & 255)
					}
					writeLong(t) {
						this.writeByte(255 & t), this.writeByte(t >>
							8 & 255), this.writeByte(t >> 16 &
							255), this.writeByte(t >> 24 & 255)
					}
					writeBytes(t, e = null) {
						for (let i = 0; i < (null == e ? t.length :
							e); i++) this.writeByte(t[i])
					}
					writeString(t) {
						for (let e = t.length, i = 0; i < e; i++)
							this.writeByte(t.charCodeAt(i))
					}
				}
				It.SIZE = 4096, It.CHAR_MAP = (() => {
					const t = [];
					for (let e = 0; e < 256; e++) t[e] = String
						.fromCharCode(e);
					return t
				})();
				class Ot {
					constructor() {
						this.accum = new Uint8Array(256), this.htab =
							new Int32Array(Ot.HSIZE), this.codetab =
							new Int32Array(Ot.HSIZE)
					}
					static MAXCODE(t) {
						return (1 << t) - 1
					}
					flushChar() {
						this.aCount > 0 && (this.outs.writeByte(
								this.aCount), this.outs.writeBytes(
								this.accum, this.aCount), this.aCount =
							0)
					}
					pushChar(t) {
						this.accum[this.aCount++] = t, this.aCount >=
							254 && this.flushChar()
					}
					clearBlock() {
						this.clearHash(Ot.HSIZE), this.freeEnt =
							this.ClearCode + 2, this.clearFlag = !0,
							this.output(this.ClearCode)
					}
					clearHash(t) {
						for (let e = 0; e < t; ++e) this.htab[e] = -
							1
					}
					nextPixel() {
						if (0 === this.remaining) return Ot.EOF;
						--this.remaining;
						return 255 & this.pixels[this.curPixel++]
					}
					compress(t) {
						let e, i, s, n, r, o;
						for (this.initBits = t, this.nBits = this.initBits,
							this.clearFlag = !1, this.maxcode = Ot.MAXCODE(
								this.nBits), this.ClearCode = 1 <<
							t - 1, this.EOFCode = this.ClearCode +
							1, this.freeEnt = this.ClearCode + 2,
							this.aCount = 0, n = this.nextPixel(),
							o = 0, e = Ot.HSIZE; e < 65536; e *= 2)
							++o;
						o = 8 - o, this.clearHash(Ot.HSIZE), this.output(
							this.ClearCode);
						t: for (;
							(i = this.nextPixel()) != Ot.EOF;)
							if (e = (i << Ot.BITS) + n, s = i <<
								o ^ n, this.htab[s] !== e) {
								if (this.htab[s] >= 0) {
									r = Ot.HSIZE - s, 0 === s &&
										(r = 1);
									do {
										if ((s -= r) < 0 && (s +=
												Ot.HSIZE), this
											.htab[s] === e) {
											n = this.codetab[s];
											continue t
										}
									} while (this.htab[s] >= 0)
								}
								this.output(n), n = i, this.freeEnt <
									1 << Ot.BITS ? (this.codetab[
											s] = this.freeEnt++,
										this.htab[s] = e) :
									this.clearBlock()
							} else n = this.codetab[s];
						this.output(n), this.output(this.EOFCode)
					}
					output(t) {
						for (this.curAccum &= Ot.MASKS[this.curBits],
							this.curBits > 0 ? this.curAccum |= t <<
							this.curBits : this.curAccum = t, this.curBits +=
							this.nBits; this.curBits >= 8;) this.pushChar(
								255 & this.curAccum), this.curAccum >>=
							8, this.curBits -= 8;
						if ((this.freeEnt > this.maxcode || this.clearFlag) &&
							(this.clearFlag ? (this.maxcode = Ot.MAXCODE(
									this.nBits = this.initBits),
								this.clearFlag = !1) : (++this.nBits,
								this.nBits == Ot.BITS ? this.maxcode =
								1 << Ot.BITS : this.maxcode =
								Ot.MAXCODE(this.nBits))), t == this
							.EOFCode) {
							for (; this.curBits > 0;) this.pushChar(
									255 & this.curAccum), this.curAccum >>=
								8, this.curBits -= 8;
							this.flushChar()
						}
					}
					encode(t, e, i, s) {
						this.pixels = t, this.outs = s, this.curAccum =
							0, this.curBits = 0, this.aCount = 0,
							this.freeEnt = 0, this.maxcode = 0,
							this.clearFlag = !1, this.initBits = 0,
							this.ClearCode = 0, this.EOFCode = 0,
							this.outs.writeByte(i), this.remaining =
							e, this.curPixel = 0, this.compress(i +
								1), this.outs.writeByte(0)
					}
				}
				Ot.EOF = -1, Ot.BITS = 12, Ot.HSIZE = 5003, Ot.MASKS = [
					0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023,
					2047, 4095, 8191, 16383, 32767, 65535
				];
				class Tt {
					constructor(t) {
						this.transparent = !0, this.hash = new Array(
								Math.pow(2, Tt.HASH_SIZE)), this.colorn =
							0, this.dispose = 0, this.frames = 0,
							this.preset = t
					}
					start(t, e, i) {
						this.width = ~~t, this.height = ~~e, this.enc =
							new Ot, this.data = new Uint8Array(this
								.width * this.height), this.last =
							new Uint8Array(this.width * this.height),
							this.real = new Uint8Array(this.width *
								this.height), this.frames = 0, this
							.delay = i, this.out = new It, this.genColorTable(),
							this.writeHeader(), this.writeLSD(),
							this.writePalette(), this.writeNetscapeExt()
					}
					addColor(t, e, i) {
						const s = this.getColor(t, e, i);
						if (0 == s) return this.colors[this.colorn++] =
							t, this.colors[this.colorn++] = e,
							void(this.colors[this.colorn++] = i);
						let n = 3 * s;
						const r = this.colors[n++],
							o = this.colors[n++],
							a = this.colors[n++];
						At.RGBD([t, e, i], [r, o, a]) > 3 && (this.colors[
							this.colorn++] = t, this.colors[
							this.colorn++] = e, this.colors[
							this.colorn++] = i)
					}
					genColorTable() {
						this.colors = new Uint8Array(3 * Math.pow(2,
							Tt.DEEP)), this.colorn = 0, this.addColor(
							0, 0, 0), this.addColor(255, 255,
							255);
						const t = 3 * Math.pow(2, Tt.DEEP);
						for (const t in this.preset) {
							const e = At.HEX2RGB(this.preset[t]);
							this.addColor(e[0], e[1], e[2])
						}
						for (let t = 0; t < 255; t += 8) this.addColor(
							t, t, t);
						for (const e in this.preset) {
							const i = At.HEX2RGB(this.preset[e]),
								s = At.RGB2HSV(i);
							let n = 10,
								r = s[1];
							for (; this.colorn < t && (r -= n, n *=
								1.25, !(r < 0));) {
								const t = [s[0], r, s[2]],
									e = At.HSV2RGB(t);
								this.addColor(e[0], e[1], e[2])
							}
						}
						for (const e in this.preset) {
							const i = At.HEX2RGB(this.preset[e]),
								s = At.RGB2HSV(i);
							let n = 10,
								r = s[2];
							for (; this.colorn < t && (r -= n, n *=
								1.25, !(r < 0));) {
								const t = [s[0], s[1], r],
									e = At.HSV2RGB(t);
								this.addColor(e[0], e[1], e[2])
							}
						}
						for (let e = 0; this.colorn < t; e++)
							for (const t in this.preset) {
								const i = At.HEX2RGB(this.preset[t]),
									s = At.RGB2HSV(i),
									n = s[2] - e;
								if (n < 0) continue;
								const r = [s[0], s[1], n],
									o = At.HSV2RGB(r);
								this.addColor(o[0], o[1], o[2])
							}
						this.colorn > 3 * Math.pow(2, Tt.DEEP) && (
							this.colorn = 3 * Math.pow(2, Tt.DEEP)
						)
					}
					getColor(t, e, i) {
						let s = 1,
							n = 16777216,
							r = 0;
						for (let o = 3; o < this.colorn; s++) {
							const a = this.colors[o++],
								h = this.colors[o++],
								l = this.colors[o++],
								c = At.RGBD([t, e, i], [a, h, l]);
							if (c < 2) return s;
							c < n && (n = c, r = s)
						}
						return r
					}
					getPixels() {
						const t = this.width,
							e = this.height;
						let i, s, n, r, o, a, h, l;
						this.x0 = t, this.x1 = 0, this.y0 = e, this
							.y1 = 0;
						for (let c = 0; c < e; c++)
							for (let d = 0; d < t; d++) r = c * t +
								d, o = (e - c - 1) * t + d, l = 4 *
								r, i = this.image[l + 0], s = this.image[
									l + 1], n = this.image[l + 2],
								h = 31 * (31 * i + s) + n, h &= Tt.HASH_MASK,
								this.hash[h] && this.hash[h].rgb[0] ==
								i && this.hash[h].rgb[1] == s &&
								this.hash[h].rgb[2] == n ? a = this
								.hash[h].index : (a = this.getColor(
									i, s, n), this.hash[h] = {
									rgb: [i, s, n],
									index: a
								}), this.last[o] == a ? this.data[o] =
								0 : (this.x0 = Math.min(this.x0, d),
									this.x1 = Math.max(this.x1, d +
										1), this.y0 = Math.min(this
										.y0, e - c - 1), this.y1 =
									Math.max(this.y1, e - c), this.data[
										o] = a, this.last[o] = a);
						(this.x0 >= this.x1 || this.y0 >= this.y1) &&
						(this.x0 = 0, this.x1 = 1, this.y0 = 0,
							this.y1 = 1)
					}
					add(t) {
						this.image = t, this.getPixels(), this.writeGraphicCtrlExt(),
							this.writeImageDesc(), this.writePixels(),
							this.frames++
					}
					finish() {
						this.out.writeByte(59)
					}
					writeHeader() {
						this.out.writeString("GIF89a")
					}
					writeGraphicCtrlExt() {
						this.out.writeByte(33), this.out.writeByte(
							249), this.out.writeByte(4);
						const t = this.transparent ? 1 : 0;
						let e = 7 & this.dispose;
						e <<= 2, this.out.writeByte(0 | e | t),
							this.out.writeShort(this.delay), this.out
							.writeByte(0), this.out.writeByte(0)
					}
					writeImageDesc() {
						this.out.writeByte(44), this.out.writeShort(
								this.x0), this.out.writeShort(this.y0),
							this.out.writeShort(this.x1 - this.x0),
							this.out.writeShort(this.y1 - this.y0),
							this.out.writeByte(0)
					}
					writeLSD() {
						this.out.writeShort(this.width), this.out.writeShort(
								this.height), this.out.writeByte(
								128 | Tt.DEEP - 1 << 4 | Tt.DEEP -
								1), this.out.writeByte(0), this.out
							.writeByte(0)
					}
					writeNetscapeExt() {
						this.out.writeByte(33), this.out.writeByte(
								255), this.out.writeByte(11), this.out
							.writeString("NETSCAPE2.0"), this.out.writeByte(
								3), this.out.writeByte(1), this.out
							.writeShort(0), this.out.writeByte(0)
					}
					writePalette() {
						this.out.writeBytes(this.colors)
					}
					writePixels() {
						const t = this.x1 - this.x0,
							e = this.y1 - this.y0;
						for (let i = 0; i < e; i++)
							for (let e = 0; e < t; e++) this.real[i *
								t + e] = this.data[(i + this.y0) *
								this.width + e + this.x0];
						this.enc.encode(this.real, t * e, Tt.DEEP,
							this.out)
					}
				}
				Tt.DEEP = 8, Tt.HASH_SIZE = 12, Tt.HASH_MASK = 4095;
				class _t {
					static DOWNLOAD(t, e, i) {
						const s = new Date,
							n = 6e4 * s.getTimezoneOffset();
						s.setTime(s.getTime() - n);
						const r = t + "-" + s.toISOString()
							.replace(/[^0-9]/g, "")
							.substring(0, 14) + "." + e,
							o = document.createElement("a");
						if (o.innerHTML = r, o.setAttribute(
								"download", r), o.download = r,
							document.body.appendChild(o), o.href =
							i, document.createEvent) {
							const t = document.createEvent(
								"MouseEvents");
							t.initEvent("click", !0, !0), o.dispatchEvent(
								t)
						} else o.click && o.click();
						document.body.removeChild(o)
					}
					static CRC32(t) {
						let e = -1;
						for (let i = 0; i < t.length; i++) e = e >>>
							8 ^ _t.TABLE_B[255 & (e ^ t[i])];
						return (-1 ^ e) >>> 0
					}
					static SSE(t, e, i, s) {
						const n = Number(i);
						switch (e) {
							case "S":
								const e = {
									R: "L'",
									L: "R'",
									F: "B'",
									B: "F'",
									U: "D'",
									D: "U'"
								} [s];
								return 1 == n ? "(" + s + " " + e +
									")" : 2 == n ? "(" + s.toLowerCase() +
									" " + e.toLowerCase() + ")" :
									"(" + i + s.toLowerCase() + " " +
									i + e.toLowerCase() + ")";
							case "N":
								return "(" + i + s + ")";
							case "T":
								return 2 == n ? "(" + s.toLowerCase() +
									")" : "(" + i + s.toLowerCase() +
									")";
							case "W":
								return "(" + {
									R: "m'",
									L: "m",
									F: "s",
									B: "s'",
									U: "e'",
									D: "e"
								} [s] + ")";
							case "V":
								return "(2-" + String(2 + n - 1) +
									s.toLowerCase() + ")";
							case "C":
								return "(" + {
									R: "x",
									L: "x'",
									F: "z",
									B: "z'",
									U: "y",
									D: "y'"
								} [s].toLowerCase() + ")";
							case "M":
								const r = Math.floor((t - n) / 2) +
									1,
									o = r + n - 1;
								return r == o ? "(" + String(r) + s +
									")" : "(" + String(r) + "-" +
									String(o) + s.toLowerCase() +
									")"
						}
						return ""
					}
					static SSE2SIGN(t, e) {
						let i = "",
							s = "INIT",
							n = "",
							r = "";
						const o = {
							S: 1,
							N: 2,
							T: 2,
							W: 0,
							V: 2,
							C: 0,
							M: 1
						};
						e += " ";
						for (let a = 0; a < e.length; a++) {
							const h = e[a];
							switch (s) {
								case "INIT":
									/[SNTWVCM]/.test(h) ? (s =
											"SNTWVCM", n = h) : i +=
										h;
									break;
								case "SNTWVCM":
									/[0123456789]/.test(h) ? (s =
										"WIDTH", r += h) : (s =
										"WIDTH", r = String(o[n]),
										a--);
									break;
								case "WIDTH":
									/[RUFBLD]/.test(h) ? i += _t.SSE(
											t, n, r, h) : a--, s =
										"INIT", n = "", r = "";
									break;
								default:
									i += h
							}
						}
						return i
					}
				}
				_t.TABLE_A =
					"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",
					_t.TABLE_B = _t.TABLE_A.split(" ")
					.map((function(t) {
						return parseInt(t, 16)
					}));
				class jt {
					constructor() {
						this.files = []
					}
					init() {
						this.out = new It, this.files = [], this.num =
							0
					}
					add(t, e) {
						const i = _t.CRC32(e);
						this.files.push({
								name: t,
								length: e.length,
								crc: i,
								offset: this.out.length
							}), this.out.writeLong(67324752), this.out
							.writeShort(10), this.out.writeShort(0),
							this.out.writeShort(0), this.out.writeShort(
								8738), this.out.writeShort(8738),
							this.out.writeLong(i), this.out.writeLong(
								e.length), this.out.writeLong(e.length),
							this.out.writeShort(t.length), this.out
							.writeShort(0), this.out.writeString(t),
							this.out.writeBytes(e), this.num++
					}
					dir() {
						for (const t of this.files) this.out.writeLong(
								33639248), this.out.writeShort(63),
							this.out.writeShort(10), this.out.writeShort(
								0), this.out.writeShort(0), this.out
							.writeShort(8738), this.out.writeShort(
								8738), this.out.writeLong(t.crc),
							this.out.writeLong(t.length), this.out.writeLong(
								t.length), this.out.writeShort(t.name
								.length), this.out.writeShort(0),
							this.out.writeShort(0), this.out.writeShort(
								0), this.out.writeShort(0), this.out
							.writeLong(32), this.out.writeLong(t.offset),
							this.out.writeString(t.name)
					}
					finish() {
						const t = this.out.length;
						this.dir();
						const e = this.out.length - t;
						this.out.writeLong(101010256), this.out.writeShort(
								0), this.out.writeShort(0), this.out
							.writeShort(this.num), this.out.writeShort(
								this.num), this.out.writeLong(e),
							this.out.writeLong(t), this.out.writeShort(
								0)
					}
				}
				var Nt = i(152),
					Gt = i.n(Nt),
					Ht = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					Zt = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				class Vt {
					constructor() {
						this.values = {
							version: "0.2",
							order: 3,
							delay: 2,
							pixel: 512,
							filmt: "gif",
							dramas: []
						}, this.load()
					}
					load() {
						const t = window.localStorage.getItem(
							"director");
						if (t) {
							const e = JSON.parse(t);
							if (e.version != this.values.version)
								return void this.save();
							this.values = e
						}
					}
					save() {
						window.localStorage.setItem("director",
							JSON.stringify(this.values))
					}
					get order() {
						return this.values.order
					}
					set order(t) {
						this.values.order = t
					}
					get delay() {
						return this.values.delay
					}
					set delay(t) {
						this.values.delay = t
					}
					get pixel() {
						return this.values.pixel
					}
					set pixel(t) {
						this.values.pixel = t
					}
					get filmt() {
						return this.values.filmt
					}
					set filmt(t) {
						this.values.filmt = t
					}
					get dramas() {
						return this.values.dramas
					}
				}
				let Wt = class extends s.default {
					constructor() {
						super(), this.world = new G, this.preferance =
							new H(this.world), this.palette =
							new Z(this.world), this.data = new Vt,
							this.width = 0, this.height = 0,
							this.size = 0, this.colord = !1,
							this.outputd = !1, this.shared = !1,
							this.link = "", this.scene = "",
							this.action = "", this.recording = !
							1, this.color = "High", this.scriptd = !
							1, this.filmer = new R.CP7({
								antialias: !0,
								preserveDrawingBuffer: !0,
								alpha: !0
							}), this.filmer.setPixelRatio(1),
							this.filmer.setClearColor(16777215,
								0), this.gif = new Tt(z), this.zip =
							new jt, this.colors = z, this.colort = [
								"R", "L", "F", "B", "U", "D",
								"High", "Gray"
							]
					}
					resize() {
						var t, e;
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12)), null === (t = this.viewport) ||
							void 0 === t || t.resize(this.width,
								this.height - 4.6 * this.size),
							null === (e = this.playbar) || void 0 ===
							e || e.resize(this.size)
					}
					mounted() {
						new(Gt())(this.copy.$el), this.reload(),
							this.world.controller.taps.push(((t,
								e) => {
								this.stick(t, e)
							})), this.world.callbacks.push((() => {
								this.callback()
							})), this.$nextTick(this.resize),
							this.$nextTick((() => {
								this.preferance.refresh(),
									this.palette.refresh()
							})), this.loop()
					}
					callback() {
						this.recording && 0 == this.playbar.playing &&
							this.finish()
					}
					reload() {
						let t;
						this.world.order = this.data.order;
						const e = this.world.order;
						t = this.data.dramas[e], t || (t = {
								scene: "x2^",
								action: "RUR'U'~",
								stickers: {}
							}, this.data.dramas[e] = t), this.scene =
							t.scene, this.action = t.action,
							this.stickers = t.stickers, this.world
							.cube.strip({});
						for (const t of [x.L, x.R, x.D, x.U, x.B,
							x.F
						]) {
							const e = this.stickers[x[t]];
							if (e)
								for (const i in e) {
									const s = Number(i),
										n = e[s];
									this.world.cube.stick(s, t,
										n)
								}
						}
					}
					loop() {
						requestAnimationFrame(this.loop.bind(
								this)), this.viewport.draw(),
							this.recording && this.record()
					}
					get style() {
						return {
							width: this.size + "px",
							height: this.size + "px",
							"min-width": "0%",
							"min-height": "0%",
							"text-transform": "none",
							flex: 1
						}
					}
					tap(t) {
						switch (t) {
							case "color":
								this.colord = !0;
								break;
							case "output":
								this.outputd = !0;
								break;
							case "snap":
								this.snap();
								break;
							case "film":
								this.film();
								break;
							case "share":
								this.share();
								break;
							case "open":
								window.open(this.link), this.shared = !
									1;
								break;
							case "clear":
								this.action = "";
								break;
							case "expand":
								let t = this.action;
								t.startsWith("SSE:") && (t = t.replace(
										"SSE:", ""), t = _t
									.SSE2SIGN(this.world.order,
										t));
								const e = new L(t)
									.parse();
								t = "";
								for (const i of e) t = t + i.value +
									" ";
								this.action = t
						}
					}
					share() {
						const t = {},
							e = this.world.order;
						t.order = e, t.drama = this.data.dramas[
							e];
						let i = JSON.stringify(t);
						i = window.btoa(i);
						const s = "mode=player&data=" + i;
						this.link = window.location.origin +
							window.location.pathname + "?" + s,
							this.shared = !0
					}
					order() {
						this.data.order = this.world.order,
							this.data.save(), this.reload(),
							this.playbar.init()
					}
					onSceneChange() {
						this.playbar.scene = this.scene, this.data
							.dramas[this.world.order].scene =
							this.scene, this.data.save()
					}
					onActionChange() {
						let t = this.action;
						t.startsWith("SSE:") && (t = t.replace(
								"SSE:", ""), t = _t.SSE2SIGN(
								this.world.order, t)), this.playbar
							.action = t, this.data.dramas[this.world
								.order].action = this.action,
							this.data.save()
					}
					stick(t, e) {
						if (t < 0 || !this.colord) return void(
							this.colord = !1);
						const i = this.world.cube.cubelets[t];
						t = i.initial, e = i.getFace(e);
						let s = this.stickers[x[e]];
						null == s && (s = {}, this.stickers[x[e]] =
								s), this.color == x[e] ? (
								delete s[t], this.world.cube.stick(
									t, e, "")) : (s[t] = this.color,
								this.world.cube.stick(t, e,
									this.color)), this.data.dramas[
								this.world.order].stickers =
							this.stickers, this.data.save()
					}
					reset() {
						this.stickers = {}, this.world.cube.strip({}),
							this.data.dramas[this.world.order].stickers =
							this.stickers, this.data.save()
					}
					clear() {
						const t = {};
						for (const e of [x.L, x.R, x.D, x.U, x.B,
							x.F
						]) {
							const i = x[e],
								s = this.world.cube.table.face(
									i);
							t[i] = s.indices;
							let n = this.stickers[x[e]];
							null == n && (n = {}, this.stickers[
								x[e]] = n);
							for (const t of s.indices) n[t] =
								"remove"
						}
						this.world.cube.strip(t), this.data.dramas[
								this.world.order].stickers =
							this.stickers, this.data.save()
					}
					film() {
						if (this.recording) return this.recording = !
							1, void this.playbar.toggle();
						const t = this.data.pixel,
							e = this.data.filmt,
							i = this.data.delay;
						this.filmer.setSize(t, t, !0), "gif" ==
							e ? (this.pixels = new Uint8Array(t *
								t * 4), this.gif.start(t, t,
								i), this.filmer.setClearColor(
								16777215, 1)) : "pngs" == e &&
							(this.zip.init(), this.filmer.setClearColor(
								16777215, 0)), this.playbar.init(),
							this.playbar.toggle(), this.record(),
							this.recording = !0
					}
					snap() {
						const t = this.data.pixel,
							e = this.world.width,
							i = this.world.height;
						this.world.width = t, this.world.height =
							t, this.world.resize(), this.filmer
							.setSize(t, t, !0), this.filmer.setClearColor(
								16777215, 0), this.filmer.clear(),
							this.filmer.render(this.world.scene,
								this.world.camera), this.world.width =
							e, this.world.height = i, this.world
							.resize();
						const s = this.filmer.domElement.toDataURL(
								"image/png")
							.split(";base64,"),
							n = s[0].split(":")[1],
							r = window.atob(s[1]),
							o = r.length,
							a = new Uint8Array(o);
						for (let t = 0; t < o; ++t) a[t] = r.charCodeAt(
							t);
						const h = new Blob([a], {
								type: n
							}),
							l = URL.createObjectURL(h);
						_t.DOWNLOAD("cuber", "png", l)
					}
					record() {
						const t = this.data.pixel,
							e = this.data.filmt,
							i = this.world.width,
							s = this.world.height;
						if (this.world.width = t, this.world.height =
							t, this.world.resize(), this.filmer
							.clear(), this.filmer.render(this.world
								.scene, this.world.camera),
							"gif" == e) {
							const e = this.filmer.getContext();
							e.readPixels(0, 0, t, t, e.RGBA, e.UNSIGNED_BYTE,
								this.pixels), this.gif.add(
								this.pixels)
						} else if ("pngs" == e) {
							const t = this.filmer.domElement.toDataURL(
									"image/png")
								.split(";base64,"),
								e = window.atob(t[1]),
								i = e.length,
								s = new Uint8Array(i);
							for (let t = 0; t < i; ++t) s[t] =
								e.charCodeAt(t);
							this.zip.add("cuber" + this.zip.num +
								".png", s)
						}
						this.world.width = i, this.world.height =
							s, this.world.resize()
					}
					finish() {
						const t = this.data.filmt;
						let e, i, s;
						if (this.recording = !1, "gif" == t)
							this.gif.finish(), e = this.gif.out
							.getData(), i = new Blob([e], {
								type: "image/gif"
							}), s = URL.createObjectURL(i), _t.DOWNLOAD(
								"cuber", "gif", s);
						else if ("pngs" == t) {
							this.zip.finish(), e = this.zip.out
								.getData();
							const t = new Blob([e], {
									type: "application/zip"
								}),
								i = URL.createObjectURL(t);
							_t.DOWNLOAD("cuber", "zip", i)
						}
					}
				};
				Ht([(0, b.DF)("world"), Zt("design:type", G)], Wt.prototype,
					"world", void 0), Ht([(0, b.DF)("preferance"),
					Zt("design:type", H)
				], Wt.prototype, "preferance", void 0), Ht([(0, b.DF)
					("palette"), Zt("design:type", Z)
				], Wt.prototype, "palette", void 0), Ht([(0, b.Rl)(
						"viewport"), Zt("design:type", X)], Wt.prototype,
					"viewport", void 0), Ht([(0, b.Rl)("playbar"),
					Zt("design:type", Lt)
				], Wt.prototype, "playbar", void 0), Ht([(0, b.Rl)(
						"copy"), Zt("design:type", s.default)], Wt.prototype,
					"copy", void 0), Ht([(0, b.RL)("scene"), Zt(
						"design:type", Function), Zt(
						"design:paramtypes", []), Zt(
						"design:returntype", void 0)], Wt.prototype,
					"onSceneChange", null), Ht([(0, b.RL)("action"),
					Zt("design:type", Function), Zt(
						"design:paramtypes", []), Zt(
						"design:returntype", void 0)
				], Wt.prototype, "onActionChange", null), Wt = Ht([
					(0, b.wA)({
						template: i(329),
						components: {
							viewport: X,
							setting: zt,
							playbar: Lt
						}
					}), Zt("design:paramtypes", [])
				], Wt);
				const qt = Wt;
				var Xt = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					Jt = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				let $t = class extends s.default {
					constructor() {
						super(), this.world = new G, this.preferance =
							new H(this.world), this.palette =
							new Z(this.world), this.width = 0,
							this.height = 0, this.size = 0,
							this.scene = "", this.action = "",
							this.scriptd = !1
					}
					mounted() {
						this.setting.items.order.disable = !0;
						const t = (location.search || "")
							.match(/(\?|\&)data=([^&]*)(&|$)/);
						let e = t ? t[2] : "";
						e = window.atob(e);
						try {
							const t = JSON.parse(e);
							if (t.order && (this.world.order =
								t.order), t.drama) {
								this.scene = t.drama.scene,
									this.playbar.scene = this.scene,
									this.action = t.drama.action,
									this.playbar.action = this.action;
								const e = t.drama.stickers;
								if (e)
									for (const t of [x.L, x.R,
										x.D, x.U, x.B,
										x.F
									]) {
										const i = e[x[t]];
										if (i)
											for (const e in i) {
												const s =
													Number(e),
													n = i[s];
												this.world.cube
													.stick(s, t,
														n)
											}
									}
							}
						} catch (t) {
							console.log(t)
						}
						this.$nextTick(this.resize), this.$nextTick(
							(() => {
								this.preferance.refresh(),
									this.palette.refresh()
							})), this.loop()
					}
					loop() {
						var t;
						requestAnimationFrame(this.loop.bind(
								this)), null === (t = this.viewport) ||
							void 0 === t || t.draw()
					}
					resize() {
						var t, e;
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12)), null === (t = this.viewport) ||
							void 0 === t || t.resize(this.width,
								this.height - 2.6 * this.size),
							null === (e = this.playbar) || void 0 ===
							e || e.resize(this.size)
					}
					home() {
						window.location.search = ""
					}
					script() {
						this.scriptd = !0
					}
				};
				Xt([(0, b.DF)("world"), Jt("design:type", G)], $t.prototype,
					"world", void 0), Xt([(0, b.DF)("preferance"),
					Jt("design:type", H)
				], $t.prototype, "preferance", void 0), Xt([(0, b.DF)
					("palette"), Jt("design:type", Z)
				], $t.prototype, "palette", void 0), Xt([(0, b.Rl)(
						"viewport"), Jt("design:type", X)], $t.prototype,
					"viewport", void 0), Xt([(0, b.Rl)("playbar"),
					Jt("design:type", Lt)
				], $t.prototype, "playbar", void 0), Xt([(0, b.Rl)(
						"setting"), Jt("design:type", zt)], $t.prototype,
					"setting", void 0), $t = Xt([(0, b.wA)({
					template: i(484),
					components: {
						viewport: X,
						playbar: Lt,
						setting: zt
					}
				}), Jt("design:paramtypes", [])], $t);
				const Yt = $t;
				class Kt {
					static GetNParity(t, e) {
						let i = 0;
						for (let s = e - 2; s >= 0; s--) i ^= t % (
							e - s), t = ~~(t / (e - s));
						return 1 & i
					}
					static SetVal(t, e, i) {
						return i ? e << 1 | 1 & t : e | 248 & t
					}
					static GetVal(t, e) {
						return e ? t >> 1 : 7 & t
					}
					static SetNPerm(t, e, i, s) {
						i--;
						let n = 1985229328;
						for (let r = 0; r < i; ++r) {
							const o = Kt.Fact[i - r];
							let a = ~~(e / o);
							e %= o, a <<= 2, t[r] = Kt.SetVal(t[r],
								n >> a & 15, s);
							const h = (1 << a) - 1;
							n = (n & h) + (n >> 4 & ~h)
						}
						t[i] = Kt.SetVal(t[i], 15 & n, s)
					}
					static GetNPerm(t, e, i) {
						let s = 0,
							n = 1985229328;
						for (let r = 0; r < e - 1; ++r) {
							const o = Kt.GetVal(t[r], i) << 2;
							s = (e - r) * s + (n >> o & 15), n -=
								286331152 << o
						}
						return s
					}
					static SetNPermFull(t, e, i, s) {
						t[i - 1] = Kt.SetVal(t[i - 1], 0, s);
						for (let n = i - 2; n >= 0; --n) {
							t[n] = Kt.SetVal(t[n], e % (i - n), s),
								e = ~~(e / (i - n));
							for (let e = n + 1; e < i; ++e) Kt.GetVal(
									t[e], s) >= Kt.GetVal(t[n], s) &&
								(t[e] = Kt.SetVal(t[e], Kt.GetVal(t[
									e], s) + 1, s))
						}
					}
					static GetNPermFull(t, e, i) {
						let s = 0;
						for (let n = 0; n < e; ++n) {
							s *= e - n;
							for (let r = n + 1; r < e; ++r) Kt.GetVal(
									t[r], i) < Kt.GetVal(t[n], i) &&
								++s
						}
						return s
					}
					static GetComb(t, e, i) {
						let s = 0,
							n = 4;
						for (let r = t.length - 1; r >= 0; r--) {
							(12 & Kt.GetVal(t[r], i)) == e && (s +=
								Kt.Cnk[r][n--])
						}
						return s
					}
					static SetComb(t, e, i, s) {
						const n = t.length - 1;
						let r = 4,
							o = n;
						for (let a = n; a >= 0; a--) e >= Kt.Cnk[a]
							[r] ? (e -= Kt.Cnk[a][r--], t[a] = Kt.SetVal(
								t[a], r | i, s)) : ((12 & o) == i &&
								(o -= 4), t[a] = Kt.SetVal(t[a], o--,
									s))
					}
				}
				Kt.Ux1 = 0, Kt.Ux2 = 1, Kt.Ux3 = 2, Kt.Rx1 = 3, Kt.Rx2 =
					4, Kt.Rx3 = 5, Kt.Fx1 = 6, Kt.Fx2 = 7, Kt.Fx3 = 8,
					Kt.Dx1 = 9, Kt.Dx2 = 10, Kt.Dx3 = 11, Kt.Lx1 = 12,
					Kt.Lx2 = 13, Kt.Lx3 = 14, Kt.Bx1 = 15, Kt.Bx2 = 16,
					Kt.Bx3 = 17, Kt.U1 = 0, Kt.U2 = 1, Kt.U3 = 2, Kt.U4 =
					3, Kt.U5 = 4, Kt.U6 = 5, Kt.U7 = 6, Kt.U8 = 7, Kt.U9 =
					8, Kt.R1 = 9, Kt.R2 = 10, Kt.R3 = 11, Kt.R4 = 12,
					Kt.R5 = 13, Kt.R6 = 14, Kt.R7 = 15, Kt.R8 = 16, Kt.R9 =
					17, Kt.F1 = 18, Kt.F2 = 19, Kt.F3 = 20, Kt.F4 = 21,
					Kt.F5 = 22, Kt.F6 = 23, Kt.F7 = 24, Kt.F8 = 25, Kt.F9 =
					26, Kt.D1 = 27, Kt.D2 = 28, Kt.D3 = 29, Kt.D4 = 30,
					Kt.D5 = 31, Kt.D6 = 32, Kt.D7 = 33, Kt.D8 = 34, Kt.D9 =
					35, Kt.L1 = 36, Kt.L2 = 37, Kt.L3 = 38, Kt.L4 = 39,
					Kt.L5 = 40, Kt.L6 = 41, Kt.L7 = 42, Kt.L8 = 43, Kt.L9 =
					44, Kt.B1 = 45, Kt.B2 = 46, Kt.B3 = 47, Kt.B4 = 48,
					Kt.B5 = 49, Kt.B6 = 50, Kt.B7 = 51, Kt.B8 = 52, Kt.B9 =
					53, Kt.U = 0, Kt.R = 1, Kt.F = 2, Kt.D = 3, Kt.L =
					4, Kt.B = 5, Kt.CornerFacelet = [
						[Kt.U9, Kt.R1, Kt.F3],
						[Kt.U7, Kt.F1, Kt.L3],
						[Kt.U1, Kt.L1, Kt.B3],
						[Kt.U3, Kt.B1, Kt.R3],
						[Kt.D3, Kt.F9, Kt.R7],
						[Kt.D1, Kt.L9, Kt.F7],
						[Kt.D7, Kt.B9, Kt.L7],
						[Kt.D9, Kt.R9, Kt.B7]
					], Kt.EdgeFacelet = [
						[Kt.U6, Kt.R2],
						[Kt.U8, Kt.F2],
						[Kt.U4, Kt.L2],
						[Kt.U2, Kt.B2],
						[Kt.D6, Kt.R8],
						[Kt.D2, Kt.F8],
						[Kt.D4, Kt.L8],
						[Kt.D8, Kt.B8],
						[Kt.F6, Kt.R4],
						[Kt.F4, Kt.L6],
						[Kt.B6, Kt.L4],
						[Kt.B4, Kt.R6]
					], Kt.MOVE2STR = ["U ", "U2", "U'", "R ", "R2",
						"R'", "F ", "F2", "F'", "D ", "D2", "D'", "L ",
						"L2", "L'", "B ", "B2", "B'"
					], Kt.UD2STD = [Kt.Ux1, Kt.Ux2, Kt.Ux3, Kt.Rx2, Kt.Fx2,
						Kt.Dx1, Kt.Dx2, Kt.Dx3, Kt.Lx2, Kt.Bx2, Kt.Rx1,
						Kt.Rx3, Kt.Fx1, Kt.Fx3, Kt.Lx1, Kt.Lx3, Kt.Bx1,
						Kt.Bx3
					], Kt.STD2UD = (() => {
						const t = [];
						for (let e = 0; e < 18; e++) t[Kt.UD2STD[e]] =
							e;
						return t
					})(), Kt.CKMV2BIT = (() => {
						const t = [];
						for (let e = 0; e < 10; e++) {
							const i = ~~(Kt.UD2STD[e] / 3);
							t[e] = 0;
							for (let s = 0; s < 10; s++) {
								const n = ~~(Kt.UD2STD[s] / 3);
								t[e] |= (i == n || i % 3 == n % 3 &&
									i >= n ? 1 : 0) << s
							}
						}
						return t[10] = 0, t
					})(), Kt.Cnk = (() => {
						const t = [],
							e = [1];
						for (let i = 0; i < 13; i++) {
							t[i] = [], e[i + 1] = e[i] * (i + 1), t[
								i][0] = t[i][i] = 1;
							for (let e = 1; e < 13; e++) t[i][e] =
								e <= i ? t[i - 1][e - 1] + t[i - 1]
								[e] : 0
						}
						return t
					})(), Kt.Fact = (() => {
						const t = [1];
						for (let e = 0; e < 13; e++) t[e + 1] = t[e] *
							(e + 1);
						return t
					})();
				class Qt {
					constructor() {
						this.twist = 0, this.tsym = 0, this.flip =
							0, this.fsym = 0, this.slice = 0, this.prun =
							0
					}
					static Init() {
						if (46 != Qt.inited) {
							if (0 == Qt.inited) return Qt.CubieC =
								new te, Qt.CubieD = new te, te.InitPermSym2Raw(),
								Qt.InitCPermMove(), Qt.InitEPermMove(),
								Qt.InitMPermMoveConj(), Qt.InitCombPMoveConj(),
								te.InitFlipSym2Raw(), te.InitTwistSym2Raw(),
								Qt.InitFlipMove(), Qt.InitTwistMove(),
								Qt.InitUDSliceMoveConj(), void(
									Qt.inited = 1);
							Qt.InitMCPermPrun(), Qt.InitEPermCombPPrun(),
								Qt.InitSliceTwistPrun(), Qt.InitSliceFlipPrun()
						}
					}
					static InitCPermMove() {
						for (let t = 0; t < Qt.N_PERM_SYM; t++) {
							Qt.CPermMove[t] = [], Qt.CubieC.CPerm =
								te.EPermS2R[t];
							for (let e = 0; e < Qt.N_MOVES2; e++) te
								.CornMult(Qt.CubieC, te.MoveCube[Kt
									.UD2STD[e]], Qt.CubieD), Qt.CPermMove[
									t][e] = Qt.CubieD.CPermSym
						}
					}
					static InitEPermMove() {
						for (let t = 0; t < Qt.N_PERM_SYM; t++) {
							Qt.EPermMove[t] = [], Qt.CubieC.EPerm =
								te.EPermS2R[t];
							for (let e = 0; e < Qt.N_MOVES2; e++) te
								.EdgeMult(Qt.CubieC, te.MoveCube[Kt
									.UD2STD[e]], Qt.CubieD), Qt.EPermMove[
									t][e] = Qt.CubieD.EPermSym
						}
					}
					static InitMPermMoveConj() {
						for (let t = 0; t < Qt.N_MPERM; t++) {
							Qt.MPermMove[t] = [], Qt.MPermConj[t] = [],
								Qt.CubieC.MPerm = t;
							for (let e = 0; e < Qt.N_MOVES2; e++) te
								.EdgeMult(Qt.CubieC, te.MoveCube[Kt
									.UD2STD[e]], Qt.CubieD), Qt.MPermMove[
									t][e] = Qt.CubieD.MPerm;
							for (let e = 0; e < 16; e++) te.EdgeConjugate(
									Qt.CubieC, te.SymMultInv[0][e],
									Qt.CubieD), Qt.MPermConj[t][e] =
								Qt.CubieD.MPerm
						}
					}
					static InitCombPMoveConj() {
						for (let t = 0; t < Qt.N_COMB; t++) {
							Qt.CCombPMove[t] = [], Qt.CCombPConj[t] = [],
								Qt.CubieC.CComb = t % 70;
							for (let e = 0; e < Qt.N_MOVES2; e++) te
								.CornMult(Qt.CubieC, te.MoveCube[Kt
									.UD2STD[e]], Qt.CubieD), Qt.CCombPMove[
									t][e] = Qt.CubieD.CComb + 70 *
								(Qt.P2_PARITY_MOVE >> e & 1 ^ t /
									70);
							for (let e = 0; e < 16; e++) te.CornConjugate(
									Qt.CubieC, te.SymMultInv[0][e],
									Qt.CubieD), Qt.CCombPConj[t][e] =
								Qt.CubieD.CComb + 70 * ~~(t / 70)
						}
					}
					static InitFlipMove() {
						for (let t = 0; t < Qt.N_FLIP_SYM; t++) {
							Qt.FlipMove[t] = [], Qt.CubieC.Flip =
								te.FlipS2R[t];
							for (let e = 0; e < Qt.N_MOVES; e++) te
								.EdgeMult(Qt.CubieC, te.MoveCube[e],
									Qt.CubieD), Qt.FlipMove[t][e] =
								Qt.CubieD.FlipSym
						}
					}
					static InitTwistMove() {
						for (let t = 0; t < Qt.N_TWIST_SYM; t++) {
							Qt.TwistMove[t] = [], Qt.CubieC.Twist =
								te.TwistS2R[t];
							for (let e = 0; e < Qt.N_MOVES; e++) te
								.CornMult(Qt.CubieC, te.MoveCube[e],
									Qt.CubieD), Qt.TwistMove[t][e] =
								Qt.CubieD.TwistSym
						}
					}
					static InitUDSliceMoveConj() {
						for (let t = 0; t < Qt.N_SLICE; t++) {
							Qt.UDSliceMove[t] = [], Qt.UDSliceConj[
								t] = [], Qt.CubieC.UDSlice = t;
							for (let e = 0; e < Qt.N_MOVES; e++) te
								.EdgeMult(Qt.CubieC, te.MoveCube[e],
									Qt.CubieD), Qt.UDSliceMove[t][e] =
								Qt.CubieD.UDSlice;
							for (let e = 0; e < 16; e += 2) te.EdgeConjugate(
								Qt.CubieC, te.SymMultInv[0][e],
								Qt.CubieD), Qt.UDSliceConj[t][e >>
								1
							] = Qt.CubieD.UDSlice
						}
					}
					static SetPruning(t, e, i) {
						t[e >> 3] ^= i << (e << 2)
					}
					static GetPruning(t, e) {
						return t[e >> 3] >> (e << 2) & 15
					}
					static HasZero(t) {
						return 0 != (t - 286331153 & ~t &
							2290649224)
					}
					static InitRawSymPrun(t, e, i, s, n, r, o, a) {
						const h = 15 & a,
							l = 1 == (a >> 4 & 1) ? 14540032 : 0,
							c = a >> 8 & 15,
							d = a >> 12 & 15,
							p = a >> 16 & 15,
							u = (1 << h) - 1,
							v = e * i,
							m = 1 == (a >> 5 & 1) ? 10 : 18,
							f = 10 == m ? 66 : 599186;
						let g = Qt.GetPruning(t, v) - 1;
						if (-1 == g) {
							for (let e = 0; e < 1 + (v >> 3); e++) t[
								e] = 4294967295;
							Qt.SetPruning(t, 0, 15), g = 0
						} else Qt.SetPruning(t, v, 15 ^ g + 1);
						const y = Math.min(Math.max(g + 1, p), d);
						for (; g < y;) {
							const i = g > c,
								a = i ? 15 : g,
								d = 286331153 * a,
								p = i ? g : 15;
							g++, Qt.inited++;
							const y = 15 ^ g;
							let w = 0;
							for (let c = 0; c < v; c++, w >>= 4) {
								if (0 == (7 & c) && (w = t[c >> 3],
									!Qt.HasZero(w ^ d))) {
									c += 7;
									continue
								}
								if ((15 & w) != a) continue;
								const v = c % e,
									x = ~~(c / e);
								for (let a = 0; a < m; a++) {
									let d = r[x][a];
									const m = n[s[v][a]][d & u];
									d >>= h;
									const w = d * e + m,
										b = Qt.GetPruning(t, w);
									if (b == p) {
										if (i) {
											Qt.SetPruning(t, c, y);
											break
										}
										Qt.SetPruning(t, w, y);
										for (let i = 1, s = o[d]; 0 !=
											(s >>= 1); i++) {
											if (1 != (1 & s))
												continue;
											let r = d * e;
											r += n[m][i ^ l >> (i <<
													1) & 3], Qt.GetPruning(
													t, r) == p &&
												Qt.SetPruning(t, r,
													y)
										}
									} else b < g - 1 && (a += f >>
										a & 3)
								}
							}
						}
						Qt.SetPruning(t, v, g + 1 ^ 15)
					}
					static InitSliceTwistPrun() {
						Qt.InitRawSymPrun(Qt.UDSliceTwistPrun, 495,
							324, Qt.UDSliceMove, Qt.UDSliceConj,
							Qt.TwistMove, te.SymStateTwist,
							431619)
					}
					static InitSliceFlipPrun() {
						Qt.InitRawSymPrun(Qt.UDSliceFlipPrun, 495,
							336, Qt.UDSliceMove, Qt.UDSliceConj,
							Qt.FlipMove, te.SymStateFlip,
							431619)
					}
					static InitMCPermPrun() {
						Qt.InitRawSymPrun(Qt.MCPermPrun, 24, 2768,
							Qt.MPermMove, Qt.MPermConj, Qt.CPermMove,
							te.SymStatePerm, 584244)
					}
					static InitEPermCombPPrun() {
						Qt.InitRawSymPrun(Qt.EPermCCombPPrun, Qt.N_COMB,
							2768, Qt.CCombPMove, Qt.CCombPConj,
							Qt.EPermMove, te.SymStatePerm,
							514084)
					}
					setWithPrun(t, e) {
						return this.twist = t.TwistSym, this.flip =
							t.FlipSym, this.tsym = 7 & this.twist,
							this.twist = this.twist >> 3, this.prun =
							0, this.fsym = 7 & this.flip, this.flip =
							this.flip >> 3, this.slice = t.UDSlice,
							this.prun = Math.max(this.prun, Math.max(
								Qt.GetPruning(Qt.UDSliceTwistPrun,
									this.twist * Qt.N_SLICE +
									Qt.UDSliceConj[this.slice][
										this.tsym
									]), Qt.GetPruning(Qt.UDSliceFlipPrun,
									this.flip * Qt.N_SLICE + Qt
									.UDSliceConj[this.slice][
										this.fsym
									]))), this.prun <= e
					}
					doMovePrun(t, e) {
						return this.slice = Qt.UDSliceMove[t.slice]
							[e], this.flip = Qt.FlipMove[t.flip][te
								.Sym8Move[e << 3 | t.fsym]
							], this.fsym = 7 & this.flip ^ t.fsym,
							this.flip >>= 3, this.twist = Qt.TwistMove[
								t.twist][te.Sym8Move[e << 3 | t.tsym]],
							this.tsym = 7 & this.twist ^ t.tsym,
							this.twist >>= 3, this.prun = Math.max(
								Qt.GetPruning(Qt.UDSliceTwistPrun,
									this.twist * Qt.N_SLICE + Qt.UDSliceConj[
										this.slice][this.tsym]), Qt
								.GetPruning(Qt.UDSliceFlipPrun,
									this.flip * Qt.N_SLICE + Qt.UDSliceConj[
										this.slice][this.fsym])),
							this.prun
					}
				}
				Qt.N_MOVES = 18, Qt.N_MOVES2 = 10, Qt.N_SLICE = 495, Qt
					.N_TWIST = 2187, Qt.N_TWIST_SYM = 324, Qt.N_FLIP =
					2048, Qt.N_FLIP_SYM = 336, Qt.N_PERM = 40320, Qt.N_PERM_SYM =
					2768, Qt.N_MPERM = 24, Qt.N_COMB = 70, Qt.P2_PARITY_MOVE =
					0, Qt.UDSliceMove = [], Qt.TwistMove = [], Qt.FlipMove = [],
					Qt.UDSliceConj = [], Qt.UDSliceTwistPrun = [], Qt.UDSliceFlipPrun = [],
					Qt.CPermMove = [], Qt.EPermMove = [], Qt.MPermMove = [],
					Qt.MPermConj = [], Qt.CCombPMove = [], Qt.CCombPConj = [],
					Qt.MCPermPrun = [], Qt.EPermCCombPPrun = [], Qt.inited =
					0;
				class te {
					constructor(t = 0, e = 0, i = 0, s = 0) {
						this.ca = [0, 1, 2, 3, 4, 5, 6, 7], this.ea = [
							0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
							20, 22
						], this.CPerm = t, this.Twist = e, Kt.SetNPermFull(
							this.ea, i, 12, !0), this.Flip = s
					}
					static ESym2CSym(t) {
						return t ^ te.SYM_E2C_MAGIC >> ((15 & t) <<
							1) & 3
					}
					static InitMove() {
						const t = [];
						t[0] = new te(15120, 0, 119750400, 0), t[3] =
							new te(21021, 1494, 323403417, 0), t[6] =
							new te(8064, 1236, 29441808, 550), t[9] =
							new te(9, 0, 5880, 0), t[12] = new te(
								1230, 412, 2949660, 0), t[15] = new te(
								224, 137, 328552, 137);
						for (let e = 0; e < 18; e += 3)
							for (let i = 0; i < 2; i++) t[e + i + 1] =
								new te, te.EdgeMult(t[e + i], t[e],
									t[e + i + 1]), te.CornMult(t[e +
									i], t[e], t[e + i + 1]);
						te.MoveCube = t
					}
					static InitSym() {
						let t = new te,
							e = new te;
						const i = new te(28783, 0, 259268407, 0),
							s = new te(15138, 0, 119765538, 7),
							n = new te(5167, 0, 83473207, 0);
						for (let t = 0; t < 8; t++) n.ca[t] |= 24;
						for (let r = 0; r < 16; r++) te.SymCube[r] =
							new te, te.SymCube[r].copy(t), te.CornMultFull(
								t, s, e), te.EdgeMult(t, s, e), [t,
								e
							] = [e, t], r % 4 == 3 && (te.CornMultFull(
									t, n, e), te.EdgeMult(t, n, e),
								[t, e] = [e, t]), r % 8 == 7 && (te
								.CornMultFull(t, i, e), te.EdgeMult(
									t, i, e), [t, e] = [e, t]);
						for (let t = 0; t < 16; t++) te.SymMult[t] = [],
							te.SymMultInv[t] = [], te.SymMove[t] = [],
							te.SymMoveUD[t] = [];
						for (let t = 0; t < 16; t++)
							for (let e = 0; e < 16; e++) te.SymMult[
									t][e] = t ^ e ^ 84660 >> e & t <<
								1 & 2, te.SymMultInv[te.SymMult[t][
									e
								]][e] = t;
						for (let e = 0; e < 16; e++)
							for (let i = 0; i < 18; i++) {
								te.CornConjugate(te.MoveCube[i], te
									.SymMultInv[0][e], t);
								t: for (let s = 0; s < 18; s++) {
									for (let e = 0; e < 8; e++)
										if (te.MoveCube[s].ca[e] !=
											t.ca[e]) continue t;
									te.SymMove[e][i] = s, te.SymMoveUD[
											e][Kt.STD2UD[i]] =
										Kt.STD2UD[s];
									break
								}
								e % 2 == 0 && (te.Sym8Move[i << 3 |
										e >> 1] = te.SymMove[e]
									[i])
							}
					}
					static InitSym2Raw(t, e, i, s, n) {
						const r = new te,
							o = new te;
						let a = 0,
							h = 0;
						const l = n >= 2 ? 1 : 2,
							c = 1 != n;
						for (let d = 0; d < t; d++)
							if (null == i[d]) {
								switch (n) {
									case 0:
										r.Flip = d;
										break;
									case 1:
										r.Twist = d;
										break;
									case 2:
										r.EPerm = d
								}
								for (let t = 0; t < 16; t += l) {
									switch (c ? te.EdgeConjugate(r,
										t, o) : te.CornConjugate(
										r, t, o), n) {
										case 0:
											h = o.Flip;
											break;
										case 1:
											h = o.Twist;
											break;
										case 2:
											h = o.EPerm
									}
									h == d && (s[a] |= 1 << t / l),
										i[h] = (a << 4 | t) / l
								}
								e[a++] = d
							} return a
					}
					static InitFlipSym2Raw() {
						te.InitSym2Raw(Qt.N_FLIP, te.FlipS2R, te.FlipR2S,
							te.SymStateFlip, 0)
					}
					static InitTwistSym2Raw() {
						te.InitSym2Raw(Qt.N_TWIST, te.TwistS2R, te.TwistR2S,
							te.SymStateTwist, 1)
					}
					static InitPermSym2Raw() {
						te.InitSym2Raw(Qt.N_PERM, te.EPermS2R, te.EPermR2S,
							te.SymStatePerm, 2);
						const t = new te;
						for (let e = 0; e < Qt.N_PERM_SYM; e++) t.EPerm =
							te.EPermS2R[e], te.Perm2CombP[e] = Kt.GetComb(
								t.ea, 0, !0), t.inverse(), te.PermInvEdgeSym[
								e] = t.EPermSym;
						for (let e = 0; e < Qt.N_MPERM; e++) t.MPerm =
							e, t.inverse(), te.MPermInv[e] = t.MPerm
					}
					static Init() {
						te.temps = new te, te.InitMove(), te.InitSym()
					}
					static CornMult(t, e, i) {
						for (let s = 0; s < 8; s++) {
							const n = t.ca[7 & e.ca[s]] >> 3,
								r = e.ca[s] >> 3;
							i.ca[s] = 7 & t.ca[7 & e.ca[s]] | (n +
								r) % 3 << 3
						}
					}
					static CornMultFull(t, e, i) {
						for (let s = 0; s < 8; s++) {
							const n = t.ca[7 & e.ca[s]] >> 3,
								r = e.ca[s] >> 3;
							let o = n + (n < 3 ? r : 6 - r);
							o = o % 3 + (n < 3 == r < 3 ? 0 : 3), i
								.ca[s] = 7 & t.ca[7 & e.ca[s]] | o <<
								3
						}
					}
					static EdgeMult(t, e, i) {
						for (let s = 0; s < 12; s++) i.ea[s] = t.ea[
							e.ea[s] >> 1] ^ 1 & e.ea[s]
					}
					static CornConjugate(t, e, i) {
						const s = te.SymCube[te.SymMultInv[0][e]],
							n = te.SymCube[e];
						for (let e = 0; e < 8; e++) {
							const r = s.ca[7 & t.ca[7 & n.ca[e]]] >>
								3,
								o = t.ca[7 & n.ca[e]] >> 3,
								a = r < 3 ? o : (3 - o) % 3;
							i.ca[e] = 7 & s.ca[7 & t.ca[7 & n.ca[e]]] |
								a << 3
						}
					}
					static EdgeConjugate(t, e, i) {
						const s = te.SymCube[te.SymMultInv[0][e]],
							n = te.SymCube[e];
						for (let e = 0; e < 12; e++) i.ea[e] = s.ea[
							t.ea[n.ea[e] >> 1] >> 1] ^ 1 & t.ea[
							n.ea[e] >> 1] ^ 1 & n.ea[e]
					}
					static GetPermSymInv(t, e, i) {
						let s = te.PermInvEdgeSym[t];
						return i && (s = te.ESym2CSym(s)), 65520 &
							s | te.SymMult[15 & s][e]
					}
					static GetSkipMoves(t) {
						let e = 0;
						for (let i = 1; 0 != (t >>= 1); i++) 1 == (
							1 & t) && (e |= te.FirstMoveSym[i]);
						return e
					}
					copy(t) {
						for (let e = 0; e < 12; e++) this.ea[e] = t
							.ea[e];
						for (let e = 0; e < 8; e++) this.ca[e] = t.ca[
							e]
					}
					inverse() {
						for (let t = 0; t < 12; t++) te.temps.ea[
								this.ea[t] >> 1] = t << 1 | 1 &
							this.ea[t];
						for (let t = 0; t < 8; t++) te.temps.ca[7 &
							this.ca[t]] = t | 32 >> (this.ca[t] >>
							3) & 24;
						this.copy(te.temps)
					}
					URFConjugate() {
						te.CornMult(te.URF2, this, te.temps), te.CornMult(
							te.temps, te.URF1, this), te.EdgeMult(
							te.URF2, this, te.temps), te.EdgeMult(
							te.temps, te.URF1, this)
					}
					get Flip() {
						let t = 0;
						for (let e = 0; e < 11; e++) t = t << 1 | 1 &
							this.ea[e];
						return t
					}
					set Flip(t) {
						let e = 0,
							i = 0;
						for (let s = 10; s >= 0; s--, t >>= 1) e ^=
							i = 1 & t, this.ea[s] = -2 & this.ea[s] |
							i;
						this.ea[11] = -2 & this.ea[11] | e
					}
					get FlipSym() {
						return te.FlipR2S[this.Flip]
					}
					get Twist() {
						let t = 0;
						for (let e = 0; e < 7; e++) t += (t << 1) +
							(this.ca[e] >> 3);
						return t
					}
					set Twist(t) {
						let e = 15,
							i = 0;
						for (let s = 6; s >= 0; s--, t = ~~(t / 3))
							e -= i = t % 3, this.ca[s] = 7 & this.ca[
								s] | i << 3;
						this.ca[7] = 7 & this.ca[7] | e % 3 << 3
					}
					get TwistSym() {
						return te.TwistR2S[this.Twist]
					}
					get UDSlice() {
						return 494 - Kt.GetComb(this.ea, 8, !0)
					}
					set UDSlice(t) {
						Kt.SetComb(this.ea, 494 - t, 8, !0)
					}
					get CPerm() {
						return Kt.GetNPerm(this.ca, 8, !1)
					}
					set CPerm(t) {
						Kt.SetNPerm(this.ca, t, 8, !1)
					}
					get CPermSym() {
						return te.ESym2CSym(te.EPermR2S[this.CPerm])
					}
					get EPerm() {
						return Kt.GetNPerm(this.ea, 8, !0)
					}
					set EPerm(t) {
						Kt.SetNPerm(this.ea, t, 8, !0)
					}
					get EPermSym() {
						return te.EPermR2S[this.EPerm]
					}
					get MPerm() {
						return Kt.GetNPermFull(this.ea, 12, !0) %
							24
					}
					set MPerm(t) {
						Kt.SetNPermFull(this.ea, t, 12, !0)
					}
					get CComb() {
						return Kt.GetComb(this.ca, 0, !1)
					}
					set CComb(t) {
						Kt.SetComb(this.ca, t, 0, !1)
					}
					verify() {
						let t = 0,
							e = 0;
						for (let i = 0; i < 12; i++) e |= 1 << (
							this.ea[i] >> 1), t ^= 1 & this.ea[
							i];
						if (4095 != e) return "missing edges";
						if (0 != t) return "fliped edges";
						e = 0, t = 0;
						for (let i = 0; i < 8; i++) e |= 1 << (7 &
							this.ca[i]), t += this.ca[i] >> 3;
						return 255 != e ? "missing corners" : t % 3 !=
							0 ? "twisted corner" : 0 != (Kt.GetNParity(
								Kt.GetNPermFull(this.ea, 12, !0),
								12) ^ Kt.GetNParity(this.CPerm,
								8)) ? "parity error" : ""
					}
					serialize() {
						const t = "URFDLB",
							e = [];
						for (let i = 0; i < 54; i++) e[i] = t[~~(i /
							9)];
						for (let i = 0; i < 8; i++) {
							const s = 7 & this.ca[i],
								n = this.ca[i] >> 3;
							for (let r = 0; r < 3; r++) e[Kt.CornerFacelet[
								i][(r + n) % 3]] = t[~~(Kt.CornerFacelet[
								s][r] / 9)]
						}
						for (let i = 0; i < 12; i++) {
							const s = this.ea[i] >> 1,
								n = 1 & this.ea[i];
							for (let r = 0; r < 2; r++) e[Kt.EdgeFacelet[
								i][(r + n) % 2]] = t[~~(Kt.EdgeFacelet[
								s][r] / 9)]
						}
						return e.join("")
					}
					deserialize(t) {
						let e = 0;
						const i = [],
							s = t[4] + t[13] + t[22] + t[31] + t[40] +
							t[49];
						for (let n = 0; n < 54; ++n) {
							if (i[n] = s.indexOf(t[n]), -1 == i[n])
								return !1;
							e += 1 << (i[n] << 2)
						}
						if (10066329 != e) return !1;
						let n, r, o, a, h;
						for (o = 0; o < 8; ++o) {
							for (h = 0; h < 3 && (0 != i[Kt.CornerFacelet[
								o][h]] && 3 != i[Kt.CornerFacelet[
								o][h]]); ++h);
							for (n = i[Kt.CornerFacelet[o][(h + 1) %
								3
							]], r = i[Kt.CornerFacelet[o][(h +
								2) % 3]], a = 0; a < 8; ++a)
								if (n == ~~(Kt.CornerFacelet[a][1] /
									9) && r == ~~(Kt.CornerFacelet[
									a][2] / 9)) {
									this.ca[o] = a | h % 3 << 3;
									break
								}
						}
						for (o = 0; o < 12; ++o)
							for (a = 0; a < 12; ++a) {
								if (i[Kt.EdgeFacelet[o][0]] == ~~(
										Kt.EdgeFacelet[a][0] / 9) &&
									i[Kt.EdgeFacelet[o][1]] == ~~(
										Kt.EdgeFacelet[a][1] / 9)) {
									this.ea[o] = a << 1;
									break
								}
								if (i[Kt.EdgeFacelet[o][0]] == ~~(
										Kt.EdgeFacelet[a][1] / 9) &&
									i[Kt.EdgeFacelet[o][1]] == ~~(
										Kt.EdgeFacelet[a][0] / 9)) {
									this.ea[o] = a << 1 | 1;
									break
								}
							}
						return !0
					}
				}
				te.SymCube = [], te.MoveCube = [], te.MoveCubeSym = [],
					te.FirstMoveSym = [], te.SymMult = [], te.SymMultInv = [],
					te.SymMove = [], te.Sym8Move = [], te.SymMoveUD = [],
					te.FlipS2R = [], te.TwistS2R = [], te.EPermS2R = [],
					te.Perm2CombP = [], te.PermInvEdgeSym = [], te.MPermInv = [],
					te.SYM_E2C_MAGIC = 14540032, te.FlipR2S = [], te.TwistR2S = [],
					te.EPermR2S = [], te.SymStateTwist = [], te.SymStateFlip = [],
					te.SymStatePerm = [], te.URF1 = new te(2531, 1373,
						67026819, 1367), te.URF2 = new te(2089, 1906,
						322752913, 2040), te.URFMove = [
						[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
							14, 15, 16, 17
						],
						[6, 7, 8, 0, 1, 2, 3, 4, 5, 15, 16, 17, 9, 10,
							11, 12, 13, 14
						],
						[3, 4, 5, 6, 7, 8, 0, 1, 2, 12, 13, 14, 15, 16,
							17, 9, 10, 11
						],
						[2, 1, 0, 5, 4, 3, 8, 7, 6, 11, 10, 9, 14, 13,
							12, 17, 16, 15
						],
						[8, 7, 6, 2, 1, 0, 5, 4, 3, 17, 16, 15, 11, 10,
							9, 14, 13, 12
						],
						[5, 4, 3, 8, 7, 6, 2, 1, 0, 14, 13, 12, 17, 16,
							15, 11, 10, 9
						]
					];
				class ee {
					constructor() {
						this.length1 = 0, this.urfIdx = 0, this.depth1 =
							0, te.Init(), Qt.Init(), this.move = [],
							this.moveSol = [], this.nodeUD = [],
							this.valid1 = 0, this.allowShorter = !1,
							this.cc = new te, this.urfCubieCube = [],
							this.urfCoordCube = [], this.phase1Cubie = [],
							this.preMoveCubes = [], this.preMoves = [],
							this.preMoveLen = 0, this.maxPreMoves =
							0;
						for (let t = 0; t < 21; t++) this.nodeUD[t] =
							new Qt, this.phase1Cubie[t] = new te;
						for (let t = 0; t < 6; t++) this.urfCubieCube[
								t] = new te, this.urfCoordCube[t] =
							new Qt;
						for (let t = 0; t < ee.MAX_PRE_MOVES; t++)
							this.preMoveCubes[t + 1] = new te
					}
					init() {
						Qt.Init()
					}
					solve(t) {
						if (!this.cc.deserialize(t)) return "error: invalid cube";
						const e = this.cc.verify();
						if (e.length > 0) return "error: " + e;
						this.sol = 22, this.moveSol = null, this.initSearch();
						return this.search()
					}
					initSearch() {
						this.conjMask = (ee.TRY_INVERSE ? 0 : 56) |
							(ee.TRY_THREE_AXES ? 0 : 54), this.maxPreMoves =
							this.conjMask > 7 ? 0 : ee.MAX_PRE_MOVES;
						for (let t = 0; t < 6; t++) this.urfCubieCube[
								t].copy(this.cc), this.urfCoordCube[
								t].setWithPrun(this.urfCubieCube[t],
								20), this.cc.URFConjugate(), t % 3 ==
							2 && this.cc.inverse()
					}
					search() {
						for (this.length1 = 0; this.length1 < this.sol; this
							.length1++)
							for (this.urfIdx = 0; this.urfIdx < 6; this
								.urfIdx++)
								if (0 == (this.conjMask & 1 << this
									.urfIdx) && 0 == this.phase1PreMoves(
									this.maxPreMoves, -30, this
									.urfCubieCube[this.urfIdx]))
									return null == this.moveSol ?
										"error: no solution for prob" :
										this.getSolution();
						return null == this.moveSol ?
							"error: no solution for depth" : this.getSolution()
					}
					getSolution() {
						let t = "";
						if (!this.moveSol) return t;
						const e = this.urfIdx;
						if (e < 3)
							for (let i = 0; i < this.moveSol.length; ++
								i) t += Kt.MOVE2STR[te.URFMove[e][
								this.moveSol[i]
							]] + " ";
						else
							for (let i = this.moveSol.length - 1; i >=
								0; --i) t += Kt.MOVE2STR[te.URFMove[
								e][this.moveSol[i]]] + " ";
						return t
					}
					phase1PreMoves(t, e, i) {
						if (this.preMoveLen = this.maxPreMoves - t,
							(0 == this.preMoveLen || 0 == (225207 >>
								e & 1)) && (this.depth1 = this.length1 -
								this.preMoveLen, this.phase1Cubie[0]
								.copy(i), this.allowShorter = this.depth1 ==
								ee.MIN_P1LENGTH_PRE && 0 != this.preMoveLen,
								this.nodeUD[this.depth1 + 1].setWithPrun(
									i, this.depth1) && 0 == this.phase1(
									this.nodeUD[this.depth1 + 1],
									this.depth1, -1))) return 0;
						if (0 == t || this.preMoveLen + ee.MIN_P1LENGTH_PRE >=
							this.length1) return 1;
						let s = 0;
						(1 == t || this.preMoveLen + 1 + ee.MIN_P1LENGTH_PRE >=
							this.length1) && (s |= 225207), e = 3 *
							~~(e / 3);
						for (let n = 0; n < 18; n++) {
							if (n == e || n == e - 9 || n == e + 9) {
								n += 2;
								continue
							}
							if (0 != (s & 1 << n)) continue;
							te.CornMult(te.MoveCube[n], i, this.preMoveCubes[
								t]), te.EdgeMult(te.MoveCube[n],
								i, this.preMoveCubes[t]), this.preMoves[
								this.maxPreMoves - t] = n;
							if (0 == this.phase1PreMoves(t - 1, n,
								this.preMoveCubes[t])) return 0
						}
						return 1
					}
					phase1(t, e, i) {
						if (0 == t.prun && e < 5) {
							if (this.allowShorter || 0 == e) {
								this.depth1 -= e;
								const t = this.initPhase2Pre();
								return this.depth1 += e, t
							}
							return 1
						}
						for (let s = 0; s < 18; s += 3)
							if (s != i && s != i - 9)
								for (let i = 0; i < 3; i++) {
									const n = s + i,
										r = this.nodeUD[e].doMovePrun(
											t, n);
									if (r > e) break;
									if (r == e) continue;
									this.move[this.depth1 - e] = n,
										this.valid1 = Math.min(this
											.valid1, this.depth1 -
											e);
									const o = this.phase1(this.nodeUD[
										e], e - 1, s);
									if (0 == o) return 0;
									if (2 == o) break
								}
						return 1
					}
					initPhase2Pre() {
						for (let t = this.valid1; t < this.depth1; t++)
							te.CornMult(this.phase1Cubie[t], te.MoveCube[
								this.move[t]], this.phase1Cubie[
								t + 1]), te.EdgeMult(this.phase1Cubie[
									t], te.MoveCube[this.move[t]],
								this.phase1Cubie[t + 1]);
						this.valid1 = this.depth1;
						let t = this.initPhase2(this.phase1Cubie[
							this.depth1]);
						if (0 == t || 0 == this.preMoveLen || 2 ==
							t) return t;
						const e = 3 * ~~(this.preMoves[this.preMoveLen -
							1] / 3) + 1;
						return te.CornMult(te.MoveCube[e], this.phase1Cubie[
								this.depth1], this.phase1Cubie[
								this.depth1 + 1]), te.EdgeMult(te.MoveCube[
									e], this.phase1Cubie[this.depth1],
								this.phase1Cubie[this.depth1 + 1]),
							this.preMoves[this.preMoveLen - 1] += 2 -
							this.preMoves[this.preMoveLen - 1] % 3 *
							2, t = this.initPhase2(this.phase1Cubie[
								this.depth1 + 1]), this.preMoves[
								this.preMoveLen - 1] += 2 - this.preMoves[
								this.preMoveLen - 1] % 3 * 2, t
					}
					initPhase2(t) {
						let e = t.CPermSym;
						const i = 15 & e;
						e >>= 4;
						let s = t.EPermSym;
						const n = 15 & s;
						s >>= 4;
						const r = t.MPerm,
							o = te.GetPermSymInv(s, n, !1),
							a = te.GetPermSymInv(e, i, !0),
							h = Math.max(Qt.GetPruning(Qt.MCPermPrun,
								e * Qt.N_MPERM + Qt.MPermConj[r]
								[i]), Qt.GetPruning(Qt.EPermCCombPPrun,
								s * Qt.N_COMB + Qt.CCombPConj[
									255 & te.Perm2CombP[e]][te.SymMultInv[
									n][i]]), Qt.GetPruning(Qt.EPermCCombPPrun,
								(o >> 4) * Qt.N_COMB + Qt.CCombPConj[
									255 & te.Perm2CombP[a >> 4]
								][te.SymMultInv[15 & o][15 & a]]
							)),
							l = Math.min(ee.MAX_DEPTH2, this.sol -
								this.length1);
						if (h >= l) return h > l ? 2 : 1;
						let c;
						for (c = l - 1; c >= h; c--) {
							const t = this.phase2(s, n, e, i, r, c,
								this.depth1, 10);
							if (t < 0) break;
							c -= t, this.moveSol = [];
							for (let t = 0; t < this.depth1 + c; t++)
								this.appendSolMove(this.move[t]);
							for (let t = this.preMoveLen - 1; t >=
								0; t--) this.appendSolMove(this.preMoves[
								t]);
							this.sol = this.moveSol.length
						}
						return c != l - 1 ? 0 : 1
					}
					appendSolMove(t) {
						if (!this.moveSol) return;
						if (0 == this.moveSol.length) return void this
							.moveSol.push(t);
						const e = ~~(t / 3),
							i = ~~(this.moveSol[this.moveSol.length -
								1] / 3);
						if (e != i)
							if (this.moveSol.length > 1 && e % 3 ==
								i % 3 && e == ~~(this.moveSol[this.moveSol
									.length - 2] / 3)) {
								const i = (t % 3 + this.moveSol[
									this.moveSol.length - 2
								] % 3 + 1) % 4;
								3 == i ? (this.moveSol[this.moveSol
										.length - 2] = this.moveSol[
										this.moveSol.length - 1
									], this.moveSol.pop()) : this.moveSol[
										this.moveSol.length - 2] =
									3 * e + i
							} else this.moveSol.push(t);
						else {
							const i = (t % 3 + this.moveSol[this.moveSol
								.length - 1] % 3 + 1) % 4;
							3 == i ? this.moveSol.pop() : this.moveSol[
									this.moveSol.length - 1] = 3 *
								e + i
						}
					}
					phase2(t, e, i, s, n, r, o, a) {
						if (0 == t && 0 == i && 0 == n) return r;
						const h = Kt.CKMV2BIT[a];
						for (let a = 0; a < 10; a++) {
							if (0 != (h >> a & 1)) {
								a += 66 >> a & 3;
								continue
							}
							const l = Qt.MPermMove[n][a];
							let c = Qt.CPermMove[i][te.SymMoveUD[s]
								[a]
							];
							const d = te.SymMult[15 & c][s];
							c >>= 4;
							let p = Qt.EPermMove[t][te.SymMoveUD[e]
								[a]
							];
							const u = te.SymMult[15 & p][e];
							p >>= 4;
							const v = te.GetPermSymInv(p, u, !1),
								m = te.GetPermSymInv(c, d, !0);
							let f = Qt.GetPruning(Qt.EPermCCombPPrun,
								(v >> 4) * Qt.N_COMB + Qt.CCombPConj[
									255 & te.Perm2CombP[m >> 4]
								][te.SymMultInv[15 & v][15 & m]]
							);
							if (f > r + 1) break;
							if (f >= r) {
								a += 66 >> a & 3 & r - f;
								continue
							}
							if (f = Math.max(Qt.GetPruning(Qt.EPermCCombPPrun,
								p * Qt.N_COMB + Qt.CCombPConj[
									255 & te.Perm2CombP[c]]
								[te.SymMultInv[u][d]]), Qt.GetPruning(
								Qt.MCPermPrun, c * Qt.N_MPERM +
								Qt.MPermConj[l][d])), f >= r) {
								a += 66 >> a & 3 & r - f;
								continue
							}
							const g = this.phase2(p, u, c, d, l, r -
								1, o + 1, a);
							if (g >= 0) return this.move[o] = Kt.UD2STD[
								a], g
						}
						return -1
					}
				}
				ee.MAX_PRE_MOVES = 20, ee.TRY_INVERSE = !0, ee.TRY_THREE_AXES = !
					0, ee.MIN_P1LENGTH_PRE = 7, ee.MAX_DEPTH2 = 13;
				var ie = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					se = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				class ne {
					constructor() {
						this.values = {
							version: "0.2",
							stickers: {},
							history: ""
						}, this.load()
					}
					load() {
						const t = window.localStorage.getItem(
							"helper");
						if (t) {
							const e = JSON.parse(t);
							if (e.version != this.values.version)
								return void this.save();
							this.values = e
						}
					}
					save() {
						window.localStorage.setItem("helper", JSON.stringify(
							this.values))
					}
					get stickers() {
						return this.values.stickers
					}
					set stickers(t) {
						this.values.stickers = t
					}
					get history() {
						return this.values.history
					}
					set history(t) {
						this.values.history = t
					}
				}
				let re = class extends s.default {
					constructor() {
						super(), this.world = new G, this.preferance =
							new H(this.world), this.palette =
							new Z(this.world), this.data = new ne,
							this.solver = new ee, this.width =
							0, this.height = 0, this.size = 0,
							this.color = "R", this.stickers = {},
							this.state = "", this.solutiond = !
							1, this.solution = "", this.colors =
							z, this.colort = ["R", "F", "D",
								"L", "B", "U"
							]
					}
					resize() {
						var t;
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12)), null === (t = this.viewport) ||
							void 0 === t || t.resize(this.width,
								this.height - 4 * this.size)
					}
					mounted() {
						new(Gt())(this.copy.$el), this.world.callbacks
							.push((() => {
								this.callback()
							})), this.setting.items.order.disable = !
							0, this.reload(), this.world.controller
							.taps.push(((t, e) => {
								this.stick(t, e)
							})), this.$nextTick(this.resize),
							this.$nextTick((() => {
								this.preferance.refresh(),
									this.palette.refresh()
							})), this.loop()
					}
					callback() {
						this.data.history = this.world.cube.history
							.exp, this.data.save()
					}
					clear() {
						this.stickers = {}, this.data.stickers =
							this.stickers, this.data.save(),
							this.reload()
					}
					reset() {
						this.world.cube.reset(), this.stickers = {};
						for (const t of [x.L, x.R, x.D, x.U, x.B,
							x.F
						]) {
							const e = x[t],
								i = this.world.cube.table.face(
									e),
								s = [];
							for (const t of i.indices) s[t] = e;
							this.stickers[x[t]] = s
						}
						this.data.stickers = this.stickers,
							this.data.save(), this.reload()
					}
					reload() {
						this.world.order = 3, this.stickers =
							this.data.stickers;
						const t = new L(this.data.history)
							.parse();
						for (const e of t) this.world.cube.twister
							.twist(e, !0, !0);
						this.callback();
						const e = {};
						for (const t of [x.L, x.R, x.D, x.U, x.B,
							x.F
						]) {
							const i = x[t],
								s = this.world.cube.table.face(
									i);
							e[i] = s.indices
						}
						this.world.cube.strip(e);
						for (const t of [x.L, x.R, x.D, x.U, x.B,
							x.F
						]) {
							const e = this.stickers[x[t]];
							if (e)
								for (const i in e) {
									const s = Number(i),
										n = e[s];
									this.world.cube.stick(s, t,
										n)
								}
						}
						this.state = this.world.cube.serialize()
					}
					loop() {
						requestAnimationFrame(this.loop.bind(
								this)), this.viewport.draw(),
							this.solver.init()
					}
					get style() {
						return {
							width: this.size + "px",
							height: this.size + "px",
							"min-width": "0%",
							"min-height": "0%",
							"text-transform": "none",
							flex: 1
						}
					}
					get faces() {
						const t = {};
						for (const e of [x.L, x.R, x.D, x.U, x.B,
							x.F
						]) {
							t[x[e]] = 0
						}
						for (const e of this.state) t[e]++;
						return t
					}
					stick(t, e) {
						if (t < 0) return;
						const i = this.world.cube.cubelets[t];
						t = i.initial, e = i.getFace(e);
						let s = this.stickers[x[e]];
						null == s && (s = {}, this.stickers[x[e]] =
								s), s[t] = this.color, this.world
							.cube.stick(t, e, this.color), this
							.data.stickers = this.stickers,
							this.data.save(), this.state = this
							.world.cube.serialize()
					}
					solve() {
						const t = this.world.cube.serialize();
						this.solution = this.solver.solve(t), 0 ==
							this.solution.length && (this.solution =
								"error: solved"), this.solutiond = !
							0
					}
					play() {
						const t = {},
							e = this.world.order;
						t.order = e;
						const i = {
							scene: this.world.cube.history.exp,
							action: this.solution,
							stickers: this.stickers
						};
						t.drama = i;
						let s = JSON.stringify(t);
						s = window.btoa(s);
						const n = "mode=player&data=" + s,
							r = window.location.origin + window
							.location.pathname + "?" + n;
						window.open(r)
					}
				};
				ie([(0, b.DF)("world"), se("design:type", G)], re.prototype,
					"world", void 0), ie([(0, b.DF)("preferance"),
					se("design:type", H)
				], re.prototype, "preferance", void 0), ie([(0, b.DF)
					("palette"), se("design:type", Z)
				], re.prototype, "palette", void 0), ie([(0, b.Rl)(
						"viewport"), se("design:type", X)], re.prototype,
					"viewport", void 0), ie([(0, b.Rl)("setting"),
					se("design:type", zt)
				], re.prototype, "setting", void 0), ie([(0, b.Rl)(
						"copy"), se("design:type", s.default)], re.prototype,
					"copy", void 0), re = ie([(0, b.wA)({
					template: i(375),
					components: {
						viewport: X,
						setting: zt
					}
				}), se("design:paramtypes", [])], re);
				const oe = re;
				class ae {
					constructor() {
						this.cubes = [], this.renderer = new R.CP7({
								antialias: !0,
								preserveDrawingBuffer: !0,
								alpha: !0
							}), this.renderer.setClearColor(0, 0),
							this.renderer.setPixelRatio(1), this.renderer
							.setSize(256, 256, !0), this.scene =
							new R.xsS, this.scene.rotation.x = Math
							.PI / 6, this.scene.rotation.y = Math.PI /
							16 - Math.PI / 4, this.camera = new R.cPb(
								50, 1, 1, 32 * M.SIZE);
						const t = 2 * Math.atan(1 / 4) * 180 / Math
							.PI;
						this.camera.aspect = 1, this.camera.fov = t,
							this.camera.position.z = 3 * M.SIZE * 4,
							this.camera.lookAt(this.scene.position),
							this.camera.updateProjectionMatrix();
						const e = new R.Mig(16777215, .8);
						this.scene.add(e);
						const i = new R.Ox3(16777215, .2);
						i.position.set(M.SIZE, 4 * M.SIZE, 2 * M.SIZE),
							this.scene.add(i)
					}
					set order(t) {
						if (this.scene.remove(this.cube), null ==
							this.cubes[t]) {
							this.cubes[t] = new N(t);
							for (const e of this.cubes[t].cubelets)
								e.mirror = !1
						}
						this.cube = this.cubes[t], this.scene.add(
							this.cube)
					}
					get order() {
						return this.cube.order
					}
					snap(t, e, i) {
						this.order = i, this.cube.strip(t), this.cube
							.reset(), this.twist(e), this.camera.aspect =
							1, this.camera.updateProjectionMatrix(),
							this.renderer.render(this.scene, this.camera);
						return this.renderer.domElement.toDataURL(
							"image/png")
					}
					twist(t) {
						const e = new L(t)
							.parse();
						for (const t of e) {
							let e = -Math.PI / 2;
							t.reverse && (e = -e), t.times && (e *=
								t.times);
							const i = this.cube.table.convert(t);
							for (const t of i) t.group.twist(Math.PI /
								2 * t.twist, !0)
						}
					}
				}
				var he = function(t, e, i, s) {
						var n, r = arguments.length,
							o = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(
								e, i) : s;
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.decorate) o = Reflect.decorate(
							t, e, i, s);
						else
							for (var a = t.length - 1; a >= 0; a--)(n =
								t[a]) && (o = (r < 3 ? n(o) : r > 3 ?
								n(e, i, o) : n(e, i)) || o);
						return r > 3 && o && Object.defineProperty(e, i,
							o), o
					},
					le = function(t, e) {
						if ("object" == typeof Reflect && "function" ==
							typeof Reflect.metadata) return Reflect.metadata(
							t, e)
					};
				class ce {
					constructor() {
						this.algs = i(961), this.values = {
							version: "0.6",
							position: {
								group: 0,
								index: 0
							},
							modify: [
								[],
								[],
								[]
							]
						}, this.load()
					}
					load() {
						const t = window.localStorage.getItem(
							"algs");
						if (t) {
							const e = JSON.parse(t);
							e.version != this.values.version ? this
								.save() : this.values = e
						}
						for (let t = 0; t < this.algs.length; t++) {
							const e = this.algs[t],
								i = this.values.modify[t];
							for (let t = 0; t < e.items.length; t++) {
								const s = e.items[t],
									n = i[t];
								n && n.length > 0 ? s.exp = n : s.exp =
									s.origin
							}
						}
					}
					modify(t, e, i) {
						const s = this.algs[t].items[e];
						i == s.origin ? this.values.modify[t][e] =
							"" : this.values.modify[t][e] = i, s.exp =
							i
					}
					save() {
						window.localStorage.setItem("algs", JSON.stringify(
							this.values))
					}
					get position() {
						return this.values.position
					}
				}
				let de = class extends s.default {
					constructor() {
						super(), this.world = new G, this.preferance =
							new H(this.world), this.palette =
							new Z(this.world), this.data = new ce,
							this.capture = new ae, this.width =
							320, this.height = 640, this.size =
							0, this.tab = "tab-0", this.pics = [],
							this.listd = !1, this.name = "",
							this.origin = "", this.action = ""
					}
					mounted() {
						this.setting.items.order.disable = !0;
						for (let t = 0; t < this.data.algs.length; t++)
							this.pics.push([]);
						this.$nextTick(this.resize), this.$nextTick(
							(() => {
								this.preferance.refresh(),
									this.palette.refresh()
							})), this.reload(), this.loop()
					}
					snap(t, e) {
						const i = this.data.algs[t],
							s = i.items[e],
							n = s.origin,
							r = s.scramble;
						let o = s.exp ? s.exp : n;
						o = r ? "x2 " + o : "x2 (" + o + ")'";
						const a = s.order ? s.order : 3;
						return this.capture.snap(i.strip, o, a)
					}
					loop() {
						if (requestAnimationFrame(this.loop.bind(
							this)), !this.viewport.draw())
							for (let t = 0; t < 2; t++) this.pics
								.some(((t, e) => {
									const i = this.data
										.algs[e];
									if (t.length >= i.items
										.length) return !
										1;
									const s = t.length;
									return t.push(this.snap(
										e, s)), !0
								}))
					}
					resize() {
						var t, e;
						this.width = document.documentElement.clientWidth,
							this.height = document.documentElement
							.clientHeight, this.size = Math.ceil(
								Math.min(this.width / 6, this.height /
									12)), null === (t = this.viewport) ||
							void 0 === t || t.resize(this.width,
								this.height - 3.5 * this.size),
							null === (e = this.playbar) || void 0 ===
							e || e.resize(this.size)
					}
					get grid() {
						const t = Math.min(this.width / 4, this
								.height / 6),
							e = ~~(this.width / t);
						return ~~(this.width / e)
					}
					get style() {
						return {
							width: this.size + "px",
							height: this.size + "px",
							"min-width": "0%",
							"min-height": "0%",
							"text-transform": "none",
							flex: 1
						}
					}
					tap(t) {
						switch (t) {
							case "list":
								this.listd = !0
						}
					}
					reload() {
						this.data.save();
						const t = this.data.algs[this.data.position
								.group],
							e = t.items[this.data.position.index],
							i = e.order ? e.order : 3;
						i != this.world.order && (this.world.order =
							i, this.preferance.refresh());
						const s = t.strip;
						this.world.cube.strip(s), this.name = e
							.name, this.origin = e.origin, this
							.action = e.exp;
						const n = "x2" + (e.scramble ? "" : "^");
						this.playbar.scene = n
					}
					onActionChange() {
						const t = this.data.position;
						this.data.modify(t.group, t.index, this
								.action), this.data.save(),
							this.pics[t.group][t.index] && (
								this.pics[t.group][t.index] =
								this.snap(t.group, t.index)),
							this.playbar.action = this.action
					}
					select(t, e) {
						this.data.position.group = t, this.data
							.position.index = e, this.reload(),
							this.listd = !1
					}
				};
				he([(0, b.DF)("world"), le("design:type", G)], de.prototype,
					"world", void 0), he([(0, b.DF)("preferance"),
					le("design:type", H)
				], de.prototype, "preferance", void 0), he([(0, b.DF)
					("palette"), le("design:type", Z)
				], de.prototype, "palette", void 0), he([(0, b.Rl)(
						"viewport"), le("design:type", X)], de.prototype,
					"viewport", void 0), he([(0, b.Rl)("playbar"),
					le("design:type", Lt)
				], de.prototype, "playbar", void 0), he([(0, b.Rl)(
						"setting"), le("design:type", zt)], de.prototype,
					"setting", void 0), he([(0, b.RL)("action"), le(
						"design:type", Function), le(
						"design:paramtypes", []), le(
						"design:returntype", void 0)], de.prototype,
					"onActionChange", null), de = he([(0, b.wA)({
					template: i(630),
					components: {
						viewport: X,
						setting: zt,
						playbar: Lt
					}
				}), le("design:paramtypes", [])], de);
				const pe = de;
				! function() {
					var t, e = document.createElement("script");
					e.src =
						"https://hm.baidu.com/hm.js?e3fd96123e7614cd5ea9dc70df73217f";
					var i = document.getElementsByTagName("script")[0];
					null === (t = i.parentNode) || void 0 === t || t.insertBefore(
						e, i)
				}(), s.default.use(r());
				const ue = new(r())({});
				s.default.prototype.vuetify = ue;
				const ve = (location.search || "")
					.match(/(\?|\&)mode=([^&]*)(&|$)/),
					me = ve ? ve[2] : "playground";
				let fe;
				switch (s.default.prototype.mode = me, me) {
					case "director":
						fe = qt;
						break;
					case "algs":
						fe = pe;
						break;
					case "player":
						fe = Yt;
						break;
					case "helper":
						fe = oe;
						break;
					case "reset":
						window.localStorage.clear();
						const t = window.location.origin + window.location
							.pathname;
						window.location.replace(t);
						break;
					default:
						fe = Dt
				}
				const ge = new s.default({
					vuetify: ue,
					el: "#app",
					render: t => t(fe)
				})
			},
			961: t => {
				"use strict";
				t.exports = JSON.parse(
					'[{"name":"F2L","strip":{"D":[0,1,2,9,10,11,18,19,20],"F":[18,19,20],"R":[2,11,20],"B":[0,1,2],"L":[0,9,18]},"items":[{"name":"F2L-01","origin":"U(RU\'R\')"},{"name":"F2L-02","origin":"y\'U\'(R\'UR)y"},{"name":"F2L-03","origin":"y\'(R\'U\'R)y"},{"name":"F2L-04","origin":"(RUR\')"},{"name":"F2L-05","origin":"U\'(RUR\'U2) (RU\'R\')"},{"name":"F2L-06","origin":"U\'rU\' (R\'URUr\')"},{"name":"F2L-07","origin":"U\'(RU\'2R\'U2) (RU\'R\')"},{"name":"F2L-08","origin":"d(R\'U2RU\'2) (R\'UR)y"},{"name":"F2L-09","origin":"U\'(RU\'R\'U) y\'(R\'U\'R)y"},{"name":"F2L-10","origin":"U2(RU\'R\'U\') (RUR\')"},{"name":"F2L-11","origin":"U\'(RU2\'R\'U) y\'(R\'U\'R)y"},{"name":"F2L-12","origin":"(RU\'R\'U) (RU\'R\'U2) (RU\'R\')"},{"name":"F2L-13","origin":"d(R\'URU\') (R\'U\'R)y"},{"name":"F2L-14","origin":"U\'(RU\'R\'U) (RUR\')"},{"name":"F2L-15","origin":"(R\'D\'RU\') (R\'DRU) (RU\'R\')"},{"name":"F2L-16","origin":"(RU\'R\'U2) y\'(R\'U\'R)y"},{"name":"F2L-17","origin":"(RU\'2R\'U\') (RUR\')"},{"name":"F2L-18","origin":"y\'(R\'U2RU) (R\'U\'R)y"},{"name":"F2L-19","origin":"U(RU\'2R\'U) (RU\'R\')"},{"name":"F2L-20","origin":"y\'U\'(R\'U2RU\') (R\'UR)y"},{"name":"F2L-21","origin":"(RU\'R\'U2) (RUR\')"},{"name":"F2L-22","origin":"(rU\'r\'U2) (rUr\')"},{"name":"F2L-23","origin":"U(RU\'R\'U\') (RU\'R\'URU\'R\')"},{"name":"F2L-24","origin":"F(URU\'R\') (F\'RU\'R\')"},{"name":"F2L-25","origin":"(R\'F\'RU) (RU\'R\'F)"},{"name":"F2L-26","origin":"U(RU\'R\'U\') y\'(R\'UR)y"},{"name":"F2L-27","origin":"(RU\'R\'U) (RU\'R\')"},{"name":"F2L-28","origin":"y\'(R\'URU\') (R\'UR)y"},{"name":"F2L-29","origin":"y\'(R\'U\'RU) (R\'U\'R)y"},{"name":"F2L-30","origin":"(RUR\'U\') (RUR\')"},{"name":"F2L-31","origin":"U\'(R\'FRF\') (RU\'R\')"},{"name":"F2L-32","origin":"(URU\'R\')3"},{"name":"F2L-33","origin":"U\'(RU\'R\'U2) (RU\'R\')"},{"name":"F2L-34","origin":"U\'(RU2\'R\'U) (RUR\')"},{"name":"F2L-35","origin":"U2(RU\'R\'U\') y\'(R\'U\'R)y"},{"name":"F2L-36","origin":"U(F\'U\'FU\') (RUR\')"},{"name":"F2L-37","origin":"(R\'FRF\') (RU\'R\'URU\'R\'U2RU\'R\')"},{"name":"F2L-38","origin":"(RU\'R\'U\') (RUR\'U2) (RU\'R\')"},{"name":"F2L-39","origin":"(RU\'R\'U) (RU\'2R\'U) (RU\'R\')"},{"name":"F2L-40","origin":"(rU\'r\'U2rUr\') (RUR\')"},{"name":"F2L-41","origin":"(RU\'R\') (rU\'r\'U2rUr\')"}]},{"name":"OLL","strip":{"F":[18,19,20,21,22,23,24,25,26],"R":[2,5,8,11,14,17,20,23,26],"B":[0,1,2,3,4,5,6,7,8],"L":[0,3,6,9,12,15,18,21,24],"U":[6,7,8,15,16,17,24,25,26]},"items":[{"name":"OLL-01","origin":"(RU\'R2\'D\') (rU\'r\'D) R2UR\'"},{"name":"OLL-02","origin":"(RU\'R2\'D\') (rUr\'D) R2UR\'"},{"name":"OLL-03","origin":"M\'U (r\'U2\'rU) (R\'UR2r\')"},{"name":"OLL-04","origin":"(R\'F2R2U2\'R\') (F\'RU2\'R2\'F2R)"},{"name":"OLL-05","origin":"l\'U2 (LUL\'U)l"},{"name":"OLL-06","origin":"rU2\'R\'U\'RU\'r\'"},{"name":"OLL-07","origin":"rUR\'URU\'2r\'"},{"name":"OLL-08","origin":"l\'U\'LU\'L\'U2l"},{"name":"OLL-09","origin":"(RUR\'U\') (R\'FR2U) (R\'U\'F\')"},{"name":"OLL-10","origin":"(RUR\'U) (R\'FRF\') (RU\'2R\')"},{"name":"OLL-11","origin":"r\'(R2UR\'URU\'2R\') UM\'"},{"name":"OLL-12","origin":"r (R2\'U\'RU\'R\'U2R) U\'Rr\'"},{"name":"OLL-13","origin":"FU (RU\'R2\'F\'R) (URU\'R\')"},{"name":"OLL-14","origin":"(rUR\'U\') r\'F (R2UR\'U\') F\'"},{"name":"OLL-15","origin":"R\'F\'R (L\'U\'LU) R\'FR"},{"name":"OLL-16","origin":"(rUr\')(RUR\'U\')(rU\'r\')"},{"name":"OLL-17","origin":"(FR\'F\'R2) (r\'URU\'R\'U\'M\')"},{"name":"OLL-18","origin":"(RU2\'R2\'FRF\') (U2\'M\'URU\'r\')"},{"name":"OLL-19","origin":"r\'RU(RUR\'U\') M\' (R\'FRF\')"},{"name":"OLL-20","origin":"(rUR\'U\') rR\'M\'U (RU\'R\'U\') M\'"},{"name":"OLL-21","origin":"(RUR\'U) (RU\'R\'U) RU2\'R\'"},{"name":"OLL-22","origin":"RU\'2(R\'2U\') (R2U\') R\'2U\'2R"},{"name":"OLL-23","origin":"R2D (R\'U2RD\') R\'U2R\'"},{"name":"OLL-24","origin":"(rUR\'U\') (r\'FRF\')"},{"name":"OLL-25","origin":"F\'(rUR\'U\') (r\'FR)"},{"name":"OLL-26","origin":"RU\'2R\'U\'RU\'R\'"},{"name":"OLL-27","origin":"RUR\'URU2\'R\'"},{"name":"OLL-28","origin":"(rUR\'U\') (r\'RU) (RU\'R\')"},{"name":"OLL-29","origin":"RF (R\'URF\') (R2\'FRU\') R\'F\'R"},{"name":"OLL-30","origin":"FR\'F (R2U\'R\'U\') (RUR\'F2)"},{"name":"OLL-31","origin":"(R\'U\') (FURU\'R\'F\') R"},{"name":"OLL-32","origin":"RU(B\'U\'R\'URB) R\'"},{"name":"OLL-33","origin":"(RUR\'U\') (R\'FRF\')"},{"name":"OLL-34","origin":"(RUR2U\') (R\'FRU) (RU\'F\')"},{"name":"OLL-35","origin":"(RU\'2R\'2) (FRF\') (RU\'2R\')"},{"name":"OLL-36","origin":"(L\'U\'LU\') (L\'ULU) (LF\'L\'F)"},{"name":"OLL-37","origin":"(FR\'F\'R) (URU\'R\')"},{"name":"OLL-38","origin":"(RUR\'U) (RU\'R\'U\') (R\'FRF\')"},{"name":"OLL-39","origin":"f\'(rUr\'U\')(r\'FrS)"},{"name":"OLL-40","origin":"(R\'FRUR\'U\') (F\'UR)"},{"name":"OLL-41","origin":"(RUR\'U) (RU2R\') F(RUR\'U\')F\'"},{"name":"OLL-42","origin":"(R\'U2\'RUR\'UR) U (FRUR\'U\'F\')"},{"name":"OLL-43","origin":"R\'U\' F\' U F R"},{"name":"OLL-44","origin":"f(RUR\'U\')f\'"},{"name":"OLL-45","origin":"F(RUR\'U\')F\'"},{"name":"OLL-46","origin":"R\'U\' (R\'FRF\') UR"},{"name":"OLL-47","origin":"F\'(L\'U\'LU)2F"},{"name":"OLL-48","origin":"F(RUR\'U\')2F\'"},{"name":"OLL-49","origin":"RB\'R2\'FR2BR2\'F\'R"},{"name":"OLL-50","origin":"R\'FR2B\'R2\'F\'R2BR\'"},{"name":"OLL-51","origin":"f(RUR\'U\')2f\'"},{"name":"OLL-52","origin":"(R\'F\'U\'FU\') (RUR\'UR)"},{"name":"OLL-53","origin":"(l\'U\'LU\') (L\'ULU\') L\'U2l"},{"name":"OLL-54","origin":"(rUR\'U) (RU\'R\'U) (RU2r\')"},{"name":"OLL-55","origin":"(R\'FRU) (RU\'R2\'F\') (R2U\'R\'U) (RUR\')"},{"name":"OLL-56","origin":"R\'F\'R (U\'L\'UL)2 R\'FR"},{"name":"OLL-57","origin":"(RUR\'U\') r(R\'URU\'r\')"}]},{"name":"PLL","strip":{},"items":[{"name":"PLL-Aa","origin":"(l\'UR\'D2) (RU\'R\'D2) R2x\'"},{"name":"PLL-Ab","origin":"(lU\'RD2) (R\'URD2) R2\'x"},{"name":"PLL-E","origin":"x\'(RU\'R\'D) (RUR\'D\') (RUR\'D) (RU\'R\'D\')x"},{"name":"PLL-F","origin":"(R\'U\'F\')(RUR\'U\') (R\'FR2U\'R\'U\')(RUR\'UR)"},{"name":"PLL-Ga","origin":"R2U (R\'UR\'U\') (RU\'R2U\'D) (R\'URD\')"},{"name":"PLL-Gb","origin":"(R\'d\'F)(R2u) (R\'URU\'Ru\'R\'2)y\'"},{"name":"PLL-Gc","origin":"R2\'U\' (RU\'RU) (R\'UR2UD\') (RU\'R\'D)"},{"name":"PLL-Gd","origin":"(RUR\'U\'D) (R2U\'RU\') (R\'UR\'U)R2D\'"},{"name":"PLL-H","origin":"M2U M2U2 M2U M2"},{"name":"PLL-Ja","origin":"(rR2\'FRF\'RU2\') (r\'UrU2\'r\')"},{"name":"PLL-Jb","origin":"(RUR\'F\') (RUR\'U\') (R\'F)(R2U\'R\')"},{"name":"PLL-Na","origin":"(F\'RUR\'U\'R\'FR2) (FU\'R\'U\'RUF\'R\')"},{"name":"PLL-Nb","origin":"(R\'URU\') (R\'F\'U\'F) (RUR\'U\') RU\'fRf\'"},{"name":"PLL-Ra","origin":"(RU\'R\'U\') (RURD) (R\'U\'RD\') R\'U2R\'"},{"name":"PLL-Rb","origin":"(R2\'FRURU\'R\'F\') (RU2\'R\'U2R)"},{"name":"PLL-T","origin":"(RUR\'U\')(R\'F) (R2U\'R\'U\')(RUR\'F\')"},{"name":"PLL-Ua","origin":"(RU\'R)(URUR) (U\'R\'U\'R2)"},{"name":"PLL-Ub","origin":"(R2U)(RUR\'U\') (R\'U\')(R\'UR\')"},{"name":"PLL-V","origin":"RU\' (RUR\'D) (RD\'RU\'D) (R2\'UR2D\'R2\')"},{"name":"PLL-Y","origin":"F(RU\'R\'U\')(RUR\'F\') (RUR\'U\')(R\'FRF\')"},{"name":"PLL-Z","origin":"(M2\'U2MU) (M2\'UM2\'UM)"}]}]'
				)
			},
			537: t => {
				"use strict";
				t.exports =
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC"
			}
		},
		i = {};

	function s(t) {
		var n = i[t];
		if (void 0 !== n) return n.exports;
		var r = i[t] = {
			id: t,
			exports: {}
		};
		return e[t].call(r.exports, r, r.exports, s), r.exports
	}
	s.m = e, t = [], s.O = (e, i, n, r) => {
			if (!i) {
				var o = 1 / 0;
				for (c = 0; c < t.length; c++) {
					for (var [i, n, r] = t[c], a = !0, h = 0; h < i.length; h++)
						(!1 & r || o >= r) && Object.keys(s.O)
						.every((t => s.O[t](i[h]))) ? i.splice(h--, 1) : (a = !
							1, r < o && (o = r));
					if (a) {
						t.splice(c--, 1);
						var l = n();
						void 0 !== l && (e = l)
					}
				}
				return e
			}
			r = r || 0;
			for (var c = t.length; c > 0 && t[c - 1][2] > r; c--) t[c] = t[
				c - 1];
			t[c] = [i, n, r]
		}, s.n = t => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return s.d(e, {
				a: e
			}), e
		}, s.d = (t, e) => {
			for (var i in e) s.o(e, i) && !s.o(t, i) && Object.defineProperty(
				t, i, {
					enumerable: !0,
					get: e[i]
				})
		}, s.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (t) {
				if ("object" == typeof window) return window
			}
		}(), s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), s.r =
		t => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(
				t, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, (() => {
			s.b = document.baseURI || self.location.href;
			var t = {
				826: 0
			};
			s.O.j = e => 0 === t[e];
			var e = (e, i) => {
					var n, r, [o, a, h] = i,
						l = 0;
					for (n in a) s.o(a, n) && (s.m[n] = a[n]);
					if (h) var c = h(s);
					for (e && e(i); l < o.length; l++) r = o[l], s.o(t,
						r) && t[r] && t[r][0](), t[o[l]] = 0;
					return s.O(c)
				},
				i = this.webpackChunkcuber = this.webpackChunkcuber ||
				[];
			i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(
				i))
		})();
	var n = s.O(void 0, [736], (() => s(591)));
	n = s.O(n)
})();