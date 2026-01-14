import App, { OperationStep } from './app'

const DEFAULT_STEPS: OperationStep[] = [
  {
    "step_id": 1,
    "timestamp_str": "00:08",
    "timestamp_seconds": 8.5,
    "action_type": "click",
    "target_label": "送信ボタン",
    "ui_coordinates": [0, 0, 0, 0],
    "instruction_text": "プロンプトを入力後、送信ボタンをクリックします。",
    "visual_description": "青色の背景に白文字で送信と書かれたボタン"
  },
  {
    "step_id": 2,
    "timestamp_str": "00:29",
    "timestamp_seconds": 29.0,
    "action_type": "click",
    "target_label": "右上のメニューアイコン",
    "ui_coordinates": [0, 0, 0, 0],
    "instruction_text": "設定を開くためにメニューアイコンをクリックします。",
    "visual_description": "画面右上のハンバーガーメニュー"
  },
  {
    "step_id": 3,
    "timestamp_str": "00:41",
    "timestamp_seconds": 41.5,
    "action_type": "click",
    "target_label": "ファイルを選択",
    "ui_coordinates": [0, 0, 0, 0],
    "instruction_text": "アップロードする動画ファイルを選択します。",
    "visual_description": "グレーの背景のファイル選択ボタン"
  }
];

export default function Canvas() {
  return <App initialSteps={DEFAULT_STEPS} />
}
