<?php

namespace App\Repositories;


/**
 * リポジトリ
 *
 * 作成者: ウェイ
 * 作成日: 2022.12.05
 */
/**
 * @SuppressWarnings(PHPMD.ExcessiveClassLength)
 *
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 *
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 *
 * @SuppressWarnings(ExcessiveClassComplexity)
 */
abstract class AbstractRepository
{
    protected $model;

    protected $modelClass;

    public const DESC = 'DESC';

    public const ASC = 'ASC';

    /**
     * コンストラクタ
     */
    public function __construct()
    {
        $this->setModel();
    }

    /**
     * エクステンドする各クラスに実装される抽象メソッド
     *
     * @return string 対象モデル名
     */
    abstract public function getModelClass(): string;

    /**
     * 対象モデルを指定する
     */
    private function setModel(): void
    {
        $this->model = app()->make($this->getModelClass());
    }
}
