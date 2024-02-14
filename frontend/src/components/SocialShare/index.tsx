import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useStoreLexicon, useStoreUrl } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const SocialShare: FC<IProps> = ({ className, style }) => {
  const { share: lexicon } = useStoreLexicon();

  const { canonical } = useStoreUrl();

  return (
    <ul
      className={cn(className, styles.social_share)}
      style={style}
      aria-label={lexicon.share}
    >
      <li>
        <Link
          className={styles.link}
          href={`https://www.facebook.com/sharer.php?u=${canonical}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`${lexicon.shareVia} Facebook`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.8 4H14.4C13.3391 4 12.3217 4.42143 11.5716 5.17157C10.8214 5.92172 10.4 6.93913 10.4 8V10.4H8V13.6H10.4V20H13.6V13.6H16L16.8 10.4H13.6V8C13.6 7.89494 13.6207 7.79091 13.6609 7.69385C13.7011 7.59679 13.76 7.5086 13.8343 7.43431C13.9086 7.36003 13.9968 7.3011 14.0939 7.2609C14.1909 7.22069 14.2949 7.2 14.4 7.2H16.8V4Z"
              fill="black"
            />
          </svg>
        </Link>
      </li>

      <li>
        <Link
          className={styles.link}
          href={`https://twitter.com/intent/tweet?text=${canonical}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`${lexicon.shareVia} Twitter`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4899 10.775L19.3169 4H17.9349L12.8749 9.883L8.83387 4H4.17188L10.2839 12.896L4.17188 20H5.55288L10.8969 13.788L15.1659 20H19.8279L13.4899 10.775ZM11.5979 12.974L10.9779 12.088L6.05088 5.04H8.17188L12.1489 10.728L12.7679 11.614L17.9379 19.007H15.8159L11.5979 12.974Z"
              fill="black"
            />
          </svg>
        </Link>
      </li>

      <li>
        <Link
          className={styles.link}
          href={`whatsapp://send?text=${canonical}`}
          data-action="share/whatsapp/share"
          title={`${lexicon.shareVia} WhatsApp`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.61 13.588C15.412 13.488 14.438 13.01 14.256 12.943C14.075 12.877 13.943 12.845 13.81 13.043C13.612 13.3107 13.4025 13.5696 13.182 13.819C13.068 13.951 12.952 13.969 12.754 13.869C12.556 13.769 11.918 13.561 11.161 12.886C10.728 12.4856 10.3566 12.0233 10.059 11.514C9.944 11.316 10.047 11.208 10.146 11.109C10.234 11.021 10.343 10.878 10.442 10.762C10.542 10.647 10.575 10.564 10.64 10.432C10.707 10.299 10.674 10.184 10.624 10.085C10.574 9.98503 10.178 9.01003 10.014 8.61303C9.852 8.22803 9.69 8.27903 9.568 8.27303C9.4414 8.26787 9.3147 8.26587 9.188 8.26703C9.08748 8.2696 8.98858 8.29296 8.89753 8.33564C8.80648 8.37832 8.72527 8.4394 8.659 8.51503C8.479 8.71303 7.965 9.19203 7.965 10.167C7.965 11.143 8.675 12.084 8.775 12.217C8.875 12.349 10.172 14.35 12.159 15.207C12.632 15.412 13.001 15.533 13.289 15.625C13.764 15.775 14.195 15.755 14.537 15.703C14.917 15.647 15.709 15.225 15.874 14.762C16.039 14.299 16.039 13.902 15.989 13.819C15.939 13.736 15.808 13.688 15.61 13.588ZM11.995 18.524H11.993C10.8127 18.5238 9.65423 18.206 8.639 17.604L8.398 17.462L5.904 18.116L6.569 15.685L6.412 15.435C5.75248 14.3847 5.40339 13.1693 5.405 11.929C5.40738 10.1815 6.10286 8.50621 7.33886 7.27077C8.57486 6.03534 10.2504 5.34062 11.998 5.33903C12.8638 5.3371 13.7214 5.50696 14.5212 5.83876C15.3209 6.17057 16.0468 6.65773 16.657 7.27203C17.2704 7.88325 17.7565 8.60994 18.0875 9.41012C18.4184 10.2103 18.5875 11.0681 18.585 11.934C18.583 15.567 15.627 18.524 11.995 18.524ZM17.604 6.32403C16.8694 5.58478 15.9953 4.99869 15.0325 4.59976C14.0696 4.20083 13.0372 3.99698 11.995 4.00003C7.625 4.00003 4.067 7.55703 4.065 11.928C4.06302 13.3197 4.42869 14.6871 5.125 15.892L4 20L8.204 18.898C9.36603 19.5306 10.668 19.862 11.991 19.862H11.996C16.364 19.862 19.922 16.306 19.923 11.935C19.9264 10.893 19.7232 9.86061 19.3249 8.89765C18.9267 7.93469 18.3414 7.06028 17.603 6.32503"
              fill="black"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};
