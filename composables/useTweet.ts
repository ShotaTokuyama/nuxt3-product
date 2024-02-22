import type { Tweet } from "@/types/Tweet";

export function useTweet() {
  // ツイートを格納する配列
  const tweets = ref<Tweet[]>([]);
  // ユーザー名の設定
  const userName = ref("");
  // モーダルの開閉
  const isModalOpen = ref(false);
  // 削除モーダルの開閉
  const isShowDeleteModal = ref(false);
  // 削除する該当ツイートを選別
  const isDeletingID = ref("");

  // submitボタンが押されたらtweetsの配列に追加する
  const onSubmitForm = (tweet: string) => {
    tweets.value.push({
      id: String(Math.random()),
      text: tweet,
      userName: userName.value,
    });
  };

  // モーダルを表示
  const onClickSetting = () => {
    isModalOpen.value = true;
  };

  // ユーザー名設定あとモーダルを閉じる
  const onSubmitSettings = () => {
    isModalOpen.value = false;
  };

  // ユーザー名の更新
  const updateUserName = (value: string) => {
    userName.value = value;
  };

  // 削除モーダルを表示
  // 該当するidを取得
  const onClickTweet = (id: string) => {
    isShowDeleteModal.value = true;
    isDeletingID.value = id;
  };

  // 指定したIDに対してdeleteTweet関数を実行
  const onDelete = () => {
    deleteTweet(isDeletingID.value);
  };

  // フィルタリングして該当するID以外の値を返す関数
  // 削除モーダルを閉じる
  const deleteTweet = (id: string) => {
    tweets.value = tweets.value.filter((tweet) => tweet.id !== id);
    isShowDeleteModal.value = false;
  };

  return {
    tweets,
    userName,
    isModalOpen,
    isShowDeleteModal,
    onSubmitForm,
    onClickSetting,
    onSubmitSettings,
    updateUserName,
    onClickTweet,
    onDelete,
  };
}
